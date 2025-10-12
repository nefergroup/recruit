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

OurRecruitmentProcess.propTypes = {};

function OurRecruitmentProcess(props) {
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

                <li className="menu-item">
                  <Link to="/skillgrowacademy" className="iteam-menu" onClick={handleMobile}>
                    SkillGrow Academy
                  </Link>
                </li>

                <li className="menu-item">
                  <Link to="/whychooserecruitplus" className="iteam-menu" onClick={handleMobile}>
                    Why Choose Us
                  </Link>
                </li>

                <li className="menu-item">
                  <Link to="/ourlocations" className="iteam-menu" onClick={handleMobile}>
                    Our Locations
                  </Link>
                </li>

                <li className="menu-item">
                  <Link to="/successstories" className="iteam-menu" onClick={handleMobile}>
                    Success Stories
                  </Link>
                </li>

                <li className="menu-item">
                  <Link to="/internationalrecruitmentservices" className="iteam-menu" onClick={handleMobile}>
                    International Recruitment
                  </Link>
                </li>

                <li className="menu-item current-item">
                  <Link to="/ourrecruitmentprocess" className="iteam-menu" onClick={handleMobile}>
                    Our Recruitment Process
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
      <Breadcrumb title="Our Recruitment Process" />
      
      {/* Hero Section */}
      <section className="tf-section process-hero-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="process-hero-content text-center">
                <h1 className="hero-title">Our Recruitment Process</h1>
                <h2 className="hero-subtitle">Your European Career Transition Partner</h2>
                <p className="hero-description">
                  Recruit Plus manages the entire placement ecosystem from initial consultation through successful long-term career establishment across our European network.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <h3 className="stat-number">
                      <Waypoint onEnter={onVWEnter}>
                        <span>
                          {viewPortEntered && (
                            <CountUp
                              className="number"
                              end={4}
                              suffix=" Phases"
                              duration={3}
                            />
                          )}
                        </span>
                      </Waypoint>
                    </h3>
                    <p className="stat-label">Comprehensive Process</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="stat-number">
                      <Waypoint onEnter={onVWEnter}>
                        <span>
                          {viewPortEntered && (
                            <CountUp
                              className="number"
                              end={95}
                              suffix="%"
                              duration={3}
                            />
                          )}
                        </span>
                      </Waypoint>
                    </h3>
                    <p className="stat-label">Success Rate</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="stat-number">
                      <Waypoint onEnter={onVWEnter}>
                        <span>
                          {viewPortEntered && (
                            <CountUp
                              className="number"
                              end={24}
                              suffix="/7"
                              duration={3}
                            />
                          )}
                        </span>
                      </Waypoint>
                    </h3>
                    <p className="stat-label">Support Available</p>
                  </div>
                </div>
                <Link to="/contactus" className="tf-button style-1 hero-button">
                  Start Your Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Phases Section */}
      <section className="tf-section process-phases-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header text-center">
                <h2 className="section-title">Our 4-Phase Recruitment Process</h2>
                <p className="section-subtitle">A systematic approach to your European career success</p>
              </div>
              
              <div className="phases-container">
                {/* Phase 1 */}
                <div className="phase-item">
                  <div className="phase-number">01</div>
                  <div className="phase-content">
                    <div className="phase-header">
                      <h3 className="phase-title">Comprehensive Assessment</h3>
                      <div className="phase-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M25 5C35 5 43 13 43 23C43 33 35 41 25 41C15 41 7 33 7 23C7 13 15 5 25 5Z" stroke="#e53e3e" strokeWidth="3"/>
                          <path d="M20 23L23 26L30 19" stroke="#e53e3e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div className="phase-description">
                      <p>Comprehensive evaluation and assessment to ensure the best fit for European opportunities.</p>
                    </div>
                    <div className="phase-features">
                      <div className="feature-item">
                        <span className="feature-icon">🔧</span>
                        <span className="feature-text">Technical skills evaluation through practical testing</span>
                      </div>
                      <div className="feature-item">
                        <span className="feature-icon">🌍</span>
                        <span className="feature-text">Language proficiency certification (IELTS/European standards)</span>
                      </div>
                      <div className="feature-item">
                        <span className="feature-icon">🤝</span>
                        <span className="feature-text">Cultural adaptability assessment</span>
                      </div>
                      <div className="feature-item">
                        <span className="feature-icon">🎯</span>
                        <span className="feature-text">Career goal alignment consultation</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="phase-item">
                  <div className="phase-number">02</div>
                  <div className="phase-content">
                    <div className="phase-header">
                      <h3 className="phase-title">Skills Enhancement</h3>
                      <div className="phase-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M25 7C35 7 43 15 43 25C43 35 35 43 25 43C15 43 7 35 7 25C7 15 15 7 25 7Z" stroke="#3182ce" strokeWidth="3"/>
                          <path d="M20 25L23 28L30 21" stroke="#3182ce" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div className="phase-description">
                      <p>Specialized training and skill development to meet European workplace standards.</p>
                    </div>
                    <div className="phase-features">
                      <div className="feature-item">
                        <span className="feature-icon">🎓</span>
                        <span className="feature-text">SkillGrow Academy specialized training enrolment</span>
                      </div>
                      <div className="feature-item">
                        <span className="feature-icon">🏢</span>
                        <span className="feature-text">European workplace preparation programs</span>
                      </div>
                      <div className="feature-item">
                        <span className="feature-icon">📜</span>
                        <span className="feature-text">Industry-specific certification completion</span>
                      </div>
                      <div className="feature-item">
                        <span className="feature-icon">💬</span>
                        <span className="feature-text">Cross-cultural communication development</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="phase-item">
                  <div className="phase-number">03</div>
                  <div className="phase-content">
                    <div className="phase-header">
                      <h3 className="phase-title">Documentation & Compliance</h3>
                      <div className="phase-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M25 9C35 9 43 17 43 27C43 37 35 45 25 45C15 45 7 37 7 27C7 17 15 9 25 9Z" stroke="#38a169" strokeWidth="3"/>
                          <path d="M20 27L23 30L30 23" stroke="#38a169" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div className="phase-description">
                      <p>Complete legal and administrative support for seamless European transition.</p>
                    </div>
                    <div className="phase-features">
                      <div className="feature-item">
                        <span className="feature-icon">📋</span>
                        <span className="feature-text">Complete visa and work permit assistance</span>
                      </div>
                      <div className="feature-item">
                        <span className="feature-icon">⚖️</span>
                        <span className="feature-text">Legal compliance management across all jurisdictions</span>
                      </div>
                      <div className="feature-item">
                        <span className="feature-icon">📝</span>
                        <span className="feature-text">Employment contract negotiation and review</span>
                      </div>
                      <div className="feature-item">
                        <span className="feature-icon">✈️</span>
                        <span className="feature-text">Pre-departure documentation completion</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 4 */}
                <div className="phase-item">
                  <div className="phase-number">04</div>
                  <div className="phase-content">
                    <div className="phase-header">
                      <h3 className="phase-title">Placement & Integration</h3>
                      <div className="phase-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M25 11C35 11 43 19 43 29C43 39 35 47 25 47C15 47 7 39 7 29C7 19 15 11 25 11Z" stroke="#805ad5" strokeWidth="3"/>
                          <path d="M20 29L23 32L30 25" stroke="#805ad5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div className="phase-description">
                      <p>Successful placement and ongoing support for long-term career success in Europe.</p>
                    </div>
                    <div className="phase-features">
                      <div className="feature-item">
                        <span className="feature-icon">🎯</span>
                        <span className="feature-text">Job matching with verified European employers</span>
                      </div>
                      <div className="feature-item">
                        <span className="feature-icon">🏠</span>
                        <span className="feature-text">Comprehensive relocation support services</span>
                      </div>
                      <div className="feature-item">
                        <span className="feature-icon">🌍</span>
                        <span className="feature-text">Cultural orientation and workplace integration</span>
                      </div>
                      <div className="feature-item">
                        <span className="feature-icon">📈</span>
                        <span className="feature-text">Ongoing career development and support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="tf-section comprehensive-services-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header text-center">
                <h2 className="section-title">Comprehensive Placement Services</h2>
                <p className="section-subtitle">End-to-end support for your European career journey</p>
              </div>
              
              <div className="services-grid">
                <div className="row">
                  {/* Career Strategy Development */}
                  <div className="col-lg-6 col-md-12">
                    <div className="service-card strategy-card">
                      <div className="service-header">
                        <div className="service-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <path d="M30 5L40 20H50L35 30L40 50L30 40L20 50L25 30L10 20H20L30 5Z" stroke="#e53e3e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <h3 className="service-title">Career Strategy Development</h3>
                      </div>
                      <div className="service-content">
                        <ul className="service-features">
                          <li>Personalized European career pathway planning</li>
                          <li>Industry trend analysis and opportunity identification</li>
                          <li>Skills gap assessment and development recommendations</li>
                          <li>Long-term professional growth strategy formulation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Professional Documentation Excellence */}
                  <div className="col-lg-6 col-md-12">
                    <div className="service-card documentation-card">
                      <div className="service-header">
                        <div className="service-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <path d="M30 10L50 20V30L30 40L10 30V20L30 10Z" stroke="#3182ce" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M30 40V60" stroke="#3182ce" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M10 30H50" stroke="#3182ce" strokeWidth="3" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <h3 className="service-title">Professional Documentation Excellence</h3>
                      </div>
                      <div className="service-content">
                        <ul className="service-features">
                          <li>European-standard resume and portfolio development</li>
                          <li>Technical certification portfolio compilation</li>
                          <li>Professional reference and recommendation management</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Interview & Workplace Preparation */}
                  <div className="col-lg-6 col-md-12">
                    <div className="service-card interview-card">
                      <div className="service-header">
                        <div className="service-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <path d="M30 10L40 20V40H20V20L30 10Z" stroke="#38a169" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M25 25H35" stroke="#38a169" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M25 30H35" stroke="#38a169" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M25 35H35" stroke="#38a169" strokeWidth="3" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <h3 className="service-title">Interview & Workplace Preparation</h3>
                      </div>
                      <div className="service-content">
                        <ul className="service-features">
                          <li>European interview technique mastery training</li>
                          <li>Cultural workplace behaviour and etiquette programs</li>
                          <li>Negotiation skills for salary and contract discussions</li>
                          <li>Professional presentation and communication enhancement</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Complete Relocation Management */}
                  <div className="col-lg-6 col-md-12">
                    <div className="service-card relocation-card">
                      <div className="service-header">
                        <div className="service-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <path d="M10 40H50V45H10V40Z" stroke="#805ad5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15 35H45V40H15V35Z" stroke="#805ad5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle cx="20" cy="50" r="5" stroke="#805ad5" strokeWidth="3"/>
                            <circle cx="40" cy="50" r="5" stroke="#805ad5" strokeWidth="3"/>
                            <path d="M30 20V35" stroke="#805ad5" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M25 25L30 20L35 25" stroke="#805ad5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <h3 className="service-title">Complete Relocation Management</h3>
                      </div>
                      <div className="service-content">
                        <ul className="service-features">
                          <li>Housing assistance and accommodation arrangement</li>
                          <li>Banking, insurance, and financial setup support</li>
                          <li>Administrative registration and documentation</li>
                          <li>Healthcare system navigation and enrolment</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Long-term Integration Support */}
                  <div className="col-lg-12 col-md-12">
                    <div className="service-card integration-card">
                      <div className="service-header">
                        <div className="service-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M30 15C40 15 48 23 48 33C48 43 40 51 30 51C20 51 12 43 12 33C12 23 20 15 30 15Z" stroke="#d69e2e" strokeWidth="3"/>
                            <path d="M25 33L28 36L35 29" stroke="#d69e2e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <h3 className="service-title">Long-term Integration Support</h3>
                      </div>
                      <div className="service-content">
                        <ul className="service-features">
                          <li>Career advancement planning and mentorship</li>
                          <li>Professional network building and industry connections</li>
                          <li>Continuous skills development and certification updates</li>
                          <li>Family integration services and community connections</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="tf-section cta-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-content text-center">
                <h2 className="cta-title">Ready to Begin Your European Career Journey?</h2>
                <p className="cta-description">
                  Our comprehensive 4-phase process ensures your successful transition to European opportunities. Start your journey today with our proven methodology.
                </p>
                <div className="cta-buttons">
                  <Link to="/contactus" className="tf-button style-1 cta-button-primary">
                    Start Phase 1 Today
                  </Link>
                  <Link to="/skillgrowacademy" className="tf-button style-2 cta-button-secondary">
                    Explore SkillGrow Academy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Gotop />

      {/* Custom Styles for Our Recruitment Process Page */}
      <style jsx>{`
        /* Hero Section Styles */
        .process-hero-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #2c1810 0%, #4a2c1a 100%);
          color: white;
        }
        
        .process-hero-content {
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
          color: #f6ad55;
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
          color: #f6ad55;
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
          background: #f6ad55;
          color: white;
          border: 2px solid #f6ad55;
        }
        
        .hero-button:hover {
          background: transparent;
          color: #f6ad55;
          border: 2px solid #f6ad55;
        }

        /* Process Phases Section */
        .process-phases-section {
          padding: 80px 0;
          background: #f7fafc;
        }
        
        .section-header {
          margin-bottom: 4rem;
        }
        
        .section-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #2c1810;
          margin-bottom: 1rem;
        }
        
        .section-subtitle {
          font-size: 1.3rem;
          color: #6c757d;
          margin: 0;
        }
        
        .phases-container {
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .phase-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 3rem;
          position: relative;
        }
        
        .phase-item:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 25px;
          top: 80px;
          width: 3px;
          height: calc(100% + 2rem);
          background: linear-gradient(to bottom, #e53e3e, #3182ce, #38a169, #805ad5);
        }
        
        .phase-number {
          background: linear-gradient(135deg, #f6ad55 0%, #ed8936 100%);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
          margin-right: 2rem;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
          box-shadow: 0 4px 15px rgba(246, 173, 85, 0.3);
        }
        
        .phase-content {
          flex: 1;
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-left: 6px solid #f6ad55;
        }
        
        .phase-header {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        
        .phase-icon {
          margin-right: 1.5rem;
        }
        
        .phase-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: #2c1810;
          margin: 0;
        }
        
        .phase-description {
          font-size: 1.1rem;
          color: #6c757d;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .phase-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }
        
        .feature-item {
          display: flex;
          align-items: center;
          padding: 1rem;
          background: #f7fafc;
          border-radius: 10px;
          border-left: 3px solid #f6ad55;
        }
        
        .feature-icon {
          font-size: 1.2rem;
          margin-right: 0.8rem;
        }
        
        .feature-text {
          font-size: 0.95rem;
          color: #4a5568;
          font-weight: 500;
        }

        /* Comprehensive Services Section */
        .comprehensive-services-section {
          padding: 80px 0;
          background: white;
        }
        
        .services-grid {
          margin-top: 3rem;
        }
        
        .service-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          height: 100%;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          margin-bottom: 2rem;
          border: 2px solid #e2e8f0;
        }
        
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .strategy-card {
          border-left: 6px solid #e53e3e;
        }
        
        .documentation-card {
          border-left: 6px solid #3182ce;
        }
        
        .interview-card {
          border-left: 6px solid #38a169;
        }
        
        .relocation-card {
          border-left: 6px solid #805ad5;
        }
        
        .integration-card {
          border-left: 6px solid #d69e2e;
          background: linear-gradient(135deg, #fffaf0 0%, #fef5e7 100%);
        }
        
        .service-header {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
        }
        
        .service-icon {
          margin-right: 1.5rem;
        }
        
        .service-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2c1810;
          margin: 0;
        }
        
        .service-content {
          flex: 1;
        }
        
        .service-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .service-features li {
          padding: 0.8rem 0;
          color: #4a5568;
          position: relative;
          padding-left: 1.5rem;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .service-features li:last-child {
          border-bottom: none;
        }
        
        .service-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #f6ad55;
          font-weight: bold;
        }

        /* CTA Section */
        .cta-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f6ad55 0%, #ed8936 100%);
          color: white;
        }
        
        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .cta-description {
          font-size: 1.2rem;
          margin-bottom: 3rem;
          opacity: 0.9;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .cta-button-primary {
          background: white;
          color: #f6ad55;
          border: 2px solid white;
        }
        
        .cta-button-primary:hover {
          background: transparent;
          color: white;
          border: 2px solid white;
        }
        
        .cta-button-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }
        
        .cta-button-secondary:hover {
          background: white;
          color: #f6ad55;
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
          
          .phase-item {
            flex-direction: column;
            text-align: center;
          }
          
          .phase-item::after {
            display: none;
          }
          
          .phase-number {
            margin-right: 0;
            margin-bottom: 1rem;
          }
          
          .phase-content {
            border-left: none;
            border-top: 6px solid #f6ad55;
          }
          
          .phase-header {
            flex-direction: column;
            text-align: center;
          }
          
          .phase-icon {
            margin-right: 0;
            margin-bottom: 1rem;
          }
          
          .phase-features {
            grid-template-columns: 1fr;
          }
          
          .service-header {
            flex-direction: column;
            text-align: center;
          }
          
          .service-icon {
            margin-right: 0;
            margin-bottom: 1rem;
          }
          
          .cta-title {
            font-size: 2rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-button-primary,
          .cta-button-secondary {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 576px) {
          .process-hero-section,
          .process-phases-section,
          .comprehensive-services-section,
          .cta-section {
            padding: 60px 0;
          }
          
          .hero-title {
            font-size: 2rem;
          }
          
          .section-title {
            font-size: 1.8rem;
          }
          
          .phase-content {
            padding: 2rem;
          }
          
          .service-card {
            padding: 2rem;
          }
        }
      `}</style>
    </>
  );
}

export default OurRecruitmentProcess;
