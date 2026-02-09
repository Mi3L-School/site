import Image from "next/image";
import Link from "next/link";
import { getPostBySlug } from "../posts";

type Props = {
  params: { slug: string };
};

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <p className="mt-4">We couldn't find the post you were looking for.</p>
        <Link href="/blog" className="text-blue-600 mt-4 block">Back to blog</Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <div className="relative h-48 w-full rounded-xl overflow-hidden shadow-sm mb-6 border-4 border-gray-100 bg-white">
                <Image src={post.cover} alt={post.title} fill className="object-cover" />
              </div>
            </div>

            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-extrabold mb-3">{post.title}</h1>
              <div className="text-sm text-gray-500 mb-6">{post.date} • {post.author}</div>

              <div className="prose max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: post.content }} />

              <div className="mt-8">
                <Link href="/blog" className="text-blue-600 font-semibold">← Back to blog</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
