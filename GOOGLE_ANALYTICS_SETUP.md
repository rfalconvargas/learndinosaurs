# Google Analytics Setup Guide

## ✅ Google Analytics is Already Configured!

Google Analytics has been set up for **LearnDinosaurs** with Measurement ID: `G-7RPSCX2GPW`

The Google tag is automatically included on every page of your website.

## Optional: Override with Environment Variable

If you want to use a different Measurement ID, you can add it to your `.env.local` file:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Note:** The default ID (`G-7RPSCX2GPW`) will be used if `NEXT_PUBLIC_GA_ID` is not set.

## Step 3: Restart Development Server

After adding the environment variable, restart your development server:

```bash
npm run dev
```

## Step 4: Verify Installation

1. Open your website in a browser
2. Open Developer Tools → Network tab
3. Look for requests to `googletagmanager.com` - this confirms GA is loading
4. Go to Google Analytics → **Reports** → **Realtime** to see live traffic

## Production Deployment

When deploying to production (e.g., Vercel):

1. Add `NEXT_PUBLIC_GA_ID` to your hosting platform's environment variables
2. Set it to your Google Analytics Measurement ID
3. Redeploy your application

## Domain Configuration

Make sure your Google Analytics property is configured for:
- **Website URL:** `https://www.learndinosaurs.com`
- **Default URL:** `https://www.learndinosaurs.com`

## Testing

- Analytics will only track in production or when `NEXT_PUBLIC_GA_ID` is set
- Use Google Analytics DebugView to test in development
- Check the Network tab to verify the GA script is loading

