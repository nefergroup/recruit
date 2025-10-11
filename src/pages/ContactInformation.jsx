import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

ContactInformation.propTypes = {};

function ContactInformation(props) {
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
                <li className="menu-item">
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
      <section className="page-header section-padding">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title text-center">
                <h1 className="wow fadeInUp">Contact Information</h1>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Get in Touch with Our Global Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-information section-padding">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h2 className="wow fadeInUp">Our Contact Details</h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Reach out to our team members across different locations for personalized assistance
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="contact-card wow fadeInUp">
                <div className="contact-icon">
                  <i className="icon-map-pin"></i>
                </div>
                <h3>Croatia (Headquarters)</h3>
                <div className="contact-details">
                  <p><strong>Phone:</strong> +385 953565592</p>
                  <p><strong>Email:</strong> info@recruitplus-eu.com</p>
                  <p><strong>Role:</strong> Main Operations</p>
                </div>
                <div className="contact-description">
                  <p>Our main operations centre managing strategic partnerships across the Balkans region and coordinating international recruitment initiatives.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="contact-card wow fadeInUp" data-wow-delay="0.1s">
                <div className="contact-icon">
                  <i className="icon-map-pin"></i>
                </div>
                <h3>Qatar</h3>
                <div className="contact-details">
                  <p><strong>Phone:</strong> +974 30344183</p>
                  <p><strong>Role:</strong> Middle East Operations</p>
                </div>
                <div className="contact-description">
                  <p>International expansion supporting Middle Eastern projects requiring skilled European-standard professionals.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="contact-card wow fadeInUp" data-wow-delay="0.2s">
                <div className="contact-icon">
                  <i className="icon-map-pin"></i>
                </div>
                <h3>India</h3>
                <div className="contact-details">
                  <p><strong>Phone:</strong> +91 8921737217</p>
                  <p><strong>Role:</strong> Training & Recruitment</p>
                </div>
                <div className="contact-description">
                  <p>Our primary training and recruitment centre, focusing on sourcing skilled professionals and providing comprehensive training programs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="quick-contact section-padding bg-light">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h2 className="wow fadeInUp">Quick Contact</h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Choose the most convenient way to reach us
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="quick-contact-item wow fadeInUp text-center">
                <div className="contact-icon">
                  <i className="icon-call-calling"></i>
                </div>
                <h3>Call Us</h3>
                <p>Speak directly with our team</p>
                <div className="contact-numbers">
                  <p><strong>Croatia:</strong> +385 953565592</p>
                  <p><strong>Qatar:</strong> +974 30344183</p>
                  <p><strong>India:</strong> +91 8921737217</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="quick-contact-item wow fadeInUp text-center" data-wow-delay="0.1s">
                <div className="contact-icon">
                  <i className="icon-mail"></i>
                </div>
                <h3>Email Us</h3>
                <p>Send us your inquiries</p>
                <div className="contact-email">
                  <p><strong>General:</strong> info@recruitplus-eu.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="quick-contact-item wow fadeInUp text-center" data-wow-delay="0.2s">
                <div className="contact-icon">
                  <i className="icon-map-pin"></i>
                </div>
                <h3>Visit Us</h3>
                <p>Our headquarters location</p>
                <div className="contact-location">
                  <p><strong>Headquarters:</strong> Croatia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="office-hours section-padding">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h2 className="wow fadeInUp">Office Hours</h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Our team is available during these hours
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="office-hours-card wow fadeInUp">
                <div className="hours-content text-center">
                  <h3>Business Hours</h3>
                  <div className="hours-list">
                    <div className="hours-item">
                      <span className="day">Monday - Friday</span>
                      <span className="time">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="hours-item">
                      <span className="day">Saturday</span>
                      <span className="time">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="hours-item">
                      <span className="day">Sunday</span>
                      <span className="time">Closed</span>
                    </div>
                  </div>
                  <p className="timezone-note">
                    <strong>Note:</strong> All times are in local timezone for each office location.
                  </p>
                </div>
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
                  Contact us today to learn more about our training programs and placement services.
                </p>
                <div className="cta-buttons wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/contactus" className="btn btn-white">Contact Us</Link>
                  <Link to="/aboutrecruitplus" className="btn btn-outline-white">Learn About Us</Link>
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

export default ContactInformation;
