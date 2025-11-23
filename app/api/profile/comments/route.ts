// TODO: Copy from main repository: app/api/profile/comments/route.ts
// Update all imports to use @/ alias instead of relative paths
// Example: import { prisma } from "@/lib/prisma"
// Example: import { getServerSession } from "next-auth"
// Example: import { authOptions } from "@/lib/auth"

import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// GET /api/profile/comments?videoId=xxx
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const videoId = searchParams.get("videoId")

    if (!videoId) {
      return NextResponse.json(
        { error: "Video ID is required" },
        { status: 400 }
      )
    }

    const comments = await prisma.videoComment.findMany({
      where: {
        videoId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json(comments)
  } catch (error) {
    console.error("Error fetching comments:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

// POST /api/profile/comments
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { videoId, content } = await request.json()

    if (!videoId || !content) {
      return NextResponse.json(
        { error: "Video ID and content are required" },
        { status: 400 }
      )
    }

    const comment = await prisma.videoComment.create({
      data: {
        userId: session.user.id,
        videoId,
        content,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
            email: true,
          },
        },
      },
    })

    return NextResponse.json(comment)
  } catch (error) {
    console.error("Error creating comment:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

// PUT /api/profile/comments
export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { commentId, content } = await request.json()

    if (!commentId || !content) {
      return NextResponse.json(
        { error: "Comment ID and content are required" },
        { status: 400 }
      )
    }

    // Verify comment belongs to user
    const existingComment = await prisma.videoComment.findUnique({
      where: { id: commentId },
    })

    if (!existingComment || existingComment.userId !== session.user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const comment = await prisma.videoComment.update({
      where: { id: commentId },
      data: { content },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
            email: true,
          },
        },
      },
    })

    return NextResponse.json(comment)
  } catch (error) {
    console.error("Error updating comment:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

// DELETE /api/profile/comments?commentId=xxx
export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const commentId = searchParams.get("commentId")

    if (!commentId) {
      return NextResponse.json(
        { error: "Comment ID is required" },
        { status: 400 }
      )
    }

    // Verify comment belongs to user
    const existingComment = await prisma.videoComment.findUnique({
      where: { id: commentId },
    })

    if (!existingComment || existingComment.userId !== session.user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    await prisma.videoComment.delete({
      where: { id: commentId },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting comment:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}





