"use client";

import { useState, useMemo } from "react";
import { publishedPosts } from "../posts";
import PostCard from "../PostCard";
import Nav from "../../components/Nav";
import Link from "next/link";
import { categories, getCategoryBySpecies } from "../categories";
import SavePlaylistButton from "../../components/SavePlaylistButton";

export default function VideosPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const sorted = useMemo(() => {
    return [...publishedPosts].sort(
      (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
    );
  }, []);

  const filtered = useMemo(() => {
    let result = sorted;

    // Filter by categories
    if (selectedCategories.length > 0) {
      result = result.filter((post) => {
        const category = getCategoryBySpecies(post.meta.slug);
        return category && selectedCategories.includes(category.id);
      });
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter((post) => {
        const matchesTitle = post.meta.title.toLowerCase().includes(query);
        const matchesDek = post.meta.dek?.toLowerCase().includes(query) || false;
        const matchesTags = post.meta.tags?.some(tag => tag.toLowerCase().includes(query)) || false;
        return matchesTitle || matchesDek || matchesTags;
      });
    }

    return result;
  }, [sorted, selectedCategories, searchQuery]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchQuery("");
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-bg pt-24 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <header className="mb-12">
            <div className="mb-6">
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back to Categories</span>
              </Link>
            </div>
            <div className="flex items-center justify-between mb-3">
              <h1 className="text-4xl font-bold tracking-tight text-ink">Videos</h1>
              <SavePlaylistButton playlistId="videos" />
            </div>
            <p className="mt-3 text-lg text-muted leading-relaxed">
              Essays, breakdowns, and interactive notes exploring paleontology, evolution, and the history of life on Earth.
            </p>
            <div className="mt-8 h-px w-64 bg-line [mask-image:linear-gradient(90deg,transparent,white,transparent)]" />
          </header>

          {/* Search and Filters */}
          <div className="mb-8 space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search videos by title, description, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 bg-surface border border-line rounded-lg text-ink placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted/50 hover:text-ink transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold text-ink uppercase tracking-wider">Filter by Category</h2>
                {(selectedCategories.length > 0 || searchQuery) && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-accent hover:text-accent/80 transition-colors"
                  >
                    Clear all
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const isSelected = selectedCategories.includes(category.id);
                  return (
                    <button
                      key={category.id}
                      onClick={() => toggleCategory(category.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        isSelected
                          ? "bg-accent text-white shadow-lg shadow-accent/20"
                          : "bg-surface border border-line text-ink hover:bg-surface2 hover:border-accent/30"
                      }`}
                    >
                      {category.title}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Filters Display */}
            {(selectedCategories.length > 0 || searchQuery) && (
              <div className="text-sm text-muted">
                Showing {filtered.length} of {sorted.length} videos
                {selectedCategories.length > 0 && (
                  <span className="ml-2">
                    • {selectedCategories.length} categor{selectedCategories.length === 1 ? "y" : "ies"} selected
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Posts Grid */}
          <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filtered.map((post) => (
              <PostCard key={post.meta.slug} post={{ meta: post.meta }} />
            ))}
          </section>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted">
                {searchQuery || selectedCategories.length > 0
                  ? "No videos match your filters. Try adjusting your search or categories."
                  : "No posts published yet. Check back soon!"}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

