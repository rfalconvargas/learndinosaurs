# Setup Complete - Next Steps

## ✅ What's Been Done

### 1. Database Configuration
- ✅ Prisma schema created with all models
- ✅ Prisma client library configured
- ⚠️ **Action Required**: Set `DATABASE_URL` in `.env.local`

### 2. Authentication Configuration
- ✅ NextAuth.js configured with Google provider
- ✅ Auth API route created
- ⚠️ **Action Required**: Add Google OAuth credentials to `.env.local`

### 3. Project Structure
- ✅ All directories created
- ✅ API routes implemented
- ✅ Placeholder files created

## 🔧 Configuration Steps

### Step 1: Create `.env.local` File

Create a file named `.env.local` in the root directory with:

```env
# Database - UPDATE THIS WITH YOUR ACTUAL DATABASE URL
DATABASE_URL="postgresql://user:password@localhost:5432/learndinosaurs?schema=public"

# NextAuth
NEXTAUTH_URL="http://localhost:3001"
NEXTAUTH_SECRET="wm2+NFFqgIqCorwvYu/YINJq5NzPI8jo/zMIXkztmLI="

# Google OAuth - ADD YOUR CREDENTIALS HERE
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

**Database Options:**
- **PostgreSQL**: `postgresql://user:password@localhost:5432/learndinosaurs?schema=public`
- **MySQL**: `mysql://user:password@localhost:3306/learndinosaurs`
- **SQLite**: `file:./dev.db`
- **Existing Database**: Use your existing connection string

### Step 2: Generate Prisma Client

After setting `DATABASE_URL`, run:

```powershell
npx prisma generate
```

### Step 3: Set Up Database

**Option A: Use Existing Database**
```powershell
npx prisma db pull
npx prisma generate
```

**Option B: Create New Database**
```powershell
npx prisma migrate dev --name init
npx prisma generate
```

### Step 4: Configure Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3001/api/auth/callback/google`
6. Copy Client ID and Client Secret to `.env.local`

### Step 5: Copy Learn Section Files

**Option A: Use PowerShell Script (Recommended)**

1. Find your main repository path (e.g., `C:\path\to\main-repo`)
2. Run the copy script:
```powershell
.\copy-learn-files.ps1 -MainRepoPath "C:\path\to\main-repo"
```

3. Update imports:
```powershell
.\update-imports.ps1
```

**Option B: Manual Copy**

1. Copy `app/learn/` directory from main repo
2. Copy `app/components/VideoComments.tsx` from main repo
3. Copy `app/components/SavePlaylistButton.tsx` from main repo
4. Manually update all imports to use `@/` alias (see `COPY_FILES_GUIDE.md`)

## 📋 Quick Commands

```powershell
# Generate Prisma client (after setting DATABASE_URL)
npx prisma generate

# Create database tables (if new database)
npx prisma migrate dev --name init

# Sync schema from existing database
npx prisma db pull

# Start development server
npm run dev

# Build for production
npm run build
```

## ✅ Verification Checklist

After completing setup:

- [ ] `.env.local` file created with all variables
- [ ] `DATABASE_URL` points to your database
- [ ] `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` added
- [ ] Prisma client generated (`npx prisma generate`)
- [ ] Database tables created or synced
- [ ] Learn section files copied from main repo
- [ ] All imports updated to use `@/` alias
- [ ] Development server runs without errors
- [ ] Authentication works (can sign in)
- [ ] API routes work (test with Postman or browser)

## 🚀 Next Steps

1. **Complete configuration** (Steps 1-4 above)
2. **Copy Learn files** (Step 5 above)
3. **Test everything** (Verification checklist)
4. **Deploy to Vercel** (see `LEARN_REPO_SETUP.md`)

## 📚 Helpful Files

- `COPY_FILES_GUIDE.md` - Detailed file copying instructions
- `SETUP_STATUS.md` - Current setup status
- `LEARN_REPO_SETUP.md` - Complete setup guide
- `MIGRATION_CHECKLIST.md` - Migration tracking

## ⚠️ Important Notes

1. **Never commit `.env.local`** - It's in `.gitignore` for security
2. **Update `NEXTAUTH_URL`** for production: `https://www.learndinosaurs.com`
3. **Add production redirect URI** in Google Cloud Console when deploying
4. **Review API routes** - They're implemented but may need adjustment based on your main repo

## 🆘 Troubleshooting

**Prisma errors:**
- Make sure `DATABASE_URL` is correct
- Check database is running and accessible
- Verify database user has proper permissions

**Authentication errors:**
- Verify Google OAuth credentials are correct
- Check redirect URI matches exactly
- Ensure `NEXTAUTH_SECRET` is set

**Import errors:**
- Run `update-imports.ps1` script
- Manually check files for remaining `../` imports
- Verify `tsconfig.json` has correct path alias



