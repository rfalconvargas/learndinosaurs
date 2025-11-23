// TODO: Copy from main repository: app/api/profile/saved-videos/route.ts
// Update all imports to use @/ alias instead of relative paths
// Example: import { prisma } from "@/lib/prisma"
// Example: import { getServerSession } from "next-auth"
// Example: import { authOptions } from "@/lib/auth"

import { NextResponse } from "next/server"
import { getServerSession } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// GET /api/profile/saved-videos
export async function GET() {
  try {
    const session = await getServerSession()
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const savedVideos = await prisma.savedVideo.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json(savedVideos)
  } catch (error) {
    console.error("Error fetching saved videos:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

// POST /api/profile/saved-videos
export async function POST(request: Request) {
  try {
    const session = await getServerSession()
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { videoId } = await request.json()

    if (!videoId) {
      return NextResponse.json(
        { error: "Video ID is required" },
        { status: 400 }
      )
    }

    const savedVideo = await prisma.savedVideo.create({
      data: {
        userId: session.user.id,
        videoId,
      },
    })

    return NextResponse.json(savedVideo)
  } catch (error) {
    console.error("Error saving video:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

// DELETE /api/profile/saved-videos
export async function DELETE(request: Request) {
  try {
    const session = await getServerSession()
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const videoId = searchParams.get("videoId")

    if (!videoId) {
      return NextResponse.json(
        { error: "Video ID is required" },
        { status: 400 }
      )
    }

    await prisma.savedVideo.deleteMany({
      where: {
        userId: session.user.id,
        videoId,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting saved video:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}





