"""Shared market maths for the snapshot, level calculator and verifier.

Everything here works on plain lists of daily bars
({"date", "open", "high", "low", "close", "volume"}), oldest first, so it can
be tested without network access. The rules implemented here are the
numeric part of CRITERIA.md; keep the two in sync.
"""
from __future__ import annotations

import datetime as dt
import json
import math
import pathlib
from zoneinfo import ZoneInfo

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = ROOT / "data"

# ---------------------------------------------------------------------------
# Rulebook numbers (see CRITERIA.md, section 3 and 4)
# ---------------------------------------------------------------------------
HORIZONS = {
    # buy zone = close - zl*ATR .. close + zh*ATR; stop/target in ATR from zone mid
    "daily":   {"zl": 0.40, "zh": 0.20, "stop": 0.75, "target": 1.25, "stop_pct": (1.0, 3.5),
                "min_rr": 1.5, "max_atr_pct": 4.0},
    "weekly":  {"zl": 0.50, "zh": 0.25, "stop": 1.25, "target": 2.25, "stop_pct": (2.0, 7.0),
                "min_rr": 1.8, "max_atr_pct": 5.0},
    "monthly": {"zl": 0.75, "zh": 0.25, "stop": 1.75, "target": 3.50, "stop_pct": (4.0, 10.0),
                "min_rr": 2.0, "max_atr_pct": 4.5},
}
LIQUIDITY = {  # 20-day average traded value, local currency
    "US": {"min_value": 50e6, "min_price": 10.0, "label": "$50M"},
    "IN": {"min_value": 100e7, "min_price": 50.0, "label": "₹100 cr"},  # 100 crore = 1e9
}
BENCHMARK = {"US": "^GSPC", "IN": "^NSEI"}
# When a session's daily bar is final: local close plus a buffer for Yahoo.
SESSION_END = {"US": ("America/New_York", dt.time(16, 15)), "IN": ("Asia/Kolkata", dt.time(16, 0))}


def market_of(symbol: str) -> str:
    return "IN" if symbol.endswith(".NS") or symbol == "^NSEI" else "US"


def completed(bars: list[dict], symbol: str, now: dt.datetime | None = None) -> list[dict]:
    """Drop today's bar while that market's session is still running.

    During trading hours Yahoo returns a bar for the current session whose
    "close" is just the latest trade. It must never be used as a close (for
    reference prices, screens or scoring a holding period)."""
    if not bars:
        return bars
    tz, end = SESSION_END[market_of(symbol)]
    local = (now or dt.datetime.now(dt.timezone.utc)).astimezone(ZoneInfo(tz))
    if bars[-1]["date"] == local.date().isoformat() and local.time() < end:
        return bars[:-1]
    return bars


# ---------------------------------------------------------------------------
# Indicators
# ---------------------------------------------------------------------------
def sma(values: list[float], n: int, end: int | None = None) -> float | None:
    end = len(values) if end is None else end
    if end < n:
        return None
    window = values[end - n:end]
    return sum(window) / n


def atr(bars: list[dict], n: int = 14) -> float | None:
    """Wilder's average true range."""
    if len(bars) < n + 1:
        return None
    trs = []
    for prev, cur in zip(bars, bars[1:]):
        trs.append(max(cur["high"] - cur["low"], abs(cur["high"] - prev["close"]), abs(cur["low"] - prev["close"])))
    value = sum(trs[:n]) / n
    for tr in trs[n:]:
        value = (value * (n - 1) + tr) / n
    return value


def ret(closes: list[float], sessions: int) -> float | None:
    if len(closes) <= sessions:
        return None
    return (closes[-1] / closes[-1 - sessions] - 1) * 100


def metrics(bars: list[dict], bench: list[dict] | None = None) -> dict | None:
    """Snapshot of one stock as of its last bar."""
    if len(bars) < 60:
        return None
    closes = [b["close"] for b in bars]
    last = bars[-1]
    a = atr(bars)
    s20, s50, s200 = sma(closes, 20), sma(closes, 50), sma(closes, 200)
    s50_prev = sma(closes, 50, len(closes) - 20)
    year = bars[-252:]
    hi52, lo52 = max(b["high"] for b in year), min(b["low"] for b in year)
    value20 = sum(b["close"] * b["volume"] for b in bars[-20:]) / 20
    m = {
        "date": last["date"], "close": round(last["close"], 2),
        "prevClose": round(bars[-2]["close"], 2),
        "changePct": round((last["close"] / bars[-2]["close"] - 1) * 100, 2),
        "high": round(last["high"], 2), "low": round(last["low"], 2),
        "atr": round(a, 4) if a else None,
        "atrPct": round(a / last["close"] * 100, 2) if a else None,
        "sma20": round(s20, 2) if s20 else None, "sma50": round(s50, 2) if s50 else None,
        "sma200": round(s200, 2) if s200 else None,
        "sma50Rising": bool(s50 and s50_prev and s50 > s50_prev),
        "ret1m": _r(ret(closes, 21)), "ret3m": _r(ret(closes, 63)), "ret6m": _r(ret(closes, 126)),
        "high52": round(hi52, 2), "low52": round(lo52, 2),
        "fromHigh52": round((last["close"] / hi52 - 1) * 100, 2),
        "fromLow52": round((last["close"] / lo52 - 1) * 100, 2),
        "avgValue20": round(value20),
    }
    if bench and len(bench) > 63:
        bc = [b["close"] for b in bench]
        m["rs1m"] = _r(_sub(m["ret1m"], ret(bc, 21)))
        m["rs3m"] = _r(_sub(m["ret3m"], ret(bc, 63)))
    if a and s20:
        m["extAtr"] = round((last["close"] - s20) / a, 2)  # distance above the 20-day average, in ATRs
    return m


