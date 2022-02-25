import React, { Component } from "react";
import Head from "next/head";
import { useState } from "react";
import { applyICFLLogin, userPointInsert,doctorLogin } from "../Components/HttpPostRequest";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router'
import { toast } from 'react-toast'
import Link from "next/link";
import Select from 'react-select'


export default function Seller() {
  let routeLink = useRouter();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [cookies, setCookie] = useCookies(['userData']);

  const [notePhone, setNotePhone] = useState();
  const [notePassword, setNotePassword] = useState();
  const [role, setRole] = useState()

  const actions = [
    {label: 'User',value: 1},
    {label: 'Doctor',value: 2},
  ]

  function mySubmitHandler() {
    let body = {
      phone: phone,
      password: password,
    };
    if(role){
    if (phone && password) {
      if(role.value == 1){
      applyICFLLogin(body)
        .then((res) => {
          console.log("ssssssss",res)
          if (res.data.status == 200) {
            console.log("rrreeesss",res.data)
            let temp = {
              userId : res.data.data.id,
              token: res.data.token,
              data : res.data.data
            }
            if(res.data.data.user_point === null){
              userPointInsert({userId:res.data.data.id})
              .then((response) => {
                // console.log(response)
              })
              .catch((errr) => {
                console.log("ERROR", errr);
              });
            }

            toast.success("Login success. Redirecting to...")
            console.log("cccccccc",temp)
            setCookie('userData', temp, { path: '/' });
            // routeLink.push({ pathname: '/icfl-prediction' })
            window.location.href = '/'
          } else {
            toast.error(res.data.msg);
          }
        })
        .catch((err) => {
          console.log("ERROR", err);
        });
      }
      else{
        doctorLogin(body)
        .then((res) => {
          if (res.data.status == 200) {
            console.log("rrreeesss",res.data)
            let temp = {
              userId : res.data.data.id,
              token: res.data.token,
              data : res.data.data
            }
            if(res.data.data.user_point === null){
              userPointInsert({userId:res.data.data.id})
              .then((response) => {
                // console.log(response)
              })
              .catch((errr) => {
                console.log("ERROR", errr);
              });
            }

            toast.success("Login success. Redirecting to...")
            console.log("cccccccc",temp)
            setCookie('userData', temp, { path: '/' });
            // routeLink.push({ pathname: '/icfl-prediction' })
            window.location.href = '/'
          } else {
            toast.error(res.data.msg);
          }
        })
        .catch((err) => {
          console.log("ERROR", err);
        });
      }
    } else {

      if (phone) setNotePhone();
      else setNotePhone("Field should not be empty");
      if (password) setNotePassword("");
      else setNotePassword("Field should not be empty");

    }
  }
  else{
    toast.error("Field cannot be empty")
  }
  }

  return (
    <>
      <Head>
        <title>ICFL Login -- Shafa Care</title>
        <meta
          name="keyboard"
          content="Shafa Care, Online Doctor,Medical Help ,Online Medical Help, Seller Registration, Shafa Care Seller Registration"
        />
      </Head>
      <Navbar />
      <section id="seller-apply" className="pt-100">
        <div className="body">
          <div className="container pt-5">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="left-img col-md-8 d-flex justify-content-center align-items-center">
                <form>
                  <div className="row">
                    <div className="col-md-12 mb-3 ">
                      <h3 className="w-100 text-center">Login</h3>
                    </div>

                    <div className="col-md-3"></div>

                    <div className="col-md-6">
                      <div className="form-group form-group-phone">
                        <label className="w-100 text-left  ">
                          Phone No. <span className="text-danger">*</span>
                        </label>
                        <input
                          value={phone}
                          onInput={(e) => setPhone(e.target.value)}
                          type="text"
                          name="phone"
                          id="phone"
                          required
                          data-error="Please enter your Phone No."
                          className="form-control"
                          placeholder="Phone No."
                        />
                        {notePassword !== "" ? (
                          <p className="text-red text-left">
                            {notePhone}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    
                    <div className="col-md-3"></div>
                    
                    <div className="col-md-3"></div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">
                          Password<span className="text-danger"> *</span>
                        </label>
                        <input
                          value={password}
                          onInput={(e) => setPassword(e.target.value)}
                          type="password"
                          name="password"
                          id="password"
                          className="form-control"
                          required
                          data-error="Please enter your response"
                          placeholder="Password"
                        />
                        {notePassword !== "" ? (
                          <p className="text-red text-left">
                            {notePassword}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    
                    <div className="col-md-3"></div>
                    <div className="col-md-3"></div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">
                          Type<span className="text-danger"> *</span>
                        </label>
                        <Select
                            // defaultValue={}
                            placeholder={
                              <label className="w-100 text-left pt-2 ">--- Select Role ---</label>
                            }
                            className="w-100"
                            name="role"
                            options={actions}
                            onChange={(event) => setRole(event)}
                          />
                      </div>
                    </div>
                    
                    <div className="col-md-3"></div>




                    <div className="col-md-12">
                      <div className="proceed-btn text-center">
                        <button
                          className="submit"
                          type="button"
                          onClick={mySubmitHandler}
                        >
                          Submit
                        </button>
                      </div>
                    </div>

                    
                    <div className="col-md-12 txt-sm pt-3">
                      <p className="text-center">If don't have account please <Link href='/registration'>Click here</Link></p>
                    </div>

                  </div>
                </form>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-5"></div>
      <Footer />
    </>
  );
}
