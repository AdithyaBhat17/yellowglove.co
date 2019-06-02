import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { HashRouter as Router, Route } from 'react-router-dom'

import './styles/index.css'
import { FulfillingSquareSpinner } from 'react-epic-spinners'

const Terms = lazy(() => import('./components/Terms'))
const Privacy = lazy(() => import('./components/Privacy'))

const loading = (
    <div style={{background: 'white', height: '100vh', paddingTop: '45vh'}}>
        <FulfillingSquareSpinner color="#323593" className="loading" />
    </div>
)

ReactDOM.render(
    <Suspense fallback={loading}>
        <Router>
            <Route exact path="/" component={App} />
            <Route exact path="/terms" component={() => <Terms />} />
            <Route exact path="/privacy" component={() => <Privacy />} />
        </Router>
    </Suspense>,
    document.getElementById('root')
)