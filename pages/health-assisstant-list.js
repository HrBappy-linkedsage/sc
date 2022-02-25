import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Head from "next/head";

import Link from "next/link";

// health assisstant img import
import diabetes from "../public/assets/img/health-assisstant/diabetes.png";
import pcod from "../public/assets/img/health-assisstant/pcod.png";
import heart_disease from "../public/assets/img/health-assisstant/heart_disease.png";
import asthma from "../public/assets/img/health-assisstant/asthma.png";
import dengue from "../public/assets/img/health-assisstant/dengue.png";
import kidney_disease from "../public/assets/img/health-assisstant/kidney_disease.png";
import stroke from "../public/assets/img/health-assisstant/stroke.png";
import tb from "../public/assets/img/health-assisstant/tb.png";

export default function List() {
  var health_assisstant_list = [
    {
      id: 1,
      title: "Diabetes",
      img: diabetes,
    },
    {
      id: 2,
      title: "PCOD",
      img: pcod,
    },
    {
      id: 3,
      title: "Heart Disease",
      img: heart_disease,
    },
    {
      id: 4,
      title: "Stroke",
      img: stroke,
    },
    {
      id: 5,
      title: "Asthma",
      img: asthma,
    },
    {
      id: 6,
      title: "Dengue",
      img: dengue,
    },
    {
      id: 7,
      title: "TB",
      img: tb,
    },
    {
      id: 8,
      title: "Kidney Disease",
      img: kidney_disease,
    },
  ];

  return (
    <>
      <Head>
        <title>Health Assisstant -- Shafa Care</title>
        <meta name="keyboard" content="Shafa Care, Online Doctor,Medical Help,Online Medical Help, Health Assisstant" />
      </Head>
      <Navbar />
      <section className="health_assisstant_list pt-100">
        <div className="container">
          <div className="row pb-5">
            <div className="col-md-12 mb-4">
              <h3>Health assisstant</h3>
            </div>
            {health_assisstant_list.map((item) => {
              return (
                <div className="col-md-3 scroll_item ">
                  <Link
                    href={{
                      pathname: "/health-assistant",
                      query: { id: item.id },
                    }}
                  >
                    <a className="h-100 d-flex flex-column justify-content-around align-items-center">
                      <img src={item.img} alt={item.title} />
                      <p>{item.title}</p>
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
