import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Head from 'next/head'

import SpecialitiesCarousel from "../Components/SpecialitiesCarousel";
import FAQs from "../Components/FAQs";
import SpecialitiesCard from "../Components/SpecialitiesCard";
import DownloadApp from "../Components/DownloadApp";
import tempImg from "../public/assets/img/logo.png";
import BlogItem from "../Components/BlogItem";
import HeroSlider from "../Components/HeroSlider";
import AvailableNow from "../Components/AvailableNow";
import HospitalListCard from '../Components/HospitalListCard'
import ssl from "../public/assets/img/SSL.png";

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

import loading from "../public/assets/img/loading.gif";

import axios from "../authAxios";
import { useEffect, useState } from "react";

const Home = ({ data }) => {

  var sendSymptom = [];

  const getBlogListHome = async () => {
    return await axios
      .post("blog/blog-list-home", { limit: 3, offset: 0 })
      .then((response) => {
        let status = "status" in response;
        if (!status) {
          response.status = 401;
          return response;
        }
        return response.data.data;
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  };

  const [blogHome, setBlogHome] = useState();
  const [availablelDoctor, setAvailableDoctor] = useState();
  const [hospitalList, setHospitalList] = useState();
  const [symptomItems, setsymptomItems] = useState();
  const [sliderHeight, setSliderHeight] = useState("sliderHeight");

  const [classBtnSpecilist, setClassBtnSpecilist] = useState("display__none");
  const [classBtnSymptom, setClassBtnSymptom] = useState("display__none");

  function assignSymptom(res) {
    res.map((item) => {
      var tempArray = [];
      if (item.specialists)
        item.specialists.map((tempItem) => {
          tempArray.push(tempItem.id);
        });
      sendSymptom.push(tempArray);
    });
  }
  const getSpecialistList = async () => {
    return await axios
      .post("/specialities/specialities-list")
      .then((response) => {
        let status = "status" in response;
        if (!status) {
          response.status = 401;
          return response;
        }
        return response.data.data;
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  };
  const getHospitalList = async () => {
    return await axios
      .post("/hospital/public-list")
      .then((response) => {
        let status = "status" in response;
        if (!status) {
          response.status = 401;
          return response;
        }
        return response.data.data;
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  };

  const getsymptomItems = async () => {
    return await axios
      .post("healthIssue/symptom-list")
      .then((response) => {
        let status = "status" in response;
        if (!status) {
          response.status = 401;
          return response;
        }
        return response.data.data;
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  };
  const getAvailableDocorList = async () => {
    return await axios
      .post("doctor/currentList")
      .then((response) => {
        let status = "status" in response;
        if (!status) {
          response.status = 401;
          return response;
        }
        return response.data.data;
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  };
  const [selectValues, setselectValues] = useState([]);
  const [speialistList, setSpeialistList] = useState();
  const [loadingData, setLoadingData] = useState(true);

  let options = [];
  // load hospital data list
  useEffect(() => {
    if (loadingData) {
      getSpecialistList()
        .then((res) => {
          setSpeialistList(res);
          data = res;

          data.map((item) => {
            options.push({ value: item.id, label: item.name });
          });
        })
        .catch((err) => {
          console.log(err);
        });

      getsymptomItems()
        .then((res) => {
          setsymptomItems(res);
          assignSymptom(res);

          res.map((item) => {
            var tempItemArray = [];
            if (item.specialists)
              item.specialists.map((items) => {
                tempItemArray.push(parseInt(items.id));
              });
            options.push({ value: tempItemArray, label: item.name });
          });

          setselectValues(options);
        })
        .catch((err) => {
          console.log(err);
        });

      getBlogListHome()
        .then((res) => {
          setBlogHome(res);
        })
        .catch((err) => {
          console.log(err);
        });

      getAvailableDocorList()
        .then((res) => {
          setAvailableDoctor(res);
        })
        .catch((err) => {
          console.log(err);
        });

        getHospitalList()
        .then((res) => {
          console.log("rrrreerrrrrrrrrrrrrr",res)
          setHospitalList(res);
        })
        .catch((err) => {
          console.log(err);
        });

      setSliderHeight("anything");
    }

    $(".odometer").appear(function (e) {
      var odo = $(".odometer");
      odo.each(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
    
    // messanger();
  }, []);

  

  const healthAssisstantList = [
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

  function nextView() {
    $(".cata-sub-nav").animate({ scrollLeft: "+=460" }, 500);
  }
  function PreView() {
    $(".cata-sub-nav").animate({ scrollLeft: "-=460" }, 500);
  }
  function PreDoctorView() {
    $(".doctor-sub-nav").animate({ scrollLeft: "+=460" }, 500);
  }
  function nextDoctorView() {
    $(".doctor-sub-nav").animate({ scrollLeft: "-=460" }, 500);
  }
  function PreHospitalView() {
    $(".hospital-sub-nav").animate({ scrollLeft: "+=460" }, 500);
  }
  function nextHospitalView() {
    $(".hospital-sub-nav").animate({ scrollLeft: "-=460" }, 500);
  }

  // if (speialistList && symptomItems && blogHome) {
    return (
      <>
        <Head>
          <title>Online Medical Help -- Shafa Care</title>
          <meta
            name="keyboard"
            content="Shafa Care, Online Doctor,Medical Help ,Online Medical Help"
          />
        </Head>

        <Navbar />

        {/* Start Main Banner Area */}
        
        <section className="hero__area" id={sliderHeight}>
          <HeroSlider />
        </section>
        {/* End Main Banner Area */}

        {/* body main area start  */}

        {/* body main area start  */}
{/* available doctor  */}
<section className="available-now ptb-50">
          <div className="container">
            <div className="row">
              <div className="w-100 d-flex justify-content-between pb-5">
                <h3>Available now</h3>
                <Link href="/doctor-list">
                  <a className="see_more">View All Doctor</a>
                </Link>
              </div>
            </div>
            <div className="row doctor-list w-100 ">
              <button className="nav-prev-arrow " onClick={() => PreDoctorView()}>
                <i className="fa fa-angle-left"></i>
              </button>
              <div className="cata-sub-nav doctor-sub-nav">
                <div className="d_inline-flex">
                  {availablelDoctor
                    ? availablelDoctor.map((item) => {
                        return <AvailableNow data={item} />;
                      })
                    : null}
                </div>
              </div>
              <button className="nav-next-arrow" onClick={() => nextDoctorView()}>
                <i className="fa fa-angle-right"></i>
              </button>
            </div>
          </div>
        </section>
        <section className="slider_area pb-50">
          <div className="container">
            <div className="row specialities_title pb-4">
              <div className="w-100 d-flex justify-content-between contant_header">
                <h3 className="mb-5">Common symptoms</h3>
                <Link href="/specialities">
                  <a className="mt-2 see_more">View All</a>
                </Link>
              </div>
              {/* <SpecialistsCarousel /> */}
              {/* <CommontSymptom /> */}
              <div className="w-100 common-symptom-slider">
                <button className="nav-prev-arrow" onClick={() => PreView()}>
                  <i className="fa fa-angle-left"></i>
                </button>
                <div className="cata-sub-nav ">
                  <ul className="">
                    {symptomItems
                      ? symptomItems.map((item) => {
                          let data = [];

                          return (
                            <li>
                              {item.specialists
                                ? item.specialists.map((tempItem) => {
                                    data.push(tempItem.id);
                                  })
                                : null}
                              {item.specialists ? (
                                <Link
                                  href={{
                                    pathname: "/doctor-list",
                                    query: { id: data },
                                  }}
                                >
                                  <a href="">
                                    <div className="d-flex flex-column align-items-center justify-content-around single_symptom">
                                      {item.file && item.file.path ? (
                                        <img
                                          src={
                                            "https://api-admin.shafa.care/api/v3/auth/publicFile/" +
                                            item.file.path
                                          }
                                          alt={item.name}
                                        />
                                      ) : (
                                        <img src={tempImg} alt="blog image" />
                                      )}
                                      {item.name ? (
                                        <p className="d-block">{item.name}</p>
                                      ) : (
                                        <p className="d-block">Not defined</p>
                                      )}
                                    </div>
                                  </a>
                                </Link>
                              ) : null}
                            </li>
                          );
                        })
                      : null}
                  </ul>
                </div>
                <button className="nav-next-arrow" onClick={() => nextView()}>
                  <i className="fa fa-angle-right"></i>
                </button>
              </div>
            </div>
            <div className="row mt-4 top_slider">
              <SpecialitiesCarousel />
            </div>
          </div>
        </section>

        

        {/* Health Assisstant area start */}

        <section className="health_assisstant">
          <div className="container">
            <div className="row">
              <div className="w-100 d-flex justify-content-between">
                <h3>Health assistant</h3>
                <Link href="/health-assisstant-list">
                  <a className="see_more">View All</a>
                </Link>
              </div>
              <div id="scroll-progress" className=""></div>
              <ul id="scroller">
                {healthAssisstantList.map((item,index) => {
                  return (
                    <li className={index==7?"mr_0":null }>
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
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* Start Doctor Area */}
        <section className="doctor-area pt-50 pb-70">
          <div className="container">
            <div className="row">
              <div className="plr-15 d-flex flex-column contant_header w-100">
                <div className=" specialities_title pb-4 w-100">
                  <div className="d-flex justify-content-between">
                    <h3>Top specialities</h3>
                    <Link href="/specialist">
                      <a className="see_more">View All</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div id="scroll-progress-specialities" className=""></div>
              <ul id="scroller-specialities">
                {speialistList
                  ? speialistList.map((item) => {
                      return (
                        <li>
                          <SpecialitiesCard data={item} />
                        </li>
                      );
                    })
                  : null}
              </ul>
            </div>
            <div className="row justify-content-center w-100 ">
              <Link href="/doctor-list">
                <a className="mt-2 default-btn download_app">
                  View All Doctor<span></span>
                </a>
              </Link>
            </div>
          </div>
        </section>
        {/* End Doctor Area */}

        {/* <section className="user-review-section ">
                <div className="container">
                    <div className="row" >
                        <div className="plr-15 d-flex flex-column contant_header w-100">
                            <div className=" specialities_title  text-left w-100 mb-5 mt-4">
                                <h2 className="w-100">What our users have to say</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <UserReviewCaruser />
            </section> */}

        {/* Start Appointment Area */}
        {/* <section id="appointment_area" className="appointment-area ptb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-3">
                            <div className="single-fun-fact">
                                <h3>
                                    <span className="odometer" data-count="2980">0</span>
                                    <span className="sign-icon">+</span>
                                </h3>
                                <p>Doctors</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="single-fun-fact">
                                <h3>
                                    <span className="odometer" data-count="2989">0</span>
                                    <span className="sign-icon">+</span>
                                </h3>
                                <p>App Downloaded</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="single-fun-fact">
                                <h3>
                                    <span className="odometer" data-count="2891">0</span>
                                    <span className="sign-icon">+</span>
                                </h3>
                                <p>Current Users</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="single-fun-fact">
                                <h3>
                                    <span className="odometer" data-count="259">0</span>
                                    <span className="sign-icon">+</span>
                                </h3>
                                <p>Hospitals</p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                        </div>
                    </div>
                </div>
            </section> */}
        {/* End Appointment Area */}

        {/* FAQs area start */}
        <section id="faqs_section" className="section_bg">
          <div className="container ptb-50">
            <FAQs />
          </div>
        </section>

        {/* home page blog  */}
        <div className="home_blog_area pt-25">
          <div className="container">
            <div className="row pb-5">
              <h3 className="text-center w-100 mt-2">
                Read top articles from health experts
              </h3>
              <p className="text-center w-100 mt-2">
                Health articles that keep you informed about good health
                practices and achieve your goals.
              </p>
            </div>

            <div className="row article_area">
              {blogHome
                ? blogHome.map((list) => {
                    return (
                      <div className="col-md-4 mb-4">
                        <BlogItem data={list} />
                      </div>
                    );
                  })
                : null}
            </div>
            <div className="row text-center ">
              <div className="all_blog w-100">
                <Link href="/blog-list">
                  <a className="mt-2 default-btn download_app">
                    View All <span></span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>


        {/* partners area  */}
        {/* <section className="available-now pt-25 pb-50">
          <div className="container">
            <div className="row">
              <div className="w-100 d-flex justify-content-between pb-5">
                <h3>Our hospital partners</h3>
                <Link href="/hospital-list">
                  <a className="see_more">View All </a>
                </Link>
              </div>
            </div>
            <div className="row hospital-list w-100 ">
              {
                hospitalList && hospitalList.length>5?
                <button className="nav-prev-arrow " onClick={() => PreHospitalView()}>
                <i className="fa fa-angle-left"></i>
              </button>
              :null
              }
              
              <div className="cata-sub-nav hospital-sub-nav">
                <div className="d_inline-flex">
                {hospitalList
                    ? hospitalList.map((item) => {
                        return <HospitalListCard data={item} />;
                      })
                    : null}
                </div>
              </div>
              {
                hospitalList && hospitalList.length>5?
              <button className="nav-next-arrow" onClick={() => nextHospitalView()}>
                <i className="fa fa-angle-right"></i>
              </button>
              :null
              }
            </div>
          </div>
        </section> */}

        {/* home page download area  */}
        <section id="apps" className="section_bg mt-3">
          <div className="download_app_sec pt-100 pb-50">
            <div className="container">
              <DownloadApp />
            </div>
          </div>
        </section>

        <section id="home__page__img" className="ptb-100">
          <img src={ssl} alt="ssl certified" />
        </section>
        <Footer />
      </>
    );
  // } else
  //   return (
  //     <>
  //       <div className="pre__loader">
  //         <img src={loading} alt="pre loader" />
  //       </div>
  //     </>
  //   );
}


export default Home