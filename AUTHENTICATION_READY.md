# ✅ Authentication Setup - Ready to Test!

## Configuration Status

### ✅ Environment Variables
- `NEXTAUTH_URL="http://localhost:3001"` ✓
- `GOOGLE_CLIENT_ID` ✓
- `GOOGLE_CLIENT_SECRET` ✓
- `NEXTAUTH_SECRET` ✓

### ✅ Code Configuration
- NextAuth v5 route handler configured ✓
- Google Provider setup ✓
- AuthButton component with dropdown menu ✓
- Image domains configured for Google profile pictures ✓

### ✅ Google Cloud Console
Make sure you have:
- Redirect URI: `http://localhost:3001/api/auth/callback/google`
- JavaScript origin: `http://localhost:3001`

## Testing Steps

### Step 1: Verify Server Logs

Check your terminal where `npm run dev` is running. You should see:

```
NextAuth Config Check: {
  NEXTAUTH_URL: 'http://localhost:3001',
  hasGoogleClientId: true,
  hasGoogleClientSecret: true
}
```

**If you see `localhost:3000`**, the environment variable isn't being read. Check:
- `.env.local` file is in the project root
- File has `NEXTAUTH_URL="http://localhost:3001"`
- Server was restarted after changing the file

### Step 2: Test Authentication Flow

1. **Open Incognito Window**
   - Chrome: Ctrl+Shift+N
   - Firefox: Ctrl+Shift+P
   - Edge: Ctrl+Shift+N

2. **Navigate to App**
   - Go to: `http://localhost:3001`
   - You should see the "Sign in with Google" button

3. **Click Sign In**
   - Click the "Sign in with Google" button
   - You should be redirected to Google's sign-in page

4. **Verify Redirect URI**
   - Open DevTools (F12)
   - Go to Network tab
   - Look for the request to `accounts.google.com`
   - Check the `redirect_uri` parameter
   - It should be: `http://localhost:3001/api/auth/callback/google`
   - **NOT:** `http://localhost:3000/...`

5. **Sign In**
   - Complete Google sign-in
   - You should be redirected back to your app
   - Your profile picture should appear in the navigation bar

6. **Test Dropdown Menu**
   - Click your profile picture
   - Dropdown menu should appear with:
     - Your name and email
     - "Profile" link
     - "Sign Out" button

7. **Test Sign Out**
   - Click "Sign Out" in the dropdown
   - You should be signed out
   - "Sign in with Google" button should appear again

## Success Indicators

✅ Server logs show `NEXTAUTH_URL: 'http://localhost:3001'`  
✅ Redirect URI in Network tab shows port `3001`  
✅ Google sign-in page loads  
✅ After signing in, redirected back to app  
✅ Profile picture appears in navigation  
✅ Dropdown menu works  
✅ Sign out works  

## Troubleshooting

### If redirect_uri still shows 3000:
1. Double-check `.env.local` has `NEXTAUTH_URL="http://localhost:3001"`
2. Restart server completely (stop and start)
3. Clear browser cache or use incognito
4. Check for other `.env` files that might override it

### If Google shows redirect_uri_mismatch:
1. Verify Google Cloud Console has exact match:
   - `http://localhost:3001/api/auth/callback/google`
2. Wait 2-5 minutes for changes to propagate
3. Make sure no trailing slashes or extra characters

### If profile picture doesn't load:
- Already configured in `next.config.ts` ✓
- Should work automatically

## Next Steps After Authentication Works

1. ✅ Test saving videos (if you have video pages)
2. ✅ Test creating playlists
3. ✅ Test commenting functionality
4. ✅ Set up database (optional - auth works with JWT)
5. ✅ Deploy to production

## Production Deployment

When deploying, update:
- `NEXTAUTH_URL` to your production URL
- Google Console redirect URI to production URL
- Add production redirect URI: `https://www.learndinosaurs.com/api/auth/callback/google`

---

**You're all set! Test the authentication flow now.** 🚀

