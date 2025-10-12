import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      {/* Top Footer */}
      <div className="top-footer">
        <div className="tf-container" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
          <div className="row" style={{ marginLeft: '-10px', marginRight: '-10px' }}>
            <div className="col-lg-2 col-md-4" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
              <div className="footer-logo">
                <img src={require('../../assets/images/logo.png')} alt="logo" />
              </div>
            </div>
            <div className="col-lg-10 col-md-8" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
              <div className="wd-social d-flex aln-center">
                <span>Follow Us:</span>
                <ul className="list-social d-flex aln-center">
                  <li><Link to="#"><i className="icon-facebook"></i></Link></li>
                  <li><Link to="#"><i className="icon-linkedin2"></i></Link></li>
                  <li><Link to="#"><i className="icon-twitter"></i></Link></li>
                  <li><Link to="#"><i className="icon-pinterest"></i></Link></li>
                  <li><Link to="#"><i className="icon-instagram1"></i></Link></li>
                  <li><Link to="#"><i className="icon-youtube"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inner Footer */}
      <div className="inner-footer">
        <div className="tf-container" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
          <div className="row" style={{ marginLeft: '-10px', marginRight: '-10px' }}>

            {/* Contact / Info Column */}
            <div className="col-lg-4 col-md-6" style={{ paddingLeft: '5px', paddingRight: '5px', marginLeft: '10px' }}>
              <div className="footer-cl-1">
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
                    <h6><Link to="tel:
+38 5953565592">
+38 5953565592</Link></h6>
                  </div>
                </div>
                <p className="mb-2">Job Searching Made Easy. Connect with top employers globally through Recruit Plus!</p>
                <div className="ft-icon">
                  <i className="icon-map-pin"></i> ILICA 237,
1000 ZAGREB, CROATIA
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="col-lg-2 col-md-6 col-6" style={{ paddingLeft: '5px', paddingRight: '5px', marginLeft: '10px' }}>
              <div className="footer-cl-2">
                <h6 className="ft-title">Quick Links</h6>
                <ul className="navigation-menu-footer">
                  <li><Link to="/recruitmentprocess">Process</Link></li>
                  <li><Link to="/whychooserecruitplus">Why Choose Us</Link></li>
                  <li><Link to="/successstories">Success Stories</Link></li>
                  <li><Link to="/internationalrecruitmentservices">International</Link></li>
                  <li><Link to="/ourrecruitmentprocess">Our Process</Link></li>
                </ul>
              </div>
            </div>

            {/* Why Choose Recruit Plus Column */}
            <div className="col-lg-3 col-md-6" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
              <div className="footer-cl-5">
                <h6 className="ft-title">Why Choose Recruit Plus?</h6>
                <ul className="navigation-menu-footer">
                  <li><i className="icon-check"></i> Trusted Global Placements</li>
                  <li><i className="icon-check"></i> Expert Career Guidance</li>
                  <li><i className="icon-check"></i> Hands-on Training & Certification</li>
                  <li><i className="icon-check"></i> Transparent & Legal Process</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bottom">
        <div className="tf-container" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
          <div className="row" style={{ marginLeft: '-10px', marginRight: '-10px' }}>
            <div className="col-lg-6 col-md-6" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
              <div className="bt-left">
                <div className="copyright">©2023 Recruit Plus. All Rights Reserved.</div>
                <div className="select-language">
                  <div className="dropdown" id="language">
                    <a className="btn-selector nolink input-form">
                      <span><img src={require('../../assets/images/review/flag.png')} alt="" /></span>
                      English
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
              <ul className="menu-bottom d-flex aln-center">
                <li><Link to="term-of-use.html">Terms Of Services</Link></li>
                <li><Link to="pricing.html">Privacy Policy</Link></li>
                <li><Link to="contact-us.html">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
