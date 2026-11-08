# Bandwidth Rules

- **Cap:** each admitted guest uses the `per_guest_kbps` value in `gateway.yaml`; `0` means sharing remains disabled by default.
- **Burst:** a nonzero burst must be explicitly chosen in `gateway.yaml`; there is no hidden burst allowance.
- **When the cap hits:** traffic is shaped or delayed by the enforcing gateway; it is not silently allowed to exceed the configured policy.
- **Underlying limit:** the phone's mobile-data plan is the real limit. The local cap is not the plan, and it cannot prevent carrier throttling, carrier blocks, or billed usage.
