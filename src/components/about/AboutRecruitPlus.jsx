import React from "react";
import PropTypes from "prop-types";

AboutRecruitPlus.propTypes = {};

function AboutRecruitPlus(props) {
  return (
    <section className="about-recruit-plus-section">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-title text-center">
              <div className="group-title">
                <h1>About Recruit Plus</h1>
                <p className="lead">
                  Established in 2012, Recruit Plus is a comprehensive human resources and recruitment organization headquartered in Croatia with strategic operations across Europe.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="division-card">
              <div className="division-icon">
                <span className="icon-briefcase"></span>
              </div>
              <div className="division-content">
                <h3>Recruit Plus</h3>
                <p>Our core recruitment and HR consultancy services</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="division-card">
              <div className="division-icon">
                <span className="icon-graduation-cap"></span>
              </div>
              <div className="division-content">
                <h3>SkillGrow Academy</h3>
                <p>Professional skill development and personality enhancement programs</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="division-card">
              <div className="division-icon">
                <span className="icon-target"></span>
              </div>
              <div className="division-content">
                <h3>Vision 360 Degree d.o.o.</h3>
                <p>Specialized job placement and career transition services</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <div className="network-info text-center">
              <p className="network-description">
                Our extensive European network spans five key markets, positioning us uniquely to address the growing skilled labour shortage across construction, steel manufacturing, hospitality, and transportation industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutRecruitPlus;
