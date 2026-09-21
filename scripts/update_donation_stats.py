#!/usr/bin/env python3
"""
Fetches the live raised amount and donor count from the GoFundMe campaign
and writes them (plus a fixed offset for donations collected outside
GoFundMe, e.g. bank transfers to Fondazione Politecnico di Milano) to
assets/data/donation-stats.json. The site's donation page fetches that
JSON at runtime from raw.githubusercontent.com, so publishing this file
to the `main` branch is enough to update the live counter - no rebuild
or redeploy of the static site is required.

Run manually with: python3 scripts/update_donation_stats.py
"""

import json
import re
import ssl
import sys
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

try:
    import certifi

    _SSL_CONTEXT = ssl.create_default_context(cafile=certifi.where())
except ImportError:  # certifi not installed - fall back to system defaults
    _SSL_CONTEXT = ssl.create_default_context()

GOFUNDME_URL = "https://gofund.me/357843252"

# Donations collected outside GoFundMe (bank transfers to Fondazione
# Politecnico di Milano) that GoFundMe has no visibility into. Update
# these two numbers by hand if/when that offline total changes.
OFFSET_RAISED = 8000
OFFSET_DONORS = 10

GOAL = 185000

OUTPUT_PATH = Path(__file__).resolve().parent.parent / "assets" / "data" / "donation-stats.json"


def fetch_gofundme_html(url: str) -> str:
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": (
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
            )
        },
    )
    with urllib.request.urlopen(req, timeout=20, context=_SSL_CONTEXT) as resp:
        return resp.read().decode("utf-8", errors="ignore")


def parse_stats(html: str):
    raised_match = re.search(r'"currentAmount":\{"__typename":"Money","amount":(\d+(?:\.\d+)?)', html)
    donors_match = re.search(r'"donationCount":(\d+)', html)

    if not raised_match or not donors_match:
        raise ValueError(
            "Could not find currentAmount/donationCount in the GoFundMe page - "
            "its markup may have changed and this scraper needs updating."
        )

    return float(raised_match.group(1)), int(donors_match.group(1))


def main() -> int:
    try:
        html = fetch_gofundme_html(GOFUNDME_URL)
        gofundme_raised, gofundme_donors = parse_stats(html)
    except Exception as exc:  # noqa: BLE001 - report and fail the Action run
        print(f"ERROR: failed to fetch/parse GoFundMe stats: {exc}", file=sys.stderr)
        return 1

    data = {
        "raised": round(gofundme_raised) + OFFSET_RAISED,
        "donors": gofundme_donors + OFFSET_DONORS,
        "goal": GOAL,
        "gofundme_raised": gofundme_raised,
        "gofundme_donors": gofundme_donors,
        "updated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
    }

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")

    print(json.dumps(data, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
