import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "../public/assets/img/logo.png";
import cross from "../public/assets/img/icon/cross.webp";
import menu from "../public/assets/img/icon/bars-solid.webp";
import Select from "react-select";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

import { toast } from "react-toast";

import axios from "../authAxios";

const Navbar = ({ dataNav, status, getNavDataFun }) => {
  const [cookies, setCookie, removeCookies] = useCookies(["userData"]);
  console.log("cookiiii", cookies);
  const [showLinks, setShowLinks] = useState(false);

  let routeLink = useRouter();
  function handleChangeNav(valueId) {
    let tempName = "";
    let tempId = "";

    if (Array.isArray(valueId.value)) {
      tempId = valueId.value;
      tempName = valueId.label;
    } else {
      tempId = valueId.value;
      tempName = valueId.label;
    }

    console.log("valu", valueId, tempId, tempName);

    if (status) getNavDataFun(tempName, tempId);
    routeLink.push({
      pathname: "/doctor-list",
      query: { id: tempId, label: tempName },
    });
  }

  var sendSymptomNav = [];

  const [symptomItemsNav, setsymptomItemsNav] = useState();

  function assignSymptomNav(res) {
    res.map((item) => {
      var tempArray = [];
      if (item.specialists)
        item.specialists.map((tempItem) => {
          tempArray.push(tempItem.id);
        });
      sendSymptomNav.push(tempArray);
    });
  }

  const getBlogList = async () => {
    return await axios
      .post("/specialities/specialities-list")
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

  const getsymptomItemsNav = async () => {
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
  const [selectValues, setselectValues] = useState([]);
  const [blogNav, setblogNav] = useState();
  const [loadingData, setLoadingData] = useState(true);
  const [popUp, setPopUp] = useState(false);

  let options = [];
  // load hospital data list
  useEffect(() => {
    if (loadingData) {
      getBlogList()
        .then((res) => {
          setblogNav(res);
          dataNav = res;

          dataNav.map((item) => {
            options.push({ value: item.id, label: item.name });
          });
        })
        .catch((err) => {
          console.log(err);
        });

      getsymptomItemsNav()
        .then((res) => {
          setsymptomItemsNav(res);
          assignSymptomNav(res);

          res.map((item) => {
            var tempItemArray = [];
            var tempNameArray = [];
            if (item.specialists)
              item.specialists.map((items) => {
                tempItemArray.push(parseInt(items.id));
                tempNameArray.push(items.name);
              });
            options.push({
              value: tempItemArray,
              name: tempNameArray,
              label: item.name,
            });
          });

          setselectValues(options);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  function popUpUser() {
    setPopUp(true);
  }
  function logOutFun() {
    toast.success("Sign out success");
    removeCookies("userData");
    console.log("logout success");
  }

  return (
    <div className="navbar-area">
      <div className="main-navbar">
        <div className="container-fluid">
          <nav className="navbar d-flex flex-row justify-content-between">
            <Link href="/">
              <a className="navbar-brand">
                <img src={logo} alt="brand logo" />
              </a>
            </Link>

            <div className="d-flex justify-content-center search-doctor m-auto home-filter-area d-flex">
              <div className="dropdown ">
                <div className="w-100 ">
                  <Select
                    // defaultValue={}
                    placeholder={
                      <div className="d-flex align-items-center justify-content-between w-100">
                        <div className="plaseholder__">
                          <span>Search doctors</span>
                        </div>{" "}
                        <i className="fas fa-search"></i>
                      </div>
                    }
                    className="w-100"
                    name="specialistIds"
                    options={selectValues}
                    onChange={(event) => handleChangeNav(event)}
                  />
                </div>
              </div>
            </div>

            <div className="d-flex flex-row menu_list align-items-center">
              <ul className="navbar-nav d-flex flex-row mr-3">
                <li className="nav-item">
                  <Link href="/about-us">
                    <a className="nav-link">About Us</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/services">
                    <a className="nav-link">Services</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/blog-list">
                    <a className="nav-link">Blog</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/for-doctor">
                    <a className="nav-link">For Doctor</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact">
                    <a className="nav-link">Contact</a>
                  </Link>
                </li>
                {cookies &&
                cookies.userData &&
                cookies.userData.token ? null : (
                  <li className="nav-item">
                    <Link href="/login">
                      <a className="nav-link">Login</a>
                    </Link>
                  </li>
                )}
              </ul>

              <div className="others-options mr-3">
                <Link href="/app">
                  <a href="#" className="default-btn download_app">
                    Download App
                    <span></span>
                  </a>
                </Link>
              </div>
              {cookies && cookies.userData && cookies.userData.token ? (
                <button className="user-btn" onClick={popUpUser}>
                  <i class="fa fa-user" aria-hidden="true"></i>

                  <div className="user-popUp">
                    <div className="d-flex flex-column text-center">
                      <Link href="/view-profile">
                        <a>View</a>
                      </Link>
                      <Link href="/edit-profile">
                        <a className="border-top">Edit</a>
                      </Link>
                      {
                        cookies.userData.data?
                      <Link href="/doctor-appointment">
                      <a className="border-top">Appointment</a>
                    </Link>
                    :null
                      }
                      <button onClick={logOutFun}>Logout</button>
                    </div>
                  </div>
                </button>
              ) : null}
            </div>
            <button
              className="toggleNav"
              onClick={() => setShowLinks(!showLinks)}
            >
              {showLinks ? (
                <img src={cross} alt="cross" />
              ) : (
                <img src={menu} alt="menu" />
              )}
            </button>
          </nav>
          <div className="mobile_menu" id={showLinks ? "hidden" : "notHidden"}>
            <Link className="mobile_common_links" href="/about-us">
              <button onClick={() => setShowLinks(false)}>About Us</button>
            </Link>
            <Link className="mobile_common_links" href="/services">
              <button onClick={() => setShowLinks(false)}>Services</button>
            </Link>
            <Link className="mobile_common_links" href="/blog-list">
              <button onClick={() => setShowLinks(false)}>Blog</button>
            </Link>
            <Link className="mobile_common_links" href="/for-doctor">
              <button onClick={() => setShowLinks(false)}>For Doctor</button>
            </Link>
            <Link className="mobile_common_links" href="/contact">
              <button
                className="contact__btn"
                onClick={() => setShowLinks(false)}
              >
                Contact
              </button>
            </Link>

            <div className="others-options d-flex align-items-end h-100 pb-2">
              <Link href="/app">
                <a href="#" className="default-btn download_app">
                  Download App
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
