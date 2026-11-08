# Build Prompt: Operator Half

## `skill/SKILL.md`
Inputs: repository scope and safety boundaries. Done-check: standard front matter exists, scope is start/stop/status/heal, and the no-live-test/no-account/no-posting boundary is explicit.

## `skill/start-tether.md`
Inputs: phone, Easy Tether client, virtual adapter, real probe. Done-check: ordered evidence-backed checks stop on the first failure.

## `skill/stop-tether.md`
Inputs: disconnect, adapter state, final internet state. Done-check: no half-up adapter is left unreported.

## `skill/status.md`
Inputs: five status sources. Done-check: every check names its evidence source.

## `skill/heal.md`
Inputs: bounded restart policy and three common breaks. Done-check: maximum two restarts and a final report are explicit.

## `scripts/start-tether.ps1`
Inputs: configurable client path, adapter pattern, probe URL. Done-check: one printed line per step, nonzero failure exit, and no silent success.
