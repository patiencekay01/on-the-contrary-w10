import { userAuth } from "@/utils/userAuth"
import { db } from "@/utils/db"
import { notFound } from "next/navigation"

export default async function IndividualPostPage({params}) {
    const userDatabase = await userAuth()

    const { id } = await params

    const post = (await db.query(`
        SELECT opinion_posts.*, users.username
        FROM opinion_posts
        JOIN users ON opinion_posts.user_id = users.id
        WHERE opinion_posts.id = $1`,
        [id]
     )
    ).rows[0];

    if (!post) {
    notFound();
  }


    return (
    <main className="min-h-screen bg-neutral-100 flex items-center justify-center px-4">

      <article className="w-full max-w-2xl rounded-2xl border border-neutral-200 bg-white shadow-lg p-10">

        <h2 className="text-2xl font-bold mb-6 text-neutral-900">
          {post.username}
        </h2>

        <p className="text-lg leading-8 text-neutral-800">
          {post.content}
        </p>

      </article>

    </main>
    )
}