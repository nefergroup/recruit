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

SkillGrowAcademy.propTypes = {};

function SkillGrowAcademy(props) {
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

                <li className="menu-item">
                  <Link to="/specialization" className="iteam-menu" onClick={handleMobile}>
                    Specialization
                  </Link>
                </li>

                <li className="menu-item">
                  <Link to="/recruitmentprocess" className="iteam-menu" onClick={handleMobile}>
                    Recruitment Process
                  </Link>
                </li>

                <li className="menu-item current-item">
                  <Link to="/skillgrowacademy" className="iteam-menu" onClick={handleMobile}>
                    SkillGrow Academy
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
      <Breadcrumb title="SkillGrow Academy" />
      
      {/* Hero Section */}
      <section className="tf-section academy-hero-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="academy-hero-content text-center">
                <h1 className="hero-title">SkillGrow Academy</h1>
                <h2 className="hero-subtitle">Train in India. Get Certified. Work in Europe</h2>
                <p className="hero-description">
                  Building Blue Collar Excellence - Training Programs Designed for Europe. SkillGrow Academy specializes in training Indian workers for global construction employment, with all programs aligned to European industry standards.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <h3 className="stat-number">
                      <Waypoint onEnter={onVWEnter}>
                        <span>
                          {viewPortEntered && (
                            <CountUp
                              className="number"
                              end={70}
                              suffix="%"
                              duration={3}
                            />
                          )}
                        </span>
                      </Waypoint>
                    </h3>
                    <p className="stat-label">Practical Training</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="stat-number">
                      <Waypoint onEnter={onVWEnter}>
                        <span>
                          {viewPortEntered && (
                            <CountUp
                              className="number"
                              end={6}
                              suffix=" Months"
                              duration={3}
                            />
                          )}
                        </span>
                      </Waypoint>
                    </h3>
                    <p className="stat-label">Course Duration</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="stat-number">
                      <Waypoint onEnter={onVWEnter}>
                        <span>
                          {viewPortEntered && (
                            <CountUp
                              className="number"
                              end={1500}
                              suffix="€"
                              duration={3}
                            />
                          )}
                        </span>
                      </Waypoint>
                    </h3>
                    <p className="stat-label">Starting Salary</p>
                  </div>
                </div>
                <Link to="/contactus" className="tf-button style-1 hero-button">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Programs Section */}
      <section className="tf-section core-programs-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header text-center">
                <h2 className="section-title">Core Programs</h2>
                <p className="section-subtitle">Comprehensive training for European industry standards</p>
              </div>
              
              <div className="programs-grid">
                <div className="row">
                  {/* Technical Skills Development */}
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="program-card">
                      <div className="program-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                          <path d="M30 5L35 20H50L37.5 30L42.5 45L30 35L17.5 45L22.5 30L10 20H25L30 5Z" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="program-title">Technical Skills Development</h3>
                      <ul className="program-features">
                        <li>Advanced manufacturing techniques for steel and construction industries</li>
                        <li>Digital technology integration for modern workplace requirements</li>
                        <li>Safety certification and compliance training</li>
                        <li>Quality management and process optimization</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Language & Communication */}
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="program-card">
                      <div className="program-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M30 10C40 10 48 18 48 28C48 38 40 46 30 46C20 46 12 38 12 28C12 18 20 10 30 10Z" stroke="#14A077" strokeWidth="3"/>
                          <path d="M25 28L28 31L35 24" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="program-title">Language & Communication</h3>
                      <ul className="program-features">
                        <li>Professional English proficiency programs</li>
                        <li>Business communication skills</li>
                        <li>Cross-cultural communication training</li>
                        <li>Presentation and leadership skills</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Personality Development */}
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="program-card">
                      <div className="program-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M30 15C40 15 48 23 48 33C48 43 40 51 30 51C20 51 12 43 12 33C12 23 20 15 30 15Z" stroke="#14A077" strokeWidth="3"/>
                          <path d="M25 33L28 36L35 29" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="program-title">Personality Development</h3>
                      <ul className="program-features">
                        <li>Professional etiquette and workplace behaviour</li>
                        <li>Leadership and team management skills</li>
                        <li>Adaptability and problem-solving capabilities</li>
                        <li>Career planning and professional growth strategies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Courses Section */}
      <section className="tf-section training-courses-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header text-center">
                <h2 className="section-title">Industry-Specific Training</h2>
                <p className="section-subtitle">Our curriculum aligns with European industry standards</p>
              </div>
              
              <div className="courses-grid">
                <div className="row">
                  {/* ARC/MIG Welding Course */}
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="course-card">
                      <div className="course-image">
                        <div className="course-placeholder">
                          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                            <path d="M40 10L50 30H70L55 40L65 60L40 50L15 60L25 40L10 30H30L40 10Z" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      <div className="course-content">
                        <div className="course-duration">6 Months</div>
                        <h3 className="course-title">ARC/MIG Welding Course</h3>
                        <p className="course-subtitle">Master European Welding Standards</p>
                        <ul className="course-features">
                          <li>Advanced ARC Welding Techniques (SMAW)</li>
                          <li>MIG Welding Proficiency (GMAW)</li>
                          <li>European Safety Standards</li>
                          <li>International welding credentials</li>
                        </ul>
                        <div className="course-salary">€1,500-4,000 monthly</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Steel Fitter Course */}
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="course-card">
                      <div className="course-image">
                        <div className="course-placeholder">
                          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                            <path d="M40 15L55 25V35L40 45L25 35V25L40 15Z" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M40 15V45" stroke="#14A077" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M25 25H55" stroke="#14A077" strokeWidth="3" strokeLinecap="round"/>
                          </svg>
                        </div>
                      </div>
                      <div className="course-content">
                        <div className="course-duration">6 Months</div>
                        <h3 className="course-title">Steel Fitter Course</h3>
                        <p className="course-subtitle">Build Europe's Infrastructure</p>
                        <ul className="course-features">
                          <li>Structural Steel Assembly</li>
                          <li>Blueprint Reading</li>
                          <li>Precision Fitting Techniques</li>
                          <li>Advanced Safety Protocols</li>
                        </ul>
                        <div className="course-salary">Steel construction projects</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Brick Wall Mason Course */}
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="course-card">
                      <div className="course-image">
                        <div className="course-placeholder">
                          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                            <rect x="20" y="25" width="40" height="30" rx="3" stroke="#14A077" strokeWidth="3"/>
                            <path d="M25 30H55" stroke="#14A077" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M25 35H50" stroke="#14A077" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M25 40H45" stroke="#14A077" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M25 45H40" stroke="#14A077" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                      </div>
                      <div className="course-content">
                        <div className="course-duration">5 Months</div>
                        <h3 className="course-title">Brick Wall Mason Course</h3>
                        <p className="course-subtitle">Traditional Craftsmanship, Modern Standards</p>
                        <ul className="course-features">
                          <li>European Masonry Techniques</li>
                          <li>Mortar Technology</li>
                          <li>Quality Control</li>
                          <li>Project Management</li>
                        </ul>
                        <div className="course-salary">Residential & commercial construction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Methodology Section */}
      <section className="tf-section methodology-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header text-center">
                <h2 className="section-title">Our Training Methodology</h2>
                <p className="section-subtitle">Proven approach to building European-ready professionals</p>
              </div>
              
              <div className="methodology-grid">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="methodology-item">
                      <div className="methodology-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                          <circle cx="25" cy="25" r="20" stroke="#14A077" strokeWidth="3"/>
                          <path d="M25 15V25L30 30" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="methodology-title">Hands-On Learning</h3>
                      <p className="methodology-description">70% practical training, 30% theoretical knowledge</p>
                    </div>
                  </div>
                  
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="methodology-item">
                      <div className="methodology-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                          <path d="M25 5L30 20H40L32.5 30L37.5 45L25 35L12.5 45L17.5 30L10 20H20L25 5Z" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="methodology-title">European Standards</h3>
                      <p className="methodology-description">All programs meet EU industry requirements</p>
                    </div>
                  </div>
                  
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="methodology-item">
                      <div className="methodology-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M25 10C35 10 43 18 43 28C43 38 35 46 25 46C15 46 7 38 7 28C7 18 15 10 25 10Z" stroke="#14A077" strokeWidth="3"/>
                          <path d="M20 28L23 31L30 24" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="methodology-title">Language Integration</h3>
                      <p className="methodology-description">Technical English and communication skills</p>
                    </div>
                  </div>
                  
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="methodology-item">
                      <div className="methodology-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                          <rect x="10" y="15" width="30" height="20" rx="3" stroke="#14A077" strokeWidth="3"/>
                          <path d="M15 20H35" stroke="#14A077" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M15 25H30" stroke="#14A077" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M15 30H25" stroke="#14A077" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <h3 className="methodology-title">Job Readiness</h3>
                      <p className="methodology-description">Direct preparation for European workplace demands</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Services Section */}
      <section className="tf-section placement-services-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header text-center">
                <h2 className="section-title">Recruit Plus - Job Placement Services</h2>
                <p className="section-subtitle">Your Complete Career Transition Partner</p>
              </div>
              
              <div className="placement-content">
                <div className="row">
                  <div className="col-lg-8 col-md-12">
                    <p className="placement-description">
                      Recruit Plus manages the entire placement process from initial consultation to successful career establishment in Europe. Our comprehensive approach ensures sustainable career transitions for skilled professionals.
                    </p>
                    
                    <div className="placement-services">
                      <div className="row">
                        <div className="col-lg-6 col-md-12">
                          <div className="service-item">
                            <div className="service-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15 5C20 5 24 9 24 14C24 19 20 23 15 23C10 23 6 19 6 14C6 9 10 5 15 5Z" stroke="#14A077" strokeWidth="2"/>
                                <path d="M12 14L14 16L18 12" stroke="#14A077" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <div className="service-content">
                              <h4 className="service-title">Career Counselling</h4>
                              <p className="service-description">Personalized career pathway planning and goal setting</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-12">
                          <div className="service-item">
                            <div className="service-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <rect x="5" y="8" width="20" height="14" rx="2" stroke="#14A077" strokeWidth="2"/>
                                <path d="M10 12H20" stroke="#14A077" strokeWidth="1" strokeLinecap="round"/>
                                <path d="M10 15H18" stroke="#14A077" strokeWidth="1" strokeLinecap="round"/>
                                <path d="M10 18H16" stroke="#14A077" strokeWidth="1" strokeLinecap="round"/>
                              </svg>
                            </div>
                            <div className="service-content">
                              <h4 className="service-title">Resume & Portfolio Development</h4>
                              <p className="service-description">Professional documentation aligned with European standards</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-12">
                          <div className="service-item">
                            <div className="service-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15 8C20 8 24 12 24 17C24 22 20 26 15 26C10 26 6 22 6 17C6 12 10 8 15 8Z" stroke="#14A077" strokeWidth="2"/>
                                <path d="M12 17L14 19L18 15" stroke="#14A077" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <div className="service-content">
                              <h4 className="service-title">Interview Preparation</h4>
                              <p className="service-description">Comprehensive training for European workplace expectations</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-12">
                          <div className="service-item">
                            <div className="service-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 5L18 12H25L20 17L22 24L15 20L8 24L10 17L5 12H12L15 5Z" stroke="#14A077" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <div className="service-content">
                              <h4 className="service-title">Contract Negotiation</h4>
                              <p className="service-description">Ensuring fair terms and conditions for all placements</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-12">
                          <div className="service-item">
                            <div className="service-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M15 5L20 10H25L22 15L25 20L15 18L5 20L8 15L5 10H10L15 5Z" stroke="#14A077" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <div className="service-content">
                              <h4 className="service-title">Relocation Support</h4>
                              <p className="service-description">Complete assistance with housing, banking, and administrative setup</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-12">
                          <div className="service-item">
                            <div className="service-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15 6C20 6 24 10 24 15C24 20 20 24 15 24C10 24 6 20 6 15C6 10 10 6 15 6Z" stroke="#14A077" strokeWidth="2"/>
                                <path d="M12 15L14 17L18 13" stroke="#14A077" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <div className="service-content">
                              <h4 className="service-title">Integration Programs</h4>
                              <p className="service-description">Ongoing support for cultural adaptation and career growth</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-12">
                    <div className="placement-cta">
                      <h3 className="cta-title">Ready to Start Your Journey?</h3>
                      <p className="cta-description">
                        Join SkillGrow Academy and begin your path to a successful European career.
                      </p>
                      <div className="cta-buttons">
                        <Link to="/contactus" className="tf-button style-1 cta-button-primary">
                          Enroll Now
                        </Link>
                        <Link to="/recruitmentprocess" className="tf-button style-2 cta-button-secondary">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Gotop />

      {/* Custom Styles for SkillGrow Academy Page */}
      <style jsx>{`
        /* Hero Section Styles */
        .academy-hero-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          color: white;
        }
        
        .academy-hero-content {
          max-width: 900px;
          margin: 0 auto;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .hero-subtitle {
          font-size: 1.8rem;
          color: #ffd700;
          margin-bottom: 2rem;
          font-weight: 600;
        }
        
        .hero-description {
          font-size: 1.2rem;
          margin-bottom: 3rem;
          line-height: 1.6;
          opacity: 0.9;
        }
        
        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 4rem;
          margin-bottom: 3rem;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          color: #ffd700;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          font-size: 1.1rem;
          margin: 0;
          opacity: 0.9;
        }
        
        .hero-button {
          font-size: 1.2rem;
          padding: 18px 35px;
          background: #ffd700;
          color: #1e3c72;
          border: 2px solid #ffd700;
        }
        
        .hero-button:hover {
          background: transparent;
          color: #ffd700;
          border: 2px solid #ffd700;
        }

        /* Core Programs Section */
        .core-programs-section {
          padding: 80px 0;
          background: #f8f9fa;
        }
        
        .section-header {
          margin-bottom: 4rem;
        }
        
        .section-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #1e3c72;
          margin-bottom: 1rem;
        }
        
        .section-subtitle {
          font-size: 1.3rem;
          color: #6c757d;
          margin: 0;
        }
        
        .programs-grid {
          margin-top: 3rem;
        }
        
        .program-card {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          height: 100%;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          margin-bottom: 2rem;
          border-top: 5px solid #14A077;
        }
        
        .program-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .program-icon {
          margin-bottom: 2rem;
          text-align: center;
        }
        
        .program-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1e3c72;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        
        .program-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .program-features li {
          padding: 0.8rem 0;
          color: #495057;
          position: relative;
          padding-left: 1.5rem;
          border-bottom: 1px solid #e9ecef;
        }
        
        .program-features li:last-child {
          border-bottom: none;
        }
        
        .program-features li::before {
          content: '▶';
          position: absolute;
          left: 0;
          color: #14A077;
          font-weight: bold;
        }

        /* Training Courses Section */
        .training-courses-section {
          padding: 80px 0;
          background: white;
        }
        
        .courses-grid {
          margin-top: 3rem;
        }
        
        .course-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          margin-bottom: 2rem;
          border: 2px solid #e9ecef;
        }
        
        .course-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
          border-color: #14A077;
        }
        
        .course-image {
          height: 200px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .course-placeholder {
          opacity: 0.3;
        }
        
        .course-content {
          padding: 2rem;
        }
        
        .course-duration {
          background: #14A077;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 1rem;
        }
        
        .course-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #1e3c72;
          margin-bottom: 0.5rem;
        }
        
        .course-subtitle {
          font-size: 1rem;
          color: #6c757d;
          margin-bottom: 1.5rem;
        }
        
        .course-features {
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem 0;
        }
        
        .course-features li {
          padding: 0.5rem 0;
          color: #495057;
          position: relative;
          padding-left: 1.2rem;
        }
        
        .course-features li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #14A077;
          font-weight: bold;
        }
        
        .course-salary {
          background: #ffd700;
          color: #1e3c72;
          padding: 0.8rem 1rem;
          border-radius: 10px;
          font-weight: 600;
          text-align: center;
        }

        /* Methodology Section */
        .methodology-section {
          padding: 80px 0;
          background: #f8f9fa;
        }
        
        .methodology-grid {
          margin-top: 3rem;
        }
        
        .methodology-item {
          text-align: center;
          padding: 2rem;
        }
        
        .methodology-icon {
          margin-bottom: 1.5rem;
        }
        
        .methodology-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1e3c72;
          margin-bottom: 1rem;
        }
        
        .methodology-description {
          font-size: 1rem;
          color: #6c757d;
          line-height: 1.6;
          margin: 0;
        }

        /* Placement Services Section */
        .placement-services-section {
          padding: 80px 0;
          background: white;
        }
        
        .placement-content {
          margin-top: 3rem;
        }
        
        .placement-description {
          font-size: 1.2rem;
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 3rem;
        }
        
        .placement-services {
          margin-bottom: 3rem;
        }
        
        .service-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 10px;
          border-left: 4px solid #14A077;
        }
        
        .service-icon {
          margin-right: 1rem;
          flex-shrink: 0;
        }
        
        .service-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1e3c72;
          margin-bottom: 0.5rem;
        }
        
        .service-description {
          font-size: 1rem;
          color: #6c757d;
          margin: 0;
          line-height: 1.5;
        }
        
        .placement-cta {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          color: white;
          padding: 3rem;
          border-radius: 20px;
          text-align: center;
          height: fit-content;
        }
        
        .cta-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .cta-description {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        
        .cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .cta-button-primary {
          background: #ffd700;
          color: #1e3c72;
          border: 2px solid #ffd700;
        }
        
        .cta-button-primary:hover {
          background: transparent;
          color: #ffd700;
          border: 2px solid #ffd700;
        }
        
        .cta-button-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }
        
        .cta-button-secondary:hover {
          background: white;
          color: #1e3c72;
          border: 2px solid white;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.4rem;
          }
          
          .hero-stats {
            flex-direction: column;
            gap: 2rem;
          }
          
          .section-title {
            font-size: 2.2rem;
          }
          
          .program-card {
            padding: 2rem;
          }
          
          .course-content {
            padding: 1.5rem;
          }
          
          .service-item {
            flex-direction: column;
            text-align: center;
          }
          
          .service-icon {
            margin-right: 0;
            margin-bottom: 1rem;
          }
          
          .placement-cta {
            padding: 2rem;
            margin-top: 2rem;
          }
        }

        @media (max-width: 576px) {
          .academy-hero-section,
          .core-programs-section,
          .training-courses-section,
          .methodology-section,
          .placement-services-section {
            padding: 60px 0;
          }
          
          .hero-title {
            font-size: 2rem;
          }
          
          .section-title {
            font-size: 1.8rem;
          }
          
          .program-card {
            padding: 1.5rem;
          }
          
          .course-content {
            padding: 1.2rem;
          }
          
          .methodology-item {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}

export default SkillGrowAcademy;
