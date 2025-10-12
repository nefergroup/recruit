import React from "react";
import PropTypes from "prop-types";
// import Header2 from "../components/header/Header2";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Breadcrumb from "../components/breadcrumb";
import Gotop from "../components/gotop";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";

// Import the same CSS file
import "../components/header/mobile-menu.css";

Specialization.propTypes = {};

function Specialization(props) {
  const [isShowMobile, setShowMobile] = useState(false);
  const [viewPortEntered, setViewPortEntered] = useState(false);

  const handleMobile = () => {
    const getMobile = document.querySelector(".menu-mobile-popup");
    setShowMobile(!isShowMobile);
    !isShowMobile
      ? getMobile.classList.add("modal-menu--open")
      : getMobile.classList.remove("modal-menu--open");
  };

  const onVWEnter = () => {
    setViewPortEntered(true);
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
                  <Link to="/aboutrecruitplus" className="iteam-menu" onClick={handleMobile}>
                    About Recruit Plus
                  </Link>
                </li>

                <li className="menu-item current-item">
                  <Link to="/specialization" className="iteam-menu" onClick={handleMobile}>
                    Specialization
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
      
      {/* <Header2 clname="actPage5" handleMobile={handleMobile} /> */}
      <Navbar />
      <Breadcrumb title="Specialization" />
      
      {/* Introduction Section */}
      <section className="inner-review-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="wd-review-job thumb2 widget-counter stc">
                <div className="thumb">
                  <img 
                    src="/images/recruit/IMG-20251011-WA0034.jpg" 
                    alt="images" 
                    style={{ maxWidth: '100%', maxHeight: '400px', width: 'auto', height: 'auto', objectFit: 'cover' }}
                  />
                </div>
                <div className="trader-box">
                  <div className="content">
                    <h3 className="number wrap-counter">
                      <Waypoint onEnter={onVWEnter}>
                        <span>
                          {viewPortEntered && (
                            <CountUp
                              className="number"
                              end={2.5}
                              suffix="M+"
                              duration={3}
                            />
                          )}
                        </span>
                      </Waypoint>
                    </h3>
                    <div className="des">Jobs in European Steel Industry</div>
                  </div>
                </div>
                <div className="tes-box ani5">
                  <div className="client-box">
                    <div className="content">
                      <h6 className="number wrap-counter">
                        <Waypoint onEnter={onVWEnter}>
                          <span>
                            {viewPortEntered && (
                              <CountUp
                                className="number"
                                end={123}
                                suffix="B"
                                duration={3}
                              />
                            )}
                          </span>
                        </Waypoint>
                      </h6>
                      <div className="des">Annual Turnover (€)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 wow fadeInRight">
              <div className="wd-review-job contentbox1 page-text stc">
                <h3>Our Specializations</h3>
                <p style={{ textAlign: 'justify' }}>
                  Recruit Plus specializes in four key industries where European demand for skilled professionals continues to grow. Our expertise spans steel manufacturing, construction, hospitality, and transportation sectors.
                </p>
                <p style={{ textAlign: 'justify' }}>
                  With over 12 years of experience, we understand the specific requirements of each industry and provide targeted recruitment solutions that match skilled professionals with the right opportunities across Europe.
                </p>
                <Link to="/contactus" className="tf-button style-1">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Sections */}
      <section className="wd-iconbox style-3 inner-iconbox-section">
        <div className="tf-container">
          <div className="title-iconbox style-3 stc">
            <h4>Industry Specializations</h4>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="group-col-2">
                {/* Steel Structure & Component Manufacturing */}
                <div className="tf-iconbox style-3 cl3 stc2">
                  <div className="box-header">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M20 2L25 15H35L26.5 23L31.5 36L20 28L8.5 36L13.5 23L5 15H15L20 2Z" stroke="#14A077" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="box-content">
                    <h6 className="box-title">Steel Structure & Component Manufacturing</h6>
                    <p>
                      The European steel industry supports 2.5 million jobs and generates €123 billion in turnover annually. We supply qualified metallurgical engineers, welders, structural steel technicians, process operators, and maintenance specialists to meet the industry's evolving technological demands.
                    </p>
                  </div>
                </div>

                {/* Construction Industry */}
                <div className="tf-iconbox style-3 cl3 stc2">
                  <div className="box-header">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M20 5L35 15V25L20 35L5 25V15L20 5Z" stroke="#14A077" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20 5V35" stroke="#14A077" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M5 15H35" stroke="#14A077" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="box-content">
                    <h6 className="box-title">Construction Industry</h6>
                    <p>
                      With construction labour shortages now three times higher than a decade ago across EU member states, we provide skilled tradespeople including carpenters, electricians, plumbers, project managers, and specialized construction technicians.
                    </p>
                  </div>
                </div>

                {/* Hospitality Sector */}
                <div className="tf-iconbox style-3 cl3 stc2">
                  <div className="box-header">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M20 2L25 10H35L28 16L30 25L20 20L10 25L12 16L5 10H15L20 2Z" stroke="#14A077" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="box-content">
                    <h6 className="box-title">Hospitality Sector</h6>
                    <p>
                      European hospitality continues expanding post-pandemic, requiring diverse skilled professionals. We recruit experienced chefs, hotel managers, housekeeping supervisors, and service specialists who understand international hospitality standards.
                    </p>
                  </div>
                </div>

                {/* Transportation & Logistics */}
                <div className="tf-iconbox style-3 cl3 stc2">
                  <div className="box-header">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M5 25H35V30C35 32.2 33.2 34 31 34H9C6.8 34 5 32.2 5 30V25Z" stroke="#14A077" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 25V15C10 12.8 11.8 11 14 11H26C28.2 11 30 12.8 30 15V25" stroke="#14A077" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="30" r="2" stroke="#14A077" strokeWidth="2"/>
                        <circle cx="28" cy="30" r="2" stroke="#14A077" strokeWidth="2"/>
                      </svg>
                    </div>
                  </div>
                  <div className="box-content">
                    <h6 className="box-title">Transportation & Logistics</h6>
                    <p>
                      Supporting Europe's growing transportation infrastructure needs with qualified drivers, logistics coordinators, warehouse managers, and transportation technicians.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="inner-review-section-two">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="wd-review-job thumb1 widget-counter">
                <div className="thumb">
                  <img 
                    src={require("../assets/images/review/thumb-review.png")} 
                    alt="images" 
                    style={{ maxWidth: '100%', maxHeight: '300px', width: 'auto', height: 'auto', objectFit: 'cover' }}
                  />
                </div>
                <div className="trader-box box1 ani4">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.82861 17.9669L10.8172 11.6126L17.1715 9.62402L15.1829 15.9783L8.82861 17.9669Z" stroke="#14A077" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="13" cy="13.7949" r="12" stroke="#14A077" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="content">
                    <h6 className="number wrap-counter">
                      <CountUp className="number" end={42} suffix="+" duration={3} enableScrollSpy />
                    </h6>
                    <div className="des">Job Types in Shortage</div>
                  </div>
                </div>
                <div className="trader-box box2 ani5">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M22.6673 10.4618C22.3412 8.11547 21.2527 5.94139 19.5695 4.27451C17.8863 2.60762 15.7017 1.54041 13.3522 1.23725C11.0028 0.934097 8.61881 1.41182 6.56759 2.59684M1.33398 2.46185V7.79518H6.66732" stroke="#14A077" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M1.33398 13.1289C1.66006 15.4753 2.74856 17.6494 4.4318 19.3162C6.11504 20.9831 8.29964 22.0503 10.6491 22.3535C12.9985 22.6567 15.3825 22.1789 17.4337 20.9939M22.6673 21.1289V15.7956H17.334" stroke="#14A077" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="content">
                    <h6 className="number wrap-counter">
                      <CountUp className="number" end={82} suffix="%" duration={3} enableScrollSpy />
                    </h6>
                    <div className="des">German Employers Report Difficulty</div>
                  </div>
                </div>
                <div className="trader-box box3 ani4">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.52382 15.5352C5.03915 15.5352 1.20898 16.213 1.20898 18.929C1.20898 21.6438 5.01465 22.3473 9.52382 22.3473C14.0085 22.3473 17.8387 21.6683 17.8387 18.9535C17.8387 16.2387 14.033 15.5352 9.52382 15.5352Z" stroke="#14A077" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.52465 11.6616C12.4833 11.6616 14.854 9.28976 14.854 6.33226C14.854 3.3736 12.4833 1.00293 9.52465 1.00293C6.56715 1.00293 4.19531 3.3736 4.19531 6.33226C4.19531 9.28976 6.56715 11.6616 9.52465 11.6616Z" stroke="#14A077" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="content">
                    <h6 className="number">3x Higher</h6>
                    <div className="des">Construction Labour Shortages</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 content-tab wow fadeInRight">
              <div className="wd-review-job contentbox1">
                <h3>Why Choose Our Specializations?</h3>
                <p>
                  Our specialized approach ensures that candidates are matched with opportunities that align with their skills and career goals. We understand the unique requirements of each industry and provide targeted support throughout the recruitment process.
                </p>
                <ul className="wd-list-icon">
                  <li>
                    <span className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 8.79492C0 13.2061 3.5888 16.7949 8 16.7949C12.4112 16.7949 16 13.2061 16 8.79492C16 4.38372 12.4112 0.794922 8 0.794922C3.5888 0.794922 0 4.38372 0 8.79492ZM12.1657 7.36061C12.4781 7.04819 12.4781 6.54166 12.1657 6.22924C11.8533 5.91682 11.3467 5.91682 11.0343 6.22924L7.2 10.0636L5.36569 8.22924C5.05327 7.91682 4.54673 7.91682 4.23431 8.22924C3.9219 8.54166 3.9219 9.04819 4.23431 9.36061L6.63432 11.7606C6.94673 12.073 7.45327 12.073 7.76569 11.7606L12.1657 7.36061Z" fill="#14A077"/>
                      </svg>
                    </span>
                    Industry-specific expertise and market knowledge
                  </li>
                  <li>
                    <span className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 8.79492C0 13.2061 3.5888 16.7949 8 16.7949C12.4112 16.7949 16 13.2061 16 8.79492C16 4.38372 12.4112 0.794922 8 0.794922C3.5888 0.794922 0 4.38372 0 8.79492ZM12.1657 7.36061C12.4781 7.04819 12.4781 6.54166 12.1657 6.22924C11.8533 5.91682 11.3467 5.91682 11.0343 6.22924L7.2 10.0636L5.36569 8.22924C5.05327 7.91682 4.54673 7.91682 4.23431 8.22924C3.9219 8.54166 3.9219 9.04819 4.23431 9.36061L6.63432 11.7606C6.94673 12.073 7.45327 12.073 7.76569 11.7606L12.1657 7.36061Z" fill="#14A077"/>
                      </svg>
                    </span>
                    Verified employers and genuine opportunities
                  </li>
                  <li>
                    <span className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 8.79492C0 13.2061 3.5888 16.7949 8 16.7949C12.4112 16.7949 16 13.2061 16 8.79492C16 4.38372 12.4112 0.794922 8 0.794922C3.5888 0.794922 0 4.38372 0 8.79492ZM12.1657 7.36061C12.4781 7.04819 12.4781 6.54166 12.1657 6.22924C11.8533 5.91682 11.3467 5.91682 11.0343 6.22924L7.2 10.0636L5.36569 8.22924C5.05327 7.91682 4.54673 7.91682 4.23431 8.22924C3.9219 8.54166 3.9219 9.04819 4.23431 9.36061L6.63432 11.7606C6.94673 12.073 7.45327 12.073 7.76569 11.7606L12.1657 7.36061Z" fill="#14A077"/>
                      </svg>
                    </span>
                    Specialized training and certification programs
                  </li>
                  <li>
                    <span className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 8.79492C0 13.2061 3.5888 16.7949 8 16.7949C12.4112 16.7949 16 13.2061 16 8.79492C16 4.38372 12.4112 0.794922 8 0.794922C3.5888 0.794922 0 4.38372 0 8.79492ZM12.1657 7.36061C12.4781 7.04819 12.4781 6.54166 12.1657 6.22924C11.8533 5.91682 11.3467 5.91682 11.0343 6.22924L7.2 10.0636L5.36569 8.22924C5.05327 7.91682 4.54673 7.91682 4.23431 8.22924C3.9219 8.54166 3.9219 9.04819 4.23431 9.36061L6.63432 11.7606C6.94673 12.073 7.45327 12.073 7.76569 11.7606L12.1657 7.36061Z" fill="#14A077"/>
                      </svg>
                    </span>
                    Complete visa and relocation support
                  </li>
                </ul>
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

export default Specialization;
