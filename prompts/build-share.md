# Build Prompt: Share Half

## `fed-net/gateway.yaml`
Inputs: closed-by-default bind, forwarding, allowlist, bandwidth, logging. Done-check: every field is commented and nothing is enabled by default.

## `fed-net/allowlist.md`
Inputs: empty initial list and one-entry format. Done-check: the not-on-list/not-in rule is stated exactly.

## `fed-net/bandwidth.md`
Inputs: caps, consequences, and phone-plan limit. Done-check: the local cap is clearly distinguished from carrier capacity.

## `docs/fed-net-share.md`
Inputs: rules first and mechanics second. Done-check: it refers only to what `gateway.yaml` can enforce and avoids invented implementation details.
