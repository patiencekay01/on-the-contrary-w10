import { db } from "@/utils/db"

export default async function UsersPage({params}) {
    const { id } = await params

    const user = (
    await db.query(
      `SELECT * FROM users WHERE clerk_id = $1`,
      [id]
    )
  ).rows[0]

    return (
        <div>
        <h2>{user.username}</h2>
        <p>About Me</p>
        <p>{user.bio}</p>
        </div>
    )
}