import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Meet from './Meet'
import Services from './Services'
import Cleaners from './Cleaners'
import Ease from './Ease'

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
            </div>
        )
    }
}

export default App