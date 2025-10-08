import React, { useState } from "react";
import PropTypes from "prop-types";

Jobs.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
};

function Jobs(props) {
  const { data, className } = props;

  const [dataBlock] = useState({
    title: "Featured Jobs",
    text: "Find the job that’s perfect for you. About 800+ new jobs everyday",
  });

  return (
    <section className={className}>
      <div className="tf-container">
        {/* Section Title */}
        <div className="tf-title style-2">
          <div className="group-title">
            <h1>{dataBlock.title}</h1>
            <p>{dataBlock.text}</p>
          </div>
        </div>

        {/* Job Listings */}
        <div className="row wow fadeInUp">
          {data.slice(0, 6).map((idx) => (
            <div key={idx.id} className="col-lg-6 d-flex">
              <div className="features-job d-flex flex-column flex-grow-1">
                {/* Job Header */}
                <div className="job-archive-header flex-grow-1">
                  <div className="inner-box">
                    {/* ✅ Added company logo */}
                    <div className="logo-company mb-3">
                      <img
                        src={idx.img}
                        alt={idx.title}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    {/* Job Content */}
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
                      </ul>
                      <ul className="job-details-list">
                        {idx.details.map((point, i) => (
                          <li key={i}>• {point}</li>
                        ))}
                      </ul>
                      <span className="icon-heart"></span>
                    </div>
                  </div>
                </div>

                {/* Job Footer */}
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
                </div>
              </div>
            </div>
          ))}

          {/* Optional Button */}
          <div className="col-md-12">
            {/* <div className="wrap-button">
              <Button2 title="See more Jobs" link="/joblist_v1" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jobs;
