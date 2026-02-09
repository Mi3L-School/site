import Link from "next/link";
import Image from "next/image";
import { posts, searchPosts } from "./posts";

export default function BlogPage({ searchParams }: { searchParams?: { q?: string } }) {
  const q = (searchParams && searchParams.q) || "";
  const filtered = q ? searchPosts(q) : posts;

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Community & Blog</h1>
          <p className="text-lg max-w-3xl opacity-90 mb-6">
            Stories, guides and updates from MI3L School — student achievements, program highlights, and technical how-tos.
          </p>

          <form className="max-w-lg w-full">
            <label htmlFor="q" className="sr-only">Search</label>
            <div className="flex items-center gap-2">
              <input
                id="q"
                name="q"
                defaultValue={q}
                placeholder="Search posts, tags, authors..."
                className="w-full px-4 py-3 rounded-lg text-gray-800"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {filtered.map((post) => (
              <article key={post.slug} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 p-6 flex items-center">
                    <div className="relative w-full h-40 md:h-48 rounded-xl overflow-hidden border-4 border-gray-100 shadow-sm bg-white">
                      <Image src={post.cover} alt={post.title} fill className="object-cover" />
                    </div>
                  </div>

                  <div className="p-6 md:w-1/2">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {post.tags.map((t) => (
                          <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{t}</span>
                        ))}
                      </div>
                      <Link href={`/blog/${post.slug}`} className="text-blue-600 font-semibold">
                        Read more →
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {filtered.length === 0 && (
              <div className="p-6 bg-gray-50 rounded-lg">No posts found.</div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {["Robotics", "AI", "Camps", "Workshops"].map((c) => (
                  <Link key={c} href={`/?category=${c}`} className="text-sm px-3 py-1 bg-white border rounded text-gray-700">{c}</Link>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Recent posts</h3>
              <ul className="space-y-3">
                {posts.slice(0, 5).map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="text-sm text-gray-700 hover:text-blue-600">{p.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
