# PowerShell script to update import paths in copied files
# This script updates relative imports (../) to absolute imports (@/)

$ErrorActionPreference = "Stop"

Write-Host "Updating import paths..." -ForegroundColor Green

# Files to update
$filesToUpdate = @(
    "app\learn\**\*.tsx",
    "app\learn\**\*.ts",
    "app\components\*.tsx",
    "app\api\**\*.ts"
)

$updatedCount = 0

foreach ($pattern in $filesToUpdate) {
    $files = Get-ChildItem -Path $pattern -Recurse -ErrorAction SilentlyContinue
    
    foreach ($file in $files) {
        $content = Get-Content $file.FullName -Raw
        $originalContent = $content
        
        # Update common import patterns
        # From: import { x } from "../../../lib/..."
        # To: import { x } from "@/lib/..."
        $content = $content -replace 'from\s+["'']\.\.\/\.\.\/\.\.\/lib\/([^"'']+)["'']', 'from "@/lib/$1"'
        $content = $content -replace 'from\s+["'']\.\.\/\.\.\/lib\/([^"'']+)["'']', 'from "@/lib/$1"'
        $content = $content -replace 'from\s+["'']\.\.\/lib\/([^"'']+)["'']', 'from "@/lib/$1"'
        
        # Update component imports
        $content = $content -replace 'from\s+["'']\.\.\/\.\.\/\.\.\/components\/([^"'']+)["'']', 'from "@/app/components/$1"'
        $content = $content -replace 'from\s+["'']\.\.\/\.\.\/components\/([^"'']+)["'']', 'from "@/app/components/$1"'
        $content = $content -replace 'from\s+["'']\.\.\/components\/([^"'']+)["'']', 'from "@/app/components/$1"'
        
        # Update learn data imports
        $content = $content -replace 'from\s+["'']\.\.\/posts["'']', 'from "@/app/learn/posts"'
        $content = $content -replace 'from\s+["'']\.\.\/categories["'']', 'from "@/app/learn/categories"'
        $content = $content -replace 'from\s+["'']\.\.\/\.\.\/posts["'']', 'from "@/app/learn/posts"'
        $content = $content -replace 'from\s+["'']\.\.\/\.\.\/categories["'']', 'from "@/app/learn/categories"'
        
        # Update next-auth imports (remove /next suffix)
        $content = $content -replace 'from\s+["'']next-auth\/next["'']', 'from "next-auth"'
        
        if ($content -ne $originalContent) {
            Set-Content -Path $file.FullName -Value $content -NoNewline
            Write-Host "✓ Updated: $($file.Name)" -ForegroundColor Green
            $updatedCount++
        }
    }
}

Write-Host "`nUpdated $updatedCount file(s)" -ForegroundColor Green
Write-Host "Please review the changes and test your application" -ForegroundColor Cyan

