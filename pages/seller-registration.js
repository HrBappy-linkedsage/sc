import React, { Component } from "react";
import Head from "next/head";
import Select from "react-select";
import { useState } from "react";
import Axios from "../sellerAxios";
import { applySeller } from "../Components/HttpPostRequest";
import Link from "next/link";
import GoogleMapReact from "google-map-react";
import Autocomplete from "react-google-autocomplete";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Marker from "../Components/Marker";

import cardImg1 from "../public/assets/img/seller/partner1.png";
import cardImg2 from "../public/assets/img/seller/partner2.png";
import cardImg3 from "../public/assets/img/seller/partner3.png";
import cardImg4 from "../public/assets/img/seller/partner4.png";

import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyArhefcf7KGAUeE_zsTHW4XvS1cz_ybAAE");
Geocode.enableDebug();

export default function Seller() {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [shopType, setShopType] = useState();
  const [email, setEmail] = useState();
  const [openingTime, setOpeningTime] = useState();
  const [closingTime, setClosingTime] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();
  const [phone, setPhone] = useState();
  const [lat, setLat] = useState(23.811056);
  const [long, setLong] = useState(90.399452);
  const [otpData, setOtpData] = useState();

  const [checkBox, setCheckBox] = useState(0);

  const [center, setCenter] = useState({ lat: 23.811056, lng: 90.399452 });
  const [zoom, setZoom] = useState(11);

  var shopValues = [
    { value: "1", label: "Shop" },
    { value: "2", label: "Pharmacy" },
  ];

  var sellerCardData = [
    {
      id: 1,
      image: cardImg1,
      title: "Revenue Growth",
      description:
        "Widen your reach to customer base of ShafaCare and grow your business upto 2 times.",
    },
    {
      id: 2,
      image: cardImg2,
      title: "Easy Processing",
      description:
        "Order processing and operations becomes easy for you with our when you get to leverage the help of technology in doing business.",
    },
    {
      id: 3,
      image: cardImg3,
      title: "Business Insights",
      description:
        "Get meaningful information for improving operations, inventory forecasting, accounting in order to improve your overall business.",
    },
    {
      id: 4,
      image: cardImg4,
      title: "One-stop Healthcare",
      description:
        "Opportunity to get into other healthcare services like diagnostics, healthcare products and become a one-stop-shop for all healthcare needs.",
    },
  ];

  const getOtpData = async () => {
    return await Axios.post("seller/isExist", { phone: phone })
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
  const [submitSMS, setSubmitSMS] = useState(-1);
  const [sec, setSec] = useState("");
  const [notification, setNotification] = useState();
  const [otpBtnClass, setOtpBtnClass] = useState("otp_btn_show");
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
                if (res.data.status == 409) {
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

  function shopTypeHandleChange(value) {
    setShopType(value.value);
  }

  function mySubmitHandler() {
    if (password == confirm) {
      if (address) {
        let body = {
          name: name,
          shopType: shopType,
          address: address,
          password: password,
          phone: phone,
          openingTime: openingTime,
          closingTime: closingTime,
          email: email,
          otp: otpData,
          lat: lat,
          long: long,
        };

        applySeller(body)
          .then((res) => {
            if (res.status == 200) {
              alert("Request submited successfully");
              resetForm();
            } else {
              alert("Submission failed");
            }
          })
          .catch((err) => {
            console.log("ERROR", err);
          });
      } else {
        alert("Please select store location from Map");
      }
    } else {
      // setPassMsg('d-block')
      console.log("error pass");
    }
  }

  function checkFun() {
    if (checkBox == 1) setCheckBox(0);
    else setCheckBox(1);
  }

  const onClickMap = (item) => {
    Geocode.fromLatLng(item.lat, item.lng).then(
      (response) => {
        const Address = response.results[0].formatted_address;
        setAddress(Address);
      },
      (error) => {
        console.error("hello", error);
      }
    );
    setLat(item.lat);
    setLong(item.lng);
  };
  function setLatLng(place) {
    let la = place.geometry.location.lat();
    let ln = place.geometry.location.lng();

    setLat(la);
    setLong(ln);

    setCenter({ la, ln });
    setAddress(place.formatted_address);
  }

  function closeBtn() {
    setAddress("");
  }

  return (
    <>
      <Head>
        <title>Seller Registration -- Shafa Care</title>
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
              <div className="left-img col-md-6 d-flex justify-content-center align-items-center">
                <form>
                  <div className="row">
                    <div className="col-md-12 mb-3 ">
                      <h3>Partner with us</h3>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">
                          Name<span className="text-danger"> *</span>
                        </label>
                        <input
                          value={name}
                          onInput={(e) => setName(e.target.value)}
                          type="text"
                          name="shopName"
                          id="shopName"
                          className="form-control"
                          required
                          data-error="Please enter your shop name"
                          placeholder="Shop Name"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">
                          Shop Type<span className="text-danger"> *</span>
                        </label>
                        <Select
                          placeholder={
                            <div className="d-flex align-items-center">
                              <div className="plaseholder__">
                                - - - Shop Type - - -
                              </div>
                            </div>
                          }
                          className="w-100 basic-multi-select"
                          name="gender"
                          classNamePrefix="select"
                          options={shopValues}
                          onChange={(event) => shopTypeHandleChange(event)}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">
                          Opening Time
                        </label>
                        <input
                          value={openingTime}
                          onInput={(e) => setOpeningTime(e.target.value)}
                          type="time"
                          name="openingTime"
                          id="openingTime"
                          className="form-control timepicker"
                          required
                          data-error="Please enter your response"
                          placeholder="Opening Time"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">
                          Closing Time
                        </label>
                        <input
                          value={closingTime}
                          onInput={(e) => setClosingTime(e.target.value)}
                          type="time"
                          name="closingTime"
                          id="closingTime"
                          className="form-control"
                          required
                          data-error="Please enter your response"
                          placeholder="Closing Time"
                        />
                        <div className="help-block with-errors"></div>
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
                        <div className="help-block with-errors"></div>
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
                        <div className="help-block with-errors"></div>
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
                            <p className="text-red">note : {notification}</p>
                          ) : null}
                        </div>
                      </div>
                    </div>

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
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12" id="notification-pc">
                      <div className="countdown d-flex">
                        <div>
                          {notification ? (
                            <p className="text-red">{notification}</p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">Email</label>
                        <input
                          value={email}
                          onInput={(e) => setEmail(e.target.value)}
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          required
                          data-error="Please enter your response"
                          placeholder="Email"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">Address</label>
                        <input
                          value={address}
                          disabled="disabled"
                          onInput={(e) => setEmail(e.target.value)}
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          required
                          data-error="Please enter your response"
                          placeholder="Address"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className=" col-md-6 pt-5 pb-5">
                <form>
                  <div className="row">
                    <div className="col-md-12 mt-3 mb-5">
                      <div className="map form-group">
                        <label className="w-100 text-left mb-3 ">
                          Select Your Store Location
                          <span className="text-danger"> *</span>
                        </label>
                        <GoogleMapReact
                          bootstrapURLKeys={{
                            key: "AIzaSyArhefcf7KGAUeE_zsTHW4XvS1cz_ybAAE",
                          }}
                          defaultCenter={center}
                          defaultZoom={zoom}
                          onClick={onClickMap}
                        >
                          <Marker lat={lat} lng={long} />
                        </GoogleMapReact>
                        <div className="auto-complete form-group">
                          <Autocomplete
                            defaultValue={address}
                            apiKey={"AIzaSyArhefcf7KGAUeE_zsTHW4XvS1cz_ybAAE"}
                            onPlaceSelected={(place) => {
                              setLatLng(place);
                            }}
                            options={{
                              types: ["(regions)"],
                              componentRestrictions: { country: "bd" },
                            }}
                          />
                          {address ? (
                            <div className="search">
                              <i class="fas fa-search"></i>
                              {/* <button onClick={closeBtn}><i class="fas fa-times"></i></button>                                                                 */}
                            </div>
                          ) : (
                            <div className="search">
                              <i class="fas fa-search"></i>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="com-md-12">
                <div className="col-md-12 proceed-btn text-left">
                  {checkBox == 1 ? (
                    <button
                      className="d-flex  align-items-center agree"
                      type="button"
                      onClick={checkFun}
                    >
                      <i className="far fa-check-square"></i>
                      <p className="ml-2">
                        I agree to the{" "}
                        <Link href="/terms-condition">
                          <a href="">Terms And Conditions</a>
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy-policy">
                          <a href="">Privacy Policy</a>
                        </Link>{" "}
                        of Shafa Care Platform and Services
                      </p>
                    </button>
                  ) : (
                    <button
                      className="d-flex  align-items-center agree"
                      type="button"
                      onClick={checkFun}
                    >
                      <i className="far fa-square"></i>
                      <p className="ml-2">
                        I agree to the{" "}
                        <Link href="/terms-condition">
                          <a href="">Terms And Conditions</a>
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy-policy">
                          <a href="">Privacy Policy</a>
                        </Link>{" "}
                        of Shafa Care Platform and Services
                      </p>
                    </button>
                  )}
                </div>
                <div className="col-md-6 proceed-btn text-left">
                  {checkBox == 1 ? (
                    <button
                      className="submit"
                      type="button"
                      onClick={mySubmitHandler}
                    >
                      Proceed
                    </button>
                  ) : (
                    <button className="disable" type="button">
                      Proceed
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
                <div className="middle pt-100 mb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 pb-5">
                                <h2 className="w-100">Why partner with ShafaCare</h2>
                            </div>
                            {
                                sellerCardData.map((item) => {
                                    return (
                                        <SellerCard image={item.image} title={item.title} description={item.description} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div> */}
        {/* <div className="middle-end">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="w-100 mb-4">Get Listed on Bangladesh’s Leading Online Medicine Delivery App</h2>
                                <h6 className="mb-3">A Simple 4 Step Process To Get Listed</h6>
                            </div>
                            <div className="col-md-6">
                                <img src={bottomEnd1} />
                                <div className="register-btn pt-5 pl-5 ml-5">
                                    <Link href="seller-registration/#seller-apply"><a>Register Now</a></Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={bottomEnd2} />
                            </div>
                        </div>
                    </div>
                </div> */}
        {/* <div className="mb-100">
                    <div className="bottom-part pt-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="w-100 mb-4">How Shafa Care works?</h2>
                                </div>
                                <div className="col-md-3 p-4">
                                    <div className="bottom-card d-flex justify-content-center align-items-center">
                                        <img src={bottomCard1} alt="" />
                                    </div>
                                    <h6>Select and accept an order</h6>
                                </div>
                                <div className="col-md-3 p-4">
                                    <div className="bottom-card d-flex justify-content-center align-items-center">
                                        <img src={bottomCard2} alt="" />
                                    </div>
                                    <h6>Pack order as per customer’s request</h6>
                                </div>
                                <div className="col-md-3 p-4">
                                    <div className="bottom-card d-flex justify-content-center align-items-center">
                                        <img src={bottomCard3} alt="" />
                                    </div>
                                    <h6>Create invoice and dispatch an order</h6>
                                </div>
                                <div className="col-md-3 p-4">
                                    <div className="bottom-card d-flex justify-content-center align-items-center">
                                        <img src={bottomCard4} alt="" />
                                    </div>
                                    <h6>Track and settle the amount</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
      </section>
      <div className="mt-5"></div>
      <Footer />
    </>
  );
}
