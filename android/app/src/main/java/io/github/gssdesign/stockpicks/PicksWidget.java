package io.github.gssdesign.stockpicks;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.Typeface;
import android.text.SpannableStringBuilder;
import android.text.Spanned;
import android.text.style.ForegroundColorSpan;
import android.text.style.RelativeSizeSpan;
import android.text.style.StyleSpan;
import android.widget.RemoteViews;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;

/**
 * Home-screen widget: today's daily picks per market with the last official
 * close and whether it sits in the buy zone, plus the last finished result.
 * Data: data/widget.json on the website (rebuilt after every update).
 */
public class PicksWidget extends AppWidgetProvider {
    static final String DATA = MainActivity.SITE + "data/widget.json";
    static final int UP = Color.parseColor("#3ECF8E"), DOWN = Color.parseColor("#FF6B61"),
            MUTED = Color.parseColor("#A2ABB9"), TEXT = Color.parseColor("#E8EBF0");

    static void refreshAll(Context ctx) {
        AppWidgetManager mgr = AppWidgetManager.getInstance(ctx);
        int[] ids = mgr.getAppWidgetIds(new ComponentName(ctx, PicksWidget.class));
        if (ids.length > 0) update(ctx, mgr, ids, null);
    }

    @Override
    public void onUpdate(Context ctx, AppWidgetManager mgr, int[] ids) {
        update(ctx, mgr, ids, goAsync());
    }

    private static void update(Context ctx, AppWidgetManager mgr, int[] ids, PendingResult pending) {
        Context app = ctx.getApplicationContext();
        new Thread(() -> {
            RemoteViews v = new RemoteViews(app.getPackageName(), R.layout.widget_picks);
            Intent open = new Intent(app, MainActivity.class).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            v.setOnClickPendingIntent(R.id.widget_root,
                    PendingIntent.getActivity(app, 0, open, PendingIntent.FLAG_IMMUTABLE | PendingIntent.FLAG_UPDATE_CURRENT));
            try {
                JSONObject data = new JSONObject(fetch(DATA + "?t=" + System.currentTimeMillis()));
                JSONObject markets = data.getJSONObject("markets");
                v.setTextViewText(R.id.us, market("🇺🇸 US", markets.optJSONObject("US")));
                v.setTextViewText(R.id.in, market("🇮🇳 India", markets.optJSONObject("IN")));
                v.setTextViewText(R.id.updated, updated(data.optString("pricesUpdated", "")));
            } catch (Exception e) {
                v.setTextViewText(R.id.updated, "offline");
                if (pending == null) return;  // keep whatever is showing
                v.setTextViewText(R.id.us, "Couldn't load picks. Tap to open the app.");
            }
            mgr.updateAppWidget(ids, v);
            if (pending != null) pending.finish();
        }).start();
    }

    private static String fetch(String url) throws Exception {
        HttpURLConnection c = (HttpURLConnection) new URL(url).openConnection();
        c.setConnectTimeout(8000);
        c.setReadTimeout(8000);
        c.setUseCaches(false);
        try (InputStream in = c.getInputStream()) {
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            byte[] buf = new byte[8192];
            for (int n; (n = in.read(buf)) > 0; ) out.write(buf, 0, n);
            return out.toString("UTF-8");
        } finally {
            c.disconnect();
        }
    }

    private static CharSequence market(String title, JSONObject m) {
        SpannableStringBuilder sb = new SpannableStringBuilder();
        append(sb, title, TEXT, true, 1f);
        if (m == null) return sb;
        JSONObject daily = m.optJSONObject("daily");
        JSONArray picks = daily == null ? null : daily.optJSONArray("picks");
        if (daily != null) append(sb, "  " + day(daily.optString("date")), MUTED, false, 0.85f);
        if (picks == null || picks.length() == 0) {
            append(sb, "\nNo picks today", MUTED, false, 1f);
        } else {
            for (int i = 0; i < picks.length() && i < 5; i++) {
                JSONObject p = picks.optJSONObject(i);
                String cur = p.optString("cur", "");
                append(sb, "\n" + pad(p.optString("s"), 11), TEXT, true, 1f);
                append(sb, pad(money(cur, p.optDouble("close")), 11), MUTED, false, 1f);
                String[] st = status(p);
                append(sb, st[0], st[1].equals("up") ? UP : st[1].equals("down") ? DOWN : MUTED, false, 0.9f);
            }
        }
        JSONObject lr = m.optJSONObject("lastResult");
        if (lr != null) {
            double avg = lr.optDouble("avgRet", Double.NaN);
            append(sb, "\nLast " + day(lr.optString("date")) + ": " + lr.optInt("hits") + "/" + lr.optInt("n")
                    + " hit target · avg ", MUTED, false, 0.85f);
            append(sb, pct(avg), Double.isNaN(avg) ? MUTED : avg >= 0 ? UP : DOWN, true, 0.85f);
        }
        return sb;
    }

    /** {label, tone}: result once the session is scored, else where the close sits vs the levels. */
    private static String[] status(JSONObject p) {
        if (p.optBoolean("final") || p.optBoolean("hit")) {
            if (p.optBoolean("hit")) return new String[]{"✅ target", "up"};
            if ("Stopped out".equals(p.optString("status"))) return new String[]{"⛔ stop", "down"};
            double r = p.optDouble("ret", Double.NaN);
            return new String[]{pct(r), r >= 0 ? "up" : "down"};
        }
        double c = p.optDouble("close");
        JSONArray buy = p.optJSONArray("buy");
        if (c < p.optDouble("stop")) return new String[]{"below stop", "down"};
        if (buy != null && c < buy.optDouble(0)) return new String[]{"below zone", "down"};
        if (buy != null && c > buy.optDouble(1)) return new String[]{"above zone", "muted"};
        return new String[]{"in buy zone", "up"};
    }

    private static void append(SpannableStringBuilder sb, String s, int color, boolean bold, float size) {
        int start = sb.length();
        sb.append(s);
        sb.setSpan(new ForegroundColorSpan(color), start, sb.length(), Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
        if (bold) sb.setSpan(new StyleSpan(Typeface.BOLD), start, sb.length(), Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
        if (size != 1f) sb.setSpan(new RelativeSizeSpan(size), start, sb.length(), Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
    }

    private static String pad(String s, int n) {
        StringBuilder b = new StringBuilder(s);
        while (b.length() < n) b.append(' ');
        return b.toString();
    }

    private static String money(String cur, double v) {
        if (Double.isNaN(v)) return "—";
        return cur + (v >= 1000 ? String.format(Locale.US, "%,.0f", v) : String.format(Locale.US, "%.2f", v));
    }

    private static String pct(double v) {
        return Double.isNaN(v) ? "—" : String.format(Locale.US, "%+.1f%%", v);
    }

    private static String day(String iso) {
        try {
            SimpleDateFormat in = new SimpleDateFormat("yyyy-MM-dd", Locale.US);
            return new SimpleDateFormat("d MMM", Locale.US).format(in.parse(iso));
        } catch (Exception e) {
            return iso;
        }
    }

    private static String updated(String iso) {
        try {
            SimpleDateFormat in = new SimpleDateFormat("yyyy-MM-dd'T'HH:mmXXX", Locale.US);
            Date d = in.parse(iso);
            SimpleDateFormat out = new SimpleDateFormat("d MMM, h:mm a", Locale.US);
            out.setTimeZone(TimeZone.getDefault());
            return "prices " + out.format(d);
        } catch (Exception e) {
            return "";
        }
    }
}
