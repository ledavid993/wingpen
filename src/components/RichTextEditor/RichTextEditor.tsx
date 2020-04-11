import React, { useState } from 'react'
import { Box } from '@chakra-ui/core'
import Container from './Container'
import Prosemirror from './Prosemirror'

import styles from './RichTextEditor.module.css'

const initialValue = {
  type: 'doc',
  content: [{ type: 'paragraph', content: '' }],
}

const RichTextEditor = () => {
  const [value, setValue] = useState(initialValue)

  console.log(value)

  return (
    <div className={styles.wrapper}>
      <Container bg="gray.100">
        <Box>
          <Prosemirror defaultValue={initialValue} onChange={setValue} />
        </Box>
      </Container>
    </div>
  )
}

export default RichTextEditor
