import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import "../components/about/about_sections.scss";

OurLocations.propTypes = {};

function OurLocations(props) {
  const [isShowMobile, setShowMobile] = useState(false);

  const handleMobile = () => {
    const getMobile = document.querySelector(".menu-mobile-popup");
    setShowMobile(!isShowMobile);
    !isShowMobile
      ? getMobile.classList.add("modal-menu--open")
      : getMobile.classList.remove("modal-menu--open");
  };

  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);

  const locations = [
    {
      id: 1,
      country: "Croatia",
      title: "Headquarters",
      description: "Our main operations centre managing strategic partnerships across the Balkans region and coordinating international recruitment initiatives.",
      icon: "icon-building",
      flag: "🇭🇷"
    },
    {
      id: 2,
      country: "Germany",
      title: "European Operations",
      description: "Serving one of Europe's largest economies where 82% of employers report difficulty finding qualified candidates, particularly in manufacturing and construction sectors.",
      icon: "icon-industry",
      flag: "🇩🇪"
    },
    {
      id: 3,
      country: "Latvia",
      title: "Baltic Region Hub",
      description: "Supporting Baltic region expansion with focus on transportation, logistics, and emerging technology sectors.",
      icon: "icon-truck",
      flag: "🇱🇻"
    },
    {
      id: 4,
      country: "Serbia",
      title: "Southeastern Europe",
      description: "Regional hub for Southeastern European operations, capitalizing on growing infrastructure development and manufacturing investments.",
      icon: "icon-map-pin",
      flag: "🇷🇸"
    },
    {
      id: 5,
      country: "Qatar",
      title: "International Expansion",
      description: "International expansion supporting Middle Eastern projects requiring skilled European-standard professionals, particularly in construction and hospitality.",
      icon: "icon-globe",
      flag: "🇶🇦"
    }
  ];

  return (
    <>
      <Header clname="act1" handleMobile={handleMobile} />
      
      {/* Page Banner */}
      <section className="page-banner-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-banner-content text-center">
                <h1>Our Locations</h1>
                <p className="lead">European Operations Network</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="locations-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-title text-center">
                <div className="group-title">
                  <h1>Our Global Presence</h1>
                  <p className="lead">Strategic operations across Europe and the Middle East</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            {locations.map((location) => (
              <div key={location.id} className="col-lg-6 col-md-12 mb-4">
                <div className="location-card">
                  <div className="location-image">
                    <img 
                      src={`/images/recruit/IMG-20251011-WA00${25 + location.id}.jpg`}
                      alt={location.country}
                      className="img-fluid"
                      style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px 20px 0 0' }}
                    />
                  </div>
                  <div className="location-header">
                    <div className="location-flag">{location.flag}</div>
                    <div className="location-info">
                      <h3>{location.country}</h3>
                      <div className="location-title">{location.title}</div>
                    </div>
                    <div className="location-icon">
                      <span className={location.icon}></span>
                    </div>
                  </div>
                  <div className="location-content">
                    <p>{location.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Gotop />
    </>
  );
}

export default OurLocations;
