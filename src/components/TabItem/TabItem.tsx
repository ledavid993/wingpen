import React, { useState } from 'react'
import { contains, without, isEmpty } from 'ramda'
import { useDispatch } from 'react-redux'
import { useSpring, animated } from 'react-spring'
import { FaBook } from 'react-icons/fa'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

import TaskTab from '../TaskTab'

import styles from './TabItem.module.css'

import { mainActions } from '@redux/actions'

const { changeMainView, setProject } = mainActions

interface Props {
  name: string
  whichProjectView: string
  onProjectClick: (project: string) => void
  project: any
}

const TabItem: React.FC<Props> = ({
  name,
  whichProjectView,
  onProjectClick,
  project,
}) => {
  const { tasks } = project
  const [openTask, setOpenTask] = useState<any>([])
  const isOpen = whichProjectView === name

  const dispatch = useDispatch()

  const onTaskClick = (type: string, category: string) => {
    if (!isEmpty(openTask) && isOpen) {
      setOpenTask([])
    }

    if (type === 'task') {
      if (!contains(category, openTask)) {
        dispatch(setProject(project))
        dispatch(changeMainView('tasks'))
        setOpenTask((oldOpenTask: any) => [...oldOpenTask, category])
      } else {
        dispatch(changeMainView('tasks'))
        setOpenTask((oldOpenTask: any) => without(category, oldOpenTask))
      }
    } else if (type === 'subtask') {
    }
  }

  const contentProps = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateX(0)` : `translateX(70%)`,
    display: 'flex',
    justifyContent: 'flex-end',
  })

  return (
    <>
      <div className={styles.container} onClick={() => onProjectClick(project)}>
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
                  <TaskTab
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
