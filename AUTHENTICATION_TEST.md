# Authentication Testing Guide

## ✅ Setup Complete

You've completed the Google OAuth setup. Here's how to test it:

## Testing Steps

### 1. Verify Environment Variables

Make sure your `.env.local` file contains:
```env
NEXTAUTH_URL="http://localhost:3001"
NEXTAUTH_SECRET="your-generated-secret"
GOOGLE_CLIENT_ID="your-client-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-client-secret"
```

### 2. Verify Google Cloud Console Settings

In your Google Cloud Console OAuth credentials:
- **Authorized JavaScript origins**: `http://localhost:3001`
- **Authorized redirect URIs**: `http://localhost:3001/api/auth/callback/google`

### 3. Restart Development Server

After setting environment variables, restart your dev server:
```bash
npm run dev
```

### 4. Test Authentication Flow

1. **Open your browser** to `http://localhost:3001`
2. **Click "Sign in with Google"** button in the navigation bar
3. **You should be redirected** to Google's sign-in page
4. **After signing in**, you'll be redirected back to your app
5. **Check the navigation bar** - you should see your profile picture and "Sign Out" button

### 5. Test Profile Page

1. Navigate to `/profile` (or click the profile link if visible)
2. You should see:
   - Your profile picture
   - Your name
   - Your email
   - Stats cards (Saved Videos, Playlists, Comments)
   - Sign Out button

### 6. Verify Session

Open browser console and check:
- No authentication errors
- Session data is available
- User info displays correctly

## Troubleshooting

### If authentication doesn't work:

1. **Check terminal logs** - Look for any error messages
2. **Verify redirect URI** - Must match exactly: `http://localhost:3001/api/auth/callback/google`
3. **Check environment variables** - Make sure they're loaded (restart server after adding)
4. **Clear browser cache** - Sometimes cached sessions cause issues
5. **Check Google Cloud Console** - Ensure OAuth consent screen is configured

### Common Issues:

- **"Authentication not configured"** - Environment variables not loaded (restart server)
- **"Redirect URI mismatch"** - Check Google Cloud Console settings (must be `http://localhost:3001/api/auth/callback/google`)
- **"Invalid client"** - Verify Client ID and Secret are correct
- **Session not persisting** - Check NEXTAUTH_SECRET is set

## Next Steps After Authentication Works

1. ✅ Test saving videos (if you have video pages)
2. ✅ Test creating playlists
3. ✅ Test commenting functionality
4. ✅ Set up database (optional - auth works with JWT)
5. ✅ Deploy to production

## Production Deployment

When deploying to production (e.g., Vercel):

1. Update `NEXTAUTH_URL` to your production URL
2. Add production redirect URI in Google Cloud Console:
   - `https://yourdomain.com/api/auth/callback/google`
3. Add all environment variables in your hosting platform
4. Test authentication on production domain

