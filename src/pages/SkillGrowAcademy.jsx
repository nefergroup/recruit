import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import "../components/about/about_sections.scss";

SkillGrowAcademy.propTypes = {};

function SkillGrowAcademy(props) {
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

  const corePrograms = [
    {
      id: 1,
      title: "Technical Skills Development",
      icon: "icon-tools",
      programs: [
        "Advanced manufacturing techniques for steel and construction industries",
        "Digital technology integration for modern workplace requirements",
        "Safety certification and compliance training",
        "Quality management and process optimization"
      ]
    },
    {
      id: 2,
      title: "Language & Communication",
      icon: "icon-message-circle",
      programs: [
        "Professional English proficiency programs",
        "Business communication skills",
        "Cross-cultural communication training",
        "Presentation and leadership skills"
      ]
    },
    {
      id: 3,
      title: "Personality Development",
      icon: "icon-user-plus",
      programs: [
        "Professional etiquette and workplace behaviour",
        "Leadership and team management skills",
        "Adaptability and problem-solving capabilities",
        "Career planning and professional growth strategies"
      ]
    }
  ];

  const trainingPrograms = [
    {
      id: 1,
      title: "6-Month ARC/MIG Welding Course",
      subtitle: "Master European Welding Standards",
      duration: "6 Months",
      salary: "€1,500-4,000 monthly",
      icon: "icon-wrench",
      features: [
        "Advanced ARC Welding Techniques - Shielded Metal Arc Welding (SMAW)",
        "MIG Welding Proficiency - Gas Metal Arc Welding (GMAW)",
        "European Safety Standards - Complete compliance training",
        "Certification - International welding credentials",
        "Industry Focus - Steel manufacturing, construction fabrication"
      ]
    },
    {
      id: 2,
      title: "6-Month Steel Fitter Course",
      subtitle: "Build Europe's Infrastructure",
      duration: "6 Months",
      salary: "Competitive European rates",
      icon: "icon-building",
      features: [
        "Structural Steel Assembly - Complex framework construction",
        "Blueprint Reading - Technical drawing interpretation",
        "Precision Fitting Techniques - European quality standards",
        "Safety Protocols - Advanced safety management",
        "Tool Mastery - Professional equipment operation"
      ]
    },
    {
      id: 3,
      title: "5-Month Brick Wall Mason Course",
      subtitle: "Traditional Craftsmanship, Modern Standards",
      duration: "5 Months",
      salary: "Competitive European rates",
      icon: "icon-layers",
      features: [
        "European Masonry Techniques - Advanced brick laying methods",
        "Mortar Technology - Modern binding materials",
        "Quality Control - Precision measurement and alignment",
        "Project Management - Site coordination skills",
        "Certification - Professional mason credentials"
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
                <h1>SkillGrow Academy Core Programs</h1>
                <p className="lead">Train in India. Get Certified. Work in Europe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Programs Section */}
      <section className="core-programs-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-title text-center">
                <div className="group-title">
                  <h1>Our Core Training Programs</h1>
                  <p className="lead">Comprehensive development for European workplace success</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            {corePrograms.map((program) => (
              <div key={program.id} className="col-lg-4 col-md-6 mb-4">
                <div className="program-card">
                  <div className="program-header">
                    <div className="program-icon">
                      <span className={program.icon}></span>
                    </div>
                    <h3>{program.title}</h3>
                  </div>
                  <div className="program-content">
                    <ul className="program-list">
                      {program.programs.map((item, index) => (
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

      {/* Training Programs Section */}
      <section className="training-programs-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-title text-center">
                <div className="group-title">
                  <h1>Industry-Specific Training Programs</h1>
                  <p className="lead">Our curriculum aligns with European industry standards</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            {trainingPrograms.map((program) => (
              <div key={program.id} className="col-lg-4 col-md-6 mb-4">
                <div className="training-card">
                  <div className="training-image">
                    <img 
                      src={`/images/recruit/IMG-20251011-WA00${12 + program.id}.jpg`}
                      alt={program.title}
                      className="img-fluid"
                      style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }}
                    />
                  </div>
                  <div className="training-header">
                    <div className="training-icon">
                      <span className={program.icon}></span>
                    </div>
                    <div className="training-meta">
                      <span className="duration">{program.duration}</span>
                      <span className="salary">{program.salary}</span>
                    </div>
                  </div>
                  <div className="training-content">
                    <h3>{program.title}</h3>
                    <p className="subtitle">{program.subtitle}</p>
                    <ul className="features-list">
                      {program.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="methodology-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-title text-center">
                <div className="group-title">
                  <h1>Our Training Methodology</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="methodology-item">
                <div className="methodology-icon">
                  <span className="icon-hand"></span>
                </div>
                <h4>Hands-On Learning</h4>
                <p>70% practical training, 30% theoretical knowledge</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="methodology-item">
                <div className="methodology-icon">
                  <span className="icon-award"></span>
                </div>
                <h4>European Standards</h4>
                <p>All programs meet EU industry requirements</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="methodology-item">
                <div className="methodology-icon">
                  <span className="icon-globe"></span>
                </div>
                <h4>Language Integration</h4>
                <p>Technical English and communication skills</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="methodology-item">
                <div className="methodology-icon">
                  <span className="icon-shield"></span>
                </div>
                <h4>Safety First</h4>
                <p>Comprehensive safety training and certification</p>
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

export default SkillGrowAcademy;
