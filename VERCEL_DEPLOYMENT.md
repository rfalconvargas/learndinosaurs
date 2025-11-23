# Vercel Deployment Guide for LearnDinosaurs

## ✅ Code is Ready!

Your code has been committed and pushed to GitHub:
- **Repository:** `https://github.com/rfalconvargas/learndinosaurs.git`
- **Branch:** `main`
- **Commit:** `e29ea70`

## Step 1: Connect to Vercel

1. Go to [Vercel](https://vercel.com/)
2. Sign in with your GitHub account
3. Click **"Add New Project"**
4. Import your repository: `rfalconvargas/learndinosaurs`
5. Vercel will auto-detect Next.js settings

## Step 2: Configure Environment Variables

In Vercel project settings, add these environment variables:

### Required for Authentication:
```env
NEXTAUTH_URL=https://www.learndinosaurs.com
NEXTAUTH_SECRET=your-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### Optional (Google Analytics is already hardcoded):
```env
NEXT_PUBLIC_GA_ID=G-7RPSCX2GPW
```
*(Note: GA is already configured in code, but you can override it here if needed)*

### Database (if using):
```env
DATABASE_URL=your-database-connection-string
```

**Important:**
- Generate `NEXTAUTH_SECRET` using: `openssl rand -base64 32`
- Get `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` from [Google Cloud Console](https://console.cloud.google.com/)
- Update Google OAuth redirect URI to: `https://www.learndinosaurs.com/api/auth/callback/google`

## Step 3: Configure Build Settings

Vercel should auto-detect these, but verify:

- **Framework Preset:** Next.js
- **Root Directory:** `./` (root)
- **Build Command:** `npm run build` (default)
- **Output Directory:** `.next` (default)
- **Install Command:** `npm install` (default)

## Step 4: Deploy

1. Click **"Deploy"**
2. Wait for build to complete (usually 2-3 minutes)
3. Your site will be live at: `https://learndinosaurs.vercel.app`

## Step 5: Configure Custom Domain

1. Go to **Project Settings** → **Domains**
2. Add custom domain: `www.learndinosaurs.com`
3. Follow Vercel's DNS instructions:
   - Add a CNAME record pointing to Vercel
   - Or add A records as instructed
4. Wait for DNS propagation (can take up to 24 hours, usually faster)

## Step 6: Update Google OAuth Settings

After deployment, update your Google OAuth credentials:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **APIs & Services** → **Credentials**
3. Edit your OAuth 2.0 Client ID
4. Add authorized redirect URI:
   - `https://www.learndinosaurs.com/api/auth/callback/google`
   - `https://learndinosaurs.vercel.app/api/auth/callback/google` (for testing)

## Step 7: Verify Everything Works

After deployment, test:

- ✅ Website loads at `www.learndinosaurs.com`
- ✅ Google Authentication works
- ✅ Google Analytics is tracking (check GA dashboard)
- ✅ All pages load correctly
- ✅ Images load properly

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all environment variables are set
- Verify `package.json` has all dependencies

### Authentication Not Working
- Verify `NEXTAUTH_URL` matches your domain exactly
- Check Google OAuth redirect URIs are correct
- Ensure `NEXTAUTH_SECRET` is set

### Images Not Loading
- Verify `next.config.ts` has correct remote patterns
- Check image URLs are using allowed domains

### Google Analytics Not Tracking
- Check browser console for errors
- Verify Measurement ID `G-7RPSCX2GPW` is correct
- Check Google Analytics Realtime reports

## Post-Deployment Checklist

- [ ] Environment variables configured
- [ ] Custom domain connected
- [ ] Google OAuth redirect URIs updated
- [ ] Google Analytics tracking verified
- [ ] Authentication tested
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Mobile responsiveness checked

## Support

If you encounter issues:
1. Check Vercel build logs
2. Check browser console for errors
3. Verify all environment variables are set correctly
4. Review Google OAuth configuration

---

**Your website is ready to deploy! 🚀**


