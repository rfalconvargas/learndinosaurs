import YouTube from "@/app/components/YouTube";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
  slug: "sarcosuchus",
  title: "Sarcosuchus - The Freshwater Titan",
  dek: "Exploring one of the largest crocodilians to ever exist",
  date: "2021-03-26",
  youtube_id: "qBHHeIVvuPw",
  read_minutes: 8,
  tags: ["Crocodiles", "Cretaceous", "Giant Reptiles"],
  published: true,
};

export default function Sarcosuchus() {
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
        Freshwater Titan
      </p>

      <p>
        Watch the full video above to learn about Sarcosuchus, the freshwater titan and one of the largest crocodilians to ever exist.
      </p>
    </article>
  );
}






