/* eslint-disable */
/* prettier-disable */

export const showSettings = () => {
  Neutralino.settings.getSettings(
    (d) => {
      alert(JSON.stringify(d))
    },
    () => {},
  )
}

export const getSettings = () => {
  Neutralino.settings.getSettings(
    // executes on successfull retrieval of settings
    function (settingsData) {
      console.log(settingsData)
    },
    // executes when a error occurs
    function () {
      console.log('An error occured while trying to retrieve the settings.')
    },
  )
}

export const writeFile = () => {
  Neutralino.filesystem.writeFile(
    'file1.txt',
    'hello world',
    function (data) {
      console.log(data)
    },
    function () {
      console.error('error')
    },
  )
}

export const createDictory = () => {
  Neutralino.filesystem.createDirectory(
    'abcd',
    function (data) {
      console.log(data)
    },
    function () {
      console.error('error')
    },
  )
}

export const removeDirectory = () => {
  Neutralino.filesystem.removeDirectory(
    'abcd',
    function (data) {
      console.log(data)
    },
    function () {
      console.error('error')
    },
  )
}
