import React, { useEffect } from 'react'
import Navbar from './Navbar'
import ReactMarkdown from 'react-markdown'
import terms from '../terms.md'
import Footer from './Footer'

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div style= {{backgroundColor: '#fff'}}>
            <Navbar /> <br/>
            <div className="container">
                <ReactMarkdown
                source={terms}
                escapeHtml={false}
                />
            </div> <br/>
            <Footer />
        </div>
    )
}

export default Terms