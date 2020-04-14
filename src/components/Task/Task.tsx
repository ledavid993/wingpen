import React from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

import styles from './Task.module.css'

interface Props {
  category: string
}

const Task: React.FC<Props> = ({ category }) => {
  return (
    <div className={styles.container}>
      <div>
        {category}
        <span>
          <IoMdArrowDropdown />
        </span>
      </div>
    </div>
  )
}

export default Task
