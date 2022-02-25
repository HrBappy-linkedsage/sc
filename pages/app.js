import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Head from "next/head";

import patientApp from "../public/assets/img/patientapp.png";
import doctorApp from "../public/assets/img/doctorapp.png";
import playImg from "../public/assets/img/shape/google-play-badge.svg";
import appleImg from "../public/assets/img/shape/app-store-badge.svg";

export default function App() {
  return (
    <div id="app__page__">
      <Head>
        <title>Download App -- Shafa Care</title>
        <meta
          name="keyboard"
          content="Shafa Care,Online Doctor, Medical Help,Online Medical Help, Download, Download App, Download Shafa Care App"
        />
      </Head>
      <Navbar />
      <section id="app__page" className="pt-100 pc">
        <div className="top">
          <div className="container">
            <div className="row pt-5">
              <div className="col-md-8 d-flex justify-content-center  flex-column h-100">
                <h3>Download Shafa Care Patient app</h3>
                <p>
                  Access video consultation with top doctors on the Shafa Care
                  app. Connect with doctors online, available 24/7, from the
                  comfort of your home.
                </p>

                <div className="download_links d-flex pt-4">
                  {/* <a className="play-btn" href="https://play.google.com/store/apps/details?id=care.shafa.ai.user">
                                        <div className="d-flex flel-row align-items-center justify-content-center">
                                            <img src={playImg} />
                                            <p>download from <span>Play store</span></p>
                                        </div>
                                    </a>
                                    <a className="apple-btn">
                                        <div className="d-flex flel-row align-items-center justify-content-center">
                                            <img src={appleImg} />
                                            <p>download from <span>Apple store</span></p>
                                        </div>
                                    </a> */}
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

        <div className="top pb-100 pt-4">
          <div className="container">
            <div className="row pt-4">
              <div className="col-md-4 app-img pt-4 d-flex align-items-center justify-content-center">
                <img src={doctorApp} alt="download doctor app" />
              </div>

              <div className="col-md-8 d-flex justify-content-center flex-column h-100">
                <h3>Download Shafa Care Doctor app</h3>
                <p>
                  A telehealth solution to improve Patient Outcomes and drive
                  your medical practice revenues.
                </p>

                <div className="download_links d-flex pt-4">
                  <a href="https://play.google.com/store/apps/details?id=care.shafa.ai.doctor">
                    <img src={playImg} alt="google play store" />
                  </a>
                  <a
                    className="apple-link"
                    href="https://apps.apple.com/us/app/shafa-care-doctors/id1577006313"
                  >
                    <img src={appleImg} alt="apple app store" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="app__page" className="pt-100 phone">
        <div className="top">
          <div className="container">
            <div className="row pt-5 d-flex flex-row align-items-center justify-content-around">
              <div className="">
                <h3>Patient app</h3>
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

            <div className="row pt-5 d-flex flex-row align-items-center justify-content-around pb-5">
              <div className="app-img pt-4 d-flex align-items-center justify-content-center">
                <img src={doctorApp} alt="download doctor app" />
              </div>
              <div className="">
                <h3>Doctor app</h3>
                <div className="download_links d-flex flex-column">
                  <a href="https://play.google.com/store/apps/details?id=care.shafa.ai.doctor">
                    <img src={playImg} alt="google play store" />
                  </a>
                  <a
                    className="apple-link"
                    href="https://apps.apple.com/us/app/shafa-care-doctors/id1577006313"
                  >
                    <img src={appleImg} alt="apple app store" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
