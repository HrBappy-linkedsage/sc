import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Head from "next/head";

import doctorApp from "../public/assets/img/doctorapp.png";
import playImg from "../public/assets/img/shape/google-play-badge.svg";
import appleImg from "../public/assets/img/shape/app-store-badge.svg";

export default function App() {
  return (
    <div id="app__page__">
      <Head>
        <title>Download Doctor App -- Shafa Care</title>
        <meta
          name="keyboard"
          content="Shafa Care, Online Doctor, Medical Help,Online Medical Help, Download,Download App, Download Doctor App"
        />
      </Head>

      <Navbar />
      <section id="checkout">
        <h1>checkout page</h1>
      </section>
      <Footer />
    </div>
  );
}
