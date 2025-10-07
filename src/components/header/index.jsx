import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import logo from "../../assets/images/logo-white.png";
import logo2 from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

Header.propTypes = {};

function Header({ clname = "", handleMobile }) {
  const [scroll, setScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle scroll to shrink header
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle window resize for mobile/desktop detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      id="header"
      className={`header header-default style-absolute header-fixed ${
        scroll ? "is-fixed is-small" : ""
      }`}
    >
      <div className="tf-container ct2">
        <div className="row">
          <div className="col-md-12">
            <div className="sticky-area-wrap">
              {/* Left: Logo */}
              <div className="header-ct-left">
                <div id="logo" className="logo">
                  <Link to="/">
                    <img 
                      className="site-logo" 
                      id="trans-logo" 
                      src={logo} 
                      alt="Logo" 
                    />
                    <img 
                      className="logo-none" 
                      id="trans-logo" 
                      src={logo2} 
                      alt="Logo" 
                    />
                  </Link>
                </div>
              </div>

              {/* Right: Navigation */}
              <div className="header-ct-right">
                {/* Desktop nav - only render if not mobile */}
                {!isMobile && (
                  <div className="nav-wrap">
                    <nav id="main-nav" className="main-nav">
                      <ul id="menu-primary-menu" className="menu">
                        <li className="menu-item">
                          <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="menu-item">
                          <NavLink to="/joblist_v1">Training</NavLink>
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
                )}

                {/* Upload button */}
                <div className="header-customize-item button">
                  <Link to="/">Upload Resume</Link>
                </div>

                {/* Mobile nav toggle */}
                {isMobile && (
                  <div className="nav-filter" onClick={handleMobile}>
                    <div className="nav-mobile">
                      <span></span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;