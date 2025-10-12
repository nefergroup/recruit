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

SuccessStories.propTypes = {};

function SuccessStories(props) {
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

                <li className="menu-item current-item">
                  <Link to="/successstories" className="iteam-menu" onClick={handleMobile}>
                    Success Stories
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
      <Breadcrumb title="Success Stories" />
      
      {/* Hero Section */}
      <section className="tf-section success-hero-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="success-hero-content text-center">
                <h1 className="hero-title">Success Stories</h1>
                <h2 className="hero-subtitle">Industry Impact</h2>
                <p className="hero-description">
                  Our track record speaks for itself. Over 12 years of excellence in connecting skilled professionals with European opportunities, delivering measurable results for both candidates and employers.
                </p>
                <Link to="/contactus" className="tf-button style-1 hero-button">
                  Join Our Success Stories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Impact Section */}
      <section className="tf-section industry-impact-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header text-center">
                <h2 className="section-title">Our Industry Impact</h2>
                <p className="section-subtitle">Numbers that demonstrate our commitment to excellence and successful placements</p>
              </div>
              
              <div className="impact-grid">
                <div className="row">
                  {/* 5,000+ Professionals Placed */}
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="impact-card">
                      <div className="impact-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M30 10C40 10 48 18 48 28C48 38 40 46 30 46C20 46 12 38 12 28C12 18 20 10 30 10Z" stroke="#14A077" strokeWidth="3"/>
                          <path d="M25 28L28 31L35 24" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="impact-content">
                        <h3 className="impact-number">
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
                        <h4 className="impact-title">Skilled Professionals Placed</h4>
                        <p className="impact-description">
                          Successfully placed over 5,000+ skilled professionals across European markets
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 95% Satisfaction Rate */}
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="impact-card">
                      <div className="impact-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M30 12C40 12 48 20 48 30C48 40 40 48 30 48C20 48 12 40 12 30C12 20 20 12 30 12Z" stroke="#14A077" strokeWidth="3"/>
                          <path d="M25 30L28 33L35 26" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="impact-content">
                        <h3 className="impact-number">
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
                        <h4 className="impact-title">Placement Satisfaction Rate</h4>
                        <p className="impact-description">
                          Maintained 95% placement satisfaction rate with continuous post-placement support
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 82+ European Companies */}
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="impact-card">
                      <div className="impact-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M30 8C40 8 48 16 48 26C48 36 40 44 30 44C20 44 12 36 12 26C12 16 20 8 30 8Z" stroke="#14A077" strokeWidth="3"/>
                          <path d="M25 26L28 29L35 22" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="impact-content">
                        <h3 className="impact-number">
                          <Waypoint onEnter={onVWEnter}>
                            <span>
                              {viewPortEntered && (
                                <CountUp
                                  className="number"
                                  end={82}
                                  suffix="+"
                                  duration={3}
                                />
                              )}
                            </span>
                          </Waypoint>
                        </h3>
                        <h4 className="impact-title">European Company Partnerships</h4>
                        <p className="impact-description">
                          Established partnerships with 82+ European companies across target industries
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 1,682 Workers Placed */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="impact-card">
                      <div className="impact-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M30 6C40 6 48 14 48 24C48 34 40 42 30 42C20 42 12 34 12 24C12 14 20 6 30 6Z" stroke="#14A077" strokeWidth="3"/>
                          <path d="M25 24L28 27L35 20" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="impact-content">
                        <h3 className="impact-number">
                          <Waypoint onEnter={onVWEnter}>
                            <span>
                              {viewPortEntered && (
                                <CountUp
                                  className="number"
                                  end={1682}
                                  suffix="+"
                                  duration={3}
                                />
                              )}
                            </span>
                          </Waypoint>
                        </h3>
                        <h4 className="impact-title">Workers Placed in Europe</h4>
                        <p className="impact-description">
                          Have placed more than 1,682 workers in different jobs/companies across Europe
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 18-Month Retention Rate */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="impact-card">
                      <div className="impact-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M30 4C40 4 48 12 48 22C48 32 40 40 30 40C20 40 12 32 12 22C12 12 20 4 30 4Z" stroke="#14A077" strokeWidth="3"/>
                          <path d="M25 22L28 25L35 18" stroke="#14A077" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="impact-content">
                        <h3 className="impact-number">
                          <Waypoint onEnter={onVWEnter}>
                            <span>
                              {viewPortEntered && (
                                <CountUp
                                  className="number"
                                  end={18}
                                  suffix=" Months"
                                  duration={3}
                                />
                              )}
                            </span>
                          </Waypoint>
                        </h3>
                        <h4 className="impact-title">Average Retention Rate</h4>
                        <p className="impact-description">
                          Achieved average 18-month retention rate, significantly above industry standards
                        </p>
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
                <h2 className="cta-title">Be Part of Our Success Story</h2>
                <p className="cta-description">
                  Join thousands of successful professionals who have built their European careers with Recruit Plus. Your success story starts here.
                </p>
                <div className="cta-buttons">
                  <Link to="/contactus" className="tf-button style-1 cta-button-primary">
                    Start Your Journey
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

      {/* Custom Styles for Success Stories Page */}
      <style jsx>{`
        /* Hero Section Styles */
        .success-hero-section {
          padding: 60px 0;
          background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
          color: white;
        }
        
        .success-hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .hero-subtitle {
          font-size: 1.6rem;
          color: #68d391;
          margin-bottom: 2rem;
          font-weight: 600;
        }
        
        .hero-description {
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
          line-height: 1.6;
          opacity: 0.9;
        }
        
        .hero-button {
          font-size: 1.1rem;
          padding: 15px 30px;
          background: #68d391;
          color: white;
          border: 2px solid #68d391;
        }
        
        .hero-button:hover {
          background: transparent;
          color: #68d391;
          border: 2px solid #68d391;
        }

        /* Industry Impact Section */
        .industry-impact-section {
          padding: 60px 0;
          background: #f7fafc;
        }
        
        .section-header {
          margin-bottom: 3rem;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 1rem;
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          color: #6c757d;
          margin: 0;
        }
        
        .impact-grid {
          margin-top: 2rem;
        }
        
        .impact-card {
          background: white;
          border-radius: 15px;
          padding: 2rem;
          height: 100%;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          margin-bottom: 2rem;
          border-left: 5px solid #68d391;
          text-align: center;
        }
        
        .impact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }
        
        .impact-icon {
          margin-bottom: 1.5rem;
        }
        
        .impact-number {
          font-size: 2.8rem;
          font-weight: 700;
          color: #68d391;
          margin-bottom: 0.5rem;
        }
        
        .impact-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 1rem;
        }
        
        .impact-description {
          font-size: 1rem;
          color: #6c757d;
          line-height: 1.5;
          margin: 0;
        }

        /* CTA Section */
        .cta-section {
          padding: 60px 0;
          background: linear-gradient(135deg, #68d391 0%, #48bb78 100%);
          color: white;
        }
        
        .cta-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .cta-description {
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
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
            font-size: 2.2rem;
          }
          
          .hero-subtitle {
            font-size: 1.3rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .impact-card {
            padding: 1.5rem;
          }
          
          .impact-number {
            font-size: 2.2rem;
          }
          
          .cta-title {
            font-size: 1.8rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-button-primary,
          .cta-button-secondary {
            width: 100%;
            max-width: 280px;
          }
        }

        @media (max-width: 576px) {
          .success-hero-section,
          .industry-impact-section,
          .cta-section {
            padding: 50px 0;
          }
          
          .hero-title {
            font-size: 1.8rem;
          }
          
          .section-title {
            font-size: 1.6rem;
          }
          
          .impact-card {
            padding: 1.2rem;
          }
          
          .impact-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
}

export default SuccessStories;
