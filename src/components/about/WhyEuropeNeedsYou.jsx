import React from "react";
import PropTypes from "prop-types";

WhyEuropeNeedsYou.propTypes = {};

function WhyEuropeNeedsYou(props) {
  return (
    <section className="why-europe-section">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-title text-center">
              <div className="group-title">
                <h1>Why Europe Needs Your Skills</h1>
                <p className="lead">
                  The European Union faces critical skilled labour shortages with over 42 types of jobs experiencing significant gaps.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="stat-card">
              <div className="stat-number">42+</div>
              <div className="stat-label">Types of Jobs</div>
              <div className="stat-description">Experiencing significant skill gaps across Europe</div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="stat-card">
              <div className="stat-number">3x</div>
              <div className="stat-label">Higher Shortage</div>
              <div className="stat-description">Construction labour shortages compared to a decade ago</div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="stat-card">
              <div className="stat-number">82%</div>
              <div className="stat-label">German Employers</div>
              <div className="stat-description">Report difficulty finding qualified candidates</div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <div className="program-info text-center">
              <p className="program-description">
                Our specialized programs address these exact industry needs, providing qualified professionals to fill critical gaps across Europe's most demanding sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyEuropeNeedsYou;
