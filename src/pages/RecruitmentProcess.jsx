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

RecruitmentProcess.propTypes = {};

function RecruitmentProcess(props) {
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

                <li className="menu-item current-item">
                  <Link to="/recruitmentprocess" className="iteam-menu" onClick={handleMobile}>
                    Recruitment Process
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
      <Breadcrumb title="Recruitment Process" />
      
      {/* Hero Section */}
      <section className="tf-section recruitment-hero-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="recruitment-hero-content text-center">
                <h1 className="hero-title">International Recruitment Services</h1>
                <h2 className="hero-subtitle">Bridging the Skills Gap Across Europe</h2>
                <p className="hero-description">
                  Europe faces a critical skilled labour shortage, with over 42 types of jobs experiencing significant gaps, particularly in construction, steel manufacturing, hospitality, and transportation. Our recruitment expertise addresses these challenges by connecting European employers with highly skilled professionals from India and Nepal.
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
                              end={12}
                              suffix=" Years"
                              duration={3}
                            />
                          )}
                        </span>
                      </Waypoint>
                    </h3>
                    <p className="stat-label">Experience</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="stat-number">
                      <Waypoint onEnter={onVWEnter}>
                        <span>
                          {viewPortEntered && (
                            <CountUp
                              className="number"
                              end={480}
                              suffix="+"
                              duration={3}
                            />
                          )}
                        </span>
                      </Waypoint>
                    </h3>
                    <p className="stat-label">Successful Placements</p>
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

      {/* Process Timeline Section */}
      <section className="tf-section process-timeline-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header text-center">
                <h2 className="section-title">Our Recruitment Process</h2>
                <p className="section-subtitle">A comprehensive 4-step journey to your European career</p>
              </div>
              
              <div className="process-timeline">
                {/* Step 1 */}
                <div className="timeline-item">
                  <div className="timeline-number">01</div>
                  <div className="timeline-content">
                    <div className="timeline-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <circle cx="25" cy="25" r="20" stroke="#14A077" strokeWidth="3"/>
                        <path d="M25 15V25L30 30" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="timeline-title">Comprehensive Candidate Assessment</h3>
                    <p className="timeline-description">
                      Technical skills evaluation, language proficiency testing, and cultural fit analysis ensure that candidates meet international standards and are well-prepared for European work environments.
                    </p>
                    <ul className="timeline-features">
                      <li>Technical Skills Evaluation</li>
                      <li>Language Proficiency Testing</li>
                      <li>Cultural Fit Analysis</li>
                    </ul>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="timeline-item">
                  <div className="timeline-number">02</div>
                  <div className="timeline-content">
                    <div className="timeline-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <rect x="10" y="15" width="30" height="20" rx="3" stroke="#14A077" strokeWidth="3"/>
                        <path d="M15 20H35" stroke="#14A077" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M15 25H30" stroke="#14A077" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M15 30H25" stroke="#14A077" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h3 className="timeline-title">Documentation & Compliance</h3>
                    <p className="timeline-description">
                      Complete visa assistance, work permit processing, and legal compliance management handled by our expert team to ensure smooth legal transition and full compliance with European regulations.
                    </p>
                    <ul className="timeline-features">
                      <li>Visa Assistance</li>
                      <li>Work Permit Processing</li>
                      <li>Legal Compliance Management</li>
                    </ul>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="timeline-item">
                  <div className="timeline-number">03</div>
                  <div className="timeline-content">
                    <div className="timeline-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <path d="M25 5L30 20H40L32.5 30L37.5 45L25 35L12.5 45L17.5 30L10 20H20L25 5Z" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="timeline-title">Pre-Departure Preparation</h3>
                    <p className="timeline-description">
                      Cultural orientation, professional training, and career counselling prepare candidates for successful integration into European work culture and professional environments.
                    </p>
                    <ul className="timeline-features">
                      <li>Cultural Orientation</li>
                      <li>Professional Training</li>
                      <li>Career Counselling</li>
                    </ul>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="timeline-item">
                  <div className="timeline-number">04</div>
                  <div className="timeline-content">
                    <div className="timeline-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M25 10C35 10 43 18 43 28C43 38 35 46 25 46C15 46 7 38 7 28C7 18 15 10 25 10Z" stroke="#14A077" strokeWidth="3"/>
                        <path d="M20 28L23 31L30 24" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="timeline-title">Post-Placement Support</h3>
                    <p className="timeline-description">
                      Ongoing assistance for successful integration and career development ensures long-term success and satisfaction for both candidates and employers in their new professional environment.
                    </p>
                    <ul className="timeline-features">
                      <li>Integration Support</li>
                      <li>Career Development</li>
                      <li>Ongoing Assistance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="tf-section benefits-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header text-center">
                <h2 className="section-title">Why Choose Our Recruitment Process?</h2>
                <p className="section-subtitle">Comprehensive support throughout your entire journey</p>
              </div>
              
              <div className="benefits-grid">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="benefit-card">
                      <div className="benefit-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                          <circle cx="30" cy="30" r="25" stroke="#14A077" strokeWidth="3"/>
                          <path d="M20 30L27 37L40 24" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="benefit-title">Complete End-to-End Support</h3>
                      <p className="benefit-description">
                        From initial assessment to post-placement support, we handle every aspect of your recruitment journey.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="benefit-card">
                      <div className="benefit-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                          <rect x="15" y="20" width="30" height="20" rx="3" stroke="#14A077" strokeWidth="3"/>
                          <path d="M20 25H40" stroke="#14A077" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M20 30H35" stroke="#14A077" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M20 35H30" stroke="#14A077" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <h3 className="benefit-title">Legal Compliance</h3>
                      <p className="benefit-description">
                        Expert handling of all documentation, visa processing, and legal compliance requirements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="benefit-card">
                      <div className="benefit-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                          <path d="M30 10L35 25H50L37.5 35L42.5 50L30 40L17.5 50L22.5 35L10 25H25L30 10Z" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="benefit-title">Cultural Orientation</h3>
                      <p className="benefit-description">
                        Comprehensive cultural training and professional development to ensure successful integration.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="benefit-card">
                      <div className="benefit-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M30 15C40 15 48 23 48 33C48 43 40 51 30 51C20 51 12 43 12 33C12 23 20 15 30 15Z" stroke="#14A077" strokeWidth="3"/>
                          <path d="M25 33L28 36L35 29" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="benefit-title">Ongoing Support</h3>
                      <p className="benefit-description">
                        24/7 assistance and continuous career development support throughout your European journey.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="benefit-card">
                      <div className="benefit-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                          <circle cx="30" cy="30" r="20" stroke="#14A077" strokeWidth="3"/>
                          <path d="M30 20V30L35 35" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="benefit-title">Fast Processing</h3>
                      <p className="benefit-description">
                        Efficient and streamlined process to get you to your new career as quickly as possible.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="benefit-card">
                      <div className="benefit-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M30 12C40 12 48 20 48 30C48 40 40 48 30 48C20 48 12 40 12 30C12 20 20 12 30 12Z" stroke="#14A077" strokeWidth="3"/>
                          <path d="M25 30L28 33L35 26" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="benefit-title">Verified Employers</h3>
                      <p className="benefit-description">
                        Only genuine, licensed employers with transparent processes and legitimate opportunities.
                      </p>
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
                <h2 className="cta-title">Ready to Start Your European Career?</h2>
                <p className="cta-description">
                  Join hundreds of successful professionals who have built their careers in Europe through our comprehensive recruitment process.
                </p>
                <div className="cta-buttons">
                  <Link to="/contactus" className="tf-button style-1 cta-button-primary">
                    Get Started Today
                  </Link>
                  <Link to="/specialization" className="tf-button style-2 cta-button-secondary">
                    View Specializations
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Gotop />

      {/* Custom Styles for Recruitment Process Page */}
      <style jsx>{`
        /* Hero Section Styles */
        .recruitment-hero-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .recruitment-hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1rem;
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          color: #14A077;
          margin-bottom: 2rem;
          font-weight: 600;
        }
        
        .hero-description {
          font-size: 1.1rem;
          color: #6c757d;
          margin-bottom: 3rem;
          line-height: 1.6;
        }
        
        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #14A077;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          font-size: 1rem;
          color: #6c757d;
          margin: 0;
        }
        
        .hero-button {
          font-size: 1.1rem;
          padding: 15px 30px;
        }

        /* Timeline Section Styles */
        .process-timeline-section {
          padding: 80px 0;
          background: #ffffff;
        }
        
        .section-header {
          margin-bottom: 4rem;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1rem;
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          color: #6c757d;
          margin: 0;
        }
        
        .process-timeline {
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .timeline-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 3rem;
          position: relative;
        }
        
        .timeline-item:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 25px;
          top: 80px;
          width: 2px;
          height: calc(100% + 2rem);
          background: #e9ecef;
        }
        
        .timeline-number {
          background: #14A077;
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
        }
        
        .timeline-content {
          flex: 1;
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 10px;
          border-left: 4px solid #14A077;
        }
        
        .timeline-icon {
          margin-bottom: 1rem;
        }
        
        .timeline-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 1rem;
        }
        
        .timeline-description {
          font-size: 1rem;
          color: #6c757d;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .timeline-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .timeline-features li {
          padding: 0.5rem 0;
          color: #495057;
          position: relative;
          padding-left: 1.5rem;
        }
        
        .timeline-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #14A077;
          font-weight: bold;
        }

        /* Benefits Section Styles */
        .benefits-section {
          padding: 80px 0;
          background: #f8f9fa;
        }
        
        .benefits-grid {
          margin-top: 3rem;
        }
        
        .benefit-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
          height: 100%;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          margin-bottom: 2rem;
        }
        
        .benefit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        
        .benefit-icon {
          margin-bottom: 1.5rem;
        }
        
        .benefit-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 1rem;
        }
        
        .benefit-description {
          font-size: 1rem;
          color: #6c757d;
          line-height: 1.6;
          margin: 0;
        }

        /* CTA Section Styles */
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
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .timeline-item {
            flex-direction: column;
            text-align: center;
          }
          
          .timeline-item::after {
            display: none;
          }
          
          .timeline-number {
            margin-right: 0;
            margin-bottom: 1rem;
          }
          
          .timeline-content {
            border-left: none;
            border-top: 4px solid #14A077;
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
          .recruitment-hero-section,
          .process-timeline-section,
          .benefits-section,
          .cta-section {
            padding: 60px 0;
          }
          
          .hero-title {
            font-size: 1.8rem;
          }
          
          .section-title {
            font-size: 1.8rem;
          }
          
          .timeline-content {
            padding: 1.5rem;
          }
          
          .benefit-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}

export default RecruitmentProcess;
