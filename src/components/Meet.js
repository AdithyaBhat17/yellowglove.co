import React from 'react'
import lifestyle from '../assets/lifestyle.png'

const Meet = () => (
    <div className="meet-yellow-glove">
        <div className="container">
            <h1 className="meet-h1">Meet Yellow Glove</h1>
            <div className="row">
                <div className="col-lg-6 order-sm-1 order-lg-2">
                    <img src={lifestyle} alt="Busy Lifestyle" title="Busy Lifestyle" className="meet-img"/>
                </div>
                <div className="col-lg-6 order-sm-2 order-lg-1">
                    <h3 className="meet-tagline">
                        Cleaning Services for a Busy Lifestyle
                    </h3>
                    <p className="hero-text">
                        You’ve got places to go and people to see. How can you be chasing your dreams if you’re mopping the floor? 
                        That’s where we come in. <br/> <br className="mob-hide"/>
                        At <strong>Yellow Glove</strong>, we dream about making homes clean. The kind of clean that makes you feel good after a hard day at 
                        work. The kind of clean your parents would be proud of.
                    </p>
                    <p className="hero-text">
                        <a
                         href="javascript:void(0)"
                          style={{color: '#323593',backgroundColor: '#fff'}}
                          onClick={() => {Zenbooker.showPopupWidget('https://zenbooker.net/yellowglove');return false;}}>
                            Book A Cleaning
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default Meet