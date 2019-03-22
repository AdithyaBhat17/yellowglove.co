import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Meet from './Meet'
import Services from './Services'
import Cleaners from './Cleaners'
import Ease from './Ease'
import Discount from './Discount'
import Footer from './Footer'

class App extends React.Component{
    render(){
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
}

export default App