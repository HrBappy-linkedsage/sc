import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Head from 'next/head'

import patientApp from "../public/assets/img/patientapp.png";
import playImg from "../public/assets/img/shape/google-play-badge.svg";
import appleImg from "../public/assets/img/shape/app-store-badge.svg";
import { useEffect, useState } from "react";

export default function App() {
  const [status, setStatus] = useState(0);

  useEffect(() => {
    let tempI = getPlatform();
    if (tempI == 0)
      location.replace(
        "https://play.google.com/store/apps/details?id=care.shafa.ai.user"
      );
    else if (tempI == 1)
      location.replace("https://apps.apple.com/us/app/shafa-care/id1576108114");
    else setStatus(1);
  }, []);

  function getPlatform() {
    // var platform = ["Android", "iOS","Win32"];

    // for (var i = 0; i < platform.length; i++) {
    //   if (navigator.platform.indexOf(platform[i]) > -1) {
    //     return i;
    //   }
    // }
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) {
      return 0;
    } else if (
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    ) {
      return 1;
    }
    return 3;
  }

  //
  return (
    <>
        <Head>
          <title>Download Patient App -- Shafa Care</title>
          <meta
            name="keyboard"
            content="Shafa Care, Online Doctor,Medical Help ,Online Medical Help, Shafa Care Patient App, Download Shafa Care Patient App"
          />
        </Head>
      {status == 1 ? (
        <div id="app__page__">
          <Navbar />
          <section id="app__page" className="pt-100 pc">
            <div className="top">
              <div className="container">
                <div className="row pt-5">
                  <div className="col-md-8 d-flex justify-content-center  flex-column h-100">
                    <h4>Download Shafa Care Patient app</h4>
                    <p>
                      Access video consultation with top doctors on the Shafa
                      Care app. Connect with doctors online, available 24/7,
                      from the comfort of your home.
                    </p>

                    <div className="download_links d-flex pt-4">
                      <a href="https://play.google.com/store/apps/details?id=care.shafa.ai.user">
                        <img src={playImg} alt="google play store" />
                      </a>
                      <a
                        className="apple-link"
                        href="https://apps.apple.com/us/app/shafa-care/id1576108114"
                      >
                        <img src={appleImg} alt="apple app store" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 app-img pt-4 d-flex align-items-center justify-content-center">
                    <img src={patientApp} alt="download patient app" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="app__page" className="pt-100 phone">
            <div className="top">
              <div className="container">
                <div className="row pt-5 pb-5 d-flex flex-row align-items-center justify-content-around">
                  <div className="">
                    <h4>Patient app</h4>

                    <div className="download_links d-flex flex-column">
                      <a href="https://play.google.com/store/apps/details?id=care.shafa.ai.user">
                        <img src={playImg} alt="google play store" />
                      </a>
                      <a
                        className="apple-link"
                        href="https://play.google.com/store/apps/details?id=care.shafa.ai.user"
                      >
                        <img src={appleImg} alt="apple app store" />
                      </a>
                    </div>
                  </div>
                  <div className="app-img pt-4 d-flex align-items-center justify-content-center">
                    <img src={patientApp} alt="download patient app" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      ) : null}
    </>
  );
}
