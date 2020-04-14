import React from 'react'
import { Box, ThemeProvider, CSSReset } from '@chakra-ui/core'

import { RichTextEditor } from '../../components'
import theme from '../../theme'

const Document = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box height="3em">Wingpen</Box>
      <Box display="grid" gridTemplateColumns="25% 75%">
        <Box bg="#40E0D010">Hello</Box>
        <RichTextEditor />
      </Box>
    </ThemeProvider>
  )
}

export default Document
