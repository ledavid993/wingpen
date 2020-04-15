import React from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { contains } from 'ramda'
import clsx from 'clsx'
import { useSpring, animated } from 'react-spring'

import styles from './Task.module.css'

import SubTask from '../SubTask'
import { FaTasks } from 'react-icons/fa'

interface Props {
  task: any
  onTaskClick: (type: string, category: string) => any
}

const Task: React.FC<Props> = ({ task, onTaskClick, openTask }) => {
  const isSubTaskOpen = contains(task.category, openTask)

  const handleOnClick = () => {
    onTaskClick('task', task.category)
  }

  const subTaskStyle = useSpring({
    opacity: isSubTaskOpen ? 1 : 0,
    transform: isSubTaskOpen ? `translateX(0)` : `translateX(10%)`,
  })

  return (
    <div className={clsx(styles.container)}>
      <div className={styles.category} onClick={() => handleOnClick()}>
        <div>
          {task.category}
          <span>
            <IoMdArrowDropdown />
          </span>
        </div>
      </div>
      {isSubTaskOpen
        ? task.items.map((item) => (
            <animated.div className={styles.subTask} style={subTaskStyle}>
              <SubTask onTaskClick={onTaskClick} item={item} />
            </animated.div>
          ))
        : null}
    </div>
  )
}

export default Task
