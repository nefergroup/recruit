import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ className = "" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

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

  // Handle more dropdown toggle
  const toggleMoreDropdown = () => {
    setIsMoreDropdownOpen(!isMoreDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMoreDropdownOpen && !event.target.closest('.navbar-item-more')) {
        setIsMoreDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMoreDropdownOpen]);

  // Navigation links
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/specialization", label: "Service" },
    { path: "/aboutus", label: "About" },
    { path: "/ourlocations", label: "Location" },
    { path: "/skillgrowacademy", label: "Training" },
    { path: "/contactinformation", label: "Contact" },
  ];

  // Additional links for "More" dropdown
  const moreLinks = [
    { path: "/recruitmentprocess", label: "Process" },
    { path: "/whychooserecruitplus", label: "Why Choose Us" },
    { path: "/successstories", label: "Success Stories" },
    { path: "/internationalrecruitmentservices", label: "International" },
    { path: "/ourrecruitmentprocess", label: "Our Process" },
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
              
              {/* More Dropdown */}
              <li className="navbar-item navbar-item-more">
                <button 
                  className="navbar-link navbar-link-more"
                  onClick={toggleMoreDropdown}
                >
                  More
                  <i className={`icon-arrow-down ${isMoreDropdownOpen ? 'active' : ''}`}></i>
                </button>
                
                {isMoreDropdownOpen && (
                  <div className="navbar-dropdown">
                    <ul className="navbar-dropdown-list">
                      {moreLinks.map((link) => (
                        <li key={link.path} className="navbar-dropdown-item">
                          <NavLink 
                            to={link.path} 
                            className="navbar-dropdown-link"
                            onClick={() => {
                              closeMobileMenu();
                              setIsMoreDropdownOpen(false);
                            }}
                          >
                            {link.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
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
              
              {/* Additional Links Section */}
              <li className="mobile-menu-item mobile-menu-section-title">
                <span>More Information</span>
              </li>
              
              {moreLinks.map((link) => (
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
