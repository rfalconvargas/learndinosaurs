# Learn Section Migration - Quick Reference

## Key Decisions

### Route Structure
**Decision**: Learn at root (`/`)
- URLs: `www.learndinosaurs.com/`, `www.learndinosaurs.com/videos`
- Move `app/learn/page.tsx` content to `app/page.tsx`

### Database
**Decision**: Shared database (initially)
- Both sites connect to same database
- Easier migration, can separate later if needed

### Authentication
**Decision**: Shared authentication
- Users log in with same account on both sites
- Seamless user experience

### Profile Page Dependencies
**Decision Needed**: Choose one option
- **Option A**: Keep `posts.ts` and `categories.ts` in main repo
- **Option B**: Remove saved videos display from profile
- **Option C**: Move profile page to LearnDinosaurs repo
- **Option D**: Create API endpoint in LearnDinosaurs for data

## Essential Files to Copy

```
✅ app/learn/              → app/learn/
✅ app/components/VideoComments.tsx
✅ app/components/SavePlaylistButton.tsx
✅ app/api/profile/        → app/api/profile/
✅ prisma/schema.prisma    → Extract models
✅ lib/auth.ts
✅ lib/prisma.ts
✅ next.config.ts          → Image config
✅ package.json            → Dependencies
```

## Quick Setup Commands

```bash
# Initialize Next.js
npx create-next-app@latest . --typescript --tailwind --app

# Install dependencies
npm install @prisma/client prisma next-auth

# Setup Prisma
npx prisma generate
npx prisma db push

# Run dev server
npm run dev
```

## Environment Variables

```env
DATABASE_URL="your-database-url"
NEXTAUTH_URL="http://localhost:3001"
NEXTAUTH_SECRET="your-secret"
```

## Main Site Updates

### Navigation Component
```tsx
// Change from:
<Link href="/learn">Learn</Link>

// To:
<a href="https://www.learndinosaurs.com" target="_blank" rel="noopener noreferrer">
  Learn
</a>
```

### Profile Page
Update saved playlist links:
```tsx
// Change from:
href={`/learn/videos?playlist=${playlist.id}`}

// To:
href={`https://www.learndinosaurs.com/learn/videos?playlist=${playlist.id}`}
```

## Deployment Steps

1. Push to GitHub: `git push origin main`
2. Deploy to Vercel
3. Add domain: `www.learndinosaurs.com`
4. Configure DNS
5. Test production site

## Testing Checklist

- [ ] All pages load
- [ ] Videos work
- [ ] Comments work
- [ ] Playlists work
- [ ] Auth works
- [ ] Database works
- [ ] External links work

## Important Notes

- Use `<a>` tags for external links (not Next.js `<Link>`)
- Update all imports to use `@/` alias
- Test thoroughly before deploying
- Keep backup of main site code

## Support Documents

- **LEARN_MIGRATION_GUIDE.md** - Comprehensive migration guide
- **LEARN_REPO_SETUP.md** - Step-by-step setup instructions
- **MIGRATION_CHECKLIST.md** - Detailed checklist
- **FILE_MAPPING.md** - File mapping reference




