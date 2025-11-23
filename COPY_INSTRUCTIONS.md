# Copy Learn Files - Step by Step

## Current Status

The Learn section files still contain placeholder content. They need to be replaced with the actual files from your main repository.

## Step-by-Step Copy Instructions

### Step 1: Find Your Main Repository

Your main repository should be somewhere on your computer. Common locations:
- `C:\Users\<YourName>\Documents\<project-name>`
- `C:\Projects\<project-name>`
- `C:\Dev\<project-name>`

**Find it by looking for a folder that contains:**
- `app/learn/` directory with actual content
- `app/components/VideoComments.tsx` with real component code
- `package.json` file

### Step 2: Copy Files Using PowerShell

**Open PowerShell in this directory** (`C:\LearnDinosaurs\learndinosaurs`) and run:

```powershell
# Replace this path with your actual main repository path
$mainRepo = "C:\path\to\your\main-repo"

# Verify the path exists
if (Test-Path $mainRepo) {
    Write-Host "Found main repository!" -ForegroundColor Green
    
    # Copy Learn directory (overwrite existing)
    Write-Host "Copying Learn directory..." -ForegroundColor Yellow
    Copy-Item -Path "$mainRepo\app\learn\*" -Destination "app\learn\" -Recurse -Force
    
    # Copy components
    Write-Host "Copying components..." -ForegroundColor Yellow
    Copy-Item -Path "$mainRepo\app\components\VideoComments.tsx" -Destination "app\components\" -Force -ErrorAction SilentlyContinue
    Copy-Item -Path "$mainRepo\app\components\SavePlaylistButton.tsx" -Destination "app\components\" -Force -ErrorAction SilentlyContinue
    
    Write-Host "Files copied!" -ForegroundColor Green
} else {
    Write-Host "Path not found. Please check the path." -ForegroundColor Red
}
```

### Step 3: Update Imports

After copying, run the import update script:

```powershell
.\update-imports.ps1
```

### Step 4: Verify Files Were Copied

Check if files have real content:

```powershell
# Check if page.tsx has real content (not TODO)
$content = Get-Content app\learn\page.tsx -Raw
if ($content -match "TODO|placeholder") {
    Write-Host "Still has placeholder - copy may have failed" -ForegroundColor Red
} else {
    Write-Host "Looks good! File has real content" -ForegroundColor Green
}
```

## Alternative: Manual Copy

If PowerShell doesn't work, you can manually:

1. **Open File Explorer**
2. **Navigate to your main repository** → `app\learn\`
3. **Select all files** (Ctrl+A)
4. **Copy** (Ctrl+C)
5. **Navigate to** `C:\LearnDinosaurs\learndinosaurs\app\learn\`
6. **Paste** (Ctrl+V) - **Choose "Replace" when prompted**

Repeat for:
- `app\components\VideoComments.tsx`
- `app\components\SavePlaylistButton.tsx`

## What to Look For

After copying, files should have:

### ✅ `app/learn/page.tsx` should have:
- Real imports (not TODO comments)
- Actual component code
- Uses `posts` and `categories` data

### ✅ `app/learn/posts.ts` should have:
- Actual post data in the array
- Real post objects with content, titles, etc.

### ✅ `app/components/VideoComments.tsx` should have:
- Real component code
- API calls
- Actual UI implementation

## After Copying

1. ✅ Files copied with real content
2. ⏳ Run `.\update-imports.ps1` to fix imports
3. ⏳ Check for errors: `npm run build`
4. ⏳ Test: `npm run dev`

## Need Help?

If you're having trouble:
1. Share the path to your main repository
2. Let me know what error messages you see
3. Tell me which method you're using to copy




