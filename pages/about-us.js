import Head from "next/head";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TeamCard from "../Components/TeamCard";

import medical from "../public/assets/img/avater/medical.png";
import social from "../public/assets/img/avater/social.png";
import user from "../public/assets/img/avater/user_experience.png";
import team1 from "../public/assets/img/team/1.png";
import team2 from "../public/assets/img/team/2.png";
import team3 from "../public/assets/img/team/3.png";
import team4 from "../public/assets/img/team/4.png";
import team5 from "../public/assets/img/team/6.png";
import founder1 from "../public/assets/img/team/team1.png";
import defaultImg from "../public/assets/img/team/default-team.png";
import chairman from "../public/assets/img/team/chair.png";

import { useEffect, useState } from "react";

const AboutUs = () => {
  const [future, setFuture] = useState("active");
  const [strategy, setStrategy] = useState("not-active");
  const [strategyArea, setStrategyArea] = useState("about-d-none");
  const [futureArea, setFutureAre] = useState("container");
  const [team, setTeam] = useState("not-active");
  const [teamArea, setTeamArea] = useState("about-d-none");

  var teamData = [
    {
      id: "1",
      name: "Dr. Mohd Hossain (Imran)",
      title: "Chairman",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro",
      image: chairman,
      fb: "https://www.facebook.com/shafa.care.ltd",
      instagram: "",
      in: "https://www.linkedin.com/company/shafacare",
    },
    {
      id: "2",
      name: "Md. Tanbir Hossen",
      title: "Managing Director & CTO",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro",
      image: founder1,
      fb: "https://www.facebook.com/shafa.care.ltd",
      instagram: "",
      in: "https://www.linkedin.com/company/shafacare",
    },
    {
      id: "3",
      name: "Shuchana Malek Orthi",
      title: "Director",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro",
      image: defaultImg,
      fb: "https://www.facebook.com/shafa.care.ltd",
      instagram: "",
      in: "https://www.linkedin.com/company/shafacare",
    },
  ];
  var businessTeam = [
    {
      id: "1",
      name: "Md Talha Abdullah Khan",
      title: "CMO (Chief Marketing Officer)",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro",
      image: defaultImg,
      fb: "https://www.facebook.com/shafa.care.ltd",
      instagram: "",
      in: "https://www.linkedin.com/company/shafacare",
    },
    {
      id: "2",
      name: "Awon Hossain",
      title: "Digital marketing manager",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro",
      image: defaultImg,
      fb: "https://www.facebook.com/shafa.care.ltd",
      instagram: "",
      in: "https://www.linkedin.com/company/shafacare",
    },
  ];
  var engineerTeam = [
    {
      id: "1",
      name: "Md. Jubaidul Alam",
      title: "Team Lead & AI SOFTWARE Engineer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro",
      image: team4,
      fb: "https://www.facebook.com/shafa.care.ltd",
      instagram: "",
      in: "https://www.linkedin.com/company/shafacare",
    },
    {
      id: "2",
      name: "Md. Tanjin Alam",
      title: "AI SOFTWARE Engineer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro",
      image: team3,
      fb: "https://www.facebook.com/shafa.care.ltd",
      instagram: "",
      in: "https://www.linkedin.com/company/shafacare",
    },
    {
      id: "3",
      name: "Habibur Rahman",
      title: "Sr. Software Engineer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro",
      image: team2,
      fb: "https://www.facebook.com/shafa.care.ltd",
      instagram: "",
      in: "https://www.linkedin.com/company/shafacare",
    },
    {
      id: "4",
      name: "Rokibul Hasan",
      title: "Software Engineer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro",
      image: team1,
      fb: "https://www.facebook.com/shafa.care.ltd",
      instagram: "",
      in: "https://www.linkedin.com/company/shafacare",
    },
  ];

  var designerTeam = [
    {
      id: "1",
      name: "Rabbi",
      title: "Graphic Designer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro",
      image: defaultImg,
      fb: "https://www.facebook.com/shafa.care.ltd",
      instagram: "",
      in: "https://www.linkedin.com/company/shafacare",
    },
    {
      id: "2",
      name: "Pranto Torofdar",
      title: "Graphic Designer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro",
      image: team5,
      fb: "https://www.facebook.com/shafa.care.ltd",
      instagram: "",
      in: "https://www.linkedin.com/company/shafacare",
    },
  ];

  useEffect(() => {
    // messanger();
  }, []);

  function futureFun() {
    setFuture("active");
    setStrategy("not-active");
    setTeam("not-active");
    setStrategyArea("about-d-none");
    setFutureAre("container");
    setTeamArea("about-d-none");
  }
  function strategyFun() {
    setFuture("not-active");
    setStrategy("active");
    setTeam("team-active");
    setStrategyArea("container");
    setFutureAre("about-d-none");
    setTeamArea("about-d-none");
  }

  function teamFun() {
    setTeam("active");
    setFuture("not-active");
    setStrategy("not-active");
    setStrategyArea("about-d-none");
    setFutureAre("about-d-none");
    setTeamArea("container");
  }

  
  return (
    <>
      <Head>
        <title>About us -- Shafa Care</title>
        <meta
          name="keyboard"
          content="Shafa Care,Online Doctor, Medical Help,Online Medical Help, About us, about us shafa care"
        />
      </Head>
      <Navbar />

      

      {/* Start AboutUs Area */}
      <div className="pt-100 about__us"></div>
      <section id="aboutus_area">
        <div className="container">
          <div className="row ">
            <div className="swith m-auto">
              <button onClick={futureFun} className={future}>
                Future
              </button>
              <button onClick={strategyFun} className={strategy}>
                Strategy and Focus
              </button>
              <button onClick={teamFun} className={team}>
                Team
              </button>
            </div>
          </div>
          <div className="row motto-area"></div>
        </div>
        <div className="about_content pb-70">
          <div className={futureArea}>
            <div className="row pt-3">
              <div className="about_single_content d-flex align-items-center mb-5 mt-3">
                <h3 className="body_title motto">Motto</h3>
                <div className="vl"></div>
                <p>A solution for Patients By Doctors</p>
              </div>

              <div className="about_single_content d-flex align-items-center mb-5 mt-3">
                <h3 className="body_title mission">Mission</h3>
                <div className="vl"></div>
                <p>
                  Build the largest <span>healthcare ecosystem</span> in the
                  world and{" "}
                  <span>promote healthy living empowered by technology.</span>
                </p>
              </div>

              <div className="about_single_content d-flex align-items-center w-100 mb-5 mt-3">
                <h3 className="body_title vission">Vision</h3>
                <div className="vl"></div>
                <div className="w-100">
                  <p className="">
                    <i className="fas fa-angle-right" /> A{" "}
                    <span> &nbsp;family doctor &nbsp;</span> for every family.
                  </p>
                  <p className="">
                    <i className="fas fa-angle-right" /> An{" "}
                    <span> &nbsp;e-health profile &nbsp; </span> for every
                    person.
                  </p>
                  <p className="">
                    <i className="fas fa-angle-right" /> A{" "}
                    <span> &nbsp; health management plan &nbsp; </span> for
                    everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="strategy-area" className={strategyArea}>
            <div className="row pt-5">
              <div className="title-2 w-100 text-center">
                <h3>We are a group of doctors</h3>
                <p className="pt-2">Strategy and Focus</p>
              </div>
            </div>
            <div className="pt-4 row medical">
              <div className="col-md-12 d-flex">
                <img src={medical} alt="medical resources" />
                <div className="single_doers pl-3">
                  <h5>Medical resources</h5>
                  <p className="">
                    <i className="fas fa-angle-right" />{" "}
                    <span>Leverage Internet &nbsp;</span> to share medical
                    resources in real-time across regions.
                  </p>
                  <p className="">
                    <i className="fas fa-angle-right" />{" "}
                    <span>AI Assistant &nbsp;</span> bridges the unmet demand
                    for family doctors and release the pressure on physical
                    medical institutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4 row user">
              <div className="col-md-12 d-flex pt-3">
                <img src={user} alt="User experience" />
                <div className="single_doers pl-3">
                  <h5>User experience</h5>
                  <p className="">
                    <i className="fas fa-angle-right" />{" "}
                    <span>24 x 7 accesss &nbsp;</span> to quality healthcare
                    with minimal waiting time for patients.
                  </p>
                  <p className="">
                    <i className="fas fa-angle-right" />{" "}
                    <span>Lower &nbsp;</span> patient's medical-related{" "}
                    <span>costs</span>.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4 row social">
              <div className="col-md-12 d-flex pt-3">
                <img src={social} alt="Social" />
                <div className="single_doers pl-3">
                  <h5>Social </h5>
                  <p className="">
                    <i className="fas fa-angle-right" />
                    Low cost and scalable model to improve{" "}
                    <span>access to care.</span>
                  </p>
                  <p className="">
                    <i className="fas fa-angle-right" />
                    improve overall <span>population health.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="team-area" className={teamArea}>
            <div className="row pt-5">
              <div className="title-2 w-100 text-left pb-5">
                <h3>Founding members</h3>
              </div>
            </div>
            <div className="card__middle row">
              {teamData.map((item) => {
                return <TeamCard data={item} />;
              })}
            </div>

            <div className="row pt-5">
              <div className="title-2 w-100 text-left pb-5">
                <h3>Business team</h3>
              </div>
            </div>
            <div className="card__middle row">
              {businessTeam.map((item) => {
                return <TeamCard data={item} />;
              })}
            </div>

            <div className="row pt-5">
              <div className="title-2 w-100 text-left pb-5">
                <h3>Engineer team</h3>
              </div>
            </div>

            <div className="row card__middle col_md_3">
              {engineerTeam.map((item) => {
                return <TeamCard data={item} />;
              })}
            </div>

            <div className="row pt-5">
              <div className="title-2 w-100 text-left pb-5">
                <h3>Designer team</h3>
              </div>
            </div>

            <div className="row col_md_3 card__middle">
              {designerTeam.map((item) => {
                return <TeamCard data={item} />;
              })}
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Area */}
      <Footer />
    </>
  );
}

export default AboutUs
