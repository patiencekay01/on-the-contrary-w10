import NavBar from "@/components/NavBar";
import { userAuth } from "@/utils/userAuth";


export default async function Home() {
  const userDatabase = await userAuth()
  return (
    <div>
      <header>
        <NavBar />

      </header>

    </div>
  );
}
