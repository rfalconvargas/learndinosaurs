# Fix Google OAuth Redirect URI Mismatch Error

## Error: redirect_uri_mismatch

This error occurs when the redirect URI in your Google Cloud Console doesn't match what your app is sending.

## Solution: Update Google Cloud Console

### Step 1: Go to Google Cloud Console

1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project
3. Navigate to **APIs & Services** → **Credentials**
4. Find your **OAuth 2.0 Client ID** and click on it to edit

### Step 2: Update Authorized Redirect URIs

In the **Authorized redirect URIs** section, make sure you have:

```
http://localhost:3001/api/auth/callback/google
```

**Important:**
- The URI must match **exactly** (including `http://` not `https://`)
- Port must be `3001` (not `3000`)
- Path must be `/api/auth/callback/google`

### Step 3: Update Authorized JavaScript Origins

In the **Authorized JavaScript origins** section, make sure you have:

```
http://localhost:3001
```

### Step 4: Save Changes

Click **Save** at the bottom of the page.

### Step 5: Wait a Few Minutes

Google's changes can take a few minutes to propagate. Wait 2-3 minutes before testing again.

### Step 6: Test Again

1. Clear your browser cache or use an incognito window
2. Go to `http://localhost:3001`
3. Click "Sign in with Google"
4. It should work now!

## Common Mistakes to Avoid

❌ **Wrong:** `https://localhost:3001/api/auth/callback/google` (should be `http://`)
❌ **Wrong:** `http://localhost:3000/api/auth/callback/google` (wrong port)
❌ **Wrong:** `http://localhost:3001/auth/callback/google` (wrong path)
✅ **Correct:** `http://localhost:3001/api/auth/callback/google`

## For Production

When you deploy to production, you'll need to add your production URL:

```
https://www.learndinosaurs.com/api/auth/callback/google
```

And JavaScript origin:

```
https://www.learndinosaurs.com
```

