import Link from "next/link";
import Head from "next/head";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "../authAxios";

import loading from "../public/assets/img/loading.gif";
import { useCookies } from "react-cookie";
import Select from "react-select";
import { createRoom } from "../Components/HttpPostRequest";
import { toast } from 'react-toast'



import maleDocImg from "../public/assets/img/avater/Male_doctor_avatar.jpg";
import femaleDocImg from "../public/assets/img/avater/Female_doctor_avatar.jpg";

export default function Doctor() {
  const router = useRouter();
  const [cookies, setCookie, removeCookies] = useCookies(["userData"]);
  const [healthIssueIds,setHealthIssueIds] = useState();
  const [allData, setAllData] = useState();

  const getDoctorList = async () => {
    return await axios
      .post("doctor/doctor-list")
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
  
  
  function createRoomFun(temp){
    console.log(temp)
    let value = {
      userId : cookies.userData.data.id,
      doctorId : temp,
      healthIssueIds : healthIssueIds
  }
  console.log("value",value)
  createRoom(value)
      .then((res) => {
        if (res.data.status == 200) {
          routeLink.push({
            pathname: "/checkout",
          });
        }
        console.log("rrr",res)
      })
      .catch((err) => {
        console.log(err);
      });
    }
    
   
  


  useEffect(() => {
    
    setHealthIssueIds(router.query.hi)

    getDoctorList()
      .then((res) => {
        console.log("rrr",res)
        setAllData(res);
        if(router.query.id) setInitialData(res);
      })
      .catch((err) => {
        console.log(err);
      });
      // getsymptomItems()
      //   .then((res) => {
      //     setHealthIssueFun(res)
      //     setSymptom(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    
  }, []);

  const [doctorData,setDoctorData] = useState([])

  function setInitialData(tempData){
    let temp = []

    if(Array.isArray(router.query.id)){
      router.query.id.map((item) => {
        let tempArr = tempData.filter((items) => items && items.specialistId == item)
        temp = temp.concat(tempArr)
      })
    }
    else{
      temp = tempData.filter((items) => items && items.specialistId == router.query.id)
    }
    console.log("id.length",temp)
    setDoctorData(temp)
  }
// if(doctorData.length)
    return (
      <>
        <Head>
          <title>Doctor List -- Shafa Care</title>
          <meta
            name="keyboard"
            content="Shafa Care, Online Doctor, Medical Help,Online Medical Help,Doctors ,Doctor List,Shafa Care Doctor List"
          />
        </Head>
        {/* Navbar Area  */}
        <Navbar />
        {/* Start Blog Area */}
        <section className="doctor-list-page ptb-100">
          <div className="container">
            <div className="row count__doctor d-flex mb-5">
              <div>
                {doctorData ? (
                  <h4 className="mb-middle">{doctorData.length} Doctors available</h4>
                ) : null}
              </div>
            </div>
            <div className="row doc-card">
              {
                doctorData?
                doctorData.map((item) => {
                  return(
                    <div className="col-md-4">
                      <div className="row doc-single-card">
                        <div className="col-md-12">
                          <p className="txt_lg">{item.name}</p>
                        </div>
                        <div className="col-md-8">
                          <p className="txt_md">Fee: {item.fee}</p>
                          {
                            item.hospital?
                            <p className="txt_md">Hospital: {item.hospital.name}</p>
                            :null
                          }
                          {
                            item.practicingSince?
                            <p className="txt_md">Practicing Since: {item.practicingSince}</p>
                            :null
                          }
                          
                          
                        </div>
                        <div className="col-md-4">
                          {
                            item.file && item.file.id?
                            <img src={"https://api-admin.shafa.care/api/v3/auth/publicFile/" + item.file.path} alt={item.name} />
                            :
                            <>
                            {
                              item.gender == "Male" || item.gender == "male" ?
                              <img src={maleDocImg} alt={item.name} />
                              :
                              <img src={femaleDocImg} alt={item.name} />
                            }
                            </>

                          }
                          {
                            item.specialist?
                            <p className="txt_md">{item.specialist.name}</p>
                            :null
                          }
                        </div>
                        <div className="col-md-12 d-flex justify-content-center mb-3 mt-2">
                          <button className="appintment_btn" onClick={() => createRoomFun(item.id)}>Appointment</button>
                        </div>
                      </div>
                    </div>
                  )
                })
                :null
              }
            </div>
          </div>
        </section>
        

        {/* End Blog Area */}
        <Footer />
      </>
    );
    // else
    // return (
    //   <>
    //     <div className="pre__loader">
    //       <img src={loading} alt="loading" />
    //     </div>
    //   </>
    // );
}
