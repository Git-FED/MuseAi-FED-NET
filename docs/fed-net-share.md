# FED NET Share Layer

## Rules first

- The gateway starts closed.
- Nobody is allowed unless their exact entry appears in `fed-net/allowlist.md`.
- Nothing is forwarded unless an explicit rule is added to `fed-net/gateway.yaml`.
- Bandwidth limits apply per guest when the share implementation supports the configured cap.
- The phone's mobile-data plan is never expanded by this layer.
- A kill switch must be able to close sharing immediately.

## Mechanics second

`fed-net/gateway.yaml` is the only gateway configuration file. It defines the bind address, allowlist path, forwarding rules, and per-guest bandwidth settings. An empty `forwarding` list and an empty allowlist mean the gateway has no useful path for guest traffic. The actual enforcement engine is intentionally outside this file tree; no unverified firewall or proxy commands are invented here.
