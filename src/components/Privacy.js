import React, { useEffect } from 'react'
import Navbar from './Navbar'
import ReactMarkdown from 'react-markdown'
import privacy from '../privacy.md'
import Footer from './Footer'

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Terms of Service - Yellow Glove"
    })

    return (
        <div style= {{backgroundColor: '#fff'}}>
            <Navbar /> <br/>
            <div className="container">
                <ReactMarkdown
                source={privacy}
                escapeHtml={false}
                />
            </div> <br/>
            <Footer />
        </div>
    )
}

export default Terms