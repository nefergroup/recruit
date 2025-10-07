import React, { useState } from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";
import img from "../../assets/images/partners/thum-1.png";
import "./style.scss";

function BannerCounter(props) {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  const onVWEnter = () => {
    setViewPortEntered(true);
  };

  return (
    <section className="wd-banner-counter">
      <div className="tf-container st3">
        <div className="row">
          <div className="col-lg-12">
            <div className="group-title-counter stc">
              <h3>The numbers don't lie</h3>
              <p>About 100+ new jobs everyday</p>
            </div>
            <div className="group-counter wow fadeInUp">
              <div className="row align-item-center">
                <div className="col-lg-3 col-md-6">
                  <div className="wd-counter widget-counter">
                    <div className="inner wrap-counter">
                      <h2>
                        <Waypoint onEnter={onVWEnter}>
                          <span>
                            {viewPortEntered && (
                              <CountUp
                                className="counter-number"
                                end={2}
                                suffix="K+"
                                duration={3}
                              />
                            )}
                          </span>
                        </Waypoint>
                      </h2>
                    </div>
                    <p className="description">Jobs Available</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="wd-counter widget-counter">
                    <div className="inner wrap-counter">
                      <h2>
                        <Waypoint onEnter={onVWEnter}>
                          <span>
                            {viewPortEntered && (
                              <CountUp
                                className="counter-number"
                                end={500}
                                suffix="+"
                                duration={3}
                              />
                            )}
                          </span>
                        </Waypoint>
                      </h2>
                    </div>
                    <p className="description">New Jobs This Week!</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="wd-counter widget-counter">
                    <div className="inner wrap-counter">
                      <h2>
                        <Waypoint onEnter={onVWEnter}>
                          <span>
                            {viewPortEntered && (
                              <CountUp
                                className="counter-number"
                                end={200}
                                suffix="+"
                                duration={3}
                              />
                            )}
                          </span>
                        </Waypoint>
                      </h2>
                    </div>
                    <p className="description">Companies Hiring</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="wd-counter widget-counter br-none">
                    <div className="inner wrap-counter">
                      <h2>
                        <Waypoint onEnter={onVWEnter}>
                          <span>
                            {viewPortEntered && (
                              <CountUp
                                className="counter-number"
                                end={10}
                                suffix="K+"
                                duration={3}
                              />
                            )}
                          </span>
                        </Waypoint>
                      </h2>
                    </div>
                    <p className="description">Candidates</p>
                  </div>
                </div>
              </div>
              <img className="thumb ani4" src={img} alt="images" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerCounter;
