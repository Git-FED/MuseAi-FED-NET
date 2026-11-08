---
name: inter-fed-net-operator
description: Operate the Easy Tether pipe and the closed-by-default FED NET share layer.
---

# Inter FED NET Operator

## Scope

This skill covers only `start`, `stop`, `status`, and bounded `heal` operations. It may inspect the phone-presence signal, Easy Tether client state, virtual adapter state, real internet probes, and the operator's own logs. It may start or stop the configured Easy Tether client and record results.

## Hard boundaries

- No live test without Git-FED's connected phone, Windows PC, and explicit run.
- No account creation, purchases, carrier changes, or posting.
- No invented Easy Tether CLI/API calls.
- No infinite retry loops.
- No opening of FED NET sharing unless the gateway and allowlist are explicitly configured.
