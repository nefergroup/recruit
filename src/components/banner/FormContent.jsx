import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

FormContent.propTypes = {};

function FormContent(props) {
  return (
    <div className="content">
      <div className="heading">
        <h2 className="text-white">Find the Job That Fits Your Future</h2>
        <p className="text-white">
          Recruit Plus, powered by Vision 360, is your trusted gateway to
          overseas career opportunities. Explore verified, high-demand jobs
          across Europe and the Middle East, supported by global training,
          certification, and complete placement assistance — all with no hidden
          fees or subscriptions.
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
    </div>
  );
}

export default FormContent;
