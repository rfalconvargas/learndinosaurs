import { notFound } from "next/navigation";
import { getPostBySlug, publishedPosts } from "../posts";
import Nav from "../../components/Nav";
import VideoComments from "../../components/VideoComments";

export async function generateStaticParams() {
  return publishedPosts.map((post) => ({
    slug: post.meta.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  
  return {
    title: `${post.meta.title} | Enchiridion Learn`,
    description: post.meta.dek || post.meta.title,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || post.meta.published === false) {
    notFound();
  }

  const { Component } = post;

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gradient-to-br from-[#0a1f1a] via-[#0d2e25] to-[#0f3d2f] pt-32 relative overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2dd4bf]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#14b8a6]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 py-12">
          <div className="relative group">
            {/* Glass effect wrapper */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2dd4bf] via-[#14b8a6] to-[#10b981] rounded-3xl blur-xl opacity-0 group-hover:opacity-10 transition duration-1000"></div>
            <div className="relative bg-gradient-to-br from-white/5 via-white/2 to-transparent backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
              <Component />
            </div>
          </div>
          
          <div className="mt-12">
            <VideoComments videoId={slug} />
          </div>
        </div>
      </div>
    </>
  );
}


