import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

CourseSec1.propTypes = {
  data: PropTypes.array.isRequired,
  className: PropTypes.string,
};

function CourseSec1({ data, className }) {
  const [dataBlock] = useState({
    title: "Featured Courses",
    text: "Explore our top training programs designed to help you build real-world skills and global career opportunities.",
  });

  return (
    <section className={className}>
      <div className="tf-container">
        <div className="tf-title style-2">
          <div className="group-title">
            <h1>{dataBlock.title}</h1>
            <p>{dataBlock.text}</p>
          </div>
        </div>

        <div className="row wow fadeInUp">
          {data.slice(0, 6).map((item) => (
            <div key={item.id} className="col-lg-6 d-flex">
              <div className="features-job d-flex flex-column flex-grow-1">
                <div className="job-archive-header flex-grow-1">
                  <div className="inner-box">
                    <div className="logo-company">
                      <img src={item.img} alt="course" />
                    </div>
                    <div className="box-content">
                      <h4>
                        <Link to="/coursesingle_v1">{item.category}</Link>
                      </h4>
                      <h3>
                        <Link to="/coursesingle_v1">{item.title}</Link>
                        <span className="icon-bolt"></span>
                      </h3>
                      <ul>
                        <li>
                          <span className="icon-map-pin"></span>
                          {item.location}
                        </li>
                      </ul>
                      <ul className="job-details-list">
                        {item.details.map((point, i) => (
                          <li key={i}>• {point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="job-archive-footer">
                  <div className="job-footer-left">
                    <ul className="job-tag">
                      <li>
                        <Link to="#">{item.duration}</Link>
                      </li>
                      <li>
                        <Link to="#">{item.level}</Link>
                      </li>
                    </ul>
                    <div className="star">
                      <span className="icon-star-full"></span>
                      <span className="icon-star-full"></span>
                      <span className="icon-star-full"></span>
                      <span className="icon-star-full"></span>
                      <span className="icon-star-full"></span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/coursesingle_v1"
                  className="jobtex-link-item"
                  tabIndex="0"
                ></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseSec1;
