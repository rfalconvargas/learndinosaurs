import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Only create Prisma client if DATABASE_URL is set
const createPrismaClient = () => {
  if (!process.env.DATABASE_URL) {
    // Return a mock client for development when DB isn't configured
    return {
      user: { findMany: async () => [], findUnique: async () => null, create: async () => ({}) },
      savedVideo: { findMany: async () => [], create: async () => ({}) },
      videoComment: { findMany: async () => [], create: async () => ({}) },
      savedPlaylist: { findMany: async () => [], create: async () => ({}) },
      account: { findMany: async () => [] },
      session: { findMany: async () => [] },
    } as any
  }
  
  return new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  })
}

export const prisma =
  globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma


