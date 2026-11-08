# Start Tether

1. Check that the phone is connected by USB; evidence is the OS phone-presence signal. If absent, stop and report `FAILED: phone not detected`.
2. Check that the configured Easy Tether client path exists; evidence is a readable executable path. If absent, stop and report `FAILED: Easy Tether client path is not configured`.
3. Launch the Easy Tether client; evidence is a successful process start. If launch fails, stop and report the exact error.
4. Wait for the expected virtual adapter; evidence is the adapter appearing in the configured Windows network list. If it does not appear, stop and report `FAILED: adapter not detected`.
5. Run a real internet probe; evidence is a successful response from the configured probe target. If it fails, stop and report `FAILED: internet probe failed`.
6. Report `CONNECTED` only after all five checks pass; include timestamps and the evidence source for each check.
