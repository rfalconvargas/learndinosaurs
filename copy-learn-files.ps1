# PowerShell script to copy Learn section files from main repository
# Usage: .\copy-learn-files.ps1 -MainRepoPath "C:\path\to\main-repo"

param(
    [Parameter(Mandatory=$true)]
    [string]$MainRepoPath
)

$ErrorActionPreference = "Stop"

Write-Host "Copying Learn section files from: $MainRepoPath" -ForegroundColor Green

# Check if main repo path exists
if (-not (Test-Path $MainRepoPath)) {
    Write-Host "Error: Main repository path does not exist: $MainRepoPath" -ForegroundColor Red
    exit 1
}

$learnPath = Join-Path $MainRepoPath "app\learn"
if (-not (Test-Path $learnPath)) {
    Write-Host "Error: Learn directory not found in main repo: $learnPath" -ForegroundColor Red
    exit 1
}

# Current directory (where this script is run from)
$currentDir = Get-Location

# Copy Learn directory
Write-Host "Copying app/learn directory..." -ForegroundColor Yellow
$targetLearnPath = Join-Path $currentDir "app\learn"
if (Test-Path $targetLearnPath) {
    Remove-Item $targetLearnPath -Recurse -Force
}
Copy-Item -Path $learnPath -Destination $targetLearnPath -Recurse -Force
Write-Host "✓ Copied app/learn" -ForegroundColor Green

# Copy components
Write-Host "Copying components..." -ForegroundColor Yellow
$components = @("VideoComments.tsx", "SavePlaylistButton.tsx")
foreach ($component in $components) {
    $source = Join-Path $MainRepoPath "app\components\$component"
    $target = Join-Path $currentDir "app\components\$component"
    if (Test-Path $source) {
        Copy-Item -Path $source -Destination $target -Force
        Write-Host "✓ Copied $component" -ForegroundColor Green
    } else {
        Write-Host "⚠ Warning: $component not found in main repo" -ForegroundColor Yellow
    }
}

Write-Host "`nFiles copied successfully!" -ForegroundColor Green
Write-Host "Next step: Update all imports to use @/ alias" -ForegroundColor Cyan
Write-Host "See COPY_FILES_GUIDE.md for import update instructions" -ForegroundColor Cyan




