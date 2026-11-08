# Windows + Android Setup Checklist

- [ ] Install Easy Tether on the Android phone from its official source. **Admin: no.** Expected result: the Easy Tether app opens on the phone.
- [ ] Install the Easy Tether Windows client and driver from its official source. **Admin: yes, if Windows requests elevation.** Expected result: installation completes without a driver error.
- [ ] On the phone, enable USB debugging only if the official Easy Tether instructions require it for the selected connection mode. **Admin: no.** Expected result: the phone shows the selected USB mode and does not report a blocked connection.
- [ ] Connect the phone with a known-good data USB cable. **Admin: no.** Expected result: Windows detects the phone and the phone shows a USB connection notification.
- [ ] Open Easy Tether on the phone and start its USB connection mode. **Admin: no.** Expected result: the app reports that it is ready or connected to the desktop client.
- [ ] Launch the Easy Tether Windows client. **Admin: usually no; Windows may request elevation for the driver or adapter.** Expected result: the client reports a connected session.
- [ ] Approve any Windows firewall, driver, or administrator prompt only when it clearly belongs to Easy Tether. **Admin: yes.** Expected result: the virtual Easy Tether adapter appears in Windows network adapters.
- [ ] Run `scripts/start-tether.ps1` from an elevated PowerShell when required. **Admin: yes.** Expected result: each step prints one line and the final line is `CONNECTED`.
- [ ] Open a real webpage or run the configured health check. **Admin: no.** Expected result: the internet probe succeeds, not merely the adapter check.

## Good connection

The phone is present, Easy Tether says connected, the expected adapter is up, and a real internet probe succeeds.

## Bad connection

Any missing phone, missing adapter, Easy Tether error, failed probe, or unexpected permission prompt is a failed setup step. Stop there and record the exact message; do not guess forward.
