import React, { useState } from 'react'
import { Box } from '@chakra-ui/core'
import Container from './Container'
import Prosemirror from './Prosemirror'

import styles from './RichTextEditor.module.css'

const initialValue = {
  type: 'doc',
  content: [{ type: 'paragraph', content: '' }],
}

const RichTextEditor: React.FC = () => {
  const [value, setValue] = useState(initialValue)

  return (
    <div className={styles.wrapper}>
      <Prosemirror defaultValue={initialValue} onChange={setValue} />
    </div>
  )
}

export default RichTextEditor
