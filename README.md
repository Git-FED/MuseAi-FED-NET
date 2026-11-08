# Inter FED NET

Inter FED NET separates the **pipe** from the **operator**. Easy Tether is the pipe: it creates the phone-to-PC connection. Muse is the operator: it starts the pipe, verifies that the internet really works, watches it, heals bounded failures, and—only when configured—shares the connection through FED NET.

## The three jobs

1. **Start** — connect the phone, launch Easy Tether, wait for the adapter, and prove the internet works.
2. **Watchdog** — check the connection every minute, restart it at most twice after a drop, and stop with a timestamped report if it still fails.
3. **Share** — keep the gateway closed by default, admit only allowlisted guests, and enforce the configured forwarding and bandwidth rules.

## The live-test limit

Muse can write, review, and diagnose this code from logs, but cannot live-test tethering here. Live proof requires Git-FED on his Windows PC, with his Android phone connected by USB, Easy Tether installed, administrator access available, and the required virtual network adapter present. The checklist in `tests/live-test-checklist.md` is the source of truth for that test.

No install steps are included here; see `docs/setup.md`.
