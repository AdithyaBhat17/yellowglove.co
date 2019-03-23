import React from 'react'
import { Link } from 'react-router-dom'

import footer_logo from '../assets/footer_logo.png'

const Footer = () => (
    <div className="services" style={{backgroundColor: '#0f0f0f', color: '#fff'}}>  
        <div className="container footer">
            <div className="row">
                <div className="col-lg-3 col-sm-12">
                    <Link to="/"><img src={footer_logo} alt="Yellow Glove" title="Yellow glove" className="footer-img"/></Link> <br/> <br/>
                    <p className="hero-text footer-text">
                        Copyright &copy; 2019 Yellow Glove. <br/>
                        All rights reserved.
                    </p>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <p className="hero-text footer-text">
                        <strong>Contact Us</strong>
                    </p>
                    <p className="hero-text">
                        <a className="footer-link" title="contact us" href="mailto:hey@yellowglove.co">hey@yellowglove.co</a>
                    </p>
                    <p className="hero-text">
                        <a className="footer-link" title="contact us" href="tel:9293331818">Phone: 9293331818</a>
                    </p>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <p className="hero-text footer-text">
                        <strong>Connect</strong>
                    </p>
                    <p className="hero-text footer-text">
                        <a
                         className="footer-link socials"
                         href="https://twitter.com/YellowgloveN"
                         target="_blank"
                         title="connect"
                         rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i> 
                        </a>
                        <a
                         className="footer-link socials"
                         href="https://facebook.com/Yellow-Glove-332253457428440/"
                         target="_blank"
                         title="connect"
                         rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i> 
                        </a>
                        <a
                         className="footer-link socials"
                         href="https://instagram.com/yellowgloveny"
                         target="_blank"
                         title="connect"
                         rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i> 
                        </a>
                    </p>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <p className="hero-text footer-text">
                        <strong>
                            <Link to="/terms" title="terms" style={{textDecoration: 'none', color: '#fff'}}>Terms Of Service</Link>
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default Footer