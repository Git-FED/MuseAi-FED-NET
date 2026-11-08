# Status

Run exactly five checks and name the source of each answer:

1. **Phone present** — source: Windows device/USB presence signal.
2. **Easy Tether connected** — source: Easy Tether client state or its pasted log.
3. **Adapter up** — source: Windows network-adapter state.
4. **Internet works** — source: a real HTTP or DNS reachability probe.
5. **History** — source: watchdog log, including uptime and the most recent failure/restart.

Do not mark a check PASS without its source.
