# Script to help find your main repository
# This searches common locations for a Next.js project with a Learn section

Write-Host ""
Write-Host "=== Searching for Main Repository ===" -ForegroundColor Cyan
Write-Host "Looking for Next.js projects with app/learn directory..." -ForegroundColor Yellow
Write-Host ""

$searchPaths = @(
    "C:\Users\$env:USERNAME\Documents",
    "C:\Users\$env:USERNAME\Desktop",
    "C:\Projects",
    "C:\Dev",
    "C:\Code",
    "C:\Users\$env:USERNAME\source",
    "C:\Users\$env:USERNAME\source\repos"
)

$foundRepos = @()

foreach ($basePath in $searchPaths) {
    if (Test-Path $basePath) {
        Write-Host "Searching in: $basePath" -ForegroundColor Gray
        
        # Look for directories with package.json and app/learn
        $projects = Get-ChildItem -Path $basePath -Directory -ErrorAction SilentlyContinue | 
            Where-Object {
                $packageJson = Join-Path $_.FullName "package.json"
                $learnDir = Join-Path $_.FullName "app\learn"
                (Test-Path $packageJson) -and (Test-Path $learnDir)
            }
        
        foreach ($project in $projects) {
            $foundRepos += $project.FullName
            Write-Host "  Found: $($project.FullName)" -ForegroundColor Green
        }
    }
}

Write-Host ""
Write-Host "=== Search Results ===" -ForegroundColor Cyan

if ($foundRepos.Count -eq 0) {
    Write-Host "No repositories found in common locations." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Please provide the path manually:" -ForegroundColor Cyan
    Write-Host "  - Check where your main site code is located" -ForegroundColor White
    Write-Host "  - Look for a folder containing:" -ForegroundColor White
    Write-Host "    * package.json" -ForegroundColor Gray
    Write-Host "    * app/learn/ directory" -ForegroundColor Gray
    Write-Host "    * app/components/VideoComments.tsx" -ForegroundColor Gray
    Write-Host ""
    Write-Host "Once you know the path, run:" -ForegroundColor Cyan
    Write-Host '  .\copy-learn-files.ps1 -MainRepoPath "C:\your\path\here"' -ForegroundColor White
} elseif ($foundRepos.Count -eq 1) {
    Write-Host "Found 1 repository:" -ForegroundColor Green
    Write-Host "  $($foundRepos[0])" -ForegroundColor White
    Write-Host ""
    Write-Host "To copy files, run:" -ForegroundColor Cyan
    $path = $foundRepos[0]
    Write-Host "  .\copy-learn-files.ps1 -MainRepoPath `"$path`"" -ForegroundColor White
} else {
    Write-Host "Found $($foundRepos.Count) repositories:" -ForegroundColor Green
    for ($i = 0; $i -lt $foundRepos.Count; $i++) {
        Write-Host "  [$($i+1)] $($foundRepos[$i])" -ForegroundColor White
    }
    Write-Host ""
    Write-Host "Please identify which one is your main repository," -ForegroundColor Yellow
    Write-Host "then run:" -ForegroundColor Cyan
    Write-Host '  .\copy-learn-files.ps1 -MainRepoPath "<path>"' -ForegroundColor White
}
