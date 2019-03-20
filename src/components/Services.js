import React from 'react'

import services from '../assets/services.png'

const Services = () => (
    <div className="services" style={{backgroundColor: '#fff', color: '#323593'}}>
        <div className="container">
            <h1 className="meet-h1">Our Services</h1>
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <img src={services} alt="Our Services" title="Our Services" className="meet-img"/>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h3 className="meet-tagline services-tagline">
                        We Don&#39;t Miss A Thing!
                    </h3>
                    <p className="hero-text">
                        Does the thought of scrubbing the bathroom give you the creeps? Not us, it’s just one of the things we do.
                        <br/> <br className="mob-hide"/>
                        Choose from our list of home cleaning services and add-on options. Our cleaners are meticulous in their attention 
                        to detail and will leave your space looking its best from ceiling to floor.
                    </p>
                    <p className="hero-text">
                        <a
                         href="javascript:void(0)"
                          onClick={() => {Zenbooker.showPopupWidget('https://zenbooker.net/yellowglove');return false;}}>
                            Book A Cleaning
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default Services