import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import "../components/about/about_sections.scss";

JobPlacementServices.propTypes = {};

function JobPlacementServices(props) {
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

  const placementServices = [
    {
      id: 1,
      title: "Career Counselling",
      description: "Personalized career pathway planning and goal setting",
      icon: "icon-user-check"
    },
    {
      id: 2,
      title: "Resume & Portfolio Development",
      description: "Professional documentation aligned with European standards",
      icon: "icon-file-text"
    },
    {
      id: 3,
      title: "Interview Preparation",
      description: "Comprehensive training for European workplace expectations",
      icon: "icon-message-circle"
    },
    {
      id: 4,
      title: "Contract Negotiation",
      description: "Ensuring fair terms and conditions for all placements",
      icon: "icon-handshake"
    },
    {
      id: 5,
      title: "Relocation Support",
      description: "Complete assistance with housing, banking, and administrative setup",
      icon: "icon-home"
    },
    {
      id: 6,
      title: "Integration Programs",
      description: "Ongoing support for cultural adaptation and career growth",
      icon: "icon-users"
    }
  ];

  const comprehensiveServices = [
    {
      id: 1,
      title: "Career Strategy Development",
      icon: "icon-target",
      services: [
        "Personalized European career pathway planning",
        "Industry trend analysis and opportunity identification",
        "Skills gap assessment and development recommendations",
        "Long-term professional growth strategy formulation"
      ]
    },
    {
      id: 2,
      title: "Professional Documentation Excellence",
      icon: "icon-file-check",
      services: [
        "European-standard resume and portfolio development",
        "Technical certification portfolio compilation",
        "Professional reference and recommendation management"
      ]
    },
    {
      id: 3,
      title: "Interview & Workplace Preparation",
      icon: "icon-presentation",
      services: [
        "European interview technique mastery training",
        "Cultural workplace behaviour and etiquette programs",
        "Negotiation skills for salary and contract discussions",
        "Professional presentation and communication enhancement"
      ]
    },
    {
      id: 4,
      title: "Complete Relocation Management",
      icon: "icon-truck",
      services: [
        "Housing assistance and accommodation arrangement",
        "Banking, insurance, and financial setup support",
        "Administrative registration and documentation",
        "Healthcare system navigation and enrolment"
      ]
    },
    {
      id: 5,
      title: "Long-term Integration Support",
      icon: "icon-heart",
      services: [
        "Career advancement planning and mentorship",
        "Professional network building and industry connections",
        "Continuous skills development and certification updates",
        "Family integration services and community connections"
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
                <h1>Recruit Plus - Job Placement Services</h1>
                <p className="lead">Your Complete Career Transition Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="placement-intro-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="intro-content text-center">
                <p className="intro-text">
                  Recruit Plus manages the entire placement process from initial consultation to successful career establishment in Europe. 
                  Our comprehensive approach ensures sustainable career transitions for skilled professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Services Section */}
      <section className="placement-services-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-title text-center">
                <div className="group-title">
                  <h1>Our Placement Services</h1>
                  <p className="lead">End-to-end support for your European career journey</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            {placementServices.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6 mb-4">
                <div className="service-card">
                  <div className="service-image">
                    <img 
                      src={`/images/recruit/IMG-20251011-WA00${19 + service.id}.jpg`}
                      alt={service.title}
                      className="img-fluid"
                      style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '15px 15px 0 0' }}
                    />
                  </div>
                  <div className="service-icon">
                    <span className={service.icon}></span>
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="comprehensive-services-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-title text-center">
                <div className="group-title">
                  <h1>Comprehensive Placement Services</h1>
                  <p className="lead">Your European Career Transition Partner</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            {comprehensiveServices.map((service) => (
              <div key={service.id} className="col-lg-6 col-md-12 mb-4">
                <div className="comprehensive-card">
                  <div className="comprehensive-header">
                    <div className="comprehensive-icon">
                      <span className={service.icon}></span>
                    </div>
                    <h3>{service.title}</h3>
                  </div>
                  <div className="comprehensive-content">
                    <ul className="services-list">
                      {service.services.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Gotop />
    </>
  );
}

export default JobPlacementServices;
