import { db } from "./db"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export async function userAuth () {
    const {userId} = await auth()

    if (!userId) redirect('/sign-in')

    const confirmUser = (await db.query(`SELECT * FROM users WHERE clerk_id = $1`, [userId])).rows

    if (confirmUser.length === 0) redirect('/users/create-profile')

    return confirmUser
}