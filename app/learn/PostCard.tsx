"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Block from "@/app/components/Block";
import type { PostMeta } from "./types";

export default function PostCard({ post }: { post: { meta: PostMeta } }) {
  const m = post.meta;
  const { data: session, status } = useSession();
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Don't try to fetch saved videos if auth is not available
  const authAvailable = status !== "loading" && (status === "authenticated" || status === "unauthenticated");

  // Check if video is saved
  useEffect(() => {
    if (authAvailable && session?.user) {
      fetch(`/api/profile/saved-videos`)
        .then((res) => {
          if (!res.ok) return null;
          return res.json();
        })
        .then((data) => {
          if (Array.isArray(data)) {
            setIsSaved(data.some((sv: any) => sv.videoId === m.slug));
          }
        })
        .catch(() => {});
    }
  }, [session, m.slug, authAvailable]);

  const handleSave = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!session?.user) {
      return;
    }

    setIsLoading(true);
    try {
      if (isSaved) {
        await fetch(`/api/profile/saved-videos?videoId=${m.slug}`, {
          method: "DELETE",
        });
        setIsSaved(false);
      } else {
        await fetch("/api/profile/saved-videos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ videoId: m.slug }),
        });
        setIsSaved(true);
      }
    } catch (error) {
      console.error("Error saving video:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Block className="group transition-colors hover:bg-surface2 relative">
      {authAvailable && session?.user && (
        <button
          onClick={handleSave}
          disabled={isLoading}
          className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-surface/80 hover:bg-surface2 transition-colors disabled:opacity-50"
          title={isSaved ? "Unsave video" : "Save video"}
        >
          {isSaved ? (
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-muted/70 hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          )}
        </button>
      )}
      <article className="flex items-start gap-4 p-4 sm:p-5">
        {/* media */}
        <div className="hidden sm:block h-24 w-32 flex-none overflow-hidden rounded-lg bg-[#0a1f1a]/30 ring-1 ring-line relative">
          {m.youtube_id ? (
            <Image
              src={`https://i.ytimg.com/vi/${m.youtube_id}/hqdefault.jpg`}
              alt={m.title}
              fill
              className="object-cover"
              sizes="128px"
              unoptimized
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-muted/40">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          )}
        </div>

        {/* copy */}
        <div className="min-w-0 flex-1">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted/80 font-mono">
            Enchiridion • {new Date(m.date).toLocaleDateString()}
          </div>

          <Link href={`/learn/${m.slug}`} className="mt-1 block">
            <h3 className="text-lg font-semibold leading-snug text-ink group-hover:underline decoration-accent/50 underline-offset-2">
              {m.title}
            </h3>
          </Link>

          {m.dek ? (
            <p className="mt-1 line-clamp-2 text-sm text-muted/90 leading-relaxed">{m.dek}</p>
          ) : null}

          <div className="mt-2 flex items-center gap-3 text-[11px] text-muted/70">
            <span>{m.read_minutes ?? 5} min read</span>
            {m.tags?.length ? <span>• {m.tags.slice(0, 2).join(" · ")}</span> : null}
          </div>
        </div>
      </article>
    </Block>
  );
}


