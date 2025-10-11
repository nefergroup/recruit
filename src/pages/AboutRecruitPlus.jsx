import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
import Footer from "../components/footer";
import Breadcrumb from "../components/breadcrumb";
import Gotop from "../components/gotop";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useState } from "react";

// Import the same CSS file
import "../components/header/mobile-menu.css";

AboutRecruitPlus.propTypes = {};

function AboutRecruitPlus(props) {
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

          {/* Mobile Menu */}
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

                <li className="menu-item">
                  <Link to="/aboutus" className="iteam-menu" onClick={handleMobile}>
                    About Us
                  </Link>
                </li>

                <li className="menu-item current-item">
                  <Link to="/aboutrecruitplus" className="iteam-menu" onClick={handleMobile}>
                    About Recruit Plus
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
      <Breadcrumb title="About Recruit Plus" />
      
      {/* About Recruit Plus Section */}
      <section className="tf-section about-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-content">
                <div className="heading">
                  <h2 className="title">About Recruit Plus</h2>
                </div>
                
                <div className="content-text">
                  <p>
                    Established in 2012, Recruit Plus is a comprehensive human resources and recruitment organization headquartered in Croatia with strategic operations across Europe. We operate through three specialized divisions:
                  </p>
                  
                  <ul className="division-list">
                    <li><strong>Recruit Plus</strong> - Our core recruitment and HR consultancy services</li>
                    <li><strong>SkillGrow Academy</strong> - Professional skill development and personality enhancement programs</li>
                    <li><strong>Vision 360 Degree d.o.o.</strong> - Specialized job placement and career transition services</li>
                  </ul>
                  
                  <p>
                    Our extensive European network spans five key markets, positioning us uniquely to address the growing skilled labour shortage across construction, steel manufacturing, hospitality, and transportation industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Europe Needs Your Skills Section */}
      <section className="tf-section skills-section bg-gray">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="skills-content">
                <div className="heading">
                  <h2 className="title">Why Europe Needs Your Skills</h2>
                </div>
                
                <div className="content-text">
                  <p>
                    The European Union faces critical skilled labour shortages with over 42 types of jobs experiencing significant gaps. Construction labour shortages are now three times higher than a decade ago, while 82% of German employers report difficulty finding qualified candidates. Our specialized programs address these exact industry needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Gotop />
    </>
  );
}

export default AboutRecruitPlus;
