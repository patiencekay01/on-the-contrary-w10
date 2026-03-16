import { userAuth } from "@/utils/userAuth"

export default async function UserProfile() {

    const userDatabase = await userAuth()

    return (
        <div>
            <h3>{userDatabase.username}</h3>
            <p>About me</p>
            <p>{userDatabase.bio}</p>
        </div>
    )
}