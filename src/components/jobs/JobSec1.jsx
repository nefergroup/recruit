import React from "react";
import PropTypes from "prop-types";

JobSec1.propTypes = {
  data: PropTypes.array.isRequired,
};

function JobSec1(props) {
  const { data } = props;

  return (
    <section className="inner-jobs-section">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="group-col-3">
              {data.map((idx) => (
                <div key={idx.id} className="features-job cl3">
                  <div className="job-archive-header">
                    <div className="inner-box">
                      <div className="box-content">
                        <h4>{idx.cate}</h4>
                        <h3>
                          {idx.title}
                          <span className="icon-bolt"></span>
                        </h3>
                        <ul>
                          <li>
                            <span className="icon-map-pin"></span>
                            {idx.map}
                          </li>
                          <li>
                            <span className="icon-calendar"></span>
                            {idx.time}
                          </li>
                        </ul>
                        <span className="icon-heart"></span>
                      </div>
                    </div>
                  </div>

                  <div className="job-archive-footer">
                    <div className="job-footer-left">
                      <ul className="job-tag">
                        <li>{idx.jobs1}</li>
                        <li>{idx.jobs2}</li>
                      </ul>
                      <div className="star">
                        <span className="icon-star-full"></span>
                        <span className="icon-star-full"></span>
                        <span className="icon-star-full"></span>
                        <span className="icon-star-full"></span>
                        <span className="icon-star-full"></span>
                      </div>
                    </div>

                    {/* Footer right (kept commented as in your original code)
                    <div className="job-footer-right">
                      <div className="job-details">
                        <ul className="details-list">
                          {idx.details &&
                            idx.details.map((detail, index) => (
                              <li key={index}>{detail}</li>
                            ))}
                        </ul>
                      </div>
                      <button className="apply-button">Apply Now</button>
                    </div> 
                    */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobSec1;
