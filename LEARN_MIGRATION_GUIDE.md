# Learn Section Migration Guide

## Overview

This guide outlines the migration of the Learn section from the main site to a separate repository (`learndinosaurs`). The new site will be deployed at `www.learndinosaurs.com` and linked from the main site.

## Migration Goals

1. **Separate Concerns**: Move all Learn-related functionality to an independent repository
2. **Maintain Functionality**: Ensure all features work in the new standalone site
3. **Update Links**: Update main site to link to external LearnDinosaurs site
4. **Preserve Data**: Ensure user data (saved videos, comments, playlists) is accessible

## Files to Migrate

### Core Learn Content
- ✅ `app/learn/` - Entire folder with all posts, categories, and routes
  - `app/learn/page.tsx` - Main learn page
  - `app/learn/posts.ts` - Post data structure
  - `app/learn/categories.ts` - Category definitions
  - `app/learn/[slug]/page.tsx` - Individual post pages
  - `app/learn/videos/page.tsx` - Videos page
  - Any other learn-related routes

### Components
- ✅ `app/components/VideoComments.tsx` - Video comment functionality
- ✅ `app/components/SavePlaylistButton.tsx` - Playlist saving feature
- Any other Learn-specific components

### API Routes
- ✅ `app/api/profile/saved-videos/` - Saved videos endpoints
- ✅ `app/api/profile/comments/` - Comment endpoints
- ✅ `app/api/profile/saved-playlists/` - Playlist endpoints
- Any other Learn-related API routes

### Database Schema
- ✅ `prisma/schema.prisma` - Extract these models:
  - `User` (if not shared)
  - `SavedVideo`
  - `VideoComment`
  - `SavedPlaylist`

### Shared Libraries
- ✅ `lib/auth.ts` - Authentication utilities
- ✅ `lib/prisma.ts` - Database client
- Any other shared utilities used by Learn section

### Configuration
- ✅ `next.config.ts` - Image configuration and other Next.js settings
- ✅ `package.json` - Dependencies needed for Learn section
- ✅ Environment variables (`.env.example` or documentation)

### Assets
- ✅ Images used in Learn posts
- ✅ Any Learn-specific static assets

## Files to Update in Main Site

### Navigation Component
- ✅ Update "Learn" link to point to `https://www.learndinosaurs.com`
- Use standard `<a>` tag instead of Next.js `<Link>` for external links
- Consider adding `target="_blank"` if opening in new tab

### Profile Page
- ✅ Update saved playlist links to point to external site
- ⚠️ **Decision Needed**: Handle `app/learn/posts.ts` and `app/learn/categories.ts` imports
  - Option A: Keep data files in main repo (just for profile page)
  - Option B: Remove saved videos display from profile
  - Option C: Move profile page to LearnDinosaurs repo
  - Option D: Create API endpoint in LearnDinosaurs to fetch post/category data

## Migration Steps

### Phase 1: Preparation
1. [ ] Review all Learn-related files and dependencies
2. [ ] Document all external dependencies
3. [ ] Identify shared components that need to be duplicated or extracted
4. [ ] Create backup of current codebase

### Phase 2: New Repository Setup
1. [ ] Initialize Next.js project in new repository
2. [ ] Set up project structure
3. [ ] Configure TypeScript/JavaScript settings
4. [ ] Set up Prisma and database connection
5. [ ] Configure authentication
6. [ ] Set up environment variables

### Phase 3: Code Migration
1. [ ] Copy Learn content files (`app/learn/`)
2. [ ] Copy Learn-specific components
3. [ ] Copy API routes
4. [ ] Copy shared libraries
5. [ ] Copy database schema (extract relevant models)
6. [ ] Copy configuration files
7. [ ] Copy assets

### Phase 4: Code Updates
1. [ ] Update all import paths (remove `../` references)
2. [ ] Create new `app/layout.tsx` for standalone app
3. [ ] Update route structure (decide: root `/` or `/learn`)
4. [ ] Update authentication configuration
5. [ ] Update database connection
6. [ ] Fix any broken dependencies

