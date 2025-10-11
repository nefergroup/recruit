import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import "../components/about/about_sections.scss";

WhyChooseRecruitPlus.propTypes = {};

function WhyChooseRecruitPlus(props) {
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

  const whyChooseReasons = [
    {
      id: 1,
      title: "12 Years of Proven Excellence",
      description: "Since 2012, we've successfully facilitated thousands of career transitions, building lasting relationships with both candidates and employers across our European network.",
      icon: "icon-award",
      highlight: "Since 2012"
    },
    {
      id: 2,
      title: "Comprehensive Service Portfolio",
      description: "Unlike traditional recruitment agencies, we provide end-to-end solutions including skills development, cultural preparation, and post-placement support ensuring higher success rates and longer-term satisfaction.",
      icon: "icon-layers",
      highlight: "End-to-End"
    },
    {
      id: 3,
      title: "Strategic European Presence",
      description: "Our headquarters in Croatia and operations across Latvia, Germany, Serbia, and Qatar provide unmatched regional expertise and local market knowledge.",
      icon: "icon-map-pin",
      highlight: "5 Countries"
    },
    {
      id: 4,
      title: "Industry Expertise",
      description: "Deep specialization in high-demand sectors experiencing acute skilled labour shortages - steel manufacturing, construction, hospitality, and transportation.",
      icon: "icon-tools",
      highlight: "4 Industries"
    },
    {
      id: 5,
      title: "Ethical Recruitment Practices",
      description: "Committed to transparent, fair recruitment processes that benefit both candidates and employers while maintaining the highest professional standards.",
      icon: "icon-shield",
      highlight: "Ethical"
    }
  ];

  const successStats = [
    {
      id: 1,
      number: "5,000+",
      label: "Skilled Professionals Placed",
      description: "Successfully placed across European markets"
    },
    {
      id: 2,
      number: "95%",
      label: "Placement Satisfaction Rate",
      description: "With continuous post-placement support"
    },
    {
      id: 3,
      number: "82+",
      label: "European Company Partnerships",
      description: "Across target industries"
    },
    {
      id: 4,
      number: "1,682",
      label: "Workers Placed",
      description: "In different jobs/companies across Europe"
    },
    {
      id: 5,
      number: "18 Months",
      label: "Average Retention Rate",
      description: "Significantly above industry standards"
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
                <h1>Why Choose Recruit Plus</h1>
                <p className="lead">Building Blue Collar Excellence - Training Programs Designed for Europe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats Section */}
      <section className="success-stats-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-title text-center">
                <div className="group-title">
                  <h1>Our Success Stories</h1>
                  <p className="lead">Industry Impact & Proven Results</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            {successStats.map((stat) => (
              <div key={stat.id} className="col-lg-2 col-md-4 col-sm-6 mb-4">
                <div className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-description">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Reasons Section */}
      <section className="why-choose-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-title text-center">
                <div className="group-title">
                  <h1>Why Choose Recruit Plus</h1>
                  <p className="lead">Your trusted partner for European career success</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            {whyChooseReasons.map((reason) => (
              <div key={reason.id} className="col-lg-6 col-md-12 mb-4">
                <div className="reason-card">
                  <div className="reason-image">
                    <img 
                      src={`/images/recruit/IMG-20251011-WA00${34 + reason.id}.jpg`}
                      alt={reason.title}
                      className="img-fluid"
                      style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '20px 20px 0 0' }}
                    />
                  </div>
                  <div className="reason-header">
                    <div className="reason-icon">
                      <span className={reason.icon}></span>
                    </div>
                    <div className="reason-highlight">{reason.highlight}</div>
                  </div>
                  <div className="reason-content">
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
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

export default WhyChooseRecruitPlus;
