import Link from "next/link";
import Head from "next/head";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "../authAxios";
import { useHistory } from "react-router-dom";

import maleDocImg from "../public/assets/img/avater/Male_doctor_avatar.jpg";
import femaleDocImg from "../public/assets/img/avater/Female_doctor_avatar.jpg";
import selectedCircle from "../public/assets/img/icon/selectedCircle.png";
import initialCircle from "../public/assets/img/icon/circle.png";

import loading from "../public/assets/img/loading.gif";
import { useCookies } from "react-cookie";
import Select from "react-select";
import { applyICFLLogin, userPointInsert,doctorLogin } from "../Components/HttpPostRequest";
import { toast } from 'react-toast'

export default function Doctor({ dataNav = 1 }) {
  const router = useRouter();
  const [cookies, setCookie, removeCookies] = useCookies(["userData"]);
  console.log("okiiii", cookies);

  var { id } = router.query;

  const [allData, setAllData] = useState();
  const [tempId, setTempId] = useState(true);
  const [selectLabel, setSelectLabel] = useState();
  const [doctorId, setDoctorId] = useState();
  const [userId, setUserId] = useState();
  const [stateData,setStateData] = useState({})

  const [synId, setSynId] = useState(id);
  const [filterBtn, setFilterBtn] = useState("display__none");
  const [filterBtnSpecilist, setFilterBtnSpecilist] = useState("Specilities");
  const [filterBtnHospital, setFilterBtnHospital] = useState("Hospital");
  const [filterBtnhospital, setFilterBtnhospital] = useState("display__none");
  const [blog, setblog] = useState();
  const [symptom, setSymptom] = useState();
  const [hospital, setHospital] = useState();
  const [symptomById, setSymptomById] = useState();
  const [specilities, setSpecilities] = useState();
  const [loadingData, setLoadingData] = useState(true);
  const [countFilter, setCountFilter] = useState(0);
  const [symptomFilter, setSymptomFilter] = useState(null);
  const [specialitiesFilter, setSpecialitiesFilter] = useState(null);
  const [maleFilter, setMaleFilter] = useState(false);
  const [femaleFilter, setFemaleFilter] = useState(false);
  const [less200, setLess200] = useState(false);
  const [less500, setLess500] = useState(false);
  const [greater500, setGreater500] = useState(false);
  const [filterSpecilist, setFilterSpecilist] = useState(null);
  const [filterHospital, setFilterHospital] = useState(null);
  const [filterSymptom, setFilterSymptom] = useState(null);
  const [specialistIds1,setSpecialistIds1] = useState();
  const [specialistIds2,setSpecialistIds2] = useState();

  let tempStatus = true;
  

  const getsymptomItems = async () => {
    return await axios
      .post("healthIssue/symptom-list")
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
  const getsymptomListBYId = async (value) => {
    return await axios
      .post("/user/healthIssueGroup/list",{specialistIds:value})
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
  const getHospitalLists = async () => {
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

  const getSpecilistLists = async () => {
    return await axios
      .post("/specialist/specialist-list")
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

  const getBlogList = async () => {
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

  function fulterBySymptom(getData) {
    let tempObj = [];
    id.map((items) => {
      let tempItem = getData.filter((item) => item.specialist.id == items);
      tempObj = tempObj.concat(tempItem);
    });
    setblog(tempObj);
  }
  function fulterBySpecialist(getData) {
    let tempObj = getData.filter((item) => item.specialist.id == id);
    setblog(tempObj);
  }
  function filterById(getData) {
    let tempObj = getData.filter((item) => item.id == id);
    setblog(tempObj);
  }

  // load hospital data list
  useEffect(() => {
    let tempid = router.query.id;
    let tempStatus = router.query.status;
    if (router.query.label) {
      setSelectLabel(router.query.label);
    }

    if (loadingData) {
      getBlogList()
        .then((res) => {
          setAllData(res);

          if (!synId) {
            setblog(res);
          } else if (tempStatus) {
            filterById(res);
          } else if (synId == 11 && tempId) {
            fulterBySpecialist(res);
          } else if (Array.isArray(synId) && tempId) {
            fulterBySymptom(res);
          } else if (tempId) {
            fulterBySpecialist(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });

      getsymptomItems()
        .then((res) => {
          setSymptom(res);
        })
        .catch((err) => {
          console.log(err);
        });
      getHospitalLists()
        .then((res) => {
          setHospital(res);
        })
        .catch((err) => {
          console.log(err);
        });
      getSpecilistLists()
        .then((res) => {
          setSpecilities(res);
        })

        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  function cleareAll() {
    router.push({ pathname: "/doctor-list" });
    setblog(allData);
    setSynId(null);
    id = null;
    setTempId(false);
    setSymptomFilter(null);
    setSpecialitiesFilter(null);
    setFilterSpecilist(null);
    setFilterHospital(null);
    setFilterSymptom(null);
    setFemaleFilter(false);
    setMaleFilter(false);
    setLess200(false);
    setLess500(false);
    setGreater500(false);
    setFilterBtnSpecilist("Specialities");
    setFilterBtnHospital("Hospital");
    setFilterBtnhospital("display__none");
    setFilterBtn("display__none");
    setFilterBtnsymptom("display__none");
    setCountFilter(0);
  }

  function filterMale() {
    let tempData = allData;
    tempData = tempData.filter((item) => item.gender == "Male");

    setFemaleFilter(false);
    setMaleFilter(true);

    var temp = 1;
    if (symptomFilter) temp += 1;
    if (specialitiesFilter) {
      tempData = tempData.filter(
        (item) => item.specialist && item.specialist.id == specialitiesFilter
      );
      temp++;
    }
    if (less200) {
      temp++;
      tempData = tempData.filter((item) => item.fee < 200);
    }
    if (less500) {
      temp++;
      tempData = tempData.filter((item) => item.fee <= 500 && item.fee >= 200);
    }
    if (greater500) {
      temp++;
      tempData = tempData.filter((item) => item.fee > 500);
    }
    if (filterSpecilist) {
      temp++;
      tempData = tempData.filter(
        (item) => item.specialist && item.specialist.id == filterSpecilist
      );
    }
    if (filterHospital) {
      temp++;
      tempData = tempData.filter(
        (item) => item.hospital && item.hospital.id == filterHospital
      );
    }
    if (filterSymptom) {
      temp++;
      tempData = tempData.filter(
        (item) => item.specialist && item.specialist.id == filterSymptom
      );
    }

    setCountFilter(temp);
    setblog(tempData);
    setFilterBtnhospital("display__none");
    setFilterBtn("display__none");
    setFilterBtnsymptom("display__none");

    if (synId == 11 && tempId) {
      fulterBySpecialist(tempData);
    } else if (Array.isArray(synId) && tempId) {
      fulterBySymptom(tempData);
    } else if (synId && tempId) {
      fulterBySpecialist(tempData);
    }
  }

  function filterFemale() {
    let tempData = allData;
    tempData = tempData.filter((item) => item.gender == "Female");

    setFemaleFilter(true);
    setMaleFilter(false);
    var temp = 1;
    if (symptomFilter) temp += 1;
    if (specialitiesFilter) {
      tempData = tempData.filter(
        (item) => item.specialist && item.specialist.id == specialitiesFilter
      );
      temp++;
    }
    if (less500) {
      temp++;
      tempData = tempData.filter((item) => item.fee <= 500 && item.fee >= 200);
    }
    if (less200) {
      temp++;
      tempData = tempData.filter((item) => item.fee < 200);
    }
    if (greater500) {
      temp++;
      tempData = tempData.filter((item) => item.fee > 500);
    }
    if (filterSpecilist) {
      temp++;
      tempData = tempData.filter(
        (item) => item.specialist && item.specialist.id == filterSpecilist
      );
    }
    if (filterHospital) {
      temp++;
      tempData = tempData.filter(
        (item) => item.hospital && item.hospital.id == filterHospital
      );
    }
    if (filterSymptom) {
      temp++;
      tempData = tempData.filter(
        (item) => item.specialist && item.specialist.id == filterSymptom
      );
    }

    setCountFilter(temp);
    setblog(tempData);
    setFilterBtnhospital("display__none");
    setFilterBtn("display__none");
    setFilterBtnsymptom("display__none");

    if (synId == 11 && tempId) {
      fulterBySpecialist(tempData);
    } else if (Array.isArray(synId) && tempId) {
      fulterBySymptom(tempData);
    } else if (synId && tempId) {
      fulterBySpecialist(tempData);
    }
  }

  function filterLess200() {
    let tempData = allData;
    tempData = tempData.filter((item) => item.fee < 200);

    setLess200(true);
    setGreater500(false);
    setLess500(false);
    var temp = 1;
    if (symptomFilter) temp += 1;
    if (specialitiesFilter) {
      tempData = tempData.filter(
        (item) => item.specialist && item.specialist.id == specialitiesFilter
      );
      temp++;
    }
    if (femaleFilter) {
      temp++;
      tempData = tempData.filter((item) => item.gender == "Female");
    }
    if (maleFilter) {
      temp++;
      tempData = tempData.filter((item) => item.gender == "Male");
    }
    if (filterSpecilist) {
      temp++;
      tempData = tempData.filter(
        (item) => item.specialist && item.specialist.id == filterSpecilist
      );
    }
    if (filterHospital) {
      temp++;
      tempData = tempData.filter(
        (item) => item.hospital && item.hospital.id == filterHospital
      );
    }
    if (filterSymptom) {
      temp++;
      tempData = tempData.filter(
        (item) => item.specialist && item.specialist.id == filterSymptom
      );
    }

    setCountFilter(temp);
    setblog(tempData);
    setFilterBtnhospital("display__none");
    setFilterBtn("display__none");
    setFilterBtnsymptom("display__none");

    if (synId == 11 && tempId) {
      fulterBySpecialist(tempData);
    } else if (Array.isArray(synId) && tempId) {
      fulterBySymptom(tempData);
    } else if (synId && tempId) {
      fulterBySpecialist(tempData);
    }
  }

  function filterLess500() {
    let tempData = allData;
    tempData = tempData.filter((item) => item.fee <= 500 && item.fee >= 200);

    setLess200(false);
    setGreater500(false);
    setLess500(true);
    var temp = 1;
    if (symptomFilter) temp += 1;
    if (specialitiesFilter) {
      tempData = tempData.filter(
        (item) => item.specialist && item.specialist.id == specialitiesFilter
      );
      temp++;
    }
    if (femaleFilter) {
      temp++;
      tempData = tempData.filter((item) => item.gender == "Female");
    }
    if (maleFilter) {
      temp++;
      tempData = tempData.filter((item) => item.gender == "Male");
    }
    if (filterSpecilist) {
      temp++;
      tempData = tempData.filter(
        (item) => item.specialist && item.specialist.id == filterSpecilist
      );
    }
    if (filterHospital) {
      temp++;
      tempData = tempData.filter(
        (item) => item.hospital && item.hospital.id == filterHospital
      );
    }
    if (filterSymptom) {
      temp++;
      tempData = tempData.filter(
        (item) => item.specialist && item.specialist.id == filterSymptom
      );
    }

    setCountFilter(temp);
    setblog(tempData);
    setFilterBtnhospital("display__none");
    setFilterBtn("display__none");
    setFilterBtnsymptom("display__none");

    if (synId == 11 && tempId) {
      fulterBySpecialist(tempData);
    } else if (Array.isArray(synId) && tempId) {
      fulterBySymptom(tempData);
    } else if (synId && tempId) {
      fulterBySpecialist(tempData);
    }
  }

  function filterGreater500() {
    let tempData = allData;
    tempData = tempData.filter((item) => item.fee > 500);
    setLess200(false);
    setGreater500(true);
    setLess500(false);
    var temp = 1;
    if (symptomFilter) temp += 1;
    if (specialitiesFilter) {
      tempData = tempData.filter(
        (item) => item.specialist && item.specialist.id == specialitiesFilter
      );
      temp++;
    }
    if (femaleFilter) {
      temp++;
      tempData = tempData.filter((item) => item.gender == "Female");
    }
    if (maleFilter) {
      temp++;
      tempData = tempData.filter((item) => item.gender == "Male");
    }
    if (filterSpecilist) {
      temp++;
      tempData = tempData.filter(
        (item) => item.specialist && item.specialist.id == filterSpecilist
      );
    }
    if (filterHospital) {
      temp++;
      tempData = tempData.filter(
        (item) => item.hospital && item.hospital.id == filterHospital
      );
    }
    if (filterSymptom) {
      temp++;
      tempData = tempData.filter(
        (item) => item.specialist && item.specialist.id == filterSymptom
      );
    }

    setCountFilter(temp);
    setblog(tempData);
    setFilterBtnhospital("display__none");
    setFilterBtn("display__none");
    setFilterBtnsymptom("display__none");

    if (synId == 11 && tempId) {
      fulterBySpecialist(tempData);
    } else if (Array.isArray(synId) && tempId) {
      fulterBySymptom(tempData);
    } else if (synId && tempId) {
      fulterBySpecialist(tempData);
    }
  }
  function onchangeFun(name, idd) {
    setFilterBtnSpecilist(name);
    setFilterBtn("display__none");

    let tempData = allData;

    tempData = tempData.filter(
      (item) => item.specialist && item.specialist.id == idd
    );

    var temp = 1;
    // if (symptomFilter) temp += 1;
    // if (specialitiesFilter) {
    //   tempData = tempData.filter(
    //     (item) => item.specialist && item.specialist.id == specialitiesFilter
    //   );
    //   temp++;
    // }
    if (less500) {
      temp++;
      tempData = tempData.filter((item) => item.fee <= 500 && item.fee >= 200);
    }
    if (less200) {
      temp++;
      tempData = tempData.filter((item) => item.fee < 200);
    }
    if (greater500) {
      temp++;
      tempData = tempData.filter((item) => item.fee > 500);
    }
    if (femaleFilter) {
      temp++;
      tempData = tempData.filter((item) => item.gender == "Female");
    }
    if (maleFilter) {
      temp++;
      tempData = tempData.filter((item) => item.gender == "Male");
    }
    if (filterHospital) {
      temp++;
      tempData = tempData.filter(
        (item) => item.hospital && item.hospital.id == filterHospital
      );
    }
    if (filterSymptom) {
      temp++;
      tempData = tempData.filter(
        (item) => item.specialist && item.specialist.id == filterSymptom
      );
    }

    setCountFilter(temp);
    setSpecialitiesFilter(idd);
    setFilterSpecilist(idd);
    setblog(tempData);
  }
  function filterBtnFun() {
    if (filterBtn == "display__none") setFilterBtn("dropdown__menu");
    if (filterBtn == "dropdown__menu") setFilterBtn("display__none");

    setFilterBtnhospital("display__none");
    setFilterBtnsymptom("display__none");
  }

  function onchangeFunHospital(name, idd) {
    setFilterBtnHospital(name);
    setFilterBtnhospital("display__none");

    let tempData = allData;
    tempData = tempData.filter(
      (item) => item.hospital && item.hospital.id == idd
    );
    var temp = 1;
    if (symptomFilter) temp += 1;
    if (specialitiesFilter) {
      tempData = tempData.filter(
        (item) => item.specialist && item.specialist.id == specialitiesFilter
      );
      temp++;
    }
    if (less500) {
      temp++;
      tempData = tempData.filter((item) => item.fee <= 500 && item.fee >= 200);
    }
    if (less200) {
      temp++;
      tempData = tempData.filter((item) => item.fee < 200);
    }
    if (greater500) {
      temp++;
      tempData = tempData.filter((item) => item.fee > 500);
    }
    if (femaleFilter) {
      temp++;
      tempData = tempData.filter((item) => item.gender == "Female");
    }
    if (maleFilter) {
      temp++;
      tempData = tempData.filter((item) => item.gender == "Male");
    }
    if (filterSymptom) {
      temp++;
      tempData = tempData.filter(
        (item) => item.specialist && item.specialist.id == filterSymptom
      );
    }
    setCountFilter(temp);
    setFilterHospital(idd);
    setblog(tempData);

    if (synId == 11 && tempId) {
      fulterBySpecialist(tempData);
    } else if (Array.isArray(synId) && tempId) {
      fulterBySymptom(tempData);
    } else if (synId && tempId) {
      fulterBySpecialist(tempData);
    }
  }

  function filterBtnFunHospital() {
    if (filterBtnhospital == "display__none")
      setFilterBtnhospital("dropdown__menu");
    if (filterBtnhospital == "dropdown__menu")
      setFilterBtnhospital("display__none");

    setFilterBtn("display__none");
    setFilterBtnsymptom("display__none");
  }
  const [tempId1, setTempId1] = useState(-1)
  const [tempId2, setTempId2] = useState(-1)
  function setHealthEssueFun(tempArray){
    
    console.log("1 2",specialistIds1,specialistIds2)
    if(specialistIds1 && specialistIds2){
      
      console.log("temp3",stateData)
      if(specialistIds1 == tempArray) setSpecialistIds1(null)
      else if(specialistIds2 == tempArray) setSpecialistIds2(null)
      else{
        toast.warn("You can not select more than 2 symptoms");
      }
    }
    else if(!specialistIds1) {
      setTempId1(tempArray.specialists[0].id)
      if(specialistIds2)  setTempId2(specialistIds2.specialists[0].id)
      setSpecialistIds1(tempArray)
    }
    else {
      setTempId1(specialistIds1.specialists[0].id)
      setTempId2(tempArray.specialists[0].id)
      setSpecialistIds2(tempArray)
      console.log("temp2",stateData)
    }
  }

  // const [filterBtnSymptom,setFilterBtnSymptom] = useState("Common Symptom")
  const [filterBtnsymptom, setFilterBtnsymptom] = useState("display__none");

  function onchangeFunSypmtom(name, idd) {
    setFilterBtnSymptom(name);
    setFilterBtnsymptom("display__none");

    let tempData = allData;
    tempData = tempData.filter(
      (item) => item.specialist && item.specialist.id == idd
    );
    var temp = 1;
    if (symptomFilter) temp += 1;
    if (specialitiesFilter) {
      tempData = tempData.filter(
        (item) => item.specialist && item.specialist.id == specialitiesFilter
      );
      temp++;
    }
    if (less500) {
      temp++;
      tempData = tempData.filter((item) => item.fee <= 500 && item.fee >= 200);
    }
    if (less200) {
      temp++;
      tempData = tempData.filter((item) => item.fee < 200);
    }
    if (greater500) {
      temp++;
      tempData = tempData.filter((item) => item.fee > 500);
    }
    if (femaleFilter) {
      temp++;
      tempData = tempData.filter((item) => item.gender == "Female");
    }
    if (maleFilter) {
      temp++;
      tempData = tempData.filter((item) => item.gender == "Male");
    }
    if (filterHospital) {
      temp++;
      tempData = tempData.filter(
        (item) => item.hospital && item.hospital.id == filterHospital
      );
    }
    setFilterSymptom(idd);
    setCountFilter(temp);
    setblog(tempData);
  }
  function filterBtnFunSymptom() {
    if (filterBtnsymptom == "display__none")
      setFilterBtnsymptom("dropdown__menu");
    if (filterBtnsymptom == "dropdown__menu")
      setFilterBtnsymptom("display__none");

    setFilterBtn("display__none");
    setFilterBtnhospital("display__none");
  }
 
  const [loginSection, setLoginSection] = useState(false);
  const [symptomSection, setSymptomSection] = useState(false);
  let routeLink = useRouter();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();

  const [notePhone, setNotePhone] = useState();
  const [notePassword, setNotePassword] = useState();
  const [role, setRole] = useState();

  const actions = [
    { label: "User", value: 1 },
    { label: "Doctor", value: 2 },
  ];

  function bookAppointmentClose(temp) {
    console.log(temp)
    setSymptomSection(false)
  }

  function bookAppointment(temp) {
    console.log("caca",temp)
    setDoctorId(temp.id)
    let tempArray = []
    if(temp.specialistId && !temp.specialistId[0]){
      tempArray.push(temp.specialistId)
      tempArray[0] = temp.specialistId}
    console.log("ccc",tempArray)
    if (cookies && cookies.userData && cookies.userData.token){
      setUserId(cookies.userData.userId)
      getsymptomListBYId(tempArray)
        .then((res) => {
          setSymptomById(res);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("sssssssssss",symptom)
      setSymptomSection(true)
    }
    else {
      console.log("login first");
      setLoginSection(true);
    }
  }
  
  function closeBookAppointment() {
    setLoginSection(false);
  }
  function setSpecilistFun(valueId) {
    let temp = []
    let tempHealth = []
    if(valueId.specialists){
      valueId.specialists.map((item) => {
        temp.push(item.id)
      })
    }
    if(valueId.health_issue_groups){
      valueId.health_issue_groups.map((item) => {
        tempHealth.push(item.id)
      })
    }

    routeLink.push({
      pathname: "/doctors",
      query: { id: temp, hi:tempHealth },
    });
  }
  function mySubmitHandler() {
    let body = {
      phone: phone,
      password: password,
    };
    if (role) {
      if (phone && password) {
        if (role.value == 1) {
          applyICFLLogin(body)
            .then((res) => {
              console.log("ssssssss", res);
              if (res.data.status == 200) {
                console.log("rrreeesss", res.data);
                let temp = {
                  userId: res.data.data.id,
                  token: res.data.token,
                  data: res.data.data,
                };
                if (res.data.data.user_point === null) {
                  userPointInsert({ userId: res.data.data.id })
                    .then((response) => {
                      // console.log(response)
                    })
                    .catch((errr) => {
                      console.log("ERROR", errr);
                    });
                }

                toast.success("Login success.");
                console.log("cccccccc", temp);
                setCookie("userData", temp, { path: "/" });
                setLoginSection(false);
                // routeLink.push({ pathname: '/icfl-prediction' })
              } else {
                toast.error(res.data.msg);
              }
            })
            .catch((err) => {
              console.log("ERROR", err);
            });
        } else {
          doctorLogin(body)
            .then((res) => {
              if (res.data.status == 200) {
                console.log("rrreeesss", res.data);
                let temp = {
                  userId: res.data.data.id,
                  token: res.data.token,
                  data: res.data.data,
                };

                toast.success("Login success.");
                console.log("cccccccc", temp);
                setCookie("userData", temp, { path: "/" });
                setLoginSection(false);
                // routeLink.push({ pathname: '/icfl-prediction' })
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
    } else {
      toast.error("Field cannot be empty");
    }
  }
  function nextPageFUn(){
    router.push({
      pathname: '/aaaa',
      query: { pid: "post.id" },
    })
  }

  if (specilities && blog && symptom && hospital)
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
        {allData ? (
          <Navbar status="1" getNavDataFun={onchangeFun} />
        ) : (
          <Navbar />
        )}

        {/* Start Blog Area */}
        <section className="doctor-list-page ptb-100">
          <div className="container">
            <div className="row count__doctor d-flex mb-5">
              <div>
                {blog ? (
                  <h4 className="mb-middle">{blog.length} Doctors available</h4>
                ) : null}
              </div>

              <div className="filter__area">
                <div className="dropdown d-flex pl-3">
                  <div className="mr-2">
                    <button
                      className="btn common__filter__btn"
                      onClick={filterBtnFun}
                    >
                      {filterBtnSpecilist}{" "}
                      <i className="ml-2 fas fa-angle-down"></i>
                    </button>
                    <div className={filterBtn}>
                      {specilities
                        ? specilities.map((item) => {
                            return (
                              <button
                                className="dropdown__item"
                                onClick={() => onchangeFun(item.name, item.id)}
                              >
                                {item.name}
                              </button>
                            );
                          })
                        : null}
                    </div>
                  </div>

                  <div className="mr-2">
                    <button
                      className="btn common__filter__btn"
                      onClick={filterBtnFunHospital}
                    >
                      {filterBtnHospital}{" "}
                      <i className="ml-2 fas fa-angle-down"></i>
                    </button>
                    <div id="hospital_div" className={filterBtnhospital}>
                      {hospital
                        ? hospital.map((item) => {
                            return item.name ? (
                              <button
                                className="dropdown__item"
                                onClick={() =>
                                  onchangeFunHospital(item.name, item.id)
                                }
                              >
                                {item.name}
                              </button>
                            ) : null;
                          })
                        : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div id="filter-for-phone" className="col-md-3">
                <div className="doctor_filter">
                  <div className="filter_header d-flex justify-content-between">
                    <p>Filters ({countFilter})</p>
                    <button onClick={cleareAll}>Clear All</button>
                  </div>
                  <hr />
                  <div className="filter_header">
                    <p className="mb-4">Gender</p>
                    {maleFilter ? (
                      <button
                        className="d-flex mb-3"
                        onClick={() => filterMale()}
                      >
                        <img src={selectedCircle} alt="shape" />
                        <p className="blue-color ml-2">Male</p>
                      </button>
                    ) : (
                      <button className="d-flex mb-3" onClick={filterMale}>
                        <img src={initialCircle} alt="shape" />
                        <p className="black-color ml-2">Male</p>
                      </button>
                    )}
                    {femaleFilter ? (
                      <button className="d-flex" onClick={filterFemale}>
                        <img src={selectedCircle} alt="shape" />
                        <p className="blue-color ml-2 mb-3">Female</p>
                      </button>
                    ) : (
                      <button className="d-flex" onClick={filterFemale}>
                        <img src={initialCircle} alt="shape" />
                        <p className="black-color ml-2 mb-3">Female</p>
                      </button>
                    )}
                  </div>
                  <hr />
                  <div className="filter_header">
                    <p className="mb-4">Fee</p>
                    {less200 ? (
                      <button className="d-flex mb-3" onClick={filterLess200}>
                        <img src={selectedCircle} alt="shape" />
                        <p className="blue-color ml-2">&#60; 200</p>
                      </button>
                    ) : (
                      <button className="d-flex mb-3" onClick={filterLess200}>
                        <img src={initialCircle} alt="shape" />
                        <p className="black-color ml-2">&#60; 200</p>
                      </button>
                    )}
                    {less500 ? (
                      <button className="d-flex" onClick={filterLess500}>
                        <img src={selectedCircle} alt="shape" />
                        <p className="blue-color ml-2 mb-3">200-500</p>
                      </button>
                    ) : (
                      <button className="d-flex" onClick={filterLess500}>
                        <img src={initialCircle} alt="shape" />
                        <p className="black-color ml-2 mb-3">200-500</p>
                      </button>
                    )}
                    {greater500 ? (
                      <button className="d-flex" onClick={filterGreater500}>
                        <img src={selectedCircle} alt="shape" />
                        <p className="blue-color ml-2 mb-3">&#62; 500</p>
                      </button>
                    ) : (
                      <button className="d-flex" onClick={filterGreater500}>
                        <img src={initialCircle} alt="shape" />
                        <p className="black-color ml-2 mb-3">&#62; 500</p>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-md-9">
                <div className="row doctor_list">
                  {blog
                    ? blog.map((doctor) => {
                      {
                        console.log("dd",doctor)
                      }
                        return (
                          <div className="col-md-12 doctor_card">
                            <div className="row">
                              <div className="col-md-3 pr-0">
                                {doctor.file ? (
                                  <img
                                    key={doctor.id}
                                    src={
                                      "https://api-admin.shafa.care/api/v3/auth/publicFile/" +
                                      doctor.file.path
                                    }
                                    alt={doctor.name}
                                  />
                                ) : (
                                  <>
                                    {doctor.gender === "Female" ? (
                                      <img
                                        src={femaleDocImg}
                                        alt="doctor profile"
                                      />
                                    ) : (
                                      <img
                                        src={maleDocImg}
                                        alt="doctor profile"
                                      />
                                    )}
                                  </>
                                )}
                              </div>
                              <div className="col-md-9 doctor_details pl-3">
                                <div className="row">
                                  <div className="col-md-6 pl-0">
                                    <h6>{doctor.name}</h6>
                                    {doctor.specialist ? (
                                      <p className="specialist">
                                        {doctor.specialist.name}
                                      </p>
                                    ) : (
                                      <p className="specialist">
                                        Specialist: Not mentioned
                                      </p>
                                    )}

                                    <p className="degree">
                                      {doctor.degree}, {doctor.education}
                                    </p>
                                    <p className="fee">
                                      Fees : {doctor.fee} &#2547;
                                    </p>
                                    {doctor.institute ? (
                                      <p className="fee">
                                        Institute : {doctor.institute}
                                      </p>
                                    ) : null}
                                  </div>
                                  <div className="col-md-6 pl-0 pr-0 card-right">
                                    {doctor.practicingSince ? (
                                      <p className="fee">
                                        Experience From :{" "}
                                        {doctor.practicingSince}
                                      </p>
                                    ) : null}
                                    {doctor.hospital && doctor.hospital.file ? (
                                      <Link
                                        as={`/hospital-info/${doctor.hospital.id}`}
                                        href={{
                                          pathname: `/hospital-info`,
                                          query: { id: doctor.hospital.id },
                                        }}
                                      >
                                        <img
                                          src={
                                            "https://api-admin.shafa.care/api/v3/auth/publicFile/" +
                                            doctor.hospital.file.path
                                          }
                                          alt={doctor.hospital.name}
                                        />
                                      </Link>
                                    ) : null}
                                  </div>
                                </div>
                              </div>
                              <hr />

                              <div className="col-md-12 d-flex justify-content-between">
                                <p>Speaks: {doctor.language}</p>
                                <button
                                  className="appintment_btn"
                                  type="button"
                                  onClick={() => bookAppointment(doctor)}
                                >
                                  Book Appointment
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>

              <div id="filter-for-pc" className="col-md-3">
                <div className="doctor_filter">
                  <div className="filter_header d-flex justify-content-between">
                    <p>Filters</p>
                    <button onClick={cleareAll}>Clear All</button>
                  </div>
                  <hr />
                  <div className="filter_header">
                    <p className="mb-4">Gender</p>
                    {maleFilter ? (
                      <button
                        className="d-flex mb-3"
                        onClick={() => filterMale()}
                      >
                        <img src={selectedCircle} alt="shape" />
                        <p className="blue-color ml-2">Male</p>
                      </button>
                    ) : (
                      <button className="d-flex mb-3" onClick={filterMale}>
                        <img src={initialCircle} alt="shape" />
                        <p className="black-color ml-2">Male</p>
                      </button>
                    )}
                    {femaleFilter ? (
                      <button className="d-flex" onClick={filterFemale}>
                        <img src={selectedCircle} alt="shape" />
                        <p className="blue-color ml-2 mb-3">Female</p>
                      </button>
                    ) : (
                      <button className="d-flex" onClick={filterFemale}>
                        <img src={initialCircle} alt="shape" />
                        <p className="black-color ml-2 mb-3">Female</p>
                      </button>
                    )}
                  </div>
                  <hr />
                  <div className="filter_header">
                    <p className="mb-4">Fee</p>
                    {less200 ? (
                      <button className="d-flex mb-3" onClick={filterLess200}>
                        <img src={selectedCircle} alt="shape" />
                        <p className="blue-color ml-2">&#60; 200</p>
                      </button>
                    ) : (
                      <button className="d-flex mb-3" onClick={filterLess200}>
                        <img src={initialCircle} alt="shape" />
                        <p className="black-color ml-2">&#60; 200</p>
                      </button>
                    )}
                    {less500 ? (
                      <button className="d-flex" onClick={filterLess500}>
                        <img src={selectedCircle} alt="shape" />
                        <p className="blue-color ml-2 mb-3">200-500</p>
                      </button>
                    ) : (
                      <button className="d-flex" onClick={filterLess500}>
                        <img src={initialCircle} alt="shape" />
                        <p className="black-color ml-2 mb-3">200-500</p>
                      </button>
                    )}
                    {greater500 ? (
                      <button className="d-flex" onClick={filterGreater500}>
                        <img src={selectedCircle} alt="shape" />
                        <p className="blue-color ml-2 mb-3">&#62; 500</p>
                      </button>
                    ) : (
                      <button className="d-flex" onClick={filterGreater500}>
                        <img src={initialCircle} alt="shape" />
                        <p className="black-color ml-2 mb-3">&#62; 500</p>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {loginSection ? (
          <div className="login-popup">
            <div className="container">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-3"></div>

                <div className="col-md-4">
                  <button onClick={closeBookAppointment} className="close">x</button>
                  <form>
                    <h3 className="w-100 text-center">Login</h3>
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
                        <p className="text-red text-left">{notePhone}</p>
                      ) : null}
                    </div>
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
                        <p className="text-red text-left">{notePassword}</p>
                      ) : null}
                    </div>
                    <div className="form-group">
                      <label className="w-100 text-left  ">
                        Type<span className="text-danger"> *</span>
                      </label>
                      <Select
                        // defaultValue={}
                        placeholder={
                          <label className="w-100 text-left pt-2 ">
                            --- Select Role ---
                          </label>
                        }
                        className="w-100"
                        name="role"
                        options={actions}
                        onChange={(event) => setRole(event)}
                      />
                    </div>
                    <div className="proceed-btn text-center">
                      <button
                        className="submit"
                        type="button"
                        onClick={mySubmitHandler}
                      >
                        Submit
                      </button>
                    </div>
                    <div className=" txt-sm pt-3">
                      <p>
                        If don't have account please{" "}
                        <Link href="/registration">Click here</Link>
                      </p>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        ) : null}

        {
          symptomSection && symptomById?
          <div className="symptom-section">
            <div className="container">
              <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-6 d-flex flex-row">
                  <div className="closeBtn">
                      <button onClick={() => bookAppointmentClose()}>X</button>
                    </div>
                    
                    <div>
                    {
                      symptomById?
                      symptomById.map((item,key) => {
                        return(
                          <div className="health-issue-grp">
                            <p>{item.name}</p>
                            {
                              item.health_issues&&item.health_issues.map((items) => {
                                return(
                                  <>
                                  {
                                    items == specialistIds1 || specialistIds2 == items?
                                  
                                  <button className="active" onClick={() => setHealthEssueFun(items)}>{items.name}</button>
                                  :
                                  <button className="" onClick={() => setHealthEssueFun(items)}>{items.name}</button>
                                }
                                </>
                                )
                              })
                            }
                          </div>
                        )
                      })
                      :null
                    }
                    </div>
                    <div className="next-btn mt-3">
                      {
                        specialistIds1 || specialistIds2 ?
                        <Link as={`/check-out`} href={{ pathname: '/check-out', query: {userId:userId,doctorId:doctorId,specialistId1:tempId1,specialistId2:tempId2} }}>
                      Next
                      </Link>:
                      <a href="">Next</a>

                      }
                    
                  </div>
                    
                  </div>
                  
                  
              </div>
            </div>
          </div>
          :null
        }

        {/* End Blog Area */}
        <Footer />
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
