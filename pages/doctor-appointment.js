import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Head from 'next/head'
import React, { useEffect, useState } from "react";
import {appointmentList} from '../Components/HttpPostRequest'

export default function RefundPolicy(){

    useEffect(async () => {
       
        let appointmentListData = await appointmentList();
      }, []);

    return(
        <>
            <Head>
                <title>Home -- Shafa Care</title>
                <meta
                    name="keyboard"
                    content="Shafa Care, Online Doctor,Medical Help,Online Medical Help, Home"
                />
            </Head>
            <Navbar />            
                <div id="doctor-appointment" className="ptb-100">
                    <div className="container pt-5">
                        <div className="row">
                            <h1>Doctor Appointment</h1>
                        </div>
                    </div>
                </div>
            <Footer />
         </>
    )
}   


