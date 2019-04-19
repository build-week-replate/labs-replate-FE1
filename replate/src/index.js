import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Provider from './components/context'

import './index.css';

import App from './App';

ReactDOM.render(
    <Provider>
        <Router>
            <App />
        </Router>
    </Provider>, 
document.getElementById('root'))