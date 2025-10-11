import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

Contact.propTypes = {};

function Contact(props) {
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
                  <Link to="/about" className="iteam-menu" onClick={handleMobile}>
                    About
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/services" className="iteam-menu" onClick={handleMobile}>
                    Services
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/training" className="iteam-menu" onClick={handleMobile}>
                    Training
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/placement" className="iteam-menu" onClick={handleMobile}>
                    Placement
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/industries" className="iteam-menu" onClick={handleMobile}>
                    Industries
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/locations" className="iteam-menu" onClick={handleMobile}>
                    Locations
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/success-stories" className="iteam-menu" onClick={handleMobile}>
                    Success Stories
                  </Link>
                </li>
                <li className="menu-item current-item">
                  <Link to="/contact" className="iteam-menu" onClick={handleMobile}>
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
                <h1 className="wow fadeInUp">Contact Us</h1>
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
                <h2 className="wow fadeInUp">Contact Information</h2>
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

      {/* Contact Form */}
      <section className="contact-form-section section-padding bg-light">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h2 className="wow fadeInUp">Send Us a Message</h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Have questions about our services or training programs? We're here to help.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="contact-form wow fadeInUp">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input type="text" id="name" name="name" className="form-control" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input type="email" id="email" name="email" className="form-control" required />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <select id="country" name="country" className="form-control">
                          <option value="">Select Country</option>
                          <option value="india">India</option>
                          <option value="nepal">Nepal</option>
                          <option value="qatar">Qatar</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="interest">Area of Interest</label>
                        <select id="interest" name="interest" className="form-control">
                          <option value="">Select Area of Interest</option>
                          <option value="steel-manufacturing">Steel Manufacturing</option>
                          <option value="construction">Construction</option>
                          <option value="hospitality">Hospitality</option>
                          <option value="transportation">Transportation & Logistics</option>
                          <option value="training">Training Programs</option>
                          <option value="placement">Job Placement</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Message *</label>
                        <textarea id="message" name="message" rows="5" className="form-control" required></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group text-center">
                        <button type="submit" className="btn btn-primary">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="office-locations section-padding">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h2 className="wow fadeInUp">Our Office Locations</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="location-card wow fadeInUp">
                <div className="location-flag">🇭🇷</div>
                <h3>Croatia</h3>
                <p>Headquarters</p>
                <div className="location-details">
                  <p><strong>Phone:</strong> +385 953565592</p>
                  <p><strong>Email:</strong> info@recruitplus-eu.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="location-card wow fadeInUp" data-wow-delay="0.1s">
                <div className="location-flag">🇩🇪</div>
                <h3>Germany</h3>
                <p>Major Operations</p>
                <div className="location-details">
                  <p>Manufacturing & Construction Focus</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="location-card wow fadeInUp" data-wow-delay="0.2s">
                <div className="location-flag">🇱🇻</div>
                <h3>Latvia</h3>
                <p>Baltic Region</p>
                <div className="location-details">
                  <p>Transportation & Technology</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="location-card wow fadeInUp" data-wow-delay="0.3s">
                <div className="location-flag">🇷🇸</div>
                <h3>Serbia</h3>
                <p>Southeast Europe</p>
                <div className="location-details">
                  <p>Infrastructure Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section-padding bg-light">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h2 className="wow fadeInUp">Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="faq-item wow fadeInUp">
                <h3>How long does the training program take?</h3>
                <p>Our training programs range from 5-6 months depending on the specialization. ARC/MIG Welding and Steel Fitting courses are 6 months, while Brick Masonry is 5 months.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="faq-item wow fadeInUp" data-wow-delay="0.1s">
                <h3>What are the salary ranges in Europe?</h3>
                <p>Salaries vary by industry and location, but typically range from €1,500-4,000 monthly for skilled professionals in steel manufacturing, construction, hospitality, and transportation sectors.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="faq-item wow fadeInUp" data-wow-delay="0.2s">
                <h3>Do you provide visa assistance?</h3>
                <p>Yes, we provide complete visa and work permit assistance, including legal compliance management across all jurisdictions and pre-departure documentation completion.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="faq-item wow fadeInUp" data-wow-delay="0.3s">
                <h3>What support do you provide after placement?</h3>
                <p>We provide ongoing support including cultural orientation, workplace integration, career advancement planning, professional network building, and continuous skills development.</p>
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
                  <Link to="/training" className="btn btn-white">View Training Programs</Link>
                  <Link to="/services" className="btn btn-outline-white">Learn About Services</Link>
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

export default Contact;
