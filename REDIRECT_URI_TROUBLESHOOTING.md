# Redirect URI Mismatch - Step-by-Step Fix

## The Problem
Google is rejecting the authentication because the redirect URI doesn't match what's configured in Google Cloud Console.

## Complete Fix Checklist

### ✅ Step 1: Verify Your `.env.local` File

Make sure your `.env.local` file in the project root has:

```env
NEXTAUTH_URL="http://localhost:3001"
NEXTAUTH_SECRET="your-secret-here"
GOOGLE_CLIENT_ID="your-client-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-client-secret"
```

**Important:** 
- No trailing slash after `3001`
- Use `http://` not `https://`
- Port must be `3001`

### ✅ Step 2: Update Google Cloud Console

1. **Go to:** https://console.cloud.google.com/
2. **Select your project**
3. **Navigate to:** APIs & Services → Credentials
4. **Click on your OAuth 2.0 Client ID** (the one you're using)

#### In "Authorized redirect URIs" section:

**DELETE** any old entries like:
- `http://localhost:3000/api/auth/callback/google`
- Any other localhost entries

**ADD** exactly this (copy-paste to avoid typos):
```
http://localhost:3001/api/auth/callback/google
```

#### In "Authorized JavaScript origins" section:

**DELETE** any old entries like:
- `http://localhost:3000`

**ADD** exactly this:
```
http://localhost:3001
```

5. **Click SAVE** at the bottom

### ✅ Step 3: Wait for Propagation

Google's changes can take **2-5 minutes** to propagate. Wait before testing.

### ✅ Step 4: Restart Your Dev Server

**CRITICAL:** After updating `.env.local` or Google Console, you MUST restart:

1. Stop your dev server (Ctrl+C)
2. Start it again: `npm run dev`

### ✅ Step 5: Clear Browser Cache

1. Open an **Incognito/Private window** (recommended)
   - OR clear your browser cache
   - OR use a different browser

2. Go to: `http://localhost:3001`

3. Try signing in again

## Verification Steps

### Check 1: Verify Environment Variables Are Loaded

Add this temporarily to see what NextAuth is using:

In your browser console, check the network tab when clicking "Sign in with Google". Look at the request URL - it should contain `redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fauth%2Fcallback%2Fgoogle`

### Check 2: Verify Google Console Settings

Double-check in Google Cloud Console:
- ✅ Redirect URI: `http://localhost:3001/api/auth/callback/google` (exact match)
- ✅ JavaScript origin: `http://localhost:3001` (exact match)
- ✅ No extra spaces or characters
- ✅ Saved the changes

### Check 3: Check Server Logs

When you click "Sign in with Google", check your terminal for any errors or warnings.

## Common Mistakes

❌ **Wrong:** `https://localhost:3001/api/auth/callback/google` (should be http)
❌ **Wrong:** `http://localhost:3001/api/auth/callback/google/` (trailing slash)
❌ **Wrong:** `http://localhost:3000/api/auth/callback/google` (wrong port)
❌ **Wrong:** `http://127.0.0.1:3001/api/auth/callback/google` (should be localhost)
❌ **Wrong:** Forgetting to restart server after changing `.env.local`
❌ **Wrong:** Not waiting for Google changes to propagate

✅ **Correct:** `http://localhost:3001/api/auth/callback/google`

## Still Not Working?

1. **Double-check** your `.env.local` file exists in the project root
2. **Verify** the file has no syntax errors (no extra quotes, proper line breaks)
3. **Restart** your dev server completely
4. **Try** in an incognito window
5. **Check** the browser's Network tab to see what redirect_uri is being sent
6. **Wait** 5 more minutes for Google changes to propagate

## Need More Help?

Check the actual redirect URI being sent:
1. Open browser DevTools (F12)
2. Go to Network tab
3. Click "Sign in with Google"
4. Look for the request to `accounts.google.com`
5. Check the `redirect_uri` parameter in the URL
6. Compare it exactly with what's in Google Cloud Console

