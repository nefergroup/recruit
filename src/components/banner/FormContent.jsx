import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

FormContent.propTypes = {};

function FormContent(props) {
  return (
    <div className="content">
      <div className="heading">
        <h2 className="text-white">Where European Dreams Become Reality Through Skills, Training & Opportunity</h2>
        <p className="text-white">
          Connecting European Success with Global Talent<br/>
          For over 12 years, Recruit Plus has been Europe's trusted partner in international recruitment, specializing in sourcing skilled professionals from India, Qatar and Nepal for thriving careers across Croatia, Latvia, Germany and Serbia. We don't just fill positions – we build bridges between ambition and opportunity.
        </p>
      </div>

      <ul className="list-category text-white">
        <li>
          <Link to="/aboutus">Welder</Link>
        </li>
        <li>
          <Link to="/aboutus">Steel Fitter</Link>
        </li>
        <li>
          <Link to="/aboutus">Steel Fixer</Link>
        </li>
        <li>
          <Link to="/aboutus">Mason</Link>
        </li>
        <li>
          <Link to="/aboutus">Electrician</Link>
        </li>
        <li>
          <Link to="/aboutus">Shuttering Carpenter</Link>
        </li>
        <li>
          <Link to="/aboutus">Painter</Link>
        </li>
        <li>
          <Link to="/aboutus">Scaffolder</Link>
        </li>
      </ul>

      <div className="banner-cta">
        <Link to="/whychooserecruitplus" className="tf-button style-1 banner-button">
          Why Choose Recruit Plus
        </Link>
        <Link to="/contactus" className="tf-button style-2 banner-button-secondary">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default FormContent;
