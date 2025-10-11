import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import FormContent from './FormContent';

Banner01.propTypes = {
    
};

function Banner01(props) {
    return (
        <section className="tf-slider sl1 parallax">
                <div className="tf-container">
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <FormContent />
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="banner-image">
                            <img 
                                src="/images/recruit/IMG-20251011-WA0012.jpg" 
                                alt="Recruit Plus Training" 
                                className="img-fluid rounded"
                                style={{ maxHeight: '400px', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
                </div>
                <div className="overlay"></div>
            </section>
    );
}

export default Banner01;