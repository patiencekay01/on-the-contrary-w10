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
    <div>
        <div>
            <h3>{post.username}</h3>
            <p>{post.content}</p>
        </div>
    </div>
    )
}