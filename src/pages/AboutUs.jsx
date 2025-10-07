import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import Footer from "../components/footer";
import Breadcrumb from "../components/breadcrumb";
import Review from "../components/aboutPage/Review";
import Gotop from "../components/gotop";
import BannerCounter from "../components/aboutPage/BannerCounter";
import { Link } from "react-router-dom";
import img1 from "../assets/images/review/g.jpg";
import img2 from "../assets/images/job/work-icon-2.jpg";
import img3 from "../assets/images/job/work-icon-3.jpg";
import Iconbox3 from "../components/aboutPage/Iconbox3";
import Testimonial from "../components/aboutPage/Testimonial";
import dataTestimonials from "../assets/fakeData/dataTestimonials";
import Partner from "../components/aboutPage/Partner";
import logo from "../assets/images/logo.png";
import { useState } from "react";

// Import the same CSS file
import "../components/header/mobile-menu.css";

AboutUs.propTypes = {};

function AboutUs(props) {
  const [isShowMobile, setShowMobile] = useState(false);

  const handleMobile = () => {
    const getMobile = document.querySelector(".menu-mobile-popup");
    setShowMobile(!isShowMobile);
    !isShowMobile
      ? getMobile.classList.add("modal-menu--open")
      : getMobile.classList.remove("modal-menu--open");
  };

  return (
    <>
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

          {/* Simplified Mobile Menu - Same as other pages */}
          <div className="mobile-menu-content">
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

                <li className="menu-item current-item">
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
      
      <Header2 clname="actPage5" handleMobile={handleMobile} />
      <Breadcrumb title="About Us" />
      <Review />
      <BannerCounter />
      <section className="wd-iconbox style-3 inner-iconbox-section">
        <div className="tf-container">
          <div className="title-iconbox style-3 stc">
            <h4>How it work?</h4>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="group-col-3">
                <div className="tf-iconbox style-3 cl3 stc2">
                  <div className="box-header">
                    <div className="img1">
                      <img src={img1} alt="img" />
                    </div>
                  </div>
                  <div className="box-content">
                    <h6 className="box-title">
                      <Link to="/Blogsingle_v1">Free Skill Evaluation</Link>
                    </h6>
                    <p>
                     Before applying, your skills are assessed through practical tests and interviews to ensure you meet international job standards. Our expert team helps identify your strengths and areas for improvement — preparing you for overseas opportunities with confidence.
                    </p>
                  </div>
                </div>
                <div className="tf-iconbox style-3 cl3 stc2">
                  <div className="box-header">
                    <div className="img1">
                      <img src={img2} alt="img" />
                    </div>
                  </div>
                  <div className="box-content">
                    <h6 className="box-title">
                      <Link to="/Blogsingle_v1">Get Certified & Job-Ready</Link>
                    </h6>
                    <p>
                    Through our official training partner, SkillGrow Academy, you'll receive hands-on training aligned with European and Gulf standards. You'll gain real-world experience, earn globally recognized certifications, and become fully ready for international work environments.
                    </p>
                  </div>
                </div>
                <div className="tf-iconbox style-3 cl3 stc2">
                  <div className="box-header">
                    <div className="img1">
                      <img src={img3} alt="img" />
                    </div>
                  </div>
                  <div className="box-content ">
                    <h6 className="box-title">
                      <Link to="/Blogsingle_v1">
                       Placement & Guidance
                      </Link>
                    </h6>
                    <p>
                  Once certified, Recruit Plus connects you with verified employers across Europe and the Middle East. From visa processing to onboarding, we guide you at every step — ensuring a smooth, safe, and transparent journey toward your new career abroad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Iconbox3 />
      <Footer />
      <Gotop />
    </>
  );
}

export default AboutUs;
