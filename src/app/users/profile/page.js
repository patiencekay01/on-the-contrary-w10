import { userAuth } from "@/utils/userAuth"

export default async function UserProfile() {

    const userDatabase = await userAuth()

    return (
       <main className="min-h-screen bg-neutral-100 flex items-center justify-center">
        <div className="w-full max-w-5xl px-6">

            <section className="rounded-xl bg-white p-8 shadow-sm border text-center">


            <h3 className="text-3xl font-bold text-neutral-900">{userDatabase.username}</h3>
            <p>About me</p>
            <p className="mt-4 text-neutral-600">{userDatabase.bio}</p>
        </section>
        </div>
        </main>
    )
}