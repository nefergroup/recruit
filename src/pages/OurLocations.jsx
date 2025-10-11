import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

OurLocations.propTypes = {};

function OurLocations(props) {
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

  const locations = [
    {
      country: "Croatia",
      title: "Headquarters",
      description: "Our main operations centre managing strategic partnerships across the Balkans region and coordinating international recruitment initiatives.",
      icon: "icon-map-pin",
      highlight: true
    },
    {
      country: "Germany",
      title: "European Operations",
      description: "Serving one of Europe's largest economies where 82% of employers report difficulty finding qualified candidates, particularly in manufacturing and construction sectors.",
      icon: "icon-map-pin",
      highlight: false
    },
    {
      country: "Latvia",
      title: "Baltic Region",
      description: "Supporting Baltic region expansion with focus on transportation, logistics, and emerging technology sectors.",
      icon: "icon-map-pin",
      highlight: false
    },
    {
      country: "Serbia",
      title: "Southeastern Europe",
      description: "Regional hub for Southeastern European operations, capitalizing on growing infrastructure development and manufacturing investments.",
      icon: "icon-map-pin",
      highlight: false
    },
    {
      country: "Qatar",
      title: "Middle East Operations",
      description: "International expansion supporting Middle Eastern projects requiring skilled European-standard professionals, particularly in construction and hospitality.",
      icon: "icon-map-pin",
      highlight: false
    }
  ];

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

          <div className="mobile-menu-content">
            <nav className="main-nav mobile">
              <ul id="menu-primary-menu" className="menu">
                <li className="menu-item">
                  <Link to="/" className="iteam-menu" onClick={handleMobile}>
                    Home
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
                  <Link to="/ourlocations" className="iteam-menu" onClick={handleMobile}>
                    Our Locations
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/contactus" className="iteam-menu" onClick={handleMobile}>
                    Contact
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
                  <Link to="tel:+385953565592">+385 953565592</Link>
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
                    <i className="icon-instagram1"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Header clname="act1" handleMobile={handleMobile} />

      {/* Page Header */}
      <section className="page-header section-padding" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '120px',
        paddingBottom: '80px'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3
        }}></div>
        <div className="tf-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row">
            <div className="col-md-12">
              <div className="page-title text-center">
                <h1 className="wow fadeInUp" style={{ 
                  fontSize: '3.5rem', 
                  fontWeight: '700', 
                  marginBottom: '1rem',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>Our Locations</h1>
                <p className="wow fadeInUp" data-wow-delay="0.2s" style={{
                  fontSize: '1.3rem',
                  opacity: 0.9,
                  fontWeight: '300'
                }}>
                  European Operations Network
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Overview */}
      <section className="locations-overview section-padding">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h2 className="wow fadeInUp">Strategic European Presence</h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Our network spans five key markets across Europe and the Middle East, positioning us uniquely to address the growing skilled labour shortage across multiple industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="locations-grid section-padding" style={{ 
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        padding: '80px 0'
      }}>
        <div className="tf-container">
          <div className="row">
            {locations.map((location, index) => (
              <div key={index} className="col-md-6 col-lg-4" style={{ marginBottom: '30px' }}>
                <div className={`location-card wow fadeInUp ${location.highlight ? 'highlighted' : ''}`} 
                     data-wow-delay={`${index * 0.1}s`}
                     style={{
                       background: 'white',
                       borderRadius: '20px',
                       padding: '40px 30px',
                       boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                       transition: 'all 0.3s ease',
                       position: 'relative',
                       overflow: 'hidden',
                       border: location.highlight ? '3px solid #667eea' : '1px solid #e0e6ed',
                       transform: 'translateY(0)',
                       cursor: 'pointer'
                     }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.transform = 'translateY(-10px)';
                       e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.transform = 'translateY(0)';
                       e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                     }}>
                  {location.highlight && (
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      right: '0',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      padding: '8px 20px',
                      borderRadius: '0 20px 0 20px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      Headquarters
                    </div>
                  )}
                  <div className="location-icon" style={{
                    textAlign: 'center',
                    marginBottom: '25px'
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: location.highlight 
                        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                        : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                    }}>
                      <i className={location.icon} style={{
                        fontSize: '2rem',
                        color: 'white'
                      }}></i>
                    </div>
                  </div>
                  <div className="location-content" style={{ textAlign: 'center' }}>
                    <h3 style={{
                      fontSize: '1.8rem',
                      fontWeight: '700',
                      color: '#2d3748',
                      marginBottom: '8px',
                      lineHeight: '1.2'
                    }}>{location.country}</h3>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: '500',
                      color: '#667eea',
                      marginBottom: '20px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>{location.title}</h4>
                    <p style={{
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      color: '#4a5568',
                      margin: 0
                    }}>{location.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Benefits */}
      <section className="network-benefits section-padding" style={{ 
        background: 'white',
        padding: '100px 0'
      }}>
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center" style={{ marginBottom: '80px' }}>
                <h2 className="wow fadeInUp" style={{
                  fontSize: '2.8rem',
                  fontWeight: '700',
                  color: '#2d3748',
                  marginBottom: '20px',
                  position: 'relative'
                }}>
                  Why Our Network Matters
                  <div style={{
                    width: '80px',
                    height: '4px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    margin: '15px auto 0',
                    borderRadius: '2px'
                  }}></div>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s" style={{
                  fontSize: '1.2rem',
                  color: '#718096',
                  maxWidth: '600px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}>
                  Our strategic locations enable us to serve diverse markets and industries effectively
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="benefit-item wow fadeInUp text-center" style={{
                padding: '50px 30px',
                borderRadius: '15px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                marginBottom: '30px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div className="benefit-icon" style={{
                  marginBottom: '30px'
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <i className="icon-global" style={{
                      fontSize: '2rem',
                      color: 'white'
                    }}></i>
                  </div>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '20px',
                  color: 'white'
                }}>Global Reach</h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255,255,255,0.9)',
                  margin: 0
                }}>Strategic positioning across Europe and Middle East enables comprehensive market coverage and cultural understanding.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="benefit-item wow fadeInUp text-center" data-wow-delay="0.1s" style={{
                padding: '50px 30px',
                borderRadius: '15px',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                color: 'white',
                marginBottom: '30px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(240, 147, 251, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div className="benefit-icon" style={{
                  marginBottom: '30px'
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <i className="icon-users" style={{
                      fontSize: '2rem',
                      color: 'white'
                    }}></i>
                  </div>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '20px',
                  color: 'white'
                }}>Local Expertise</h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255,255,255,0.9)',
                  margin: 0
                }}>Each location provides deep local market knowledge, regulatory understanding, and industry-specific insights.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="benefit-item wow fadeInUp text-center" data-wow-delay="0.2s" style={{
                padding: '50px 30px',
                borderRadius: '15px',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                color: 'white',
                marginBottom: '30px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(79, 172, 254, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div className="benefit-icon" style={{
                  marginBottom: '30px'
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <i className="icon-handshake" style={{
                      fontSize: '2rem',
                      color: 'white'
                    }}></i>
                  </div>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '20px',
                  color: 'white'
                }}>Strategic Partnerships</h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255,255,255,0.9)',
                  margin: 0
                }}>Established relationships with local employers, training institutions, and regulatory bodies in each market.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="industry-focus section-padding" style={{
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        color: 'white',
        padding: '100px 0',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.5
        }}></div>
        <div className="tf-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center" style={{ marginBottom: '80px' }}>
                <h2 className="wow fadeInUp" style={{
                  fontSize: '2.8rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '20px',
                  position: 'relative'
                }}>
                  Industry Focus by Region
                  <div style={{
                    width: '80px',
                    height: '4px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    margin: '15px auto 0',
                    borderRadius: '2px'
                  }}></div>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s" style={{
                  fontSize: '1.2rem',
                  color: 'rgba(255,255,255,0.8)',
                  maxWidth: '600px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}>
                  Each location specializes in key industries based on local market demands
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="industry-card wow fadeInUp" style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '40px 30px',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'all 0.3s ease',
                marginBottom: '30px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '25px',
                  textAlign: 'center'
                }}>Manufacturing & Construction</h3>
                <div className="industry-locations" style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                  justifyContent: 'center',
                  marginBottom: '25px'
                }}>
                  <span className="location-tag" style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>Germany</span>
                  <span className="location-tag" style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>Serbia</span>
                  <span className="location-tag" style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>Qatar</span>
                </div>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255,255,255,0.8)',
                  textAlign: 'center',
                  margin: 0
                }}>Focus on skilled trades, engineering, and construction professionals.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="industry-card wow fadeInUp" data-wow-delay="0.1s" style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '40px 30px',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'all 0.3s ease',
                marginBottom: '30px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '25px',
                  textAlign: 'center'
                }}>Transportation & Logistics</h3>
                <div className="industry-locations" style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                  justifyContent: 'center',
                  marginBottom: '25px'
                }}>
                  <span className="location-tag" style={{
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>Latvia</span>
                  <span className="location-tag" style={{
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>Croatia</span>
                </div>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255,255,255,0.8)',
                  textAlign: 'center',
                  margin: 0
                }}>Specialized recruitment for transportation, warehousing, and supply chain roles.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="industry-card wow fadeInUp" data-wow-delay="0.2s" style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '40px 30px',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'all 0.3s ease',
                marginBottom: '30px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '25px',
                  textAlign: 'center'
                }}>Hospitality & Services</h3>
                <div className="industry-locations" style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                  justifyContent: 'center',
                  marginBottom: '25px'
                }}>
                  <span className="location-tag" style={{
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>Qatar</span>
                  <span className="location-tag" style={{
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>Germany</span>
                </div>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255,255,255,0.8)',
                  textAlign: 'center',
                  margin: 0
                }}>High-quality service professionals for tourism and hospitality sectors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-padding bg-primary">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="cta-content text-center">
                <h2 className="wow fadeInUp text-white">Ready to Start Your European Career Journey?</h2>
                <p className="wow fadeInUp text-white" data-wow-delay="0.2s">
                  Our network of offices across Europe and the Middle East is ready to help you find the perfect opportunity.
                </p>
                <div className="cta-buttons wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/contactus" className="btn btn-white">Contact Us</Link>
                  <Link to="/recruitmentprocess" className="btn btn-outline-white">Our Process</Link>
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

export default OurLocations;
