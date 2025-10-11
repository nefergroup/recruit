import React from "react";
import PropTypes from "prop-types";
import Header2 from "../components/header/Header2";
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

InternationalRecruitmentServices.propTypes = {};

function InternationalRecruitmentServices(props) {
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

                <li className="menu-item current-item">
                  <Link to="/internationalrecruitmentservices" className="iteam-menu" onClick={handleMobile}>
                    International Recruitment Services
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
      <Breadcrumb title="International Recruitment Services" />
      
      {/* Hero Section */}
      <section className="tf-section international-hero-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="international-hero-content text-center">
                <h1 className="hero-title">International Recruitment Services</h1>
                <h2 className="hero-subtitle">Addressing Europe's Critical Skills Shortage</h2>
                <p className="hero-description">
                  Connecting skilled professionals with European opportunities across key industries experiencing critical labor shortages. Our comprehensive recruitment services bridge the gap between talent and demand.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <h3 className="stat-number">
                      <Waypoint onEnter={onVWEnter}>
                        <span>
                          {viewPortEntered && (
                            <CountUp
                              className="number"
                              end={42}
                              suffix="+"
                              duration={3}
                            />
                          )}
                        </span>
                      </Waypoint>
                    </h3>
                    <p className="stat-label">Job Types in Shortage</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="stat-number">
                      <Waypoint onEnter={onVWEnter}>
                        <span>
                          {viewPortEntered && (
                            <CountUp
                              className="number"
                              end={2.5}
                              suffix="M"
                              duration={3}
                            />
                          )}
                        </span>
                      </Waypoint>
                    </h3>
                    <p className="stat-label">Steel Industry Jobs</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="stat-number">
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
                    </h3>
                    <p className="stat-label">Annual Turnover (€)</p>
                  </div>
                </div>
                <Link to="/contactus" className="tf-button style-1 hero-button">
                  Explore Opportunities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="tf-section certification-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="certification-card">
                <div className="certification-content">
                  <div className="certification-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M40 10C50 10 58 18 58 28C58 38 50 46 40 46C30 46 22 38 22 28C22 18 30 10 40 10Z" stroke="#d69e2e" strokeWidth="4"/>
                      <path d="M35 28L38 31L45 24" stroke="#d69e2e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="certification-text">
                    <h3 className="certification-title">Professional Certification</h3>
                    <p className="certification-description">
                      Certificate for National Certified Mason Contractor issued by the Mason Contractors Association of America (MCAA)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Sectors Section */}
      <section className="tf-section industry-sectors-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header text-center">
                <h2 className="section-title">Our Industry Specializations</h2>
                <p className="section-subtitle">Comprehensive recruitment solutions across key European industries</p>
              </div>
              
              <div className="sectors-grid">
                <div className="row">
                  {/* Steel Structure & Component Manufacturing */}
                  <div className="col-lg-6 col-md-12">
                    <div className="sector-card steel-card">
                      <div className="sector-header">
                        <div className="sector-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <path d="M30 5L40 20H50L35 30L40 50L30 40L20 50L25 30L10 20H20L30 5Z" stroke="#e53e3e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="sector-info">
                          <h3 className="sector-name">Steel Structure & Component Manufacturing</h3>
                          <p className="sector-stats">2.5M jobs • €123B annually</p>
                        </div>
                      </div>
                      <div className="sector-content">
                        <p className="sector-description">
                          The European steel industry supports 2.5 million jobs and generates €123 billion annually.
                        </p>
                        <div className="sector-roles">
                          <h4 className="roles-title">We supply:</h4>
                          <ul className="roles-list">
                            <li>Qualified Metallurgical Engineers</li>
                            <li>Certified Arc/MIG Welders</li>
                            <li>Structural Steel Technicians</li>
                            <li>Process Operators & Maintenance Specialists</li>
                            <li>Quality Control Inspectors</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Construction Industry Excellence */}
                  <div className="col-lg-6 col-md-12">
                    <div className="sector-card construction-card">
                      <div className="sector-header">
                        <div className="sector-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <path d="M30 5L50 15V25L30 35L10 25V15L30 5Z" stroke="#3182ce" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M30 35V55" stroke="#3182ce" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M10 25H50" stroke="#3182ce" strokeWidth="3" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <div className="sector-info">
                          <h3 className="sector-name">Construction Industry Excellence</h3>
                          <p className="sector-stats">Critical labour shortages across EU</p>
                        </div>
                      </div>
                      <div className="sector-content">
                        <p className="sector-description">
                          With construction labour shortages reaching critical levels across EU member states, we provide:
                        </p>
                        <div className="sector-roles">
                          <h4 className="roles-title">We provide:</h4>
                          <ul className="roles-list">
                            <li>Skilled Brick Masons & Masonry Specialists</li>
                            <li>Steel Fitters & Structural Workers</li>
                            <li>Project Managers & Site Supervisors</li>
                            <li>Safety Coordinators & Compliance Officers</li>
                            <li>Specialized Tradespeople</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hospitality Sector Professionals */}
                  <div className="col-lg-6 col-md-12">
                    <div className="sector-card hospitality-card">
                      <div className="sector-header">
                        <div className="sector-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <path d="M30 10L40 20V40H20V20L30 10Z" stroke="#38a169" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M25 25H35" stroke="#38a169" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M25 30H35" stroke="#38a169" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M25 35H35" stroke="#38a169" strokeWidth="3" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <div className="sector-info">
                          <h3 className="sector-name">Hospitality Sector Professionals</h3>
                          <p className="sector-stats">Supporting Europe's expanding industry</p>
                        </div>
                      </div>
                      <div className="sector-content">
                        <p className="sector-description">
                          Supporting Europe's expanding hospitality industry:
                        </p>
                        <div className="sector-roles">
                          <h4 className="roles-title">We recruit:</h4>
                          <ul className="roles-list">
                            <li>Executive Chefs & Culinary Specialists</li>
                            <li>Guest Services Coordinators</li>
                            <li>Housekeeping Supervisors and workers</li>
                            <li>Food & Beverage - waiters</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Transportation & Logistics */}
                  <div className="col-lg-6 col-md-12">
                    <div className="sector-card logistics-card">
                      <div className="sector-header">
                        <div className="sector-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <path d="M10 40H50V45H10V40Z" stroke="#805ad5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15 35H45V40H15V35Z" stroke="#805ad5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle cx="20" cy="50" r="5" stroke="#805ad5" strokeWidth="3"/>
                            <circle cx="40" cy="50" r="5" stroke="#805ad5" strokeWidth="3"/>
                            <path d="M30 20V35" stroke="#805ad5" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M25 25L30 20L35 25" stroke="#805ad5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="sector-info">
                          <h3 className="sector-name">Transportation & Logistics</h3>
                          <p className="sector-stats">Meeting growing infrastructure demands</p>
                        </div>
                      </div>
                      <div className="sector-content">
                        <p className="sector-description">
                          Meeting growing infrastructure demands:
                        </p>
                        <div className="sector-roles">
                          <h4 className="roles-title">We provide:</h4>
                          <ul className="roles-list">
                            <li>Professional Drivers (All Categories) – Trailer Drivers</li>
                            <li>Warehouse Operations Specialists</li>
                          </ul>
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

      {/* CTA Section */}
      <section className="tf-section cta-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-content text-center">
                <h2 className="cta-title">Ready to Address Europe's Skills Shortage?</h2>
                <p className="cta-description">
                  Join our network of skilled professionals making a difference across European industries. Your expertise is needed now more than ever.
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

      {/* Custom Styles for International Recruitment Services Page */}
      <style jsx>{`
        /* Hero Section Styles */
        .international-hero-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
          color: white;
        }
        
        .international-hero-content {
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
          color: #68d391;
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
          color: #68d391;
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
          background: #68d391;
          color: white;
          border: 2px solid #68d391;
        }
        
        .hero-button:hover {
          background: transparent;
          color: #68d391;
          border: 2px solid #68d391;
        }

        /* Certification Section */
        .certification-section {
          padding: 60px 0;
          background: #f7fafc;
        }
        
        .certification-card {
          background: white;
          border-radius: 20px;
          padding: 3rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-left: 6px solid #d69e2e;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .certification-content {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        
        .certification-icon {
          flex-shrink: 0;
        }
        
        .certification-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 1rem;
        }
        
        .certification-description {
          font-size: 1.1rem;
          color: #6c757d;
          line-height: 1.6;
          margin: 0;
        }

        /* Industry Sectors Section */
        .industry-sectors-section {
          padding: 80px 0;
          background: white;
        }
        
        .section-header {
          margin-bottom: 4rem;
        }
        
        .section-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 1rem;
        }
        
        .section-subtitle {
          font-size: 1.3rem;
          color: #6c757d;
          margin: 0;
        }
        
        .sectors-grid {
          margin-top: 3rem;
        }
        
        .sector-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          height: 100%;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          margin-bottom: 2rem;
          border: 2px solid #e2e8f0;
        }
        
        .sector-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .steel-card {
          border-left: 6px solid #e53e3e;
        }
        
        .construction-card {
          border-left: 6px solid #3182ce;
        }
        
        .hospitality-card {
          border-left: 6px solid #38a169;
        }
        
        .logistics-card {
          border-left: 6px solid #805ad5;
        }
        
        .sector-header {
          display: flex;
          align-items: flex-start;
          margin-bottom: 2rem;
        }
        
        .sector-icon {
          margin-right: 1.5rem;
          flex-shrink: 0;
        }
        
        .sector-info {
          flex: 1;
        }
        
        .sector-name {
          font-size: 1.6rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 0.5rem;
        }
        
        .sector-stats {
          font-size: 1rem;
          color: #6c757d;
          margin: 0;
        }
        
        .sector-description {
          font-size: 1.1rem;
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        
        .sector-roles {
          background: #f7fafc;
          padding: 1.5rem;
          border-radius: 15px;
          border-left: 4px solid #68d391;
        }
        
        .roles-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1a202c;
          margin-bottom: 1rem;
        }
        
        .roles-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .roles-list li {
          padding: 0.5rem 0;
          color: #4a5568;
          position: relative;
          padding-left: 1.5rem;
        }
        
        .roles-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #68d391;
          font-weight: bold;
        }

        /* CTA Section */
        .cta-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #68d391 0%, #48bb78 100%);
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
          color: #68d391;
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
          color: #68d391;
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
          
          .certification-content {
            flex-direction: column;
            text-align: center;
          }
          
          .sector-header {
            flex-direction: column;
            text-align: center;
          }
          
          .sector-icon {
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
          .international-hero-section,
          .industry-sectors-section,
          .cta-section {
            padding: 60px 0;
          }
          
          .certification-section {
            padding: 50px 0;
          }
          
          .hero-title {
            font-size: 2rem;
          }
          
          .section-title {
            font-size: 1.8rem;
          }
          
          .certification-card {
            padding: 2rem;
          }
          
          .sector-card {
            padding: 2rem;
          }
        }
      `}</style>
    </>
  );
}

export default InternationalRecruitmentServices;
