import { db } from "@/utils/db"
import { userAuth } from "@/utils/userAuth"
import { redirect } from "next/navigation"

export default async function NewPost() {
    const userDatabase = await userAuth()

    async function handleNewPost(formData) {
        'use server'
        const { content } = Object.fromEntries(formData)

        const result = await db.query(`INSERT INTO opinion_posts (content) VALUES ($1) RETURNING id`,
            [content]

        )

        redirect(`/posts/${result.rows[0].id}`)
    }



    return (
        <div>
            <h3>In my opinion...</h3>

            <form action={handleNewPost}>
            <textarea name="content" placeholder="Add yours here..." required/>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}