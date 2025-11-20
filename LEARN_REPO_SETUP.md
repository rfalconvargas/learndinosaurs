# LearnDinosaurs Repository Setup Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git installed
- Vercel account (for deployment)
- Database access (if using existing database)

## Step 1: Initialize Next.js Project

```bash
# Navigate to repository directory
cd C:\LearnDinosaurs\learndinosaurs

# Initialize Next.js project with TypeScript
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"

# Or if project already initialized, install dependencies
npm install
```

## Step 2: Install Required Dependencies

```bash
# Core dependencies (adjust versions as needed)
npm install next@latest react@latest react-dom@latest

# Database
npm install @prisma/client
npm install -D prisma

# Authentication (adjust based on your auth solution)
# For NextAuth.js:
npm install next-auth
# Or for Clerk:
# npm install @clerk/nextjs

# Other dependencies (add as needed based on your codebase)
npm install [other-dependencies]
```

## Step 3: Set Up Project Structure

Create the following directory structure:

```
learndinosaurs/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page (or redirect to /learn)
│   ├── learn/              # Learn section (copied from main repo)
│   │   ├── page.tsx
│   │   ├── posts.ts
│   │   ├── categories.ts
│   │   ├── [slug]/
│   │   └── videos/
│   ├── components/         # Learn-specific components
│   │   ├── VideoComments.tsx
│   │   └── SavePlaylistButton.tsx
│   └── api/                # API routes
│       └── profile/
│           ├── saved-videos/
│           ├── comments/
│           └── saved-playlists/
├── lib/
│   ├── auth.ts
│   ├── prisma.ts
│   └── utils.ts
├── prisma/
│   └── schema.prisma
├── public/                 # Static assets
├── .env.local             # Environment variables
├── .gitignore
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Step 4: Configure Prisma

### 4.1 Copy Database Schema

Copy relevant models from main repo's `prisma/schema.prisma`:

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql" // or your database type
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  savedVideos     SavedVideo[]
  videoComments   VideoComment[]
  savedPlaylists  SavedPlaylist[]
}

model SavedVideo {
  id        String   @id @default(cuid())
  userId    String
  videoId   String
  createdAt DateTime @default(now())
  
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@unique([userId, videoId])
}

model VideoComment {
  id        String   @id @default(cuid())
  userId    String
  videoId   String
  content   String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model SavedPlaylist {
  id        String   @id @default(cuid())
  userId    String
  name      String
  videoIds  String[] // Array of video IDs
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
}
```

### 4.2 Initialize Prisma

```bash
# Generate Prisma Client
npx prisma generate

# If using existing database, pull schema
npx prisma db pull

# If creating new database, push schema
npx prisma db push
```

## Step 5: Set Up Authentication

### Option A: NextAuth.js

Create `lib/auth.ts`:

```typescript
import { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "./prisma"
// Add your providers

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure providers, callbacks, etc.
}
```

Create `app/api/auth/[...nextauth]/route.ts`:

```typescript
import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
```

### Option B: Clerk

Follow Clerk's Next.js setup guide and configure in `app/layout.tsx`.

## Step 6: Create Root Layout

Create `app/layout.tsx`:

```typescript
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LearnDinosaurs - Explore the Prehistoric World",
  description: "Interactive app to explore dinosaurs like a real paleontologist",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
```

## Step 7: Configure Environment Variables

Create `.env.local`:

```env
# Database
DATABASE_URL="your-database-connection-string"

# NextAuth (if using)
NEXTAUTH_URL="http://localhost:3001"
NEXTAUTH_SECRET="your-secret-key"

# Or Clerk (if using)
# NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-key"
# CLERK_SECRET_KEY="your-secret"

# Other environment variables
# Add any other required variables
```

Create `.env.example` for reference:

```env
DATABASE_URL=
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=
```

## Step 8: Configure Next.js

Update `next.config.ts`:

```typescript
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    domains: [
      // Add image domains as needed
      "example.com",
    ],
    // Or use remotePatterns for more control
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.example.com",
      },
    ],
  },
  // Add other configurations as needed
}

export default nextConfig
```

## Step 9: Copy Learn Section Files

From main repository, copy:

1. **Learn Content**:
   ```bash
   # Copy entire learn directory
   cp -r ../main-repo/app/learn ./app/learn
   ```

