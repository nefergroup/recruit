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

WhyChooseRecruitPlus.propTypes = {};

function WhyChooseRecruitPlus(props) {
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

                <li className="menu-item current-item">
                  <Link to="/whychooserecruitplus" className="iteam-menu" onClick={handleMobile}>
                    Why Choose Recruit Plus
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
      <Breadcrumb title="Why Choose Recruit Plus" />
      
      {/* Hero Section */}
      <section className="tf-section why-choose-hero-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="why-choose-hero-content text-center">
                <h1 className="hero-title">Why Choose Recruit Plus</h1>
                <h2 className="hero-subtitle">Your Trusted Partner for European Career Success</h2>
                <p className="hero-description">
                  With over 12 years of proven excellence, Recruit Plus has established itself as Europe's leading recruitment partner, connecting skilled professionals with exceptional career opportunities across multiple industries.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <h3 className="stat-number">
                      <Waypoint onEnter={onVWEnter}>
                        <span>
                          {viewPortEntered && (
                            <CountUp
                              className="number"
                              end={12}
                              suffix=" Years"
                              duration={3}
                            />
                          )}
                        </span>
                      </Waypoint>
                    </h3>
                    <p className="stat-label">Proven Excellence</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="stat-number">
                      <Waypoint onEnter={onVWEnter}>
                        <span>
                          {viewPortEntered && (
                            <CountUp
                              className="number"
                              end={5000}
                              suffix="+"
                              duration={3}
                            />
                          )}
                        </span>
                      </Waypoint>
                    </h3>
                    <p className="stat-label">Successful Placements</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="stat-number">
                      <Waypoint onEnter={onVWEnter}>
                        <span>
                          {viewPortEntered && (
                            <CountUp
                              className="number"
                              end={5}
                              suffix=" Countries"
                              duration={3}
                            />
                          )}
                        </span>
                      </Waypoint>
                    </h3>
                    <p className="stat-label">European Presence</p>
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

      {/* Reasons Section */}
      <section className="tf-section reasons-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header text-center">
                <h2 className="section-title">What Sets Us Apart</h2>
                <p className="section-subtitle">Five key reasons why thousands choose Recruit Plus for their European career journey</p>
              </div>
              
              <div className="reasons-grid">
                <div className="row">
                  {/* 12 Years of Proven Excellence */}
                  <div className="col-lg-6 col-md-12">
                    <div className="reason-card">
                      <div className="reason-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                          <path d="M35 5L42 25H62L47 35L52 55L35 45L18 55L23 35L8 25H28L35 5Z" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="reason-content">
                        <h3 className="reason-title">12 Years of Proven Excellence</h3>
                        <p className="reason-description">
                          Since 2012, we've successfully facilitated thousands of career transitions, building lasting relationships with both candidates and employers across our European network.
                        </p>
                        <div className="reason-highlight">
                          <span className="highlight-text">Established in 2012</span>
                          <span className="highlight-text">Thousands of successful placements</span>
                          <span className="highlight-text">Lasting employer relationships</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Comprehensive Service Portfolio */}
                  <div className="col-lg-6 col-md-12">
                    <div className="reason-card">
                      <div className="reason-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M35 10C45 10 53 18 53 28C53 38 45 46 35 46C25 46 17 38 17 28C17 18 25 10 35 10Z" stroke="#14A077" strokeWidth="3"/>
                          <path d="M30 28L33 31L40 24" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="reason-content">
                        <h3 className="reason-title">Comprehensive Service Portfolio</h3>
                        <p className="reason-description">
                          Unlike traditional recruitment agencies, we provide end-to-end solutions including skills development, cultural preparation, and post-placement support ensuring higher success rates and longer-term satisfaction.
                        </p>
                        <div className="reason-highlight">
                          <span className="highlight-text">End-to-end solutions</span>
                          <span className="highlight-text">Skills development programs</span>
                          <span className="highlight-text">Post-placement support</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Strategic European Presence */}
                  <div className="col-lg-6 col-md-12">
                    <div className="reason-card">
                      <div className="reason-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                          <path d="M35 10L50 20V30L35 40L20 30V20L35 10Z" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M35 10V40" stroke="#14A077" strokeWidth="3" strokeLinecap="round"/>
                          <path d="M20 20H50" stroke="#14A077" strokeWidth="3" strokeLinecap="round"/>
                          <circle cx="35" cy="25" r="3" fill="#14A077"/>
                        </svg>
                      </div>
                      <div className="reason-content">
                        <h3 className="reason-title">Strategic European Presence</h3>
                        <p className="reason-description">
                          Our headquarters in Croatia and operations across Latvia, Germany, Serbia, and Qatar provide unmatched regional expertise and local market knowledge.
                        </p>
                        <div className="reason-highlight">
                          <span className="highlight-text">Headquarters in Croatia</span>
                          <span className="highlight-text">Operations in 5 countries</span>
                          <span className="highlight-text">Local market expertise</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Industry Expertise */}
                  <div className="col-lg-6 col-md-12">
                    <div className="reason-card">
                      <div className="reason-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                          <circle cx="35" cy="35" r="25" stroke="#14A077" strokeWidth="3"/>
                          <path d="M35 20V30L40 35" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="reason-content">
                        <h3 className="reason-title">Industry Expertise</h3>
                        <p className="reason-description">
                          Deep specialization in high-demand sectors experiencing acute skilled labour shortages - steel manufacturing, construction, hospitality, and transportation.
                        </p>
                        <div className="reason-highlight">
                          <span className="highlight-text">Steel manufacturing</span>
                          <span className="highlight-text">Construction industry</span>
                          <span className="highlight-text">Hospitality & transportation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Ethical Recruitment Practices */}
                  <div className="col-lg-12 col-md-12">
                    <div className="reason-card reason-card-wide">
                      <div className="reason-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M35 15C45 15 53 23 53 33C53 43 45 51 35 51C25 51 17 43 17 33C17 23 25 15 35 15Z" stroke="#14A077" strokeWidth="3"/>
                          <path d="M30 33L33 36L40 29" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="reason-content">
                        <h3 className="reason-title">Ethical Recruitment Practices</h3>
                        <p className="reason-description">
                          Committed to transparent, fair recruitment processes that benefit both candidates and employers while maintaining the highest professional standards.
                        </p>
                        <div className="reason-highlight">
                          <span className="highlight-text">Transparent processes</span>
                          <span className="highlight-text">Fair recruitment practices</span>
                          <span className="highlight-text">Highest professional standards</span>
                          <span className="highlight-text">Mutual benefit approach</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="tf-section success-stories-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header text-center">
                <h2 className="section-title">Our Success Metrics</h2>
                <p className="section-subtitle">Numbers that speak to our commitment to excellence</p>
              </div>
              
              <div className="success-metrics">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="metric-item">
                      <div className="metric-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M25 10C35 10 43 18 43 28C43 38 35 46 25 46C15 46 7 38 7 28C7 18 15 10 25 10Z" stroke="#14A077" strokeWidth="3"/>
                          <path d="M20 28L23 31L30 24" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="metric-number">
                        <Waypoint onEnter={onVWEnter}>
                          <span>
                            {viewPortEntered && (
                              <CountUp
                                className="number"
                                end={98}
                                suffix="%"
                                duration={3}
                              />
                            )}
                          </span>
                        </Waypoint>
                      </h3>
                      <p className="metric-label">Success Rate</p>
                    </div>
                  </div>
                  
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="metric-item">
                      <div className="metric-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M25 12C35 12 43 20 43 30C43 40 35 48 25 48C15 48 7 40 7 30C7 20 15 12 25 12Z" stroke="#14A077" strokeWidth="3"/>
                          <path d="M20 30L23 33L30 26" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="metric-number">
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
                      <p className="metric-label">Support Available</p>
                    </div>
                  </div>
                  
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="metric-item">
                      <div className="metric-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M25 8C35 8 43 16 43 26C43 36 35 44 25 44C15 44 7 36 7 26C7 16 15 8 25 8Z" stroke="#14A077" strokeWidth="3"/>
                          <path d="M20 26L23 29L30 22" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="metric-number">
                        <Waypoint onEnter={onVWEnter}>
                          <span>
                            {viewPortEntered && (
                              <CountUp
                                className="number"
                                end={500}
                                suffix="+"
                                duration={3}
                              />
                            )}
                          </span>
                        </Waypoint>
                      </h3>
                      <p className="metric-label">Verified Employers</p>
                    </div>
                  </div>
                  
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="metric-item">
                      <div className="metric-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M25 6C35 6 43 14 43 24C43 34 35 42 25 42C15 42 7 34 7 24C7 14 15 6 25 6Z" stroke="#14A077" strokeWidth="3"/>
                          <path d="M20 24L23 27L30 20" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="metric-number">
                        <Waypoint onEnter={onVWEnter}>
                          <span>
                            {viewPortEntered && (
                              <CountUp
                                className="number"
                                end={15}
                                suffix=" Days"
                                duration={3}
                              />
                            )}
                          </span>
                        </Waypoint>
                      </h3>
                      <p className="metric-label">Average Processing Time</p>
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
                <h2 className="cta-title">Ready to Experience the Recruit Plus Difference?</h2>
                <p className="cta-description">
                  Join thousands of successful professionals who have built their European careers with our comprehensive support and proven track record.
                </p>
                <div className="cta-buttons">
                  <Link to="/contactus" className="tf-button style-1 cta-button-primary">
                    Get Started Today
                  </Link>
                  <Link to="/recruitmentprocess" className="tf-button style-2 cta-button-secondary">
                    Learn Our Process
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Gotop />

      {/* Custom Styles for Why Choose Recruit Plus Page */}
      <style jsx>{`
        /* Hero Section Styles */
        .why-choose-hero-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
        }
        
        .why-choose-hero-content {
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
          color: #3498db;
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
          color: #3498db;
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
          background: #3498db;
          color: white;
          border: 2px solid #3498db;
        }
        
        .hero-button:hover {
          background: transparent;
          color: #3498db;
          border: 2px solid #3498db;
        }

        /* Reasons Section */
        .reasons-section {
          padding: 80px 0;
          background: #f8f9fa;
        }
        
        .section-header {
          margin-bottom: 4rem;
        }
        
        .section-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1rem;
        }
        
        .section-subtitle {
          font-size: 1.3rem;
          color: #6c757d;
          margin: 0;
        }
        
        .reasons-grid {
          margin-top: 3rem;
        }
        
        .reason-card {
          background: white;
          padding: 3rem;
          border-radius: 20px;
          height: 100%;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          margin-bottom: 2rem;
          border-left: 6px solid #14A077;
          display: flex;
          align-items: flex-start;
        }
        
        .reason-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .reason-card-wide {
          flex-direction: column;
          text-align: center;
        }
        
        .reason-icon {
          margin-right: 2rem;
          flex-shrink: 0;
        }
        
        .reason-card-wide .reason-icon {
          margin-right: 0;
          margin-bottom: 2rem;
        }
        
        .reason-content {
          flex: 1;
        }
        
        .reason-title {
          font-size: 1.6rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 1rem;
        }
        
        .reason-description {
          font-size: 1.1rem;
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .reason-highlight {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .highlight-text {
          background: #e8f5e8;
          color: #14A077;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        /* Success Stories Section */
        .success-stories-section {
          padding: 80px 0;
          background: white;
        }
        
        .success-metrics {
          margin-top: 3rem;
        }
        
        .metric-item {
          text-align: center;
          padding: 2rem;
          background: #f8f9fa;
          border-radius: 15px;
          margin-bottom: 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .metric-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        .metric-icon {
          margin-bottom: 1.5rem;
        }
        
        .metric-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #14A077;
          margin-bottom: 0.5rem;
        }
        
        .metric-label {
          font-size: 1.1rem;
          color: #6c757d;
          margin: 0;
        }

        /* CTA Section */
        .cta-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #14A077 0%, #0d6efd 100%);
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
          color: #14A077;
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
          color: #14A077;
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
          
          .reason-card {
            flex-direction: column;
            text-align: center;
            padding: 2rem;
          }
          
          .reason-icon {
            margin-right: 0;
            margin-bottom: 1.5rem;
          }
          
          .reason-highlight {
            justify-content: center;
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
          .why-choose-hero-section,
          .reasons-section,
          .success-stories-section,
          .cta-section {
            padding: 60px 0;
          }
          
          .hero-title {
            font-size: 2rem;
          }
          
          .section-title {
            font-size: 1.8rem;
          }
          
          .reason-card {
            padding: 1.5rem;
          }
          
          .metric-item {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}

export default WhyChooseRecruitPlus;
