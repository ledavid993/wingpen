/*eslint-disable*/
import { Box } from '@chakra-ui/core'
import { baseKeymap } from 'prosemirror-commands'
import { history, redo, undo } from 'prosemirror-history'
import { keymap } from 'prosemirror-keymap'
import { schema } from 'prosemirror-schema-basic'
import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import ReactDOM from 'react-dom'
import prosemirrorDevTools from 'prosemirror-dev-tools'
import React, { useCallback, useEffect, useMemo, useRef } from 'react'
const { toggleMark, setBlockType, wrapIn } = require('prosemirror-commands')
const { Plugin } = require('prosemirror-state')
import { useEventListener } from '../../utils/hooks'

import MenuBar from './MenuBar'

class MenuView {
  constructor(items, editorView) {
    this.items = items
    this.editorView = editorView

    this.dom = document.createElement('div')
    this.dom.className = 'menubar'
    items.forEach(({ dom }) => this.dom.appendChild(dom))

    this.dom.addEventListener('mousedown', (e) => {
      e.preventDefault()
      editorView.focus()
      items.forEach(({ command, dom }) => {
        if (dom.contains(e.target))
          command(editorView.state, editorView.dispatch, editorView)
      })
    })
  }

  console.log(this.dom)

  update() {
    this.items.forEach(({ command, dom }) => {
      console.log(dom)
      let active = command(this.editorView.state, null, this.editorView)
      dom.style.display = active ? '' : 'none'
    })
  }

  destroy() {
    this.dom.remove()
  }
}

const MenuView2 = (items, editorView) => {
  return(
    <div>
      {items.map({command, dom} => {
        let active = command(editorView.state, null, editorView)
        return(
          <div>
            {dom}
          </div>
        )
      } )}
    </div>
  )
}

function menuPlugin2(items) {
  console.log('mp2')

  return new Plugin({
    view(editorView) {
      let menuView = new MenuView(items, editorView)
      console.log(
        'insert',
        editorView.dom.parentNode.insertBefore(menuView.dom, editorView.dom),
      )
      // console.log(ReactDOM.createPortal(<div>Hello</div>, editorView.dom))
      return menuView
    },
  })
}

function menuPlugin(items) {
  return new Plugin({
    view(editorView) {
      let menuView = new MenuView(items, editorView)
      console.log(menuView)
      editorView.dom.parentNode.insertBefore(menuView.dom, editorView.dom)
      return menuView
    },
  })
}

// Helper function to create menu icons
function icon(text, name) {
  let span = document.createElement('span')
  span.className = 'menuicon ' + name
  span.title = name
  span.textContent = text
  return span
}

// Create an icon for a heading at the given level
function heading(level) {
  return {
    command: setBlockType(schema.nodes.heading, { level }),
    dom: icon('H' + level + ' ', 'heading'),
  }
}

let menu = menuPlugin2([
  { command: toggleMark(schema.marks.strong), dom: icon('B ', 'strong') },
  { command: toggleMark(schema.marks.em), dom: icon('i ', 'em') },
  {
    command: setBlockType(schema.nodes.paragraph),
    dom: icon('p ', 'paragraph'),
  },
  heading(1),
  heading(2),
  heading(3),
  { command: wrapIn(schema.nodes.blockquote), dom: icon('> ', 'blockquote') },
])

const Prosemirror = ({ defaultValue, onChange }) => {
  const editorViewRef = useRef(null)
  const handleChange = useCallback(onChange, [])
  const state = useMemo(() => {
    const doc = schema.nodeFromJSON(defaultValue)
    return EditorState.create({
      doc,
      plugins: [
        history(),
        keymap({
          'Mod-z': undo,
          'Mod-y': redo,
        }),
        keymap(baseKeymap),
        menu,
      ],
    })
  }, [defaultValue, menu])

  useEffect(() => {
    let editorView = editorViewRef.current
    if (editorView) {
      const view = new EditorView(editorView, {
        state,
        dispatchTransaction(tx) {
          const newState = view.state.apply(tx)
          handleChange(newState.doc.toJSON())
          view.updateState(newState)
        },
      })
      prosemirrorDevTools(view)
    }

    return () => {
      console.log('destroyed')
      editorViewRef.current = null
    }
  }, [state, handleChange])

  return (
    <Box rounded="md" borderWidth="1px" p={4}>
      <div ref={editorViewRef} />
    </Box>
  )
}

export default Prosemirror
