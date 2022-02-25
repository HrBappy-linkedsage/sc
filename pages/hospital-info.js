import React, { useState, useEffect, useLocation } from "react";
import tempImg from "../public/assets/img/logo.png";
import Head from "next/head";

import defaultImg from '../public/assets/img/team/default-team.png'
import Link from "next/link";

import axios from "../authAxios";

import { useRouter } from "next/router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import loading from "../public/assets/img/loading.gif";

const HospitalInfo = () => {
  const router = useRouter();

  const { id } = router.query;

  const getHospitalList = async () => {
    return await axios
      .post("hospital/public-list")
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

  const [hospital, setHospital] = useState();

  function setHospitalList(temp) {
    let tempData = temp;
    tempData = tempData.filter((item) => item.id == id);
    setHospital(tempData[0]);
  }

  // load hospital data list
  useEffect(() => {
    getHospitalList()
      .then((res) => {
        setHospitalList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (hospital) {
    return (
      <>
        <Navbar />

        <section className="ptb-100" id="hospital-details">
          <div className="container hospital-info">
            <div className="row">
              <div className="col-md-12">
                <h1 className="mb-3">Hospital details</h1>
              </div>
            </div>
            <div className="row top">
              <div className="col-md-6">
                {hospital.file && hospital.file.path ? (
                  <img
                    src={
                      "https://api-admin.shafa.care/api/v3/auth/publicFile/" +
                      hospital.file.path
                    }
                    alt={hospital.name}
                  />
                ) : (
                  <img src={tempImg} alt="Specialities" />
                )}
                <h4>{hospital.name}</h4>                
                <p className="txt_s">Established in: {hospital.establishedIn}</p>
              </div>
              <div className="col-md-6">
                
                <p>Address: {hospital.address}</p>
                <p>Phone No. 1: {hospital.phone1}</p>
                {
                  hospital.phone2?
                  <p>Phone No. 2: {hospital.phone2}</p>:null
                }
              </div>
              <div className = "pt-4 col-md-12">
                <h3 className="mb-2">About</h3>
                <p>{hospital.about}</p>
              </div>
              <div className = "pt-4 col-md-12">
                <h3 className="mb-2">Doctor List</h3>
                <div className="ml-15 mr-15 d-list d-flex justify-content-between align-items-center flex-wrap">
                  {
                    hospital.doctors?
                    hospital.doctors.map((item) => {
                      return(
                        <div className="single-d-list">
                         <Link as={`/doctor-list/${item.name}`} href={{ pathname: '/doctor-list', query: {id:item.id,status:1} }}>
                           <a href="">
                            {
                              item.file && item.file.path?
                              <img alt={item.name} src = {"https://api-admin.shafa.care/api/v3/auth/publicFile/" + item.file.path} />
                              :
                              <img src={defaultImg} alt="logo" />
                            }
                            <p className="name">{item.name}</p>
                            <p className>{item.specialist.name}</p>
                           </a>
                         </Link>
                        </div>
                      )
                    }):null
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  } else
  return (
    <>
      <div className="pre__loader">
        <img src={loading} alt="loading" />
      </div>
    </>
  );
};

export default HospitalInfo;
