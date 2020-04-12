import React, { useState, useRef, useCallback } from 'react'
import { Plugin } from 'prosemirror-state'
import { useEventListener } from '../../utils/hooks'

import styles from './RichTextEditor.module.css'

interface Props {
  items: []
  editorView: any
  schema: any
}

const MenuView: React.FC<Props> = ({ items, editorView, schema }) => {
  return (
    <div className={styles.menubar}>
      {items.map((menu) => {
        return <div onClick={() => console.log(menu)}>Menu</div>
      })}
    </div>
  )
}

export default MenuView
