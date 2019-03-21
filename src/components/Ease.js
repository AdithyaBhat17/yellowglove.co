import React from 'react'

import calendar from '../assets/calendar.png'
import paint from '../assets/paint.png'
import read from '../assets/read.png'

const Ease = () => (
    <div className="services" style={{backgroundColor: '#E2E2F3'}}>
        <h1 className="meet-h1">Easy as 1, 2, 3...</h1> <br/>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <img src={calendar} className="ease-img" alt="Step 1" title="Step 1"/>
                    <h4>Step 1</h4>
                    <p className="ease-text">Schedule reserve now, later. We're easy, so do whatever works for you.</p>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <img src={paint} className="ease-img" alt="Step 2" title="Step 2"/>
                    <h4>Step 2</h4>
                    <p className="ease-text">We'll have your place clean and looking great when you get back.</p>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <img src={read} className="ease-img" alt="Step 3" title="Step 3"/>
                    <h4>Step 3</h4>
                    <p className="ease-text">Just relax and make getting home amazing.</p>
                </div>
            </div>
        </div>
    </div>
)

export default Ease