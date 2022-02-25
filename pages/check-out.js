import Link from "next/link";
import Head from "next/head";
import Router,{ useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import loading from "../public/assets/img/loading.gif";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "../authAxios";



export default function App() {
  const router = useRouter();
  const { userId } = router.query;
  const { doctorId } = router.query;
  const { specialistId1 } = router.query;
  const { specialistId2 } = router.query;
  const [roomData,setRoomData] = useState();
  const [servicesCharges,setservicesCharges] = useState();

  useEffect(() => {
    let values = {
      userId:userId,
      doctorId:doctorId,
      healthIssueIds:[]
    }
    if(specialistId1 != -1) values.healthIssueIds[0] = specialistId1
    if(specialistId2 != -1) values.healthIssueIds[1] = specialistId2
    console.log("values",values)
      createRoom(values)
        .then((res) => {
          if(res.doctor && res.doctor.fee) setservicesCharges(res.doctor.fee * .2)
          setRoomData(res)
          console.log("room",res)

        })
        .catch((err) => {
          console.log(err);
        });
    
  }, []);


  const createRoom = async (values) => {
    return await axios
      .post("/user/room/insert",values)
      .then((response) => {
        let status = "status" in response;
        if (!status) {
          response.status = 401;
          return response;
        }
        if (response.data.data) return response.data.data;
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  };

  
  const orderInsert = async (values) => {
    return await axios
      .post("/user/order/insert",values)
      .then((response) => {
        let status = "status" in response;
        if (!status) {
          response.status = 401;
          return response;
        }
        if (response) return response.data;
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  };

    const checkoutSubmitFun = (e) => {
    let values = {
    userId: userId,
    doctorId: doctorId,
    orderAmount: roomData.doctor.fee
  }
  console.log("values",values)

  orderInsert(values)
        .then((res) => {
          console.log("link",res)
          if(res.GatewayPageURL){
            console.log("link",res.GatewayPageURL)
            e.preventDefault()
            Router.push(res.GatewayPageURL)
          }
        })
        .catch((err) => {
          console.log(err);
        });

}

  if(roomData)
  return (
    <>
        <Head>
          <title>Download Patient App -- Shafa Care</title>
          <meta
            name="keyboard"
            content="Shafa Care, Online Doctor,Medical Help ,Online Medical Help, Shafa Care Patient App, Download Shafa Care Patient App"
          />
        </Head>
        <div id="app__page__">
          <Navbar />
          <section id="app__page" className="pt-100 pb-5 pc">
            <div className="top">
              <div className="container pt-5 pb- 5">
                <div className="row">
                  <div className="col-md-7">
                    <p>User's Information</p>
                    <div className="user-details">
                      <ul>
                      <li>Name: {roomData.user.firstName}{roomData.user.lastName}</li>
                      <li>Gender: {roomData.user.gender}</li>
                      <li>Age: {roomData.user.age}</li>
                      <li>Blood Group: {roomData.user.bloodGroup}</li>
                      <li>Phone No. : {roomData.user.phone}</li>
                      <li>Email: {roomData.user.email}</li>  
                      </ul>                    
                    </div>

                    <div className="doctor-details">
                    <p>Doctor's Information</p>
                    <ul>
                      <li>Name: {roomData.doctor.name}</li>
                      <li>Designation: {roomData.doctor.designation}</li>
                      <li>Degree: {roomData.doctor.degree}</li>
                      <li>Education: {roomData.doctor.education}</li>
                      <li>Department: {roomData.doctor.department}</li>
                      <li>Gender: {roomData.doctor.gender}</li>
                      <li>Practicing Since: {roomData.doctor.practicingSince}</li>
                      <li>Email: {roomData.doctor.email}</li> 
                      <li>Fee: {roomData.doctor.fee}</li>
                      </ul> 

                    </div>
                  </div>
                  <div className="col-md-5">
                  <div className="doctor-details">
                    <p>Payment Information</p>
                    <ul>
                      <li>Doctor Fee: {roomData.doctor.fee}</li>                      
                      <li>Services Chaarge: {servicesCharges}</li>
                      <li>Total Cost: {parseFloat(roomData.doctor.fee) + servicesCharges}</li>
                    </ul> 
                    <button onClick={checkoutSubmitFun} className="mt-2 default-btn download_app">
                      Checkout<span></span>
                    </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <Footer />
        </div>
    </>
  );
  else
  return (
    <>
      <div className="pre__loader">
        <img src={loading} alt="loading" />
      </div>
    </>
  );
}
