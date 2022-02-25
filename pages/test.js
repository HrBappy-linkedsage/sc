import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

export default function Test() {

  return (
    <>
    {/* <div className="navbar-area">
                <div className="main-navbar">
                    <div className="container-fluid">
                        <nav className="navbar d-flex flex-row justify-content-between">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src={logo} alt="logo" />
                                </a>
                            </Link>
                            
                            <div className="d-flex justify-content-center search-doctor m-auto home-filter-area d-flex">
                                <div className="dropdown "> 
                                    <div className="w-100 ">
                                        {
                                            selectLabel?
                                            <Select
                                            defaultValue={selectLabel}
                                            placeholder={<div className="d-flex align-items-center justify-content-between w-100"><div className="plaseholder__"><span>Search doctors</span></div> <i className="fas fa-search"></i></div>}
                                            className="w-100"
                                            name="specialistIds"
                                            options={selectValues}
                                            onChange={event => handleChangeNav(event.value)}
                                        />
                                        :
                                        <Select
                                            placeholder={<div className="d-flex align-items-center justify-content-between w-100"><div className="plaseholder__"><span>Search doctors</span></div> <i className="fas fa-search"></i></div>}
                                            className="w-100"
                                            name="specialistIds"
                                            options={selectValues}
                                            onChange={event => handleChangeNav(event.value)}
                                        />
                                        }
                                        
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-row menu_list align-items-center">
                                <ul className="navbar-nav d-flex flex-row mr-5">
                                    <li className="nav-item">
                                       <Link href="/about-us"><a className="nav-link">About Us</a></Link>
                                    </li>
                                    <li className="nav-item">
                                       <Link href="/services"><a className="nav-link">Services</a></Link>
                                    </li>
                                    <li className="nav-item">
                                       <Link href="/blog-list"><a className="nav-link">Blog</a></Link>
                                    </li> 
                                    <li className="nav-item">
                                       <Link href="/for-doctor"><a className="nav-link">For Doctor</a></Link>
                                    </li> 
                                    <li className="nav-item">
                                       <Link href="/contact"><a className="nav-link">Contact</a></Link>
                                    </li>  
                                                                       
                                </ul>

                                <div className="others-options">
                                    <Link href="/app"><a href="#" className="default-btn download_app">
                                        Download App
                                        <span></span>
                                    </a>
                                    </Link> 
                                </div>
                            </div>
                            <button className="toggleNav" onClick={() => setShowLinks(!showLinks)}>
                                {showLinks ? <img src={cross} alt="cross" /> : <img src={menu} alt="menu" />}
                            </button>  
                        </nav>
                        <div className="mobile_menu" id={showLinks ? "hidden": "notHidden"}>
        
                            <Link className="mobile_common_links" href="/about-us"><button  onClick={() => setShowLinks(false)}>About Us</button></Link>
                            <Link className="mobile_common_links" href="/services"><button  onClick={() => setShowLinks(false)}>Services</button></Link>
                            <Link className="mobile_common_links" href="/blog-list"><button  onClick={() => setShowLinks(false)}>Blog</button></Link>
                            <Link className="mobile_common_links" href="/for-doctor"><button  onClick={() => setShowLinks(false)}>For Doctor</button></Link>
                            <Link className="mobile_common_links" href="/contact"><button className="contact__btn"  onClick={() => setShowLinks(false)}>Contact</button></Link>

                            <div className="others-options d-flex align-items-end h-100 pb-2">
                                    <Link href="/app"><a href="#" className="default-btn download_app">
                                        Download App
                                        <span></span>
                                    </a>
                                    </Link> 
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div> */}
    </>
  );
}
