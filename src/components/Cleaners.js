import React from 'react'
import cleaners from '../assets/cleaners.png'

const Cleaners = () => (
    <div className="services" style={{backgroundColor: '#F9F3FD'}}>
        <div className="container">
            <h1 className="meet-h1">Meet Our Cleaners</h1>
            <div className="row">
                <div className="col-lg-6 order-sm-1 order-lg-2">
                    <img src={cleaners} className="hero-img clean-img" alt="Meet our cleaners" title="Meet our cleaners"/>
                </div>
                <div className="col-lg-6 order-sm-2 order-lg-1">
                    <h1 className="clean-tagline">Trusted. Thorough. Dependable.</h1>
                    <p className="hero-text">
                    Worried about that pile of dirt you’ve been sweeping under the rug? Don’t be. 
                    Schedule lunch with a friend and we’ll tackle it for you. <br/> <br className="mob-hide"/>
                    Each and every member of our cleaning team is carefully hand-selected, background checked, and trained to 
                    ensure that we deliver only the best for our customers.
                    </p>
                    <p className="hero-text">
                        <a href="javascript:void(0)" onClick={() => {Zenbooker.showPopupWidget('https://zenbooker.net/yellowglove');return false;}}>
                            Book A Cleaning
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default Cleaners
