import React from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import clsx from 'clsx'

import styles from './SubTask.module.css'

interface Props {
  onTaskClick: (type: string, category: string) => any
  items?: any
}

const SubTask: React.FC<Props> = ({ onTaskClick, item }) => {
  const handleOnClick = () => {}

  return (
    <div className={styles.container} onClick={() => handleOnClick()}>
      {item.name}
    </div>
  )
}

export default SubTask
