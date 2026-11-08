#!/usr/bin/env python3
"""Four real probes, stdlib only. Configure platform commands for local Windows evidence."""
import os, platform, subprocess, sys, urllib.request

PROBE_URL = os.getenv("FED_PROBE_URL", "https://example.com")
ADAPTER_NAME = os.getenv("FED_ADAPTER_NAME", "")
PHONE_CHECK_COMMAND = os.getenv("FED_PHONE_CHECK_COMMAND", "")

def command_ok(command):
    if not command: return False
    try: return subprocess.run(command, shell=True, timeout=10).returncode == 0
    except Exception: return False

def adapter_up():
    if platform.system() == "Windows" and ADAPTER_NAME:
        return command_ok(f"powershell -NoProfile -Command \"(Get-NetAdapter -Name '{ADAPTER_NAME}').Status -eq 'Up'\"")
    return command_ok(os.getenv("FED_ADAPTER_CHECK_COMMAND", ""))

def internet_ok():
    try:
        with urllib.request.urlopen(PROBE_URL, timeout=10) as r: return 200 <= r.status < 400
    except Exception: return False

def latency_ok():
    return command_ok(os.getenv("FED_LATENCY_CHECK_COMMAND", ""))

def main():
    checks = [("phone present", command_ok(PHONE_CHECK_COMMAND)), ("adapter up", adapter_up()), ("internet works", internet_ok()), ("latency sane", latency_ok())]
    failed = False
    for name, ok in checks:
        print(f"{'PASS' if ok else 'FAIL'} {name}")
        failed |= not ok
    return 1 if failed else 0

if __name__ == "__main__": sys.exit(main())
