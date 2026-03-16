import Menu from "./DropdownMenu"
import { Allura } from "next/font/google"

const allura = Allura({
    subsets: ["latin"],
    weight: "400",
});

export default function NavBar () {
    return (
        <nav style={{ 
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        alignItems: "center",
        padding: "20px"
        }}>

            <div>
                <Menu />
            </div>
            
            <h1 className={allura.className} style={{ fontSize: "4rem", textAlign: "center" }}> On The Contrary</h1>
            

        </nav>
    )
}