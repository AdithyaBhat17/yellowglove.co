import React from 'react'

import discount from '../assets/discount.png'

const Discount = () => (
    <div className="services" style={{backgroundColor: '#323593', color: '#fff'}}>
        <div className="container">
            <img src={discount} alt="Get 15% Off" title="Get 15% Off" className="discount-img"/>
            <h1 className="meet-h1">Get upto 15% Off!</h1>
            <p className="hero-text" style={{textAlign: 'center'}}>
                When you schedule recurring cleanings from your account.
            </p><br/>
            <p className="hero-text" style={{textAlign: 'center'}}>
                <a
                    href="javascript:void(0)"
                    className="discount-link"
                    onClick={() => {Zenbooker.showPopupWidget('https://zenbooker.net/yellowglove');return false;}}>
                    Reserve Now!
                </a>
            </p>
        </div>
    </div>
)

export default Discount