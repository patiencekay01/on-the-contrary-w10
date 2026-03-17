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
    <main className="min-h-screen bg-neutral-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm border">

        <h2 className="text-2xl font-bold text-center mb-6">
          Create your profile
        </h2>

        <form action={handleNewUser} className="flex flex-col gap-4">

          <input
            name="username"
            placeholder="Your username"
            required
            className="border border-neutral-300 rounded-lg px-4 py-2"
          />

          <textarea
            name="bio"
            placeholder="Write your bio..."
            required
            className="border border-neutral-300 rounded-lg px-4 py-2"
            rows="4"
          />

          <button
            type="submit"
            className="bg-black text-white py-2 rounded-lg hover:bg-neutral-800 transition"
          >
            Create Profile
          </button>

        </form>

      </div>

    </main>
  );
}