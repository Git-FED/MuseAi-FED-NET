# Build Prompt: Watchdog Half

## `scripts/watchdog.py`
Inputs: stdlib-only loop, one-minute default interval, two-restart cap, timestamped logging. Done-check: foreground process logs every check and gives up at the cap.

## `scripts/health-check.py`
Inputs: phone, adapter, internet, latency probes. Done-check: four separate PASS/FAIL lines and nonzero exit on any FAIL.

## `skill/heal.md`
Inputs: drop detection and restart cap. Done-check: two restarts maximum, three common breaks, no infinite loop.
