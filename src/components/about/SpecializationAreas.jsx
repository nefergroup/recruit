import React from "react";
import PropTypes from "prop-types";

SpecializationAreas.propTypes = {};

function SpecializationAreas(props) {
  const specializations = [
    {
      id: 1,
      title: "Steel Structure & Component Manufacturing",
      description: "The European steel industry supports 2.5 million jobs and generates €123 billion in turnover annually. We supply qualified metallurgical engineers, welders, structural steel technicians, process operators, and maintenance specialists to meet the industry's evolving technological demands.",
      icon: "icon-industry",
      stats: "2.5M jobs, €123B turnover"
    },
    {
      id: 2,
      title: "Construction Industry",
      description: "With construction labour shortages now three times higher than a decade ago across EU member states, we provide skilled tradespeople including carpenters, electricians, plumbers, project managers, and specialized construction technicians.",
      icon: "icon-building",
      stats: "3x higher shortages"
    },
    {
      id: 3,
      title: "Hospitality Sector",
      description: "European hospitality continues expanding post-pandemic, requiring diverse skilled professionals. We recruit experienced chefs, hotel managers, housekeeping supervisors, and service specialists who understand international hospitality standards.",
      icon: "icon-hotel",
      stats: "Post-pandemic expansion"
    },
    {
      id: 4,
      title: "Transportation & Logistics",
      description: "Supporting Europe's growing transportation infrastructure needs with qualified drivers, logistics coordinators, warehouse managers, and transportation technicians.",
      icon: "icon-truck",
      stats: "Growing infrastructure needs"
    }
  ];

  return (
    <section className="specialization-areas-section">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-title text-center">
              <div className="group-title">
                <h1>Our Specialization Areas</h1>
                <p className="lead">
                  We focus on four key industries where skilled professionals are in highest demand across Europe.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          {specializations.map((specialization) => (
            <div key={specialization.id} className="col-lg-6 col-md-12 mb-4">
              <div className="specialization-card">
                <div className="specialization-header">
                  <div className="specialization-icon">
                    <span className={specialization.icon}></span>
                  </div>
                  <div className="specialization-title">
                    <h3>{specialization.title}</h3>
                    <div className="specialization-stats">{specialization.stats}</div>
                  </div>
                </div>
                <div className="specialization-content">
                  <p>{specialization.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecializationAreas;
