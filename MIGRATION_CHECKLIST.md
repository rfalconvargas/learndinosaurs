# Learn Section Migration Checklist

Use this checklist to track your migration progress. Check off items as you complete them.

## Pre-Migration Analysis

- [ ] Identify all Learn-related files in main repository
- [ ] Document all dependencies (npm packages)
- [ ] List all environment variables used
- [ ] Identify shared components that need duplication
- [ ] Document database models used by Learn section
- [ ] List all API routes used by Learn section
- [ ] Identify external services/integrations (auth, analytics, etc.)

## Repository Setup

- [ ] Initialize Next.js project in new repository
- [ ] Set up TypeScript configuration
- [ ] Configure Tailwind CSS (if used)
- [ ] Set up Git repository
- [ ] Create `.gitignore` file
- [ ] Create initial `README.md`

## Dependencies Installation

- [ ] Install Next.js and React
- [ ] Install Prisma and Prisma Client
- [ ] Install authentication library (NextAuth/Clerk/etc.)
- [ ] Install UI component library (if used)
- [ ] Install other required dependencies
- [ ] Verify all dependencies are compatible

## Database Setup

- [ ] Copy Prisma schema models (User, SavedVideo, VideoComment, SavedPlaylist)
- [ ] Configure database connection string
- [ ] Run `prisma generate`
- [ ] Test database connection
- [ ] Run migrations (if needed)
- [ ] Verify all models are accessible

## Authentication Setup

- [ ] Copy authentication configuration
- [ ] Set up auth provider (NextAuth/Clerk/etc.)
- [ ] Configure environment variables for auth
- [ ] Create auth API routes
- [ ] Test authentication flow
- [ ] Verify session management works

## File Migration

### Learn Content
- [ ] Copy `app/learn/page.tsx`
- [ ] Copy `app/learn/posts.ts`
- [ ] Copy `app/learn/categories.ts`
- [ ] Copy `app/learn/[slug]/page.tsx`
- [ ] Copy `app/learn/videos/page.tsx`
- [ ] Copy any other Learn routes
- [ ] Copy Learn-specific assets/images

### Components
- [ ] Copy `app/components/VideoComments.tsx`
- [ ] Copy `app/components/SavePlaylistButton.tsx`
- [ ] Copy any other Learn-specific components
- [ ] Identify and duplicate shared UI components (buttons, cards, etc.)

### API Routes
- [ ] Copy `app/api/profile/saved-videos/route.ts` (or entire folder)
- [ ] Copy `app/api/profile/comments/route.ts`
- [ ] Copy `app/api/profile/saved-playlists/route.ts`
- [ ] Copy any other Learn-related API routes

### Libraries
- [ ] Copy `lib/auth.ts`
- [ ] Copy `lib/prisma.ts`
- [ ] Copy any other shared utilities used by Learn
- [ ] Update import paths in all copied files

### Configuration
- [ ] Copy relevant parts of `next.config.ts`
- [ ] Copy `tsconfig.json` settings (if needed)
- [ ] Copy Tailwind config (if used)
- [ ] Set up environment variables

## Code Updates

### Import Path Fixes
- [ ] Update all relative imports (`../`) to absolute imports (`@/`)
- [ ] Fix component imports
- [ ] Fix utility imports
- [ ] Fix type imports
- [ ] Verify no broken imports

### Route Structure
- [ ] Decide on route structure (root `/` or `/learn`)
- [ ] Update `app/page.tsx` accordingly
- [ ] Update any hardcoded route references
- [ ] Update navigation links

### Layout & Styling
- [ ] Create `app/layout.tsx` for standalone app
- [ ] Copy global styles
- [ ] Update metadata
- [ ] Configure fonts
- [ ] Verify styling works correctly

### Component Updates
- [ ] Update components to work standalone
- [ ] Remove dependencies on main site components
- [ ] Duplicate or recreate shared components
- [ ] Update component props/types

### API Route Updates
- [ ] Update API routes to use new paths
- [ ] Verify database queries work
- [ ] Test authentication in API routes
- [ ] Update error handling

## Testing