2. **Components**:
   ```bash
   cp ../main-repo/app/components/VideoComments.tsx ./app/components/
   cp ../main-repo/app/components/SavePlaylistButton.tsx ./app/components/
   ```

3. **API Routes**:
   ```bash
   cp -r ../main-repo/app/api/profile/saved-videos ./app/api/profile/
   cp -r ../main-repo/app/api/profile/comments ./app/api/profile/
   cp -r ../main-repo/app/api/profile/saved-playlists ./app/api/profile/
   ```

4. **Libraries**:
   ```bash
   cp ../main-repo/lib/auth.ts ./lib/
   cp ../main-repo/lib/prisma.ts ./lib/
   ```

5. **Assets**:
   ```bash
   # Copy any Learn-specific images/assets
   cp -r ../main-repo/public/learn-assets ./public/
   ```

## Step 10: Update Import Paths

After copying files, update all import paths:

1. Remove relative path references (`../`)
2. Use absolute imports with `@/` alias
3. Update component imports
4. Update utility imports

Example:
```typescript
// Before
import { prisma } from "../../../lib/prisma"

// After
import { prisma } from "@/lib/prisma"
```

## Step 11: Create Home Page

Create `app/page.tsx`:

```typescript
import { redirect } from "next/navigation"

export default function Home() {
  // Redirect to learn section, or render learn content directly
  redirect("/learn")
  
  // Or render learn page directly:
  // return <LearnPage />
}
```

Or if Learn is the root:

```typescript
// app/page.tsx - Just import and render the learn page
import LearnPage from "./learn/page"

export default function Home() {
  return <LearnPage />
}
```

## Step 12: Update Route Structure

Decide on route structure:

- **Option A**: Learn at root (`/`)
  - Move `app/learn/page.tsx` content to `app/page.tsx`
  - Keep other routes under `app/learn/`

- **Option B**: Keep `/learn` prefix
  - Keep structure as is
  - Update any hardcoded links

## Step 13: Set Up Git

```bash
# Initialize git (if not already)
git init

# Add remote
git remote add origin https://github.com/rfalconvargas/learndinosaurs.git

# Create .gitignore
echo "node_modules/
.env.local
.env*.local
.next/
out/
.DS_Store
*.pem
" > .gitignore

# Initial commit
git add .
git commit -m "Initial commit: LearnDinosaurs standalone site"
```

## Step 14: Test Locally

```bash
# Run development server
npm run dev

# Test at http://localhost:3001
```

Verify:
- [ ] Pages load correctly
- [ ] Database connection works
- [ ] Authentication works
- [ ] API routes work
- [ ] No console errors

## Step 15: Deploy to Vercel

### 15.1 Push to GitHub

```bash
git push -u origin main
```

### 15.2 Deploy to Vercel

1. Go to [Vercel Dashboard](https://vercel.com)
2. Click "New Project"
3. Import repository: `rfalconvargas/learndinosaurs`
4. Configure:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Add environment variables (from `.env.local`)
6. Deploy

### 15.3 Add Custom Domain

1. In Vercel project settings, go to "Domains"
2. Add `www.learndinosaurs.com`
3. Follow DNS configuration instructions
4. Wait for DNS propagation (can take up to 48 hours)

## Step 16: Post-Deployment Verification

- [ ] Site loads at `www.learndinosaurs.com`
- [ ] SSL certificate is active
- [ ] All pages accessible
- [ ] Database operations work
- [ ] Authentication works
- [ ] External links from main site work

## Troubleshooting

### Common Issues

1. **Import Errors**
   - Check `tsconfig.json` paths configuration
   - Verify `@/*` alias is set correctly

2. **Database Connection**
   - Verify `DATABASE_URL` is correct
   - Check database is accessible from Vercel
   - Ensure Prisma Client is generated

3. **Authentication Issues**
   - Verify environment variables are set
   - Check callback URLs are correct
   - Ensure session handling is configured

4. **Build Errors**
   - Check all dependencies are in `package.json`
   - Verify TypeScript types are correct
   - Check for missing environment variables

## Next Steps

After setup is complete:
1. Update main site to link to new site
2. Test all functionality
3. Monitor for any issues
4. Update documentation




