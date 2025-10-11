import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import "../components/about/about_sections.scss";

InternationalRecruitment.propTypes = {};

function InternationalRecruitment(props) {
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

  const industries = [
    {
      id: 1,
      title: "Steel Structure & Component Manufacturing",
      description: "The European steel industry supports 2.5 million jobs and generates €123 billion annually.",
      icon: "icon-industry",
      stats: "2.5M jobs, €123B turnover",
      positions: [
        "Qualified Metallurgical Engineers",
        "Certified Arc/MIG Welders",
        "Structural Steel Technicians",
        "Process Operators & Maintenance Specialists",
        "Quality Control Inspectors"
      ]
    },
    {
      id: 2,
      title: "Construction Industry Excellence",
      description: "With construction labour shortages reaching critical levels across EU member states.",
      icon: "icon-building",
      stats: "Critical shortages",
      positions: [
        "Skilled Brick Masons & Masonry Specialists",
        "Steel Fitters & Structural Workers",
        "Project Managers & Site Supervisors",
        "Safety Coordinators & Compliance Officers",
        "Specialized Tradespeople"
      ]
    },
    {
      id: 3,
      title: "Hospitality Sector Professionals",
      description: "Supporting Europe's expanding hospitality industry.",
      icon: "icon-hotel",
      stats: "Expanding industry",
      positions: [
        "Executive Chefs & Culinary Specialists",
        "Guest Services Coordinators",
        "Housekeeping Supervisors and workers",
        "Food & Beverage - waiters"
      ]
    },
    {
      id: 4,
      title: "Transportation & Logistics",
      description: "Meeting growing infrastructure demands.",
      icon: "icon-truck",
      stats: "Growing demands",
      positions: [
        "Professional Drivers (All Categories) – Trailer Drivers",
        "Warehouse Operations Specialists"
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
                <h1>International Recruitment Services</h1>
                <p className="lead">Addressing Europe's Critical Skills Shortage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-title text-center">
                <div className="group-title">
                  <h1>Industry Specializations</h1>
                  <p className="lead">We supply qualified professionals across key European sectors</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
  	        {industries.map((industry) => (
              <div key={industry.id} className="col-lg-6 col-md-12 mb-4">
                <div className="industry-card">
                  <div className="industry-image">
                    <img 
                      src={`/images/recruit/IMG-20251011-WA00${30 + industry.id}.jpg`}
                      alt={industry.title}
                      className="img-fluid"
                      style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '20px 20px 0 0' }}
                    />
                  </div>
                  <div className="industry-header">
                    <div className="industry-icon">
                      <span className={industry.icon}></span>
                    </div>
                    <div className="industry-info">
                      <h3>{industry.title}</h3>
                      <div className="industry-stats">{industry.stats}</div>
                    </div>
                  </div>
                  <div className="industry-content">
                    <p className="industry-description">{industry.description}</p>
                    <div className="industry-positions">
                      <h4>We supply:</h4>
                      <ul className="positions-list">
                        {industry.positions.map((position, index) => (
                          <li key={index}>{position}</li>
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

      <Footer />
      <Gotop />
    </>
  );
}

export default InternationalRecruitment;
