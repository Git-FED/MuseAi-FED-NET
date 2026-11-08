#!/usr/bin/env python3
"""Bounded Easy Tether watchdog; stdlib only and intentionally foreground."""
import datetime as dt, os, subprocess, time, urllib.request

INTERVAL = int(os.getenv("FED_WATCH_INTERVAL", "60"))
MAX_RESTARTS = 2
PROBE_URL = os.getenv("FED_PROBE_URL", "https://example.com")
START_COMMAND = os.getenv("FED_START_COMMAND", "")
LOG_FILE = os.getenv("FED_WATCHDOG_LOG", "watchdog.log")

def log(message):
    line = f"{dt.datetime.now(dt.timezone.utc).isoformat()} {message}"
    print(line, flush=True)
    with open(LOG_FILE, "a", encoding="utf-8") as handle:
        handle.write(line + "\n")

def healthy():
    try:
        with urllib.request.urlopen(PROBE_URL, timeout=10) as response:
            return 200 <= response.status < 400
    except Exception as exc:
        log(f"probe-failed error={exc}")
        return False

def restart():
    if not START_COMMAND:
        log("restart-skipped FED_START_COMMAND-not-configured")
        return False
    try:
        subprocess.run(START_COMMAND, shell=True, check=True)
        return True
    except subprocess.CalledProcessError as exc:
        log(f"restart-failed returncode={exc.returncode}")
        return False

def main():
    restarts = 0
    log("watchdog-started foreground=true")
    while True:
        if healthy():
            log(f"check=PASS restarts={restarts}")
        elif restarts < MAX_RESTARTS:
            restarts += 1
            log(f"check=FAIL restart={restarts}/{MAX_RESTARTS}")
            if restart() and healthy():
                log(f"recovery=PASS restart={restarts}")
            else:
                log(f"recovery=FAIL restart={restarts}")
        else:
            log("GAVE-UP restart-cap-reached")
            return 2
        time.sleep(INTERVAL)

if __name__ == "__main__":
    raise SystemExit(main())
