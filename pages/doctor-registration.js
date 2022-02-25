
import React, { Component, useState, useEffect } from 'react';
import Head from 'next/head'
import { applyDoctor } from '../Components/HttpPostRequest'
import Select from 'react-select';
import axios from '../authAxios'
import Link from 'next/link'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import logo from '../public/assets/img/logo.png'

import applySuccess from '../public/assets/img/doctor-apply-success.jpg'


export default function App() {

    const [currentQuestion, setCurrentQuestion] = useState(0)


    const [name, setName] = useState("Dr. ")
    const [regNo, setRegNo] = useState()
    // const [education, setEducation] = useState()
    // const [degree, setDegree] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const [confirm, setConfirm] = useState()
    const [practicing, setPracticing] = useState()
    const [fee, setFee] = useState()
    // const [institute, setInstitute] = useState()
    const [gender, setGender] = useState()
    // const [dateOfBirth, setDateOfBirth] = useState()
    // const [designation, setDesignation] = useState()
    // const [department, setDepartment] = useState()
    // const [nid, setNid] = useState()
    const [specialist, setSpecialist] = useState()
    // const [additional, setAdditional] = useState()
    const [hospital, setHospital] = useState()
    const [file, setFile] = useState({ data: '../../assets/img/user.jpg' })
    const [fileValue,setFileValue]=useState()
    const [start, setStart] = useState()
    // const [end, setEnd] = useState([])
    const [nidFileIdFront, setNidFileIdFront] = useState()
    const [nidFileIdBack, setNidFileIdBack] = useState()

    const [notification, setNotification] = useState()
    const [otpData, setOtpData] = useState()
    const [sec, setSec] = useState("");
    const [otpForm, setOtpForm] = useState(0);
    const [optBtn, setOptBtn] = useState(1)
    const [checkbox, setCheckbox] = useState(0)

    var genderValues = [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Other", label: "Other" }
    ]

    

    const getSpecilistLists = async () => {
        return await axios.post('/specialist/specialist-list')
            .then(response => {
                let status = 'status' in response
                if (!status) {
                    response.status = 401
                    return response
                }
                return response.data.data
            })
            .catch(err => {
                console.log(err)
                return []
            })
    }

    const [loadingData, setLoadingData] = useState(true);



    const getOtpData = async () => {
        return await axios
            .post("doctor/isExist", { phone: phone })
            .then((response) => {
                let status = "status" in response;
                if (!status) {
                    response.status = 401;
                    return response;
                }
                return response.data;
            })
            .catch((err) => {
                console.log(err);
                return [];
            });
    };

    useEffect(() => {
        if (loadingData) {
            getSpecilistLists().then(res => {
                var temp = [
                    {
                        value: '',
                        label: ''
                    }
                ]
                res.map(item => {
                    temp.push({ value: item.id, label: item.name })
                })
                setSpecialistLists(temp)

            }).catch((err) => { console.log(err) });
        }
    }, []);

    const [HospitalLists, setHospitalList] = useState([])
    const [specialistLists, setSpecialistLists] = useState([])
    const [association, setAssociation] = useState(0)
    const [submitSMS, setSubmitSMS] = useState(-1)


    function nextQuestionFun() {
        setCurrentQuestion(currentQuestion + 1)
    }
    function previousPageFun() {
        setCurrentQuestion(currentQuestion - 1)
    }
    function nextPageFun() {
        setCurrentQuestion(currentQuestion + 1)
    }

    function setSpecilistFun(data) {
        setSpecialist(data)
        setCurrentQuestion(currentQuestion + 1)
    }

    function associationFun(data) {
        setAssociation(data)
        if (data == 1) setCurrentQuestion(currentQuestion + 1)
        else if (data == -1) setCurrentQuestion(currentQuestion + 2)
    }
    function genderHandleChange(value) {
        setGender(value.value);
    }


    function phonenumber(inputtxt) {

        if (inputtxt[0] == "0" && inputtxt[1] == '1' && inputtxt.length == 11) {
            return true;
        }
        else {
            return false;
        }
    }

    function setTimeInterval() {
        var temp = true
        if (phone) {
            if (phonenumber(phone)) {
                // setOtpForm(1)
                let second = 61
                setNotification("")
                setOptBtn(0)
                function countDown() {
                    if (temp) {
                        temp = false;

                        getOtpData().then(res => {
                            if (!res.success) {
                                setNotification("User already exist")
                                second = -2
                                setOptBtn(1)
                            }

                        }).catch((err) => { console.log(err) });
                    }
                    else {
                        if (second < 0) setSec("")
                        else setSec(second)
                        second--
                        if (second < 1) {
                            setOptBtn(1)
                        }

                        if (second > 0) {
                            setOtpForm(1)
                            setTimeout(countDown, 1000)
                        };
                    }

                }

                countDown()
                countDown()
            }
            else {
                setNotification("Phone No. is incorrect")
            }
        }
        else {
            setNotification("Phone No. Eempty")
        }

    }
    function checkFun() {
        if (checkbox == 0) setCheckbox(1)
        else setCheckbox(0)
    }
    function SubmiitFun(e) {
        if (name.length < 5) {
            alert("Input field cannot be empty")
            setCurrentQuestion(1)
        }
        else if (!regNo) {
            alert("Input field cannot be empty")
            setCurrentQuestion(2)
        }
        else if (!gender) {
            alert("Input field cannot be empty")
            setCurrentQuestion(3)
        }
        else if (!specialist) {
            alert("Input field cannot be empty")
            setCurrentQuestion(4)
        }
        else if (!phone) {
            alert("Input field cannot be empty")
            setCurrentQuestion(7)
        }
        else if (!otpData) {
            alert("Input field cannot be empty")
            setCurrentQuestion(7)
        }
        else {
                let body = {
                    name: name,
                    bmdcRegNo: regNo,
                    password: password,
                    phone: phone,
                    confirmPassword: confirm,
                    gender: gender,
                    specialistId: specialist,
                    otp: otpData,
                    fee : fee
                }
                if(email) body.email = email;
                if(practicing) body.practicingSince = practicing;
                if(nidFileIdFront) body["nidFileFront"] = nidFileIdFront;
                if(nidFileIdBack) body["nidFileBack"] = nidFileIdBack;
                if(fileValue) body["file"] = fileValue;


                applyDoctor(body).then(res => {
                    if (res.data.status == 200) {
                        setCurrentQuestion(100)
                        alert("Submit sss",res.status)
                    }
                    else if(res.data.status == 403){
                        alert(res.data.msg)
                        setCurrentQuestion(6)
                    }
                    else alert("Submit Failed")

                }).catch(err => {
                    alert("Submit Failed")
                })
            

        }

    }

    return (
        <div id="doctor_registration">
            <Head>
                <title>Doctor Registration -- Shafa Care</title>
                <meta
                    name="keyboard"
                    content="Shafa Care, Online Doctor,Medical Help,Online Medical Help, Doctor Registration"
                />
            </Head>

            <Navbar/>

            <form>
                <div className="registration-field d-flex align-items-center">

                    {
                        currentQuestion == 0 ?
                            <div className="question question-0 d-flex flex-column align-items-center justify-content-center ">
                                <h3>SHAFA CARE DOCTOR</h3>

                                <p>Please fill the details in this doctor registration form.</p>
                                <div className="reg_btn_grp">
                                    <button className="next-btn" type="button" onClick={nextQuestionFun}>SURE 😊 <i className="fas fa-angle-right"></i></button>
                                </div>
                                <p className="mt-5 download__Link">Or  <Link href="/d-app"><a>DOWNLOAD</a></Link> the SHAFA CARE Doctor app.</p>
                                <div className="reg_btn_grp">
                                   
                                </div>
                                

                            </div>
                            : null

                    }

                    {
                        currentQuestion == 1 ?
                            <div className="question question-1">
                                <p className="txt-sm">Question 1</p>
                                <p className="txt-lg">Hello Doc! 😀</p>
                                <p className="txt-lg">Could we know your name?</p>

                                <div className="form-group  pt-4">
                                    <input value={name} onInput={e => setName(e.target.value)} type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Please enter your response" />
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="reg_btn_grp">
                                    {
                                        name.length > 4 ?
                                            <button className="next-btn" type="button" onClick={nextQuestionFun}>NEXT <i className="fas fa-angle-right"></i></button>
                                            :
                                            <button className="next-btn disable" type="button">NEXT <i className="fas fa-angle-right"></i></button>
                                    }
                                </div>

                            </div>
                            : null

                    }
                    {
                        currentQuestion == 2 ?
                            <div className="question question-8">
                                <p className="txt-sm">Question 2</p>
                                <p className="txt-lg">Could you please help us with some additional information?</p>

                                <div className="w-100 d-flex flex-wrap pt-4">
                                    
                                    <div className="form-group">
                                        <input value={regNo} onInput={e => setRegNo(e.target.value)} type="text" name="bmdc" id="bmdc" className="form-control" required data-error="Enter your BMDC Registration No" placeholder="BMDC Registration No. *" />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group">
                                        <input value={fee} onInput={e => setFee(e.target.value)} type="text" name="fee" id="fee" required data-error="Please enter your fee" className="form-control" placeholder="Fee (500/1000 BDT) *" />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group">
                                        <label className="w-100 text-left  ">Practicing Since</label>
                                        <input value={practicing} onInput={e => setPracticing(e.target.value)} type="date" name="practicingSince" id="practicing-since" required data-error="Please enter Practicing Since" className="form-control" placeholder="Practicing Since" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    
                                </div>

                                <div className="reg_btn_grp pt-4">
                                    {
                                        regNo && fee?
                                            <button className="next-btn" type="button" onClick={nextQuestionFun}>NEXT <i className="fas fa-angle-right"></i></button>
                                            :
                                            <button className="next-btn disable" type="button">NEXT <i className="fas fa-angle-right"></i></button>
                                    }
                                </div>

                            </div>
                            : null

                    }
                    {
                        currentQuestion == 3 ?
                            <div className="question question-5">
                                <p className="txt-sm">Question 3</p>
                                <p className="txt-lg">Could you please help us with some basic details?</p>

                                <div className="w-100 d-flex flex-wrap pt-4">
                                    
                                    <div className="form-group pt-15">
                                        <input value={email} onInput={e => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control" required data-error="Please enter your response" placeholder="Email" />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group">
                                        <Select
                                            placeholder={<div className="d-flex align-items-center"><div className="plaseholder__">- - - Select Gender * - - -</div></div>}
                                            className="w-100 basic-multi-select"
                                            name="gender"
                                            classNamePrefix="select"
                                            options={genderValues}
                                            onChange={event => genderHandleChange(event)}
                                        />
                                    </div>

                                </div>

                                <div className="reg_btn_grp pt-4">
                                    {
                                        gender ?
                                            <button className="next-btn" type="button" onClick={nextQuestionFun}>NEXT <i className="fas fa-angle-right"></i></button>
                                            :
                                            <button className="next-btn disable" type="button">NEXT <i className="fas fa-angle-right"></i></button>
                                    }
                                </div>

                            </div>
                            : null

                    }


                    {
                        currentQuestion == 4 ?
                            <div className="question question-2">
                                <p className="txt-sm">Question 4</p>
                                <p className="txt-lg">Nice to know you!</p>
                                <p className="txt-lg">Can you tell us specialisation?</p>
                                <div className="specialities  pt-4">
                                    {
                                        specialistLists ?
                                            specialistLists.map((item) => {
                                                return (
                                                    item.label && item.value ?                                                    

                                                        specialist && item.value == specialist ?
                                                            <button className="active" onClick={() => setSpecilistFun(item.value)}>{item.label}</button>
                                                            :
                                                            <button onClick={() => setSpecilistFun(item.value)}>{item.label}</button>

                                                        : null
                                                )
                                            }) : null
                                    }
                                </div>
                            </div>
                            : null
                    }

                    {
                        currentQuestion == 5 ?
                            <div className="question question-7">
                                <p className="txt-sm">Question 5</p>
                                <p className="txt-lg">Could you please share some files for your identification?</p>

                                <div className="w-100 d-flex flex-wrap pt-4">

                                    <div className="form-group">
                                        <label className="w-100 text-left  ">Profile picture</label>
                                        <input value={file.filename}
                                                    onChange={(event) => {
                                                        setFileValue(event.currentTarget.files[0])
                                                    }}
                                                     type="file" name="avatar" id="avatar" className="form-control" required data-error="Profile Picture" placeholder="Profile Picture" />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group">
                                        <label className="w-100 text-left  ">NID card front</label>
                                        <input 
                                        onChange={(event) => {
                                            setNidFileIdFront(event.currentTarget.files[0])
                                        }}
                                        type="file" name="nidFileIdFront" id="nidFileIdFront" className="form-control" required data-error="NID Card Front" placeholder="NID Card Front" />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group">
                                        <label className="w-100 text-left  ">NID card back </label>
                                        <input 
                                        onChange={(event) => {
                                            setNidFileIdBack(event.currentTarget.files[0])
                                        }}
                                        type="file" name="nidFileIdBack" id="nidFileIdBack" className="form-control" required data-error="NID Card Back" placeholder="NID Card Back" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="reg_btn_grp pt-4">
                                    
                                     <button className="next-btn" type="button" onClick={nextQuestionFun}>NEXT <i className="fas fa-angle-right"></i></button>
                                    <button className="skip-btn" type="button" onClick={nextQuestionFun}>SKIP</button>
                                </div>

                            </div>
                            : null

                    }
                    
                    {
                        currentQuestion == 6 ?
                            <div className="question question-9">
                                <p className="txt-sm">Question 6</p>
                                <p className="txt-lg">Please enter your phone no.</p>

                                <div className="form-group pt-4">
                                    <input value={phone} onInput={e => setPhone(e.target.value)} type="text" name="phone" id="phone" required data-error="Please enter your Phone No." className="form-control" placeholder="Phone No. *" />
                                </div>
                                <div className="d-flex align-items-center mb-5">
                                    {
                                        optBtn == 1 ?
                                            <div className="d-flex send_otp">
                                                <button className="send-otp-btn" type="button" onClick={setTimeInterval}>
                                                    Send OTP
                                                </button>
                                            </div>
                                            :
                                            <div className="d-flex send_otp">
                                                <button className="send-otp-btn disable" type="button">
                                                    Send OTP
                                                </button>
                                            </div>
                                    }
                                    <div className="d-flex">
                                        <div className="ml-3 mr-3">
                                            {
                                                sec > 1 && sec != 61 ?
                                                    <p>{sec - 1}</p>
                                                    : null
                                            }
                                        </div>
                                        <div>
                                            {
                                                notification ?
                                                    <p className="text-red mr-1">{notification}</p> : null
                                            }
                                        </div>

                                    </div>
                                    {
                                        otpForm == 1 ?
                                            <div className="form-group otpfield">
                                                <input value={otpData} onInput={e => setOtpData(e.target.value)} type="text" name="otp" id="otp" required data-error="Please enter your response" className="form-control" placeholder="OTP *" />
                                            </div>
                                            : null
                                    }


                                </div>
                                <div className="reg_btn_grp">
                                    {
                                        otpData ?
                                            <button className="next-btn" type="button" onClick={nextQuestionFun}>NEXT <i className="fas fa-angle-right"></i></button>
                                            :
                                            <button className="next-btn disable" type="button">NEXT <i className="fas fa-angle-right"></i></button>
                                    }
                                </div>

                            </div>
                            : null

                    }

                    {
                        currentQuestion == 7 ?
                            <div className="question question-8">
                                <p className="txt-sm">Question 7</p>
                                <p className="txt-lg">Could you please set the password?</p>

                                <div className="w-100 d-flex flex-wrap pt-4">

                                    <div className="form-group">
                                        <input value={password} onInput={e => setPassword(e.target.value)} type="password" name="password" id="password" className="form-control" required data-error="Please enter a Password" placeholder="Password *" />
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group">
                                        <input value={confirm} onInput={e => setConfirm(e.target.value)} type="password" name="confirmPassword" id="confirmPassword" required data-error="Wrong Password" className="form-control" placeholder="Confirm Password *" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    
                                </div>
                                <div className="accept-terms mt-3 mb-3">
                                    <p className="txt-lg">Accepting legal and terms</p>
                                    {
                                        checkbox == 1 ?

                                            <button className="d-flex  align-items-center" type="button" onClick={checkFun}>
                                                <i className="far fa-check-square"></i>
                                                <p className="ml-3">I accept and agree terms conditions and privacy policy </p>
                                            </button>
                                            :
                                            <button className="d-flex  align-items-center" type="button" onClick={checkFun}>
                                                <i className="far fa-square"></i>
                                                <p className="ml-3">I accept and agree terms conditions and privacy policy </p>
                                            </button>
                                    }
                                </div>
                                <div className="reg_btn_grp pt-4">
                                    {
                                        confirm && password && confirm == password && checkbox == 1 ?
                                            <button className="next-btn" type="button" onClick={SubmiitFun} >APPLY</button>
                                            :
                                            <button className="next-btn disable" type="button">APPLY</button>
                                    }
                                </div>



                            </div>
                            : null

                    }
                    {
                        currentQuestion == 100 ?
                            <div className="question question-0 d-flex flex-column align-items-center justify-content-center ">
                                <h3>Welcome to SHAFA CARE</h3>
                                <img className="mt-3 mb-3" src={applySuccess} alt="doctor registrarion success" />

                                <p className="txt-md">Will be pleasure to have you in the association!</p>
                                <p className="txt-lg">Download the app</p>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <div className="app_link d-flex flex-row mb-5">
                                            <a href="https://play.google.com/store/apps/details?id=care.shafa.ai.user">
                                                <div><i className="fab fa-google-play"></i> <span>Google Play</span> </div>
                                            </a>
                                            <a href="">
                                                <div><i className="fab fa-apple"></i> <span>App Store</span> </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="go__home">
                                    <Link href="/"><a href="">Go Home</a></Link>
                                </div>


                            </div>
                            : null

                    }



                </div>
            </form>
            {
                currentQuestion != 100 ?
                    <div className="apply-bottom d-flex justify-content-between w-100">

                        <div className="progress_bar pl-3">
                            <Link href="/"><a href="">
                                <i className="fas fa-undo"></i>
                                <p className="gohome">Go Home</p>
                            </a></Link>
                        </div>
                        
                        <div className="bottom-right">
                            <Link href="/"><a><img src={logo} alt="brand logo" /></a></Link>
                            {
                                currentQuestion < 2 ?
                                    <button className="bottom-btn desiable" type="button"><i className="fas fa-angle-up"></i></button>
                                    :
                                    <button className="bottom-btn" type="button" onClick={previousPageFun}><i className="fas fa-angle-up"></i></button>
                            }
                            {
                                currentQuestion >= 7 ?
                                    <button className="bottom-btn desiable" type="button"><i className="fas fa-angle-down"></i></button>
                                    :
                                    <button className="bottom-btn" onClick={nextPageFun} type="button"><i className="fas fa-angle-down"></i></button>
                            }
                        </div>

                    </div>
                    : null
            }
            <Footer />
        </div>
    )
}


