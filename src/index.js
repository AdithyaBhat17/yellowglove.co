import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Terms from './components/Terms'
import Privacy from './components/Privacy'

import { HashRouter as Router, Route } from 'react-router-dom'

import './styles/index.css'

ReactDOM.render(
    <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/privacy" component={Privacy} />
    </Router>,
    document.getElementById('root')
)