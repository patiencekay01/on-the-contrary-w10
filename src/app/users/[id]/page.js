import { userAuth } from "@/utils/userAuth"

export default async function UsersPage() {
    const {userId} = await userAuth()

    return (
        <div>
            <p>User here</p>
        </div>
    )
}