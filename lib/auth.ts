import type { NextAuthConfig } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

// Using JWT strategy - sessions are stored in JWT tokens, not database
// This allows authentication to work without a database connection
// If you need database sessions in the future, you'll need to use NextAuth v4 with PrismaAdapter

// NextAuth requires at least one provider
// If no providers are configured, use a minimal credentials provider for development
const providers = process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
  ? [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ]
  : [
      // Dummy credentials provider that never succeeds - just to satisfy NextAuth requirement
      CredentialsProvider({
        id: "dummy",
        name: "Dummy",
        credentials: {},
        async authorize() {
          return null // Never authorize - this is just to make NextAuth work
        },
      }),
    ]

// Log environment variables for debugging (remove in production)
if (process.env.NODE_ENV === "development") {
  console.log("NextAuth Config Check:", {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    hasGoogleClientId: !!process.env.GOOGLE_CLIENT_ID,
    hasGoogleClientSecret: !!process.env.GOOGLE_CLIENT_SECRET,
  })
}

export const authOptions: NextAuthConfig = {
  providers,
  // No adapter - using JWT strategy (sessions stored in JWT tokens, not database)
  // This allows auth to work without a database connection
  secret: process.env.NEXTAUTH_SECRET || (process.env.NODE_ENV === "development" ? "fallback-secret-for-development-change-in-production" : undefined),
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user && token?.sub) {
        session.user.id = token.sub
      }
      return session
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id
      }
      return token
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  // Cookie configuration to fix PKCE issues
  cookies: {
    sessionToken: {
      name: `${process.env.NODE_ENV === "production" ? "__Secure-" : ""}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
    callbackUrl: {
      name: `${process.env.NODE_ENV === "production" ? "__Secure-" : ""}next-auth.callback-url`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
    csrfToken: {
      name: `${process.env.NODE_ENV === "production" ? "__Host-" : ""}next-auth.csrf-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
    pkceCodeVerifier: {
      name: `${process.env.NODE_ENV === "production" ? "__Secure-" : ""}next-auth.pkce.code_verifier`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 15, // 15 minutes
      },
    },
  },
  // Ensure proper error handling
  debug: process.env.NODE_ENV === "development",
  pages: {
    // Customize your auth pages if needed
    // signIn: "/auth/signin",
    // signOut: "/auth/signout",
  },
  // Trust host for development
  trustHost: true,
}

// Extend NextAuth types
declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      name?: string | null
      image?: string | null
    }
  }
}

// Export handlers and auth function for NextAuth v5
import NextAuth from "next-auth"

// Create NextAuth instance and export handlers and auth
export const { handlers, auth } = NextAuth(authOptions)

// Helper function for backward compatibility with getServerSession
export async function getServerSession() {
  return await auth()
}
