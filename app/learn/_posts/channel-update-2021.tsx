import YouTube from "@/app/components/YouTube";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
  slug: "channel-update-2021",
  title: "Channel Update - Enchiridion",
  dek: "An important update about the Enchiridion channel",
  date: "2021-07-31",
  youtube_id: "tRaZatxezo0",
  read_minutes: 3,
  tags: ["Channel Update", "Announcement"],
  published: true,
};

export default function ChannelUpdate2021() {
  return (
    <article className="prose prose-invert prose-lg max-w-3xl mx-auto px-6 py-12">
      <header className="mb-12">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted/80 font-mono mb-4">
          {new Date(meta.date).toLocaleDateString()} • {meta.read_minutes} min read
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">{meta.title}</h1>
        {meta.dek && (
          <p className="text-xl text-muted/90 leading-relaxed">{meta.dek}</p>
        )}
      </header>

      {meta.youtube_id && (
        <div className="my-8">
          <YouTube id={meta.youtube_id} title={meta.title} />
        </div>
      )}

      <div className="h-px w-64 bg-line mb-12 [mask-image:linear-gradient(90deg,transparent,white,transparent)]" />

      <p className="text-accent/90 text-sm font-mono tracking-widest uppercase mb-8">
        Channel Update
      </p>

      <p>
        Watch the full video above for an important channel update about Enchiridion and what's coming next.
      </p>
    </article>
  );
}






