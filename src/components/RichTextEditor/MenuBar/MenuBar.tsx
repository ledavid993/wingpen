import React, { useEffect, useState } from 'react'
import { Plugin } from 'prosemirror-state'
import clsx from 'clsx'
import { toggleMark, setBlockType, wrapIn } from 'prosemirror-commands'
import { schema, nodes } from 'prosemirror-schema-basic'
import { jsxToNode } from '../../../utils'

interface Props {
  items: Array<Item>
  editorView: any
  dom: any
}

type Item = {
  command: any
  dom: HTMLSpanElement
}

// const MenuBarNode: React = ({ items, editorView }) => {
//   useEffect(() => {
//     console.log('check')
//   }, [editorView])

//   return (
//     <div className="menubar">
//       {items.map(({ dom, command }) => {
//         return (
//           <span
//             key={dom.title}
//             className={clsx(
//               'menuicon',
//               dom.title,
//               styles.hidden && command(editorView.state, null, editorView),
//             )}
//             id={dom.title}
//           >
//             {dom.innerText}
//           </span>
//         )
//       })}
//     </div>
//   )
// }

const menuPlugin = (items: Array<Item>) => {
  const getNodeFromComponent = (editorView: any) => {
    // let dom = jsxToNode(<MenuBarNode items={items} editorView={editorView} />)

    items = items
    editorView = editorView

    let dom = document.createElement('div')
    dom.className = 'menubar'
    items.forEach(({ dom: childDOM }) => dom.appendChild(childDOM))

    dom.addEventListener('mousedown', (e: any) => {
      e.preventDefault()
      editorView.focus()
      items.forEach(({ command, dom }) => {
        if (dom.contains(e.target))
          command(editorView.state, editorView.dispatch, editorView)
      })
    })

    return {
      dom,
      editorView,
    }
  }

  return new Plugin({
    view(editorView): any {
      console.log(editorView.state)
      let menuView = getNodeFromComponent(editorView)
      console.log(editorView.state)
      editorView?.dom?.parentNode?.insertBefore(menuView.dom, editorView.dom)
      return menuView
    },
  })
}

// Helper function to create menu icons
function icon(text: string | null, name: string) {
  let span = document.createElement('span')
  span.className = 'menuicon ' + name
  span.title = name
  span.textContent = text
  return span
}

// Create an icon for a heading at the given level
function heading(level: string | number) {
  return {
    command: setBlockType(schema.nodes.heading, { level }),
    dom: icon('H' + level, 'heading'),
  }
}

const menu = menuPlugin([
  { command: toggleMark(schema.marks.strong), dom: icon('B', 'strong') },
  { command: toggleMark(schema.marks.em), dom: icon('i', 'em') },
  {
    command: setBlockType(schema.nodes.paragraph),
    dom: icon('p', 'paragraph'),
  },
  heading(1),
  heading(2),
  heading(3),
  {
    command: wrapIn(schema.nodes.blockquote),
    dom: icon('>', 'blockquote'),
  },
])

export default menu
