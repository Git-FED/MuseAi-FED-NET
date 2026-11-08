# How It Works

1. Git-FED plugs the Android phone into the Windows PC by USB; the physical link is supplied by the user, not Muse.
2. Easy Tether on the phone exposes its tethering service; Easy Tether owns the phone-side connection.
3. The Easy Tether Windows client and driver create the virtual network adapter; Easy Tether owns adapter creation.
4. Muse checks that the phone is present and the expected adapter is visible; Muse owns the evidence check.
5. Muse performs a real internet probe instead of trusting adapter state alone; Muse owns the reachability decision.
6. Windows routes traffic through the tethered adapter; the operating system performs the route handoff.
7. Muse records the connected state and starts its bounded watchdog; Muse owns observation and recovery.
8. When configured, the FED NET share layer applies its closed-by-default gateway rules; FED NET owns admission, forwarding, and bandwidth policy.
9. Allowed guest traffic exits through the phone's mobile connection; the carrier and phone plan remain the underlying capacity limit.
