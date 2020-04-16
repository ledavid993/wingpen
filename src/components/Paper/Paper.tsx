import React from 'react'
import clsx from 'clsx'
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/core'
import { FaBook } from 'react-icons/fa'

import styles from './Paper.module.css'

type Props = {
  newBook?: boolean
}

const Paper: React.FC<Props> = ({ newBook }) => {
  const renderBookView = () => {
    if (newBook) {
      return (
        <>
          <div className={clsx(styles.book, styles.emptyBook)}>
            <div className={styles.emptyAdd}>
              <h2>+</h2>
              <h3>New Project</h3>
            </div>
          </div>
          <div className={styles.emptyInput}>
            <Input
              style={{ boxSizing: 'border-box' }}
              placeholder="Enter Name"
              border="none"
              borderBottom="1px solid rgba(0, 0, 0, .8)"
            />
          </div>
        </>
      )
    }

    return (
      <>
        <div className={styles.book}>
          <div className={clsx(styles.bookCover, styles.cover1)}>
            <div className={styles.effect}></div>
            <div className={styles.light}></div>
          </div>
          <div className={styles.bookInside}></div>
        </div>
        <div className={styles.bookTitle}>Title</div>
      </>
    )
  }

  return <div className={styles.container}>{renderBookView()}</div>
}

export default Paper
