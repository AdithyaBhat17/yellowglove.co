import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Meet from './Meet'
import Services from './Services'
import Cleaners from './Cleaners'
import Ease from './Ease'
import Discount from './Discount'
import Footer from './Footer'

const App = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return(
        <div>
            <Navbar />
            <Hero />
            <Meet />
            <Services />
            <Cleaners />
            <Ease />
            <Discount />
            <Footer />
        </div>
    )
}

export default App