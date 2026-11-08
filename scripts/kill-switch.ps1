# Immediately stops the configured share process. Set FED_SHARE_PROCESS_NAME before use.
param([string]$ProcessName = $env:FED_SHARE_PROCESS_NAME)
if ([string]::IsNullOrWhiteSpace($ProcessName)) { Write-Error "FED_SHARE_PROCESS_NAME is not configured"; exit 1 }
$matches = Get-Process -Name $ProcessName -ErrorAction SilentlyContinue
if (-not $matches) { Write-Output "KILL-SWITCH: no matching share process found"; exit 0 }
$matches | Stop-Process -Force
Write-Output "KILL-SWITCH: stopped $ProcessName"
