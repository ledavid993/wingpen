import React, { useState } from 'react'
import { contains, without } from 'ramda'
import { useSpring, animated } from 'react-spring'
import { FaBook } from 'react-icons/fa'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

import Task from '../Task'

import styles from './TabItem.module.css'

interface Props {
  name: string
  whichProjectView: string
  onTabClick: (project: string) => void
  project: any
}

const TabItem: React.FC<Props> = ({
  name,
  whichProjectView,
  onTabClick,
  project,
}) => {
  const { tasks } = project
  const [isSubTask, setIsSubTask] = useState(false)
  const [openTask, setOpenTask] = useState<any>([])
  const isOpen = whichProjectView === name

  const onTaskClick = (type: string, category: string) => {
    if (type === 'task') {
      if (!contains(category, openTask)) {
        setOpenTask((oldOpenTask: any) => [...oldOpenTask, category])
      } else {
        setOpenTask((oldOpenTask: any) => without(category, oldOpenTask))
      }
    }

    if (type === 'subtask') {
    }
  }

  const contentProps = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateX(0)` : `translateX(10%)`,
    display: 'flex',
    justifyContent: 'flex-end',
  })

  return (
    <>
      <div className={styles.container} onClick={() => onTabClick(name)}>
        <div className={styles.title}>
          <span>
            <FaBook />
          </span>
          {name}
        </div>
        <div className={styles.icon}>
          {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </div>
      </div>
      {isOpen
        ? tasks.map((task: any) => {
            return (
              <div className={styles.taskList}>
                <animated.div style={contentProps}>
                  <Task
                    task={task}
                    onTaskClick={onTaskClick}
                    openTask={openTask}
                  />
                </animated.div>
              </div>
            )
          })
        : null}
    </>
  )
}

export default TabItem