### Phase 5: Testing
1. [ ] Test all Learn pages load correctly
2. [ ] Test video functionality
3. [ ] Test comment system
4. [ ] Test playlist saving
5. [ ] Test authentication flow
6. [ ] Test database operations
7. [ ] Test responsive design

### Phase 6: Deployment
1. [ ] Push code to `https://github.com/rfalconvargas/learndinosaurs`
2. [ ] Deploy to Vercel
3. [ ] Add custom domain: `www.learndinosaurs.com`
4. [ ] Configure DNS as Vercel instructs
5. [ ] Test production deployment
6. [ ] Verify SSL certificate

### Phase 7: Main Site Updates
1. [ ] Update navigation component
2. [ ] Update profile page links
3. [ ] Handle profile page dependencies (choose option A, B, C, or D)
4. [ ] Test all links work correctly
5. [ ] Deploy main site updates

### Phase 8: Cleanup
1. [ ] Remove Learn section from main repo (if applicable)
2. [ ] Update documentation
3. [ ] Archive old Learn code (if keeping in main repo for reference)

## Dependencies to Consider

### External Dependencies
- Next.js version compatibility
- React version
- Prisma version
- Authentication library (NextAuth, Clerk, etc.)
- Image optimization libraries
- Any other npm packages used

### Internal Dependencies
- Shared UI components (buttons, cards, etc.)
- Shared utilities
- Shared types/interfaces
- Shared constants

## Database Considerations

### Option 1: Shared Database
- Both sites connect to same database
- Simpler data management
- Need to ensure both sites can access same tables

### Option 2: Separate Databases
- Each site has its own database
- Need to migrate user data
- More complex but better separation

### Recommendation
- Start with shared database for easier migration
- Can separate later if needed

## Authentication Considerations

### Option 1: Shared Authentication
- Use same auth provider/credentials
- Users can log in to both sites with same account
- Simpler user experience

### Option 2: Separate Authentication
- Each site has its own auth
- Users need separate accounts
- More complex but better separation

### Recommendation
- Use shared authentication for seamless experience
- Ensure both sites can validate same session tokens

## Route Structure Decision

### Option 1: Learn as Root (`/`)
- URLs: `www.learndinosaurs.com/`, `www.learndinosaurs.com/videos`
- Simpler URLs
- Learn section is the entire site

### Option 2: Learn under `/learn`
- URLs: `www.learndinosaurs.com/learn`, `www.learndinosaurs.com/learn/videos`
- Maintains same URL structure
- Allows for future expansion

### Recommendation
- Use root (`/`) since LearnDinosaurs is the entire purpose of this site

## Testing Checklist

- [ ] All Learn pages accessible
- [ ] Videos play correctly
- [ ] Comments can be added/edited/deleted
- [ ] Playlists can be saved/accessed
- [ ] User authentication works
- [ ] Database operations work
- [ ] Images load correctly
- [ ] Responsive design works
- [ ] External links from main site work
- [ ] No broken internal links
- [ ] SEO metadata correct
- [ ] Analytics tracking (if applicable)

## Rollback Plan

If issues arise:
1. Revert main site navigation changes
2. Keep old Learn section accessible
3. Fix issues in new repository
4. Re-deploy when ready

## Timeline Estimate

- **Phase 1-2**: 2-4 hours (Preparation & Setup)
- **Phase 3-4**: 4-6 hours (Migration & Updates)
- **Phase 5**: 2-3 hours (Testing)
- **Phase 6**: 1-2 hours (Deployment)
- **Phase 7**: 1 hour (Main Site Updates)
- **Phase 8**: 1 hour (Cleanup)

**Total**: ~11-17 hours

## Support & Questions

If you encounter issues during migration:
1. Check this guide first
2. Review the setup guide (`LEARN_REPO_SETUP.md`)
3. Check Next.js and Vercel documentation
4. Review error logs carefully




