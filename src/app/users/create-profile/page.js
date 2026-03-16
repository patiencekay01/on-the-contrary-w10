import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/db";
import { redirect } from "next/navigation";

export default function CreateProfilePage () {

    async function handleNewUser (formData) {
        'use server'
        const {username, bio} = Object.fromEntries(formData) 
        const {userId} = await auth()

        const existingUser = (
        await db.query(
        `SELECT * FROM users WHERE clerk_id = $1`,
        [userId]
      )
    ).rows

        if (existingUser.length > 0) {
      redirect(`/users/${userId}`)
    }

        const data = await db.query(`INSERT INTO users (username, bio, clerk_id) VALUES ($1, $2, $3)`, [username, bio, userId])

        redirect(`/users/${userId}`)

    }

    return (
        <div>
            <h2> Create an account</h2>

            <form action={handleNewUser}>
                <input name="username" placeholder="Create a username" />
                <textarea name="bio" placeholder="Write your bio..." />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}