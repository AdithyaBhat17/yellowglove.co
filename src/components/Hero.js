import React from 'react'
import relax from '../assets/relax.png'

const Hero = () => (
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-sm-12">
                <img src={relax} className="hero-img" alt="Get your life back" title="Get your life back"/>
            </div>
            <div className="col-lg-6 col-sm-12">
                <h1 className="hero-tagline">Get your life back!</h1>
                <p className="hero-text">
                You’re busy. We Understand. <br className="mob-hide"/>
                Yellow Glove is here to help you get the most out of life. <br className="mob-hide"/>
                We’ll handle the clean up.
                </p>
                <p className="hero-text">
                    <a href="javascript:void(0)" onClick={() => ml_account('webforms', '1308350', 'h7y6k4', 'show')}>
                        Get A Quote
                    </a>
                </p>
            </div>
        </div>
    </div>
)

export default Hero
