import { renderToString, renderToStaticMarkup } from 'react-dom/server'

const jsxToNode = (jsx: JSX.Element) => {
  const htmlString = renderToStaticMarkup(jsx)

  return new DOMParser().parseFromString(htmlString, 'text/html')
    .documentElement.childNodes[1].childNodes[0]
}

export default jsxToNode
