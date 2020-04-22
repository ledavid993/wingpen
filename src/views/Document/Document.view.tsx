import React, { useState } from 'react'
import { useSpring, animated, useTransition } from 'react-spring'

import { RichTextEditor } from '@components/index'

import styles from './Document.module.css'

const Document = () => {
  const [show, set] = useState(false)
  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
  })

  return (
    <div className={styles.container}>
      <h3>Shadow Virtualization</h3>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <RichTextEditor />
        </animated.div>
      ))}
    </div>
  )
}

export default Document
