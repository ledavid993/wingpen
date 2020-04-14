import React from 'react'
import { Box, ThemeProvider, CSSReset } from '@chakra-ui/core'

import { RichTextEditor, TabItem } from '../../components'
import theme from '../../theme'

const Document = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box height="3em">Wingpen</Box>
      <Box display="grid" gridTemplateColumns="25% 75%">
        <Box bg="#40E0D010">
          <TabItem name="manuscript" items={['item']} />
        </Box>
        <RichTextEditor />
      </Box>
    </ThemeProvider>
  )
}

export default Document
