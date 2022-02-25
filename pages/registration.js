import React, { Component } from "react";
import Head from "next/head";
import { useState } from "react";
import Axios from "../authAxios";
import { applyICFLReg } from "../Components/HttpPostRequest";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Link from "next/link";
import { useRouter } from 'next/router'
import { toast } from 'react-toast'


export default function Seller() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();
  const [phone, setPhone] = useState();
  const [otpData, setOtpData] = useState();

  const getOtpData = async () => {
    return await Axios.post("user/isExist-public", { phone: phone })
      .then((response) => {
        let status = "status" in response;
        if (!status) {
          response.status = 401;
          return response;
        }
        return response;
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  };
  const [sec, setSec] = useState("");
  const [notification, setNotification] = useState();
  const [noteFirstName, setNoteFirstName] = useState("");
  const [noteLastName, setNoteLastName] = useState("");
  const [notePhone, setNotePhone] = useState("");
  const [notePassword, setNotePassword] = useState("");
  const [noteConfirm, setNoteConfirm] = useState("");
  const [noteOtp, setNoteOtp] = useState("");
  const [otpBtnClass, setOtpBtnClass] = useState("otp_btn_show");
  let routeLink = useRouter();

  function phonenumber(inputtxt) {
    if (inputtxt[0] == "0" && inputtxt[1] == "1" && inputtxt.length == 11) {
      return true;
    } else {
      return false;
    }
  }

  function setTimeInterval() {
    var temp = true;
    if (phone) {
      if (phonenumber(phone)) {
        let second = 61;
        setNotification("");
        setOtpBtnClass("otp_btn_hide");
        function countDown() {
          if (temp) {
            temp = false;

            getOtpData()
              .then((res) => {
                if (res.data.status == 203) {
                  setNotification("User already exist");
                  second = -2;
                  setOtpBtnClass("otp_btn_show");
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
          if (second < 0) setSec("");
          else setSec(second);
          second--;
          if (second < 1) setOtpBtnClass("otp_btn_show");

          if (second > 0) setTimeout(countDown, 1000);
        }

        countDown();
      } else {
        setNotification("Phone No. is incorrect");
      }
    } else {
      setNotification("Phone No. Eempty");
    }
  }

  function mySubmitHandler() {
    if (password == confirm && password.length > 5) {
      let body = {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        otp: otpData,
        password: password,
      };

      if (firstName && lastName && phone && otpData && password) {
        applyICFLReg(body)
          .then((res) => {
            if (res.data.status == 200) {
              toast.success("Success. Redirecting to...")
              routeLink.push({ pathname: '/login' })
            } else {
              toast.error(res.data.msg);
            }
          })
          .catch((err) => {
            console.log("ERROR", err);
          });
      } else {
        if (!firstName) setNoteFirstName("Field should not be empty");
        else setNoteFirstName("");
        if (!lastName) setNoteLastName("Field should not be empty");
        else setNoteLastName("");
        if (!phone) setNotePhone("Field should not be empty");
        else setNotePhone("");
        if (!password || !confirm)
          setNotePassword("Field should not be empty");
        else setNotePassword("");
        if (!otpData) setNoteOtp("Field should not be empty");
        else setNoteOtp("");
      }
    } else if (password.length < 6) {
      setNoteConfirm("Password length should be atleast 6 character ");
    }

    else {
      setNoteConfirm("Confirmation mismatched");
    }
  }
  return (
    <>
      <Head>
        <title>ICFL Registration -- Shafa Care</title>
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
                    <div className="col-md-12 mb-5 ">
                      <h3>Registration</h3>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">
                          First Name<span className="text-danger"> *</span>
                        </label>
                        <input
                          value={firstName}
                          onInput={(e) => setFirstName(e.target.value)}
                          type="text"
                          name="firstName"
                          id="firstName"
                          className="form-control"
                          required
                          data-error="Please enter your Last Name"
                          placeholder="First Name"
                        />
                        {noteFirstName !== "" ? (
                          <p className="text-red text-left">{noteFirstName}</p>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">
                          Last Name<span className="text-danger"> *</span>
                        </label>
                        <input
                          value={lastName}
                          onInput={(e) => setLastName(e.target.value)}
                          type="text"
                          name="lastName"
                          id="lastName"
                          className="form-control"
                          required
                          data-error="Please enter your Last Name"
                          placeholder="Last Name"
                        />
                        {noteLastName !== "" ? (
                          <p className="text-red text-left">{noteLastName}</p>
                        ) : null}
                      </div>
                    </div>

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
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">
                          Confirm Password
                          <span className="text-danger"> *</span>
                        </label>
                        <input
                          value={confirm}
                          onInput={(e) => setConfirm(e.target.value)}
                          type="password"
                          name="confirm"
                          id="confirm"
                          className="form-control"
                          required
                          data-error="Please enter your response"
                          placeholder="Confirm Password"
                        />
                        {noteConfirm !== "" ? (
                          <p className="text-red text-left">
                            {noteConfirm}
                          </p>
                        ) : null}
                      </div>
                    </div>

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
                        {sec > 1 && sec != 61 && !notification ? (
                          <p className="count__down">{sec - 1}</p>
                        ) : (
                          <button
                            className="get-otp"
                            type="button"
                            onClick={setTimeInterval}
                          >
                            Get OTP
                            <span></span>
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6" id="notification-phone">
                      <div className="countdown d-flex">
                        <div>
                          {notification ? (
                            <p className="text-red">{notification}</p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    {/* {sec > 1 && sec != 61 && !notification ? */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">
                          OTP<span className="text-danger"> *</span>
                        </label>
                        <input
                          value={otpData}
                          onInput={(e) => setOtpData(e.target.value)}
                          type="text"
                          name="otp"
                          id="end-time"
                          required
                          data-error="Please enter the OTP"
                          className="form-control"
                          placeholder="Please enter the OTP"
                        />
                        {noteOtp !== "" ? (
                          <p className="text-red text-left">{noteOtp}</p>
                        ) : null}
                      </div>
                    </div>
                    {/* :null
} */}
                    <div className="col-md-12" id="notification-pc">
                      <div className="countdown d-flex">
                        <div>
                          {notification ? (
                            <p className="text-red">{notification}</p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 pt-4">
                      <div className="proceed-btn text-center">
                        <button
                          className="submit"
                          type="button"
                          onClick={mySubmitHandler}
                        >
                          Proceed
                        </button>
                      </div>
                    </div>

                    <div className="col-md-12 txt-sm pt-">
                      <p className="text-center">Already have account then please <Link href='/login'>Click here</Link></p>
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
