import { categories, getCategoryBySpecies } from "@/app/learn/categories";
import { publishedPosts } from "@/app/learn/posts";
import PostCard from "@/app/learn/PostCard";
import Nav from "../../../components/Nav";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SavePlaylistButton from "../../../components/SavePlaylistButton";

export async function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const category = categories.find((cat) => cat.id === id);

  if (!category) {
    notFound();
  }

  // Get all videos for this category
  const categoryVideos = publishedPosts.filter((post) => {
    const postCategory = getCategoryBySpecies(post.meta.slug);
    return postCategory && postCategory.id === id;
  });

  // Sort by date
  const sortedVideos = [...categoryVideos].sort(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  );

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gradient-to-br from-[#0a1f1a] via-[#0d2e25] to-[#0f3d2f] pt-24 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <header className="mb-12">
            <div className="mb-6">
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 text-[#2dd4bf] hover:text-[#14b8a6] transition-colors"
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
            
            {/* Category Thumbnail */}
            {category.thumbnail && (
              <div className="mb-8 flex items-center justify-center">
                <div className="relative w-[40vw] max-w-[600px] aspect-video rounded-2xl overflow-hidden border-2 border-[#14b8a6]/20">
                  <Image
                    src={category.thumbnail}
                    alt={category.title}
                    fill
                    className="object-cover"
                    sizes="40vw"
                  />
                </div>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-black text-[#f0fdf4] mb-4">
              {category.title}
            </h1>
            <p className="text-xl text-[#2dd4bf] mb-6">
              {category.flagshipSpecies}
            </p>
            <p className="text-lg text-[#d4e8c8]/80 leading-relaxed mb-4">
              {category.description}
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="text-sm text-[#14b8a6]/60">
                {category.estimatedVideos}+ videos • {category.viewPotential} views
              </div>
              <SavePlaylistButton playlistId={category.id} />
            </div>
            <div className="h-px w-64 bg-[#14b8a6]/20 [mask-image:linear-gradient(90deg,transparent,white,transparent)]" />
          </header>

          {/* Subcategories */}
          {category.subCategories.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#f0fdf4] mb-6">Subcategories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.subCategories.map((subCat) => (
                  <div
                    key={subCat.id}
                    className="bg-gradient-to-br from-[#0a1f1a]/60 to-[#0d2e25]/40 backdrop-blur-sm rounded-xl border border-[#14b8a6]/20 p-6"
                  >
                    <h3 className="text-xl font-bold text-[#2dd4bf] mb-2">
                      {subCat.title}
                    </h3>
                    {subCat.description && (
                      <p className="text-sm text-[#d4e8c8]/70 mb-3">
                        {subCat.description}
                      </p>
                    )}
                    <p className="text-xs text-[#14b8a6]/50">
                      {subCat.species.length} video{subCat.species.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Videos Grid */}
          <section>
            <h2 className="text-2xl font-bold text-[#f0fdf4] mb-6">
              Videos ({sortedVideos.length})
            </h2>
            {sortedVideos.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {sortedVideos.map((post) => (
                  <PostCard key={post.meta.slug} post={{ meta: post.meta }} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-[#d4e8c8]/70">
                  No videos in this category yet. Check back soon!
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
}

