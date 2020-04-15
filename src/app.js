/* eslint-disable */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppLib } from './app-core/lib'
import { Main } from './views'
import store from './store'

import './app.css'

const appLib = new AppLib()

const navigationPage = {
  main: <Main />,
}['main']

let myapp = {
  myfunction: function () {
    ReactDOM.render(
      <Provider store={store}>
        <div className="app-wrapper">{navigationPage}</div>
      </Provider>,
      document.getElementById('app'),
    )
  },
}

Neutralino.init({
  load: function () {
    myapp.myfunction()
    appLib.showSettings()
  },
  pingSuccessCallback: function () {},
  pingFailCallback: function () {},
})
