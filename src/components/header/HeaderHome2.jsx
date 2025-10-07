import React, { useState } from "react";
import PropTypes from "prop-types";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

HeaderHome2.propTypes = {};

function HeaderHome2({ clname = "", handleMobile }) {
  return (
    <header id="header" className="header header-default">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div className="sticky-area-wrap">
              <div className="header-ct-left">
                <div id="logo" className="logo">
                  <Link to="/">
                    <img
                      className="site-logo"
                      id="trans-logo"
                      src={logo}
                      alt="Image"
                    />
                  </Link>
                </div>
              </div>
              <div className="header-ct-right st-1">
                <div className="nav-wrap" style={{ marginRight: "20px" }}>
                  <nav id="main-nav" className="main-nav">
                    <ul id="menu-primary-menu" className="menu">
                      <li className="menu-item">
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li className="menu-item">
                        <NavLink to="/joblist_v1">Find Jobs</NavLink>
                      </li>
                      <li className="menu-item">
                        <NavLink to="/aboutus">About</NavLink>
                      </li>
                      <li className="menu-item">
                        <NavLink to="/contactus">Contact</NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="header-customize-item button">
                  <Link to="/">Upload Resume</Link>
                </div>
                <div className="nav-filter" onClick={handleMobile}>
                  <div className="nav-mobile">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderHome2;