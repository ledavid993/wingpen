import React from 'react'
import { ThemeProvider } from '@chakra-ui/core'
import { RichTextEditor } from '../../components'
import theme from '../../theme'

const Document = () => {
  return (
    <ThemeProvider theme={theme}>
      <RichTextEditor />
    </ThemeProvider>
  )
}

export default Document
