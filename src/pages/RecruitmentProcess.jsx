import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import "../components/about/about_sections.scss";

RecruitmentProcess.propTypes = {};

function RecruitmentProcess(props) {
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

  const recruitmentPhases = [
    {
      id: 1,
      title: "Comprehensive Candidate Assessment",
      description: "Technical skills evaluation, language proficiency testing, and cultural fit analysis",
      icon: "icon-user-check"
    },
    {
      id: 2,
      title: "Documentation & Compliance",
      description: "Complete visa assistance, work permit processing, and legal compliance management",
      icon: "icon-file-text"
    },
    {
      id: 3,
      title: "Pre-Departure Preparation",
      description: "Cultural orientation, professional training, and career counselling",
      icon: "icon-plane"
    },
    {
      id: 4,
      title: "Post-Placement Support",
      description: "Ongoing assistance for successful integration and career development",
      icon: "icon-handshake"
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
                <h1>Our Recruitment Process</h1>
                <p className="lead">International Recruitment Services - Bridging the Skills Gap Across Europe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="recruitment-intro-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="intro-content text-center">
                <p className="intro-text">
                  Europe faces a critical skilled labour shortage, with over 42 types of jobs experiencing significant gaps, 
                  particularly in construction, steel manufacturing, hospitality, and transportation. Our recruitment expertise 
                  addresses these challenges by connecting European employers with highly skilled professionals from India and Nepal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Phases */}
      <section className="recruitment-phases-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-title text-center">
                <div className="group-title">
                  <h1>Our 4-Phase Recruitment Process</h1>
                  <p className="lead">A comprehensive approach to successful international placements</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            {recruitmentPhases.map((phase, index) => (
              <div key={phase.id} className="col-lg-6 col-md-12 mb-4">
                <div className="phase-card">
                  <div className="phase-image">
                    <img 
                      src={`/images/recruit/IMG-20251011-WA00${index === 0 ? '15' : index === 1 ? '16' : index === 2 ? '17' : '26'}.jpg`}
                      alt={phase.title}
                      className="img-fluid"
                      style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }}
                    />
                  </div>
                  <div className="phase-header">
                    <div className="phase-number">{index + 1}</div>
                    <div className="phase-icon">
                      <span className={phase.icon}></span>
                    </div>
                  </div>
                  <div className="phase-content">
                    <h3>{phase.title}</h3>
                    <p>{phase.description}</p>
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

export default RecruitmentProcess;
