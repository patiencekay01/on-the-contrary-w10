import DropdownMenu from "./DropdownMenu"

export default function NavBar () {
    return (
        <div>
            <div>
            <h1> On The Contrary</h1>
            </div>

            <div>
                <DropdownMenu />
                <Link href='/'>Home</Link>
                <Link href='/posts'>Posts</Link>
                <Link href='/users/profile'>Profile</Link>
            </div>
        </div>
    )
}