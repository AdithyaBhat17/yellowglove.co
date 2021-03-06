import React from 'react'
import logo from '../assets/yellowglovelogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const scrollPosition = window.pageYOffset
    console.log(scrollPosition)
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{}}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <Link to="/"><img src={logo} alt="Yellow Glove"/></Link>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    Call Us
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="javascript:void(0)" className="nav-link">
                                Home Cleaning Services.
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fas fa-map-marker-alt"></i>&nbsp;
                            Manhattan, NYC
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link pulse" href="tel:9294974111">
                            <i className="fas fa-headset"></i>&nbsp;
                            929 497 4111
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
