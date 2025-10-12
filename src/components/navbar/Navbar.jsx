import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ className = "" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Navigation links
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/aboutus", label: "About" },
    { path: "/specialization", label: "Services" },
    { path: "/recruitmentprocess", label: "Process" },
    { path: "/skillgrowacademy", label: "Training" },
    { path: "/whychooserecruitplus", label: "Why Choose Us" },
    { path: "/ourlocations", label: "Locations" },
    { path: "/successstories", label: "Success Stories" },
    { path: "/internationalrecruitmentservices", label: "International" },
    { path: "/ourrecruitmentprocess", label: "Our Process" },
    { path: "/contactinformation", label: "Contact" },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""} ${className}`}>
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <Link to="/" onClick={closeMobileMenu}>
              <img 
                src="/images/logo.png" 
                alt="RecruitPlus Logo" 
                className="logo-img"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-menu">
            <ul className="navbar-list">
              {navLinks.map((link) => (
                <li key={link.path} className="navbar-item">
                  <NavLink 
                    to={link.path} 
                    className="navbar-link"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>


          {/* Mobile Menu Toggle */}
          <div className="navbar-toggle" onClick={toggleMobileMenu}>
            <span className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-backdrop" onClick={closeMobileMenu}></div>
        <div className="mobile-menu">
          {/* Mobile Menu Header */}
          <div className="mobile-menu-header">
            <Link to="/" onClick={closeMobileMenu}>
              <img 
                src="/images/logo.png" 
                alt="RecruitPlus Logo" 
                className="mobile-logo"
              />
            </Link>
            <button className="mobile-menu-close" onClick={closeMobileMenu}>
              <span></span>
              <span></span>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="mobile-menu-content">
            <ul className="mobile-menu-list">
              {navLinks.map((link) => (
                <li key={link.path} className="mobile-menu-item">
                  <NavLink 
                    to={link.path} 
                    className="mobile-menu-link"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Footer */}
          <div className="mobile-menu-footer">
            <div className="contact-info">
              <div className="contact-item">
                <i className="icon-phone"></i>
                <div>
                  <p>Need help? 24/7</p>
                  <a href="tel:+385953565592">+385 953565592</a>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="icon-facebook"></i>
              </a>
              <a href="#" className="social-link">
                <i className="icon-linkedin"></i>
              </a>
              <a href="#" className="social-link">
                <i className="icon-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="icon-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
