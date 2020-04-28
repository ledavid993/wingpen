/* eslint-disable */

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Main } from './views'
import store from './store'

import './app.css'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="app-wrapper">
        <Main />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app'),
)
