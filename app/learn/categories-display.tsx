"use client";

import { categories } from "./categories";
import Link from "next/link";

export default function CategoriesDisplay() {
  return (
    <div className="min-h-screen bg-bg pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-16">
          <h1 className="text-5xl font-bold tracking-tight text-ink mb-4">
            10 Major YouTube Playlists
          </h1>
          <p className="text-xl text-muted leading-relaxed max-w-3xl">
            Organized hierarchically: Major Ideas → Sub-ideas → Individual Species.
            Each category represents a "big idea" with potential for 100M+ views
            and the ability to generate 100+ related videos.
          </p>
          <div className="mt-8 h-px w-64 bg-line [mask-image:linear-gradient(90deg,transparent,white,transparent)]" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="border border-line rounded-2xl p-8 bg-surface/50 hover:bg-surface transition-all duration-300 hover:border-accent/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted/60 font-mono mb-2">
                    Category {index + 1}
                  </div>
                  <h2 className="text-3xl font-bold text-ink mb-2">
                    {category.title}
                  </h2>
                  <div className="text-sm text-accent font-mono">
                    Flagship: {category.flagshipSpecies}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-accent">
                    {category.viewPotential}
                  </div>
                  <div className="text-xs text-muted">
                    view potential
                  </div>
                </div>
              </div>

              <p className="text-muted mb-6 leading-relaxed">
                {category.description}
              </p>

              <div className="mb-4">
                <div className="text-xs text-muted/70 mb-2">
                  ~{category.estimatedVideos} videos possible
                </div>
                <div className="h-2 bg-line rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
                    style={{ width: `${Math.min((category.estimatedVideos / 250) * 100, 100)}%` }}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-semibold text-ink mb-2">
                  Sub-Categories:
                </div>
                {category.subCategories.map((subCategory) => (
                  <div
                    key={subCategory.id}
                    className="border-l-2 border-accent/30 pl-4 py-2 bg-surface-2/30 rounded-r"
                  >
                    <div className="font-semibold text-ink mb-1">
                      {subCategory.title}
                    </div>
                    {subCategory.description && (
                      <div className="text-xs text-muted/80 mb-2">
                        {subCategory.description}
                      </div>
                    )}
                    {subCategory.species.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {subCategory.species.slice(0, 3).map((species) => (
                          <Link
                            key={species}
                            href={`/learn/${species}`}
                            className="text-xs px-2 py-1 bg-accent/10 text-accent rounded hover:bg-accent/20 transition-colors"
                          >
                            {species.replace(/-/g, " ")}
                          </Link>
                        ))}
                        {subCategory.species.length > 3 && (
                          <span className="text-xs text-muted/60 px-2 py-1">
                            +{subCategory.species.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 border border-line rounded-2xl bg-surface/30">
          <h3 className="text-2xl font-bold text-ink mb-4">
            Category Strategy
          </h3>
          <div className="space-y-4 text-muted">
            <p>
              Each category is designed as a "big idea" that can anchor a major YouTube playlist.
              The flagship species represents the most compelling entry point - the video that could
              reach 100M+ views with exceptional CGI and storytelling.
            </p>
            <p>
              Sub-categories allow for thematic organization within each major playlist, enabling
              viewers to explore related topics while maintaining engagement. This structure supports
              both binge-watching and targeted discovery.
            </p>
            <p>
              The estimated video count represents the potential for long-form content creation,
              with each species, discovery, theory, and ecological relationship offering opportunities
              for deep-dive episodes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