### Local Testing
- [ ] Run `npm run dev` successfully
- [ ] Test all Learn pages load
- [ ] Test video functionality
- [ ] Test comment system (create, edit, delete)
- [ ] Test playlist saving
- [ ] Test user authentication
- [ ] Test database operations
- [ ] Test responsive design
- [ ] Check for console errors
- [ ] Check for TypeScript errors

### Functionality Testing
- [ ] Users can view Learn posts
- [ ] Users can navigate between posts
- [ ] Users can view videos
- [ ] Users can save videos
- [ ] Users can create playlists
- [ ] Users can add comments
- [ ] Users can edit/delete their comments
- [ ] Authentication works (login/logout)
- [ ] User data persists correctly

### Integration Testing
- [ ] Test with production database (if shared)
- [ ] Test authentication with production auth
- [ ] Verify external links work
- [ ] Test image loading
- [ ] Test API endpoints

## Main Site Updates

### Navigation
- [ ] Update Nav component "Learn" link to `https://www.learndinosaurs.com`
- [ ] Use `<a>` tag instead of Next.js `<Link>` for external link
- [ ] Add `target="_blank"` if opening in new tab
- [ ] Add `rel="noopener noreferrer"` for security
- [ ] Test navigation link works

### Profile Page
- [ ] Update saved playlist links to external site
- [ ] **Decision**: Choose option for `posts.ts` and `categories.ts` imports:
  - [ ] Option A: Keep data files in main repo
  - [ ] Option B: Remove saved videos display
  - [ ] Option C: Move profile to LearnDinosaurs repo
  - [ ] Option D: Create API endpoint for data
- [ ] Test profile page works correctly
- [ ] Verify all links work

### Other Updates
- [ ] Update any other references to Learn section
- [ ] Update documentation
- [ ] Update README if needed

## Deployment

### GitHub Setup
- [ ] Push code to `https://github.com/rfalconvargas/learndinosaurs`
- [ ] Verify all files are committed
- [ ] Create `main` or `master` branch
- [ ] Set up branch protection (optional)

### Vercel Deployment
- [ ] Connect GitHub repository to Vercel
- [ ] Configure build settings
- [ ] Add all environment variables
- [ ] Deploy to Vercel
- [ ] Verify build succeeds
- [ ] Test deployed site

### Domain Configuration
- [ ] Add custom domain `www.learndinosaurs.com` in Vercel
- [ ] Configure DNS records as instructed
- [ ] Wait for DNS propagation
- [ ] Verify SSL certificate is active
- [ ] Test site loads at custom domain

### Post-Deployment
- [ ] Test all functionality in production
- [ ] Verify database connection works
- [ ] Verify authentication works
- [ ] Test external links from main site
- [ ] Check analytics (if applicable)
- [ ] Monitor for errors

## Cleanup

- [ ] Remove Learn section from main repo (if applicable)
- [ ] Archive old Learn code (if keeping for reference)
- [ ] Update main site documentation
- [ ] Update LearnDinosaurs repository README
- [ ] Document any known issues or limitations
- [ ] Create migration completion summary

## Verification

### Final Checks
- [ ] All Learn pages accessible at new domain
- [ ] All functionality works as expected
- [ ] No broken links
- [ ] No console errors
- [ ] Database operations work
- [ ] Authentication works
- [ ] Main site links to new site correctly
- [ ] User experience is seamless

### Performance
- [ ] Page load times are acceptable
- [ ] Images load correctly
- [ ] No performance regressions
- [ ] SEO metadata is correct

### Security
- [ ] Environment variables are secure
- [ ] Authentication is properly configured
- [ ] API routes are protected
- [ ] No sensitive data exposed

## Rollback Plan (if needed)

- [ ] Document rollback steps
- [ ] Keep old Learn section accessible (temporarily)
- [ ] Have backup of main site changes
- [ ] Know how to revert navigation changes

## Completion

- [ ] All checklist items completed
- [ ] Migration documented
- [ ] Team notified (if applicable)
- [ ] Users informed (if applicable)
- [ ] Migration marked as complete

---

## Notes

Use this section to track any issues, decisions, or important notes during migration:

```
[Add your notes here]
```




