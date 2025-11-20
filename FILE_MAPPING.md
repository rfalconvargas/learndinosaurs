# Learn Section File Mapping

This document maps files from the main repository to the new LearnDinosaurs repository.

## Source → Destination Mapping

### Learn Content Files

| Source (Main Repo) | Destination (LearnDinosaurs) | Notes |
|-------------------|------------------------------|-------|
| `app/learn/page.tsx` | `app/learn/page.tsx` or `app/page.tsx` | Depends on route structure decision |
| `app/learn/posts.ts` | `app/learn/posts.ts` | Data structure for posts |
| `app/learn/categories.ts` | `app/learn/categories.ts` | Category definitions |
| `app/learn/[slug]/page.tsx` | `app/learn/[slug]/page.tsx` | Individual post pages |
| `app/learn/videos/page.tsx` | `app/learn/videos/page.tsx` | Videos listing page |
| `app/learn/**/*` | `app/learn/**/*` | Any other Learn routes |

### Components

| Source (Main Repo) | Destination (LearnDinosaurs) | Notes |
|-------------------|------------------------------|-------|
| `app/components/VideoComments.tsx` | `app/components/VideoComments.tsx` | Video comment component |
| `app/components/SavePlaylistButton.tsx` | `app/components/SavePlaylistButton.tsx` | Playlist save button |
| `app/components/[shared]/*` | `app/components/[shared]/*` | Duplicate shared components if needed |

**Shared Components to Consider:**
- Buttons (if Learn-specific styling)
- Cards/Layout components
- Form components
- Modal/Dialog components
- Any other UI components used by Learn section

### API Routes

| Source (Main Repo) | Destination (LearnDinosaurs) | Notes |
|-------------------|------------------------------|-------|
| `app/api/profile/saved-videos/route.ts` | `app/api/profile/saved-videos/route.ts` | Saved videos endpoints |
| `app/api/profile/comments/route.ts` | `app/api/profile/comments/route.ts` | Comment endpoints |
| `app/api/profile/saved-playlists/route.ts` | `app/api/profile/saved-playlists/route.ts` | Playlist endpoints |
| `app/api/auth/**/*` | `app/api/auth/**/*` | Auth routes (if using NextAuth) |

### Libraries

| Source (Main Repo) | Destination (LearnDinosaurs) | Notes |
|-------------------|------------------------------|-------|
| `lib/auth.ts` | `lib/auth.ts` | Authentication utilities |
| `lib/prisma.ts` | `lib/prisma.ts` | Prisma client |
| `lib/utils.ts` | `lib/utils.ts` | Shared utilities (if used by Learn) |

### Database Schema

| Source (Main Repo) | Destination (LearnDinosaurs) | Notes |
|-------------------|------------------------------|-------|
| `prisma/schema.prisma` (User model) | `prisma/schema.prisma` | Copy User model |
| `prisma/schema.prisma` (SavedVideo) | `prisma/schema.prisma` | Copy SavedVideo model |
| `prisma/schema.prisma` (VideoComment) | `prisma/schema.prisma` | Copy VideoComment model |
| `prisma/schema.prisma` (SavedPlaylist) | `prisma/schema.prisma` | Copy SavedPlaylist model |

### Configuration Files

| Source (Main Repo) | Destination (LearnDinosaurs) | Notes |
|-------------------|------------------------------|-------|
| `next.config.ts` | `next.config.ts` | Copy image config and other settings |
| `tsconfig.json` | `tsconfig.json` | TypeScript configuration |
| `tailwind.config.ts` | `tailwind.config.ts` | If using Tailwind |
| `package.json` | `package.json` | Copy relevant dependencies |

### Assets

| Source (Main Repo) | Destination (LearnDinosaurs) | Notes |
|-------------------|------------------------------|-------|
| `public/learn-assets/**/*` | `public/learn-assets/**/*` | Learn-specific images/assets |
| `public/images/learn/**/*` | `public/images/learn/**/*` | If images are in separate folder |

### New Files to Create

| File | Purpose | Notes |
|------|---------|-------|
| `app/layout.tsx` | Root layout | Create new layout for standalone app |
| `app/page.tsx` | Home page | Redirect to Learn or render Learn content |
| `.env.local` | Environment variables | Copy from main repo or create new |
| `.env.example` | Environment template | Document required variables |
| `README.md` | Documentation | Update with LearnDinosaurs info |

## Import Path Updates

### Before (Main Repo)
```typescript
// Relative imports
import { prisma } from "../../../lib/prisma"
import VideoComments from "../../components/VideoComments"
import { posts } from "../posts"
```

### After (LearnDinosaurs)
```typescript
// Absolute imports with @ alias
import { prisma } from "@/lib/prisma"
import VideoComments from "@/app/components/VideoComments"
import { posts } from "@/app/learn/posts"
```

## Dependencies to Copy

### Core Dependencies
- `next` - Next.js framework
- `react` - React library
- `react-dom` - React DOM

### Database
- `@prisma/client` - Prisma client
- `prisma` - Prisma CLI (dev dependency)

### Authentication
- `next-auth` - If using NextAuth.js
- OR `@clerk/nextjs` - If using Clerk
- OR other auth library

### UI/Stlying
- `tailwindcss` - If using Tailwind
- UI component library (if used)

### Other Dependencies
- Add any other packages used by Learn section
- Check `package.json` in main repo for full list

## Files NOT to Copy

These files should remain in the main repository or be created fresh:

- `app/layout.tsx` - Create new one for standalone app
- `app/page.tsx` - Create new one (redirect or Learn content)
- Main site specific components
- Main site specific API routes
- Main site specific pages
- Main site configuration that doesn't apply

## Environment Variables

### Required Variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `DATABASE_URL` | Database connection | `postgresql://...` |
| `NEXTAUTH_URL` | Auth callback URL | `http://localhost:3001` or `https://www.learndinosaurs.com` |
| `NEXTAUTH_SECRET` | Auth secret key | Random string |
| `NEXT_PUBLIC_*` | Public env vars | Any public variables |

### Optional Variables
- Analytics keys
- Image CDN URLs
- Other service API keys

## Route Structure Options

### Option 1: Learn at Root (`/`)
```
app/
├── layout.tsx          # Root layout
├── page.tsx            # Learn home (from app/learn/page.tsx)
├── learn/
│   ├── [slug]/
│   │   └── page.tsx    # Individual posts
│   └── videos/
│       └── page.tsx    # Videos page
```

### Option 2: Learn under `/learn`
```
app/
├── layout.tsx          # Root layout
├── page.tsx            # Redirect to /learn
├── learn/
│   ├── page.tsx        # Learn home
│   ├── [slug]/
│   │   └── page.tsx    # Individual posts
│   └── videos/
│       └── page.tsx    # Videos page
```

**Recommendation**: Use Option 1 (root) since LearnDinosaurs is the entire purpose of this site.

## Verification Checklist

After copying files, verify:

- [ ] All files copied successfully
- [ ] No missing dependencies
- [ ] Import paths updated
- [ ] No broken references
- [ ] TypeScript compiles without errors
- [ ] All routes accessible
- [ ] Components render correctly
- [ ] API routes work
- [ ] Database connection works
- [ ] Authentication works




