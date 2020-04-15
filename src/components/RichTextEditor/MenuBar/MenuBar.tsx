import React, { useEffect, useState, EventHandler } from 'react'
import { Plugin } from 'prosemirror-state'
import clsx from 'clsx'
import { toggleMark, setBlockType, wrapIn } from 'prosemirror-commands'
import { schema, nodes } from 'prosemirror-schema-basic'
import { jsxToNode } from '../../../utils'
import Icon from './Icon'

interface Props {
  items: Array<Item>
  editorView: any
  dom: any
}

type Item = {
  command: any
  dom: HTMLSpanElement
}

class MenuView {
  items: Array<Item>
  editorView: any
  dom: HTMLElement
  e: any
  constructor(items: Array<Item>, editorView: any) {
    this.items = items
    this.editorView = editorView

    this.dom = document.createElement('div')
    this.dom.className = 'menubar'
    items.forEach(({ dom }) => this.dom.appendChild(dom))
    this.update()

    this.dom.addEventListener('mousedown', (e: any) => {
      e.preventDefault()
      editorView.focus()
      items.forEach(({ command, dom }) => {
        if (dom.contains(e.target))
          command(editorView.state, editorView.dispatch, editorView)
      })
    })
  }

  update() {
    this.items.forEach(({ command, dom }) => {
      let active = command(this.editorView.state, null, this.editorView)
      dom.style.display = active ? '' : 'none'
    })
  }

  destroy() {
    this.dom.remove()
  }
}

const menuPlugin = (items: Array<Item>) => {
  return new Plugin({
    view(editorView): any {
      let menuView = new MenuView(items, editorView)
      editorView?.dom?.parentNode?.insertBefore(menuView?.dom, editorView.dom)
      return menuView
    },
  })
}

// Helper function to create menu icons
function icon(text: string | null, name: string) {
  let span = document.createElement('span')
  span.className = 'menuicon ' + name
  span.title = name
  span.appendChild(jsxToNode(<Icon name={name} text={text} />))
  return span
}

// Create an icon for a heading at the given level
function heading(level: string | number) {
  return {
    command: setBlockType(schema.nodes.heading, { level }),
    dom: icon(level.toString(), 'heading'),
  }
}

const menu = menuPlugin([
  { command: toggleMark(schema.marks.strong), dom: icon('', 'strong') },
  { command: toggleMark(schema.marks.em), dom: icon('', 'em') },
  {
    command: setBlockType(schema.nodes.paragraph),
    dom: icon('', 'paragraph'),
  },
])

export default menu
