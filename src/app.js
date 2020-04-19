/* eslint-disable */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Main } from './views'
import store from './store'

import './app.css'

ReactDOM.render(
  <Provider store={store}>
    <div className="app-wrapper">
      <Main />
    </div>
  </Provider>,
  document.getElementById('app'),
)
