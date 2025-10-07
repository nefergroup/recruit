import React from "react";
import PropTypes from "prop-types";
import Breadcrumb from "../components/breadcrumb";
import Header2 from "../components/header/Header2";
import JobSec1 from "../components/jobs/JobSec1";
import dataJobs from "../assets/fakeData/dataJobs";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

// Import the CSS file
import "../components/header/mobile-menu.css";

// Import the company logos
import img1 from "../assets/images/logo-company/cty8.png";
import img2 from "../assets/images/logo-company/cty11.png";
import img3 from "../assets/images/logo-company/cty4.png";
import img4 from "../assets/images/logo-company/cty7.png";
import img5 from "../assets/images/logo-company/cty2.png";
import img6 from "../assets/images/logo-company/cty9.png";
import img7 from "../assets/images/logo-company/cty1.png";
import img8 from "../assets/images/logo-company/cty10.png";

// Updated dataJobs array with the provided job data
const updatedDataJobs = [
  {
    id: 1,
    img: img1,
    cate: "Recruit Plus",
    title: "MIG/MAG Welders",
    map: "Europe",
    jobs1: "Full-time",
    jobs2: "Remote",
    details: [
      "Certified to EN ISO 9606-1 standards",
      "Real-world workshop training",
      "TÜV Nord certified welders",
      "Focus on precision welding and safety",
    ],
  },
  {
    id: 2,
    img: img2,
    cate: "Recruit Plus",
    title: "Steel Fitters",
    map: "Europe",
    jobs1: "Full-time",
    jobs2: "Remote",
    details: [
      "EN 1090-2 aligned training",
      "Skilled in structural steel fitting and assembly",
      "Blueprint reading and bolt-up precision",
    ],
  },
  {
    id: 3,
    img: img3,
    cate: "Recruit Plus",
    title: "Steel Fixers",
    map: "Europe",
    jobs1: "Full-time",
    jobs2: "Remote",
    details: [
      "Trained in reinforcement and fitting for concrete structures",
      "Pre-tested for site readiness",
    ],
  },
  {
    id: 4,
    img: img4,
    cate: "Recruit Plus",
    title: "Brick Wall Masons",
    map: "Europe",
    jobs1: "Full-time",
    jobs2: "Remote",
    details: [
      "Skilled in brickwork, blockwork, plastering, and screeding",
      "Trained for European and Gulf construction standards",
    ],
  },
  {
    id: 5,
    img: img5,
    cate: "Recruit Plus",
    title: "Electricians",
    map: "Europe",
    jobs1: "Full-time",
    jobs2: "Remote",
    details: [
      "Trained in industrial and residential wiring",
      "Focus on safety and global electrical standards",
    ],
  },
  {
    id: 6,
    img: img6,
    cate: "Recruit Plus",
    title: "Shuttering Carpenters",
    map: "Europe",
    jobs1: "Full-time",
    jobs2: "Remote",
    details: [
      "Skilled in formwork and mold setup for slabs, columns, and beams",
    ],
  },
  {
    id: 7,
    img: img7,
    cate: "Recruit Plus",
    title: "Painters",
    map: "Europe",
    jobs1: "Full-time",
    jobs2: "Remote",
    details: [
      "Proficient in interior/exterior finishing, surface preparation, and coating",
    ],
  },
  {
    id: 8,
    img: img8,
    cate: "Recruit Plus",
    title: "Scaffolders",
    map: "Europe",
    jobs1: "Full-time",
    jobs2: "Remote",
    details: [
      "Experienced in safe scaffold erection for high-access zones",
    ],
  },
];

Joblist_v1.propTypes = {};

function Joblist_v1(props) {
  const [isShowMobile, setShowMobile] = useState(false);

  const handleMobile = () => {
    const getMobile = document.querySelector(".menu-mobile-popup");
    setShowMobile(!isShowMobile);
    !isShowMobile
      ? getMobile.classList.add("modal-menu--open")
      : getMobile.classList.remove("modal-menu--open");
  };

  return (
    <>
      <div className="menu-mobile-popup">
        <div className="modal-menu__backdrop" onClick={handleMobile}></div>
        <div className="widget-filter">
          <div className="mobile-header">
            <div id="logo" className="logo">
              <Link to="/">
                <img className="site-logo" src={logo} alt="Image" />
              </Link>
            </div>
            <Link className="title-button-group" onClick={handleMobile}>
              <i className="icon-close"></i>
            </Link>
          </div>

          {/* Simplified Mobile Menu */}
          <div className="mobile-menu-content">
            <nav className="main-nav mobile">
              <ul id="menu-primary-menu" className="menu">
                <li className="menu-item">
                  <Link to="/" className="iteam-menu" onClick={handleMobile}>
                    Home
                  </Link>
                </li>

                <li className="menu-item current-item">
                  <Link to="/joblist_v1" className="iteam-menu" onClick={handleMobile}>
                    Find Jobs
                  </Link>
                </li>

                <li className="menu-item">
                  <Link to="/aboutus" className="iteam-menu" onClick={handleMobile}>
                    About Us
                  </Link>
                </li>

                <li className="menu-item">
                  <Link to="/contactus" className="iteam-menu" onClick={handleMobile}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header-customize-item button">
            <Link to="/" onClick={handleMobile}>Upload Resume</Link>
          </div>

          <div className="mobile-footer">
            <div className="icon-infor d-flex aln-center">
              <div className="icon">
                <span className="icon-call-calling">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                  <span className="path4"></span>
                </span>
              </div>
              <div className="content">
                <p>Need help? 24/7</p>
                <h6>
                  <Link to="tel:0123456678">001-1234-88888</Link>
                </h6>
              </div>
            </div>
            <div className="wd-social d-flex aln-center">
              <ul className="list-social d-flex aln-center">
                <li>
                  <Link to="#">
                    <i className="icon-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-linkedin2"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-pinterest"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-instagram1"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS to ensure hamburger icon shows as 3 lines */}
      <style jsx>{`
        /* Ensure the hamburger menu icon shows as 3 bars */
        .icon-menu:before {
          content: "\\2630" !important; /* Unicode for hamburger icon */
          font-size: 24px;
        }
        
        /* Alternative approach using CSS bars */
        .mobile-menu-btn .icon-menu {
          display: inline-block;
          width: 25px;
          height: 17px;
          position: relative;
        }
        
        .mobile-menu-btn .icon-menu:before {
          content: '';
          position: absolute;
          width: 25px;
          height: 2px;
          background: #000;
          top: 0;
          left: 0;
        }
        
        .mobile-menu-btn .icon-menu:after {
          content: '';
          position: absolute;
          width: 25px;
          height: 2px;
          background: #000;
          bottom: 0;
          left: 0;
        }
        
        .mobile-menu-btn .icon-menu span {
          position: absolute;
          width: 25px;
          height: 2px;
          background: #000;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
      `}</style>

      <Header2 clname="actJob1" handleMobile={handleMobile} />
      <Breadcrumb title="Find Jobs" className="breadcrumb-section" />

      <JobSec1 
        data={updatedDataJobs} 
        showSearch={false}
        showFilters={false}
        showPagination={false}
        showSort={false}
        showJobCount={false}
      />
      <Footer />
      <Gotop />
    </>
  );
}

export default Joblist_v1;
