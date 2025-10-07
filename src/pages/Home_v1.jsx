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

          {/* Updated Mobile Menu Structure */}
          <div className="mobile-menu-content">
            <nav className="main-nav mobile">
              <ul id="menu-primary-menu" className="menu">
                <li className="menu-item current-item">
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
                    About Us
                  </Link>
                </li>

                <li className="menu-item">
                  <Link to="/contactus" className="iteam-menu" onClick={handleMobile}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header-customize-item button">
            <Link to="/" onClick={handleMobile}>Upload Resume</Link>
          </div>

          {/* Mobile Footer Section */}
          <div className="mobile-footer">
            <div className="icon-infor d-flex aln-center">
              <div className="icon">
                <span className="icon-call-calling">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                  <span className="path4"></span>
                </span>
              </div>
              <div className="content">
                <p>Need help? 24/7</p>
                <h6>
                  <Link to="tel:0123456678">001-1234-88888</Link>
                </h6>
              </div>
            </div>
            <div className="wd-social d-flex aln-center">
              <ul className="list-social d-flex aln-center">
                <li>
                  <Link to="#">
                    <i className="icon-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-linkedin2"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-pinterest"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-instagram1"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Hamburger Menu Icon CSS */}
      <style jsx>{`
        /* Ensure the hamburger menu icon shows as 3 bars */
        .icon-menu:before {
          content: "\\2630" !important; /* Unicode for hamburger icon */
          font-size: 24px;
        }
        
        /* Alternative approach using CSS bars */
        .mobile-menu-btn .icon-menu {
          display: inline-block;
          width: 25px;
          height: 17px;
          position: relative;
        }
        
        .mobile-menu-btn .icon-menu:before {
          content: '';
          position: absolute;
          width: 25px;
          height: 2px;
          background: #000;
          top: 0;
          left: 0;
        }
        
        .mobile-menu-btn .icon-menu:after {
          content: '';
          position: absolute;
          width: 25px;
          height: 2px;
          background: #000;
          bottom: 0;
          left: 0;
        }
        
        .mobile-menu-btn .icon-menu span {
          position: absolute;
          width: 25px;
          height: 2px;
          background: #000;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
      `}</style>

      <Header clname="act1" handleMobile={handleMobile} />
      <Banner01 />

      <Category data={dataCate} className="job-category-section" />

      <Jobs data={dataJobs} className="jobs-section-three" />

      <BoxIcon />

      <Employer data={dataEm} className="employer-section" />

      {/* <Partner data={dataPartner} /> */}

      <Footer />

      <Gotop />
    </>
  );
}

export default Home_v1;