def _r(v):
    return None if v is None or (isinstance(v, float) and math.isnan(v)) else round(v, 2)


def _sub(a, b):
    return None if a is None or b is None else a - b


# ---------------------------------------------------------------------------
# Levels and checks
# ---------------------------------------------------------------------------
def tick_round(value: float, market: str) -> float:
    step = 0.05 if market == "IN" else 0.01
    return round(round(value / step) * step, 2)


def levels(m: dict, horizon: str, market: str) -> dict:
    """ATR-sized buy zone, stop and target from the last close."""
    h = HORIZONS[horizon]
    c, a = m["close"], m["atr"]
    buy_low, buy_high = c - h["zl"] * a, c + h["zh"] * a
    mid = (buy_low + buy_high) / 2
    risk = h["stop"] * a
    lo_pct, hi_pct = h["stop_pct"]
    risk = min(max(risk, mid * lo_pct / 100), mid * hi_pct / 100)  # clamp stop distance
    reward = max(h["target"] / h["stop"] * risk, h["min_rr"] * risk)
    out = {
        "refPrice": m["close"], "refDate": m["date"],
        "buyLow": tick_round(buy_low, market), "buyHigh": tick_round(buy_high, market),
        "stop": tick_round(mid - risk, market), "target": tick_round(mid + reward, market),
    }
    out["rr"] = round(reward / risk, 2)
    out["targetPct"] = round((out["target"] / c - 1) * 100, 2)
    out["stopPct"] = round((out["stop"] / c - 1) * 100, 2)
    return out


def checks(m: dict, horizon: str, market: str, pick: dict | None = None) -> list[dict]:
    """Hard filters from CRITERIA.md. Each item: name, pass, detail."""
    h, liq = HORIZONS[horizon], LIQUIDITY[market]
    cur = "₹" if market == "IN" else "$"
    out = []

    def add(name, ok, detail):
        out.append({"name": name, "pass": bool(ok), "detail": detail})

    val = m.get("avgValue20") or 0
    val_txt = f"₹{val / 1e7:,.0f} cr" if market == "IN" else f"${val / 1e6:,.0f}M"
    add("Liquidity", val >= liq["min_value"] and m["close"] >= liq["min_price"],
        f"20-day avg traded value {val_txt} (min {liq['label']}), price {cur}{m['close']:,}")
    if horizon == "daily":
        add("Trend", m["sma20"] and m["close"] > m["sma20"],
            f"close {'above' if m['sma20'] and m['close'] > m['sma20'] else 'below'} 20-day avg {cur}{m['sma20']}")
    else:
        ok = m["sma50"] and m["close"] > m["sma50"] and m["sma50Rising"]
        add("Trend", ok, f"close {'above' if m['sma50'] and m['close'] > m['sma50'] else 'below'} 50-day avg "
                         f"{cur}{m['sma50']}, 50-day avg {'rising' if m['sma50Rising'] else 'falling'}")
    rs_key = "rs1m" if horizon == "daily" else "rs3m"
    rs = m.get(rs_key)
    add("Relative strength", rs is not None and rs > 0,
        f"{'1-month' if horizon == 'daily' else '3-month'} return vs index {rs:+.1f} pts" if rs is not None else "no data")
    add("Not a falling knife", m["fromLow52"] >= 10, f"{m['fromLow52']:+.1f}% above 52-week low")
    ext = m.get("extAtr")
    add("Not overextended", ext is not None and ext <= 3.0,
        f"{ext:+.1f} ATR from 20-day avg (max +3.0)" if ext is not None else "no data")
    add("Volatility fits horizon", m["atrPct"] is not None and m["atrPct"] <= h["max_atr_pct"],
        f"ATR {m['atrPct']}% of price (max {h['max_atr_pct']}% for {horizon})")
    if pick:
        mid = (pick["buyLow"] + pick["buyHigh"]) / 2
        rr = (pick["target"] - mid) / (mid - pick["stop"]) if mid > pick["stop"] else 0
        add("Reward vs risk", rr >= h["min_rr"] - 0.05, f"R:R {rr:.2f} (min {h['min_rr']})")
    return out


# ---------------------------------------------------------------------------
# data/*.js helpers
# ---------------------------------------------------------------------------
def read_assigned(path: pathlib.Path, marker: str) -> dict:
    text = path.read_text(encoding="utf-8")
    start = text.index("{", text.index(marker))
    return json.loads(text[start: text.rindex("}") + 1])


def write_assigned(path: pathlib.Path, header: str, marker: str, obj) -> None:
    path.write_text(f"{header}{marker}{json.dumps(obj, indent=2, ensure_ascii=False)};\n", encoding="utf-8")


def load_market() -> dict:
    path = DATA / "market.js"
    return read_assigned(path, "window.MARKET = ") if path.exists() else {"stocks": {}}
