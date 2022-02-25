import React, { Component } from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import Axios from "../authAxios";
import { doctorUpdate, userUpdate } from "../Components/HttpPostRequest";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { toast } from "react-toast";
import Select from 'react-select';
import { format } from 'date-fns'

export default function Seller() {
  const [cookies, setCookie, removeCookies] = useCookies(["userData"]);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [age, setAge] = useState();
  const [bloodGroup, setBloodGroup] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [userInfo, setUserInfo] = useState();
  const [genderIndex,setGenderIndex] = useState(0)
  const [bgIndex,setBgIndex] = useState(0)
  console.log("ckkkk", cookies);
  // const userInfo = cookies.userData.data

  useEffect(() => {
    const temp = cookies.userData.data;

    if(temp && temp.practicingSince)
    temp.practicingSince = format(new Date(temp.practicingSince), 'yyyy-MM-dd')
    if(temp && temp.gender){
    if(temp.gender == 'Male') setGenderIndex(0)
    else if(temp.gender == 'Female') setGenderIndex(1)
    else setGenderIndex(2)
    }
    if(temp && temp.bloodGroup){
      if(temp.bloodGroup == 'A+') setBgIndex(0)
      else if(temp.bloodGroup == 'A-') setBgIndex(1)
      else if(temp.bloodGroup == 'B+') setBgIndex(2)
      else if(temp.bloodGroup == 'B-') setBgIndex(3)
      else if(temp.bloodGroup == 'AB+') setBgIndex(4)
      else if(temp.bloodGroup == 'AB-') setBgIndex(5)
      else if(temp.bloodGroup == 'O+') setBgIndex(6)
      else if(temp.bloodGroup == 'O-') setBgIndex(7)
    }
    
    console.log("cvv", temp);
    // setFirstName(temp.firstName);
    // setLastName(temp.lastName);
    // setAge(temp.age);
    // setEmail(temp.email);
    // setBloodGroup(temp.bloodGroup);
    // setGender(temp.gender);
    // setHeight(temp.height);
    // setWeight(temp.weight);
    if(temp && temp.file)
    setFile({data:"https://api-admin.shafa.care/api/v3/auth/publicFile/"+temp.file.path})
    console.log("file",temp)

    setUserInfo(temp);
  }, []);

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
  const[name,setName] = useState();
  const[BMDC,setBMDC] = useState();
  const[department,setDepartment] = useState();
  const[designation,setDesignation] = useState();
  const[education,setEducation] = useState();
  const[practicingSince,setPracticingSince] = useState();
  const[fee,setFee] = useState();
  let routeLink = useRouter();

  const bloodGroupOption = [
    {
      value:'A+',
      label: 'A+'
    },{
      value:'A-',
      label: 'A-'
    },{
      value:'B+',
      label: 'B+'
    },{
      value:'B-',
      label: 'B-'
    },{
      value:'AB+',
      label: 'AB+'
    },{
      value:'AB-',
      label: 'AB-'
    },{
      value:'O+',
      label: 'O+'
    },{
      value:'O-',
      label: 'O-'
    },
  ]
  const genderOption = [
    {
      label:'Male',
      value:'Male'
    },{
      label:'Female',
      value:'Female'
    },{
      label:'Other',
      value:'Other'
    },
  ]

  const [file, setFile] = useState({ data: "https://api-admin.shafa.care/api/v3/auth/publicFile/temp" });
  const [fileValue, setFileValue] = useState();

  function mySubmitHandler() {
    if(userInfo.bmdcRegNo){
      let body = {
        id:userInfo.id,
        name: userInfo.name,
        bmdcRegNo: userInfo.bmdcRegNo,
        department:userInfo.department,
        designation: userInfo.designation,
        education:userInfo.education,

        fee:userInfo.fee,
      };
      if(fee)body.fee = fee
      if(department) body.department = department
      if(designation) body.designation = designation
      if(education) body.education = education
      if (fileValue) body["file"] = fileValue;
      console.log("boddy",body)

      doctorUpdate(body)
      .then((res) => {
        console.log("ttttt",res)
        if (res.data.status == 200) {
          removeCookies("userData");
          let temp = {
            userId : cookies.userData.id,
            token: cookies.userData.token,
            data : res.data.data
          }
          setCookie('userData', temp, { path: '/' });
          toast.success("Success. Redirecting to...");
          routeLink.push({ pathname: "/view-profile" });
        } else {
          toast.error(res.data.msg);
        }
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
      
    }
    else{
    let body = {
      id:userInfo.id,
      firstName: firstName,
      lastName: lastName,
    };
    if (email) body.email = email;
    if (age) body.age = age;
    if (bloodGroup) body.bloodGroup = bloodGroup;
    if (gender) body.gender = gender;
    if (height) body.height = height;
    if (weight) body.weight = weight;
    if (fileValue) body["file"] = fileValue;

    console.log("onClick", body);

    userUpdate(body)
      .then((res) => {
        console.log("ttttt",res)
        if (res.data.status == 200) {
          removeCookies("userData");
          let temp = {
            userId : cookies.userData.id,
            token: cookies.userData.token,
            data : res.data.data
          }
          setCookie('userData', temp, { path: '/' });
          toast.success("Success. Redirecting to...");
          routeLink.push({ pathname: "/view-profile" });
        } else {
          toast.error(res.data.msg);
        }
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
    }
  }


  if(userInfo){
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
                {
                  userInfo.bmdcRegNo?
<form>
                  <div className="row">
                    <div className="col-md-12 mb-5 d-flex justify-content-between">
                      <h3>Update profile</h3>
                      {/* <div className="img-select">
                        <img src={file.data} alt="avatar" />
                      </div> */}
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">
                          Name <span className="text-danger"> *</span>
                        </label>
                        <input
                          value={userInfo.name}
                          onInput={(e) => setName(e.target.value)}
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          required
                          data-error="Please enter your Name"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">
                          BMDC Reg. No. <span className="text-danger"> *</span>
                        </label>
                        <input
                          value={userInfo.bmdcRegNo}
                          onInput={(e) => setBMDC(e.target.value)}
                          type="text"
                          name="bmdcRegNo"
                          id="bmdcRegNo"
                          className="form-control"
                          required
                          data-error="Please enter your Last Name"
                          placeholder="BMDC Reg. No."
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">
                          Profile picture
                        </label>
                        <input
                          value={file.filename}
                          onChange={(event) => {
                            console.log("imageee",event.currentTarget.files[0])
                            setFileValue(event.currentTarget.files[0]);
                            setFile({data:event.currentTarget.files[0]})

                          }}
                          type="file"
                          name="avatar"
                          id="avatar"
                          className="form-control"
                          required
                          data-error="Profile Picture"
                          placeholder="Profile Picture"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">Department</label>
                        <input
                          value={userInfo.department}
                          onInput={(e) => setDepartment(e.target.value)}
                          type="text"
                          name="department"
                          id="department"
                          className="form-control"
                          required
                          data-error="Please enter your response"
                          placeholder="Your Department"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">Designation</label>
                        <input
                          value={userInfo.designation}
                          onInput={(e) => setDesignation(e.target.value)}
                          type="text"
                          name="designation"
                          id="designation"
                          className="form-control"
                          required
                          data-error="Please enter your response"
                          placeholder="Designation"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">Education</label>
                        <input
                          value={userInfo.education}
                          onInput={(e) => setEducation(e.target.value)}
                          type="text"
                          name="education"
                          id="education"
                          className="form-control"
                          required
                          data-error="Please enter your response"
                          placeholder="Education"
                        />
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">Gender</label>
                        
                          <Select
                            // defaultvalue={userInfo.}
                            placeholder={
                              <label className="w-100 text-left pt-2 ">--- Select Gender---</label>
                            }
                            value = {genderOption.value}
                            defaultValue = {genderOption[genderIndex]}
                            className="w-100"
                            name="bloodGroup"
                            options={genderOption}
                            onChange={(event) => setGender(event.value)}
                          />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">Practicing Since</label>
                        <input
                          value={userInfo.practicingSince}
                          onInput={(e) => setPracticingSince(e.target.value)}
                          type="date"
                          name="practicingSince"
                          id="practicingSince"
                          className="form-control"
                          required
                          data-error="Please enter your response"
                          placeholder="Practicing Since"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">Fee</label>
                        <input
                          value={userInfo.fee}
                          onInput={(e) => setFee(e.target.value)}
                          type="text"
                          name="fee"
                          id="fee"
                          className="form-control"
                          required
                          data-error="Please enter your response"
                          placeholder="Your Fee"
                        />
                      </div>
                    </div>
                    
                    <div className="col-md-12 pt-4">
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

                    <div className="col-md-12 txt-sm pt-">
                      <p>
                        Already have account then please{" "}
                        <Link href="/icfl-login">Click here</Link>
                      </p>
                    </div>
                  </div>
                </form>

                :

                <form>
                  <div className="row">
                    <div className="col-md-12 mb-5 d-flex justify-content-between">
                      <h3>Update profile</h3>
                      {/* <div className="img-select">
                        <img src={file.data} alt="avatar" />
                      </div> */}
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">
                          First Name <span className="text-danger"> *</span>
                        </label>
                        <input
                          value={userInfo.firstName}
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
                          Last Name <span className="text-danger"> *</span>
                        </label>
                        <input
                          value={userInfo.lastName}
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
                          Profile picture
                        </label>
                        {console.log("mr x",file.filename)}
                        <input
                          value={file.filename}
                          onChange={(event) => {
                            setFileValue(event.currentTarget.files[0]);
                            setFile({data:event.currentTarget.files[0]})

                          }}
                          type="file"
                          name="avatar"
                          id="avatar"
                          className="form-control"
                          required
                          data-error="Profile Picture"
                          placeholder="Profile Picture"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">Age</label>
                        <input
                          value={userInfo.age}
                          onInput={(e) => setAge(e.target.value)}
                          type="text"
                          name="age"
                          id="age"
                          className="form-control"
                          required
                          data-error="Please enter your response"
                          placeholder="Your age"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">Email</label>
                        <input
                          value={userInfo.email}
                          onInput={(e) => setEmail(e.target.value)}
                          type="text"
                          name="email"
                          id="email"
                          className="form-control"
                          required
                          data-error="Please enter your response"
                          placeholder="Email"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">Blood Group</label>
                        
                          <Select
                            placeholder={
                              <label className="w-100 text-left pt-2 ">--- Select blood group ---</label>
                            }                            
                            // value={userInfo.gender}
                            value = {bloodGroupOption.value}
                            defaultValue = {bloodGroupOption[bgIndex]}
                            className="w-100"
                            name="bloodGroup"
                            options={bloodGroupOption}
                            onChange={(event) => setBloodGroup(event.value)}
                          />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">Gender</label>
                        
                        <Select
                            // defaultvalue={userInfo.}
                            placeholder={
                              <label className="w-100 text-left pt-2 ">--- Select Gender---</label>
                            }
                            value = {genderOption.value}
                            defaultValue = {genderOption[genderIndex]}
                            className="w-100"
                            name="bloodGroup"
                            options={genderOption}
                            onChange={(event) => setGender(event.value)}
                          />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">Height</label>
                        <input
                          value={userInfo.height}
                          onInput={(e) => setHeight(e.target.value)}
                          type="text"
                          name="height"
                          id="height"
                          className="form-control"
                          required
                          data-error="Please enter your response"
                          placeholder="Your Height"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="w-100 text-left  ">Weight</label>
                        <input
                          value={userInfo.weight}
                          onInput={(e) => setWeight(e.target.value)}
                          type="text"
                          name="weight"
                          id="weight"
                          className="form-control"
                          required
                          data-error="Please enter your response"
                          placeholder="Your Weight"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 pt-4">
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

                    <div className="col-md-12 txt-sm pt-">
                      <p>
                        Already have account then please{" "}
                        <Link href="/icfl-login">Click here</Link>
                      </p>
                    </div>
                  </div>
                </form>
                }
                
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
                          else{
                            return<></>
                          }
}
