import React from 'react'
import { Box } from '@chakra-ui/core'
import { FaBook } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import styles from './TabItem.module.css'

interface Props {
  name: string
  items?: [string]
}

type TabIcon = {
  [name: string]: JSX.Element
}

const TAB_ICON: TabIcon = {
  manuscript: <FaBook />,
}

const TabItem: React.FC<Props> = ({ name, items }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <span>{TAB_ICON[name]}</span>
          <span>
            <strong>{name}</strong>
          </span>
        </div>
        <div className={styles.slider}>
          <IoMdArrowDropdown />
        </div>
      </div>
      <div className={styles.itemsContainer}>
        {items?.map((item) => {
          return (
            <div className={styles.innerContainer}>
              <div className={styles.indent} />
              <div className={styles.items}>{item}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TabItem
