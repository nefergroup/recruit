import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import "../components/about/about_sections.scss";

ContactUs.propTypes = {};

function ContactUs(props) {
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

  const contactInfo = [
    {
      id: 1,
      title: "Headquarters",
      location: "Croatia",
      icon: "icon-map-pin",
      details: [
        "Main Operations Centre",
        "Strategic Partnerships Management",
        "International Recruitment Coordination"
      ]
    },
    {
      id: 2,
      title: "Email Contact",
      email: "info@recruitplus-eu.com",
      icon: "icon-mail",
      details: [
        "General Inquiries",
        "Career Consultations",
        "Partnership Opportunities"
      ]
    },
    {
      id: 3,
      title: "Phone Contact",
      phone: "+385 953565592",
      icon: "icon-phone",
      details: [
        "Croatia Headquarters",
        "Direct Line Support",
        "Emergency Contact"
      ]
    },
    {
      id: 4,
      title: "Qatar Operations",
      phone: "+974 30344183",
      icon: "icon-globe",
      details: [
        "Middle East Operations",
        "International Projects",
        "Regional Support"
      ]
    },
    {
      id: 5,
      title: "India Operations",
      phone: "+91 8921737217",
      icon: "icon-users",
      details: [
        "Candidate Recruitment",
        "Training Programs",
        "SkillGrow Academy"
      ]
    }
  ];

  return (
    <>
      <Header clname="act1" handleMobile={handleMobile} />
      
      {/* Page Banner */}
      <section className="page-banner-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-banner-content text-center">
                <h1>Contact Information</h1>
                <p className="lead">Get in touch with our global team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-title text-center">
                <div className="group-title">
                  <h1>Our Global Contact Network</h1>
                  <p className="lead">Reach out to our team across different regions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            {contactInfo.map((contact) => (
              <div key={contact.id} className="col-lg-4 col-md-6 mb-4">
                <div className="contact-card">
                  <div className="contact-image">
                    <img 
                      src={`/images/recruit/IMG-20251011-WA00${39 + contact.id}.jpg`}
                      alt={contact.title}
                      className="img-fluid"
                      style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '20px 20px 0 0' }}
                    />
                  </div>
                  <div className="contact-header">
                    <div className="contact-icon">
                      <span className={contact.icon}></span>
                    </div>
                    <h3>{contact.title}</h3>
                  </div>
                  <div className="contact-content">
                    {contact.location && (
                      <div className="contact-location">
                        <strong>{contact.location}</strong>
                      </div>
                    )}
                    {contact.email && (
                      <div className="contact-email">
                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
                      </div>
                    )}
                    {contact.phone && (
                      <div className="contact-phone">
                        <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                      </div>
                    )}
                    <div className="contact-details">
                      <ul>
                        {contact.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="cta-content text-center">
                <h2>Ready to Start Your European Career Journey?</h2>
                <p>Contact us today to learn more about our recruitment services and training programs.</p>
                <div className="cta-buttons">
                  <a href="mailto:info@recruitplus-eu.com" className="btn btn-primary btn-lg">
                    Send Email
                  </a>
                  <a href="tel:+385953565592" className="btn btn-outline-primary btn-lg">
                    Call Now
                  </a>
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

export default ContactUs;