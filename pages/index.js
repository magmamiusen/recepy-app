import Head from "next/head";
import Gallery from "../components/gallery";
import Layoud from "../components/layoud";
import NavPick from "../components/navPick";
import Pick from "../components/pick";

export default function Home() {
  return (
    <Layoud>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <NavPick>
          <Pick emoji="🎂" />
          <Pick emoji="🥩" />
          <Pick emoji="🍅" />
          <Pick emoji="🍽️" />
        </NavPick>
        <Gallery>
        </Gallery> 
      </main>
    </Layoud>
  )
}
