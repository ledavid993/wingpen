import { renderToString } from 'react-dom/server'

const jsxToNode = (jsx: JSX.Element) => {
  const htmlString = renderToString(jsx)

  return new DOMParser().parseFromString(htmlString, 'text/html')
    .documentElement.childNodes[1].childNodes[0]
}

export default jsxToNode
