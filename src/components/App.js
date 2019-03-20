import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Meet from './Meet'
import Services from './Services'

class App extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <Hero />
                <Meet />
                <Services />
            </div>
        )
    }
}

export default App