import YouTube from "@/app/components/YouTube";
import type { PostMeta } from "../types";

export const meta: PostMeta = {
  slug: "torvosaurus",
  title: "Torvosaurus - A Large Jurassic Predator",
  dek: "Exploring one of the largest predators of the Jurassic period",
  date: "2021-03-05",
  youtube_id: "puVCN46kkUU",
  read_minutes: 8,
  tags: ["Dinosaurs", "Theropods", "Jurassic"],
  published: true,
};

export default function Torvosaurus() {
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
        Jurassic Predator
      </p>

      <p>
        Watch the full video above to learn about Torvosaurus, one of the largest predators of the Jurassic period.
      </p>
    </article>
  );
}






