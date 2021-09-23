import Head from "next/head";
import Banner from "../components/indexComponents/banner";
import Card from "../components/indexComponents/card";
import CardBanner from "../components/indexComponents/cardBanner";
import Footer from "../components/indexComponents/footer";
import Gallery from "../components/indexComponents/gallery";
import Layout from "../components/indexComponents/layout";
import NavPick from "../components/indexComponents/navPick";
import Pick from "../components/indexComponents/pick";
import Search from "../components/indexComponents/search";
import Status from "../components/indexComponents/status";
import User from "../components/indexComponents/user";

const bannerlayout = 
<Banner>
  <Status>          
    <CardBanner/>
    <User img="unnamed.webp"></User>
  </Status>
</Banner>

const titleGallery = "Dstacado"

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>Home</title>
      </Head>

      <main>

        <Search>
          <input type="text" />
        </Search>

        <NavPick>
          <Pick 
            emoji="🎂" 
          />
          <Pick 
            emoji="🥩" 
          />
          <Pick
            emoji="🍅" 
          />
          <Pick 
            emoji="🍽️" 
          />
        </NavPick>

        <Gallery>

          <Card 
            img="/fanatic.jpg" 
            title="The Fanatic" 
            user="Default user"
          />
          <Card 
            img="/mi.jpg" 
            title="Mision Imposible" 
            user="Default user" 
          />
          <Card 
            img="/youngDylan.jpg" 
            title="Young Dylan" 
            user="Default user" 
          />
          <Card 
            img="/yourHonor.jpg" 
            title="Your Honor" 
            user="Default user" 
          />
          <Card 
            img="/card.png" 
            title="Burger King" 
            user="Default user" 
          />
          <Card 
            img="/fanatic.jpg" 
            title="The Fanatic" 
            user="Default user" 
          />
          <Card 
            img="/mi.jpg" 
            title="Mision Imposible" 
            user="Default user" 
          />
          <Card 
            img="/youngDylan.jpg" 
            title="Young Dylan" 
            user="Default user"
          />
          <Card 
            img="/yourHonor.jpg" 
            title="Your Honor" 
            user="Default user" 
          />
          <Card 
            img="/card.png" 
            title="Burger King" 
            user="Default user" 
          />

        </Gallery> 

        <Footer>
        </Footer>

      </main>

    </Layout>
  )
}