import { userAuth } from "@/utils/userAuth"
import { db } from "@/utils/db"
import Link from "next/link"
import { Allura } from "next/font/google"

const allura = Allura({
    subsets: ["latin"],
    weight: "400",
});

export default async function PostsPage() {

    const userDatabase = await userAuth()

    const posts = (await db.query(`SELECT * FROM opinion_posts`)).rows

    return (
  <main className="min-h-screen bg-neutral-100 px-4 py-8">
    <h3
      className={allura.className}
      style={{ fontSize: "4rem", textAlign: "center" }}
    >
      FEED
    </h3>

    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 mt-8 sm:grid-cols-2">
      {posts.map((post) => (
        <article
          key={post.id}
          className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
        >
          <div className="border-b border-neutral-100 px-4 py-3">
            <h3 className="text-sm font-semibold text-neutral-900">
              {post.username}
            </h3>
          </div>

          <div className="px-4 py-6">
            <p className="text-base leading-7 text-neutral-800">
              {post.content}
            </p>
          </div>

          <div className="border-t border-neutral-100 px-4 py-3">
            <Link
              href={`/posts/${post.id}`}
              className="text-sm font-medium text-neutral-700 hover:text-black"
            >
              View post
            </Link>
          </div>
        </article>
      ))}
    </div>
  </main>
);
}