# Admin may be required for the Easy Tether driver/adapter. Run from elevated PowerShell when Windows requests it.
[CmdletBinding()]
param(
    [string]$EasyTetherPath = $env:EASY_TETHER_PATH,
    [string]$AdapterPattern = $env:EASY_TETHER_ADAPTER_PATTERN,
    [string]$ProbeUrl = $(if ($env:EASY_TETHER_PROBE_URL) { $env:EASY_TETHER_PROBE_URL } else { "https://example.com" }),
    [int]$WaitSeconds = 30
)
$ErrorActionPreference = "Stop"
function Step($message) { Write-Output ("[{0}] {1}" -f (Get-Date -Format o), $message) }
function Fail($message) { Step "FAILED: $message"; exit 1 }
Step "checking Easy Tether client path"
if ([string]::IsNullOrWhiteSpace($EasyTetherPath)) { Fail "EASY_TETHER_PATH is not configured" }
if (-not (Test-Path -LiteralPath $EasyTetherPath)) { Fail "client not found at $EasyTetherPath" }
Step "launching Easy Tether client"
try { Start-Process -FilePath $EasyTetherPath | Out-Null } catch { Fail $_.Exception.Message }
Step "waiting for virtual adapter"
$adapter = $null
for ($i = 0; $i -lt $WaitSeconds; $i++) {
    $adapters = Get-NetAdapter -ErrorAction SilentlyContinue
    if ($AdapterPattern) { $adapter = $adapters | Where-Object { $_.Name -like $AdapterPattern -and $_.Status -eq 'Up' } | Select-Object -First 1 }
    else { $adapter = $adapters | Where-Object { $_.Status -eq 'Up' } | Select-Object -First 1 }
    if ($adapter) { break }
    Start-Sleep -Seconds 1
}
if (-not $adapter) { Fail "no matching adapter became available" }
Step ("adapter up: {0}" -f $adapter.Name)
Step ("checking internet: {0}" -f $ProbeUrl)
try { $response = Invoke-WebRequest -Uri $ProbeUrl -Method Head -TimeoutSec 10 -UseBasicParsing; if ($response.StatusCode -lt 200 -or $response.StatusCode -ge 400) { Fail "probe returned HTTP $($response.StatusCode)" } } catch { Fail $_.Exception.Message }
Step "CONNECTED"
exit 0
