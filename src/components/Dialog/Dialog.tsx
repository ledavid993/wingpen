import React from 'react'
import { ModalOverlay } from '@chakra-ui/core'
import { useSpring, animated, useTransition } from 'react-spring'

import styles from './Dialog.module.css'
import clsx from 'clsx'

const Dialog = ({ isOpen, onClose, children }: any) => {
  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0, transform: 'translate(-50%, -60%)' },
    enter: { opacity: 1, transform: 'translate(-50%, -50%)' },
    leave: { opacity: 0, transform: 'translate(-50%, -60%)' },
  })

  return (
    <>
      <div
        className={clsx(styles.container, !isOpen && styles.closed)}
        onClick={() => onClose()}
      ></div>
      <div>
        {transitions.map(
          ({ item, key, props: style }) =>
            item && (
              <animated.div
                className={clsx(styles.innerDialog)}
                style={style}
                key={key}
              >
                {children}
              </animated.div>
            ),
        )}
      </div>
    </>
  )
}

export default Dialog
