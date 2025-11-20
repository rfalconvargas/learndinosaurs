import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth"

let nextAuthInstance: ReturnType<typeof NextAuth> | null = null
let initError: Error | null = null

try {
  nextAuthInstance = NextAuth(authOptions)
  console.log("NextAuth initialized successfully")
} catch (error) {
  initError = error as Error
  console.error("NextAuth initialization error:", error)
  if (error instanceof Error) {
    console.error("Error stack:", error.stack)
  }
}

export async function GET(req: Request, context: { params: Promise<{ nextauth: string[] }> }) {
  if (initError) {
    console.error("NextAuth GET error:", initError)
    return Response.json(
      { 
        error: "Authentication configuration error",
        message: initError.message,
        details: process.env.NODE_ENV === "development" ? initError.stack : undefined
      },
      { status: 500 }
    )
  }
  
  if (!nextAuthInstance) {
    return Response.json(
      { error: "Authentication handlers not initialized" },
      { status: 500 }
    )
  }
  
  try {
    const resolvedContext = await context
    return await nextAuthInstance.handlers.GET(req, resolvedContext)
  } catch (error) {
    console.error("NextAuth GET handler error:", error)
    return Response.json(
      { 
        error: "Authentication request failed",
        message: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}

export async function POST(req: Request, context: { params: Promise<{ nextauth: string[] }> }) {
  if (initError) {
    console.error("NextAuth POST error:", initError)
    return Response.json(
      { 
        error: "Authentication configuration error",
        message: initError.message,
        details: process.env.NODE_ENV === "development" ? initError.stack : undefined
      },
      { status: 500 }
    )
  }
  
  if (!nextAuthInstance) {
    return Response.json(
      { error: "Authentication handlers not initialized" },
      { status: 500 }
    )
  }
  
  try {
    const resolvedContext = await context
    return await nextAuthInstance.handlers.POST(req, resolvedContext)
  } catch (error) {
    console.error("NextAuth POST handler error:", error)
    return Response.json(
      { 
        error: "Authentication request failed",
        message: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}
