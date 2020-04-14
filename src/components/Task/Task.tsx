import React from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import clsx from 'clsx'

import styles from './Task.module.css'

interface Props {
  category?: string | undefined
  subTask?: boolean
  onTaskClick?: any
}

const Task: React.FC<Props> = ({ category, subTask, onTaskClick }) => {
  const handleOnClick = () => {
    if (!subTask) {
      onTaskClick(category)
      return
    }
  }

  return (
    <div
      className={clsx(styles.container, subTask && styles.subTask)}
      onClick={() => handleOnClick()}
    >
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
