import React from 'react'
import { Box, ThemeProvider, CSSReset } from '@chakra-ui/core'

import { RichTextEditor, TabItem } from '../../components'

import styles from './Document.module.css'

const Document = () => {
  return (
    <div className={styles.container}>
      <h3>Shadow Virtualization</h3>
      <RichTextEditor />
    </div>
  )
}

export default Document
