// TODO: Copy from main repository: app/api/profile/saved-playlists/route.ts
// Update all imports to use @/ alias instead of relative paths
// Example: import { prisma } from "@/lib/prisma"
// Example: import { getServerSession } from "next-auth"
// Example: import { authOptions } from "@/lib/auth"

import { NextResponse } from "next/server"
import { getServerSession } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

// GET /api/profile/saved-playlists
export async function GET() {
  try {
    const session = await getServerSession()
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const playlists = await prisma.savedPlaylist.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json(playlists)
  } catch (error) {
    console.error("Error fetching playlists:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

// POST /api/profile/saved-playlists
export async function POST(request: Request) {
  try {
    const session = await getServerSession()
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { name, videoIds } = await request.json()

    if (!name) {
      return NextResponse.json(
        { error: "Playlist name is required" },
        { status: 400 }
      )
    }

    const playlist = await prisma.savedPlaylist.create({
      data: {
        userId: session.user.id,
        name,
        videoIds: videoIds || [],
      },
    })

    return NextResponse.json(playlist)
  } catch (error) {
    console.error("Error creating playlist:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

// PUT /api/profile/saved-playlists
export async function PUT(request: Request) {
  try {
    const session = await getServerSession()
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { playlistId, name, videoIds } = await request.json()

    if (!playlistId) {
      return NextResponse.json(
        { error: "Playlist ID is required" },
        { status: 400 }
      )
    }

    // Verify playlist belongs to user
    const existingPlaylist = await prisma.savedPlaylist.findUnique({
      where: { id: playlistId },
    })

    if (!existingPlaylist || existingPlaylist.userId !== session.user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const updateData: { name?: string; videoIds?: string[] } = {}
    if (name !== undefined) updateData.name = name
    if (videoIds !== undefined) updateData.videoIds = videoIds

    const playlist = await prisma.savedPlaylist.update({
      where: { id: playlistId },
      data: updateData,
    })

    return NextResponse.json(playlist)
  } catch (error) {
    console.error("Error updating playlist:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

// DELETE /api/profile/saved-playlists?playlistId=xxx
export async function DELETE(request: Request) {
  try {
    const session = await getServerSession()
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const playlistId = searchParams.get("playlistId")

    if (!playlistId) {
      return NextResponse.json(
        { error: "Playlist ID is required" },
        { status: 400 }
      )
    }

    // Verify playlist belongs to user
    const existingPlaylist = await prisma.savedPlaylist.findUnique({
      where: { id: playlistId },
    })

    if (!existingPlaylist || existingPlaylist.userId !== session.user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    await prisma.savedPlaylist.delete({
      where: { id: playlistId },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting playlist:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}





