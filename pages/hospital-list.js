import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Link from "next/link";
import Head from "next/head";

import axios from "../authAxios";
import { useEffect, useState } from "react";
import tempImg from "../public/assets/img/logo.png";
import HospitalCardList from '../Components/HospitalListCard'

export default function Specialities() {
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

  const [hospitalList, setHospitalList] = useState();

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

  return (
    <>
      <Head>
        <title>Hospital List -- Shafa Care</title>
        <meta
          name="keyboard"
          content="Shafa Care, Online Doctor,Medical Help ,Online Medical Help, Hospital List"
        />
      </Head>
      <Navbar />
      <section id="hospital-list">
        <div className="container pt-100 pb-50">
          <div className="row hospital_area">
            <h1 className="w-100">Hospital List</h1>
            <div className="hospital_card d-flex flex-wrap ">
              {
                hospitalList?
                hospitalList.map((item) => {
                  return(
                    <div className="hospital_single_card">
                      <HospitalCardList data={item}/>
                    </div>
                  )
                }):null
              }
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
