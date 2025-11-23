# Copy Files Guide

This guide explains which files to copy from the main repository and how to update them.

## Files Already Created (Ready for Content)

These files have been created with placeholder content. **Copy the actual content from your main repository** and replace the placeholder code:

### Learn Section Pages
- ✅ `app/learn/page.tsx` - Copy from main repo, update imports
- ✅ `app/learn/posts.ts` - Copy from main repo
- ✅ `app/learn/categories.ts` - Copy from main repo
- ✅ `app/learn/[slug]/page.tsx` - Copy from main repo, update imports
- ✅ `app/learn/videos/page.tsx` - Copy from main repo, update imports

### Components
- ✅ `app/components/VideoComments.tsx` - Copy from main repo, update imports
- ✅ `app/components/SavePlaylistButton.tsx` - Copy from main repo, update imports

### API Routes
- ✅ `app/api/profile/saved-videos/route.ts` - **Already implemented!** Review and adjust if needed
- ✅ `app/api/profile/comments/route.ts` - **Already implemented!** Review and adjust if needed
- ✅ `app/api/profile/saved-playlists/route.ts` - **Already implemented!** Review and adjust if needed

## Files Already Set Up (No Copying Needed)

These files are already configured and ready to use:

- ✅ `lib/prisma.ts` - Prisma client setup
- ✅ `lib/auth.ts` - NextAuth configuration
- ✅ `app/api/auth/[...nextauth]/route.ts` - Auth API route
- ✅ `prisma/schema.prisma` - Database schema with all models
- ✅ `app/layout.tsx` - Root layout
- ✅ `next.config.ts` - Next.js configuration
- ✅ `tsconfig.json` - TypeScript configuration

## Import Path Updates

When copying files, update all imports to use the `@/` alias:

### Before (Main Repo - Relative Imports)
```typescript
import { prisma } from "../../../lib/prisma"
import { authOptions } from "../../../lib/auth"
import VideoComments from "../../components/VideoComments"
import { posts } from "../posts"
```

### After (LearnDinosaurs - Absolute Imports)
```typescript
import { prisma } from "@/lib/prisma"
import { authOptions } from "@/lib/auth"
import VideoComments from "@/app/components/VideoComments"
import { posts } from "@/app/learn/posts"
```

## Step-by-Step Copy Process

### 1. Copy Learn Content Files

```bash
# From main repository, copy:
- app/learn/page.tsx → app/learn/page.tsx
- app/learn/posts.ts → app/learn/posts.ts
- app/learn/categories.ts → app/learn/categories.ts
- app/learn/[slug]/page.tsx → app/learn/[slug]/page.tsx
- app/learn/videos/page.tsx → app/learn/videos/page.tsx
```

**Action**: Open each file, copy the content, and update imports.

### 2. Copy Components

```bash
# From main repository, copy:
- app/components/VideoComments.tsx → app/components/VideoComments.tsx
- app/components/SavePlaylistButton.tsx → app/components/SavePlaylistButton.tsx
```

**Action**: Copy component code and update all imports to use `@/` alias.

### 3. Review API Routes

The API routes are already implemented, but you should:

1. **Review** each route file
2. **Compare** with your main repository version
3. **Adjust** if your main repo has different logic
4. **Test** each endpoint after copying

### 4. Copy Any Additional Files

If your main repository has:
- Additional Learn routes (copy them)
- Shared UI components used by Learn (duplicate them)
- Utility functions used by Learn (copy to `lib/`)
- Type definitions (copy to appropriate location)

## Common Import Patterns to Update

### Database & Auth
```typescript
// Old
import { prisma } from "../../../lib/prisma"
import { authOptions } from "../../../lib/auth"
import { getServerSession } from "next-auth/next"

// New
import { prisma } from "@/lib/prisma"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
```

### Components
```typescript
// Old
import VideoComments from "../../components/VideoComments"
import SavePlaylistButton from "../../components/SavePlaylistButton"

// New
import VideoComments from "@/app/components/VideoComments"
import SavePlaylistButton from "@/app/components/SavePlaylistButton"
```

### Learn Data
```typescript
// Old
import { posts } from "../posts"
import { categories } from "../categories"

// New
import { posts } from "@/app/learn/posts"
import { categories } from "@/app/learn/categories"
```

### Next.js Imports
```typescript
// Old
import { NextResponse } from "next/server"
import { redirect } from "next/navigation"
import Link from "next/link"

// New (usually no change needed, but verify)
import { NextResponse } from "next/server"
import { redirect } from "next/navigation"
import Link from "next/link"
```

## Testing After Copying

After copying each file:

1. **Check for TypeScript errors**: Run `npm run build` or check your IDE
2. **Test the page/component**: Visit the route in your browser
3. **Check console**: Look for runtime errors
4. **Verify imports**: Make sure all imports resolve correctly

## Files That May Need Manual Updates

Some files might reference:
- Main site navigation (remove or update)
- Main site layout components (replace with local versions)
- Main site API routes (update to new routes)
- Main site utilities (copy if needed)

## Next Steps

1. ✅ Prisma is set up - configure `DATABASE_URL` in `.env.local`
2. ✅ Authentication is set up - configure providers in `lib/auth.ts`
3. ✅ API routes are ready - test them after setting up database
4. ⏳ Copy Learn content files from main repo
5. ⏳ Copy components from main repo
6. ⏳ Test everything works
7. ⏳ Deploy to Vercel

## Need Help?

- Check `LEARN_REPO_SETUP.md` for detailed setup instructions
- Check `MIGRATION_CHECKLIST.md` for a complete checklist
- Check `FILE_MAPPING.md` for file mapping reference





