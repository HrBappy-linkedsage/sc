import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Head from "next/head";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import tempImg from "../public/assets/img/team2.jpg";

export default function App() {
  const [cookies, setCookie, removeCookies] = useCookies(["userData"]);
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    const temp = cookies.userData.data;
    console.log("cvvc", temp);

    setUserInfo(temp);
  }, []);
  if (userInfo) {
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
        <section id="view-profile" className="pt-100 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <div className="user-profile-card">
                  <h3 className="title w-100">
                    {userInfo.firstName} {userInfo.lastName}{userInfo.name}                    
                  </h3>
                  <div className="row align-items-center">
                    <div className="col-md-3 avatar">
                      {
                        userInfo.file ?
                        <img src={
                          "https://api-admin.shafa.care/api/v3/auth/publicFile/" +
                          userInfo.file.path
                        } alt={userInfo.firstName} />
                        :
                        <img src={tempImg} alt="avatar" />
                      }
                      
                    </div>
                    <div className="col-md-8">
                      <ul>
                      {userInfo.bmdcRegNo ? (
                          <li className="d-flex justify-content-between">
                            <p>BMDCRegNo</p>
                            <p>{userInfo.bmdcRegNo}</p>
                          </li>
                        ) : null}

{userInfo.dateOfBirth ? (
                          <li className="d-flex justify-content-between">
                            <p>Date of birth</p>
                            <p>{userInfo.dateOfBirth}</p>
                          </li>
                        ) : null}

{userInfo.degree ? (
                          <li className="d-flex justify-content-between">
                            <p>Degree</p>
                            <p>{userInfo.degree}</p>
                          </li>
                        ) : null}
                        {userInfo.education ? (
                          <li className="d-flex justify-content-between">
                            <p>Education</p>
                            <p>{userInfo.education}</p>
                          </li>
                        ) : null}
                        {userInfo.institute ? (
                          <li className="d-flex justify-content-between">
                            <p>Institute</p>
                            <p>{userInfo.institute}</p>
                          </li>
                        ) : null}
                        {userInfo.fee ? (
                          <li className="d-flex justify-content-between">
                            <p>Fee</p>
                            <p>{userInfo.fee}</p>
                          </li>
                        ) : null}
                        {userInfo.practicingSince ? (
                          <li className="d-flex justify-content-between">
                            <p>Practicing Since</p>
                            <p>{userInfo.practicingSince}</p>
                          </li>
                        ) : null}

                      {userInfo.phone ? (
                          <li className="d-flex justify-content-between">
                            <p>Phone</p>
                            <p>{userInfo.phone}</p>
                          </li>
                        ) : null}
                        {userInfo.email ? (
                          <li className="d-flex justify-content-between">
                            <p>Email:</p>
                            <p>{userInfo.email}</p>
                          </li>
                        ) : null}
                        {userInfo.age ? (
                          <li className="d-flex justify-content-between">
                            <p>Age:</p>
                            <p>{userInfo.age} Years</p>
                          </li>
                        ) : null}
                        {userInfo.gender ? (
                          <li className="d-flex justify-content-between">
                            <p>Gender:</p>
                            <p>{userInfo.gender}</p>
                          </li>
                        ) : null}
                        {userInfo.height ? (
                          <li className="d-flex justify-content-between">
                            <p>Height:</p>
                            <p>{userInfo.height}</p>
                          </li>
                        ) : null}
                        {userInfo.weight ? (
                          <li className="d-flex justify-content-between">
                            <p>Weight</p>
                            <p>{userInfo.weight} Kg</p>
                          </li>
                        ) : null}
                        {userInfo.bloodGroup ? (
                          <li className="d-flex justify-content-between">
                            <p>Blood Group</p>
                            <p>{userInfo.bloodGroup}</p>
                          </li>
                        ) : null}
                        {userInfo.language ? (
                          <li className="d-flex justify-content-between">
                            <p>Language</p>
                            <p>{userInfo.language}</p>
                          </li>
                        ) : null}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  } else {
    return <></>;
  }
}
