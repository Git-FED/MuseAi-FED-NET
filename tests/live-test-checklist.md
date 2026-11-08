# Live Test Checklist

Only Git-FED runs this on the Windows PC with the phone plugged in. Nothing here runs without him.

- [ ] Plug in the phone by USB; the phone and Windows both show a connected device.
- [ ] Run `scripts/start-tether.ps1`; each step prints and the final line is `CONNECTED`.
- [ ] Confirm a real webpage or configured probe loads; internet works through the tether.
- [ ] Start the foreground watchdog; timestamped checks appear once per minute.
- [ ] Unplug the USB mid-session; the next check records a failure.
- [ ] Reconnect or allow the bounded heal path; the watchdog records recovery or the exact failure.
- [ ] Confirm no more than two restart attempts occur; the watchdog gives up instead of looping.
- [ ] Run the stop procedure; the adapter is down and normal internet or no internet is explicitly reported.
