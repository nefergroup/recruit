import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

BoxIcon.propTypes = {};

function BoxIcon(props) {
    const [dataBlock] = useState({
        title: 'What can you do with Recruit Plus?',
        text: `Start your international career

Recruit Plus, powered by Vision 360, connects skilled professionals from India with top employers across Europe and the Middle East. In partnership with SkillGrow Academy, we provide globally aligned training, certifications, and trusted overseas placements. With full legal licensing and complete support — from skill tests to visa guidance — we ensure a smooth, safe, and rewarding career abroad. With Recruit Plus, your skills don’t just get you a job — they build your future`
    });

    return (
        <section className="wd-iconbox flat-row background1">
            <div className="tf-container">
                <div className="title-iconbox">
                    <h1>{dataBlock.title}</h1>
                    {dataBlock.text.split('\n\n').map((paragraph, index) => (
                        <p key={index} style={{ textAlign: 'justify', lineHeight: '1.7', marginBottom: '1rem' }}>
                            {paragraph}
                        </p>
                    ))}
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 wow fadeInUp">
                        <div className="tf-iconbox">
                            <div className="box-header">
                                <div className="icon">{/* SVG ICON HERE */}</div>
                            </div>
                            <div className="box-content">
                                <h1 className="box-title">
                                    <Link to="about-us.html">Start your international career</Link>
                                </h1>
                                <p style={{ textAlign: 'justify' }}>
                                    Recruit Plus connects skilled and semi-skilled professionals from India with top companies across Europe and the Middle East, opening doors to global career opportunities.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="tf-iconbox">
                            <div className="box-header">
                                <div className="icon">{/* SVG ICON HERE */}</div>
                            </div>
                            <div className="box-content">
                                <h1 className="box-title">
                                    <Link to="about-us.html">Get certified and job-ready</Link>
                                </h1>
                                <p style={{ textAlign: 'justify' }}>
                                    Through SkillGrow Academy, receive practical training aligned with international standards, gain certifications, and be fully prepared for global job sites.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="tf-iconbox">
                            <div className="box-header">
                                <div className="icon">{/* SVG ICON HERE */}</div>
                            </div>
                            <div className="box-content">
                                <h1 className="box-title">
                                    <Link to="about-us.html"> trusted overseas placements</Link>
                                </h1>
                                <p style={{ textAlign: 'justify' }}>
                                    With full legal licensing and global approvals, every placement is genuine and transparent, ensuring a safe and successful start abroad.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="tf-iconbox">
                            <div className="box-header">
                                <div className="icon">{/* SVG ICON HERE */}</div>
                            </div>
                            <div className="box-content">
                                <h1 className="box-title">
                                    <Link to="about-us.html">Grow with expert guidance</Link>
                                </h1>
                                <p style={{ textAlign: 'justify' }}>
                                    From assessments to visa support, our team guides you at every step. Your talent doesn’t just find a job — it finds a meaningful future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BoxIcon;
