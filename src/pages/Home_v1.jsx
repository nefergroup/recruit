import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Banner01 from "../components/banner/Banner01";
import Category from "../components/category";
import Jobs from "../components/jobs";
import BoxIcon from "../components/boxicon";
import Employer from "../components/employer";
import Testimonials from "../components/testimonials";
import Partner from "../components/partner";
import dataCate from "../assets/fakeData/dataCategory";
import dataJobs from "../assets/fakeData/dataJobs";
import dataEm from "../assets/fakeData/dataEmployers";
import dataTestimonials from "../assets/fakeData/dataTestimonials";
import dataPartner from "../assets/fakeData/dataPartner";
import Header from "../components/header";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import PopUpForm from "../components/popup";

Home_v1.propTypes = {};

function Home_v1(props) {
  const [isShowMobile, setShowMobile] = useState(false);

  const handleMobile = () => {
    const getMobile = document.querySelector(".menu-mobile-popup");
    setShowMobile(!isShowMobile);
    !isShowMobile
      ? getMobile.classList.add("modal-menu--open")
      : getMobile.classList.remove("modal-menu--open");
  };

  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);

  useEffect(() => {
    const getPopup = document.querySelector(".wd-popup-form");
    setTimeout(() => {
      getPopup.classList.add("modal-menu--open");
    }, 3000);
  }, []);

  return (
    <>
      <PopUpForm />

      <div className="menu-mobile-popup">
        <div className="modal-menu__backdrop" onClick={handleMobile}></div>
        <div className="widget-filter">
          <div className="mobile-header">
            <div id="logo" className="logo">
              <Link to="/">
                <img className="site-logo" src={logo} alt="Image" />
              </Link>
            </div>
            <Link className="title-button-group" onClick={handleMobile}>
              <i className="icon-close"></i>
            </Link>
          </div>

          <div className="mobile-menu-simple">
            <nav className="main-nav mobile">
              <ul id="menu-primary-menu" className="menu">
                <li className="menu-item">
                  <Link to="/" className="iteam-menu" onClick={handleMobile}>
                    Home
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/joblist_v1" className="iteam-menu" onClick={handleMobile}>
                    Find Jobs
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/aboutus" className="iteam-menu" onClick={handleMobile}>
                    About
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/contactus" className="iteam-menu" onClick={handleMobile}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="header-customize-item button">
              <Link to="/" onClick={handleMobile}>Upload Resume</Link>
            </div>
          </div>
        </div>
      </div>

      <Header clname="act1" handleMobile={handleMobile} />
      <Banner01 />

      <Category data={dataCate} className="job-category-section" />

      <Jobs data={dataJobs} className="jobs-section-three" />

      <BoxIcon />

      <Employer data={dataEm} className="employer-section" />

      <Partner data={dataPartner} />

      <Footer />

      <Gotop />
    </>
  );
}

export default Home_v1;