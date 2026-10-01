#!/usr/bin/env python3
"""Read the suggestion Google Form's field IDs and write <site>/data/feedback.json.

The site's "Have a suggestion?" button posts to the form's formResponse URL,
which needs each question's entry ID. Those IDs are read from the public form
page at every publish, so editing the form never breaks the button.
Never fails the build: on any problem it writes nothing (button stays hidden).

Usage:  python scripts/form_config.py <site_dir>
"""
from __future__ import annotations

import json
import pathlib
import re
import sys

import requests

FORM_ID = "1FAIpQLScsZMzOBqNmUTqwZVVx36hnoukIeUHS4JrBATEjuslZpwBkkw"
VIEW = f"https://docs.google.com/forms/d/e/{FORM_ID}/viewform"


def main() -> int:
    out = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else ".") / "data" / "feedback.json"
    try:
        html = requests.get(VIEW, timeout=30, headers={"User-Agent": "Mozilla/5.0"}).text
        m = re.search(r"FB_PUBLIC_LOAD_DATA_\s*=\s*(\[.*?\]);\s*</script>", html, re.S)
        data = json.loads(m.group(1))
        questions = [(q[1] or "", q[3], q[4][0][0]) for q in data[1][1] if q and len(q) > 4 and q[4]]
        print("form questions: " + "; ".join(f"{t!r} type {ty} -> entry.{eid}" for t, ty, eid in questions))
        name = next(e for t, ty, e in questions if re.search(r"name", t, re.I))
        text = next(e for t, ty, e in questions if re.search(r"suggest|feedback|idea|message", t, re.I) or ty == 1)
    except Exception as exc:
        print(f"form_config: skipped ({exc})", file=sys.stderr)
        return 0
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps({"action": f"https://docs.google.com/forms/d/e/{FORM_ID}/formResponse",
                               "nameField": f"entry.{name}", "textField": f"entry.{text}"}), encoding="utf-8")
    print(f"form_config: name -> entry.{name}, suggestion -> entry.{text}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
