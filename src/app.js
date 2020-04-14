/* eslint-disable */

import React from 'react'
import ReactDOM from 'react-dom'
import { AppLib } from './app-core/lib'
import { Main } from './views'

const appLib = new AppLib()

const navigationPage = {
  main: <Main />,
}['main']

let myapp = {
  myfunction: function () {
    ReactDOM.render(navigationPage, document.getElementById('app'))
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
