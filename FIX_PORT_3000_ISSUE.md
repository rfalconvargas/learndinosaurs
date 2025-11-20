# Fix: NextAuth Still Using Port 3000 Instead of 3001

## The Problem
Your request shows: `redirect_uri=http%3A%2F%2Flocalhost%3A3000` (which is `http://localhost:3000`)

But it should be: `http://localhost:3001`

## Root Cause
The `NEXTAUTH_URL` environment variable is either:
1. Not set in `.env.local`
2. Set to `http://localhost:3000` instead of `3001`
3. Server wasn't restarted after changing it

## Solution

### Step 1: Check Your `.env.local` File

Open `.env.local` in your project root and make sure it has:

```env
NEXTAUTH_URL="http://localhost:3001"
```

**NOT:**
```env
NEXTAUTH_URL="http://localhost:3000"  ❌ WRONG
```

### Step 2: Verify the File Location

Make sure `.env.local` is in the **root** of your project:
```
C:\LearnDinosaurs\learndinosaurs\.env.local
```

NOT in:
- `app/.env.local` ❌
- `lib/.env.local` ❌
- Any subdirectory ❌

### Step 3: Restart Your Dev Server

**CRITICAL:** After changing `.env.local`, you MUST restart:

1. **Stop** the server (Ctrl+C in terminal)
2. **Start** it again: `npm run dev`

### Step 4: Check Server Logs

After restarting, look at your terminal. You should see:
```
NextAuth Config Check: {
  NEXTAUTH_URL: 'http://localhost:3001',
  ...
}
```

If it shows `localhost:3000`, the environment variable isn't being read correctly.

### Step 5: Verify Google Console

Make sure Google Cloud Console has:
- Redirect URI: `http://localhost:3001/api/auth/callback/google`
- JavaScript origin: `http://localhost:3001`

### Step 6: Test Again

1. Clear browser cache or use incognito
2. Go to `http://localhost:3001`
3. Click "Sign in with Google"
4. Check the Network tab - redirect_uri should now show `3001`

## Still Not Working?

If it's still using port 3000:

1. **Check for multiple `.env` files:**
   - `.env`
   - `.env.local`
   - `.env.development`
   - `.env.development.local`
   
   Make sure ALL of them have `NEXTAUTH_URL="http://localhost:3001"` or delete the ones you're not using.

2. **Check for typos:**
   - No spaces around the `=`
   - No quotes inside quotes
   - Correct format: `NEXTAUTH_URL="http://localhost:3001"`

3. **Restart completely:**
   - Close terminal
   - Open new terminal
   - Navigate to project
   - Run `npm run dev`

4. **Check terminal output:**
   - Look for the "NextAuth Config Check" log
   - Verify it shows port 3001

