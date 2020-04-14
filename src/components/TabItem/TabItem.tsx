import React, { useState } from 'react'
import { isEmpty } from 'ramda'
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
  const isOpen = whichProjectView === name
  const contentProps = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateX(0)` : `translateX(10%)`,
    display: 'flex',
    justifyContent: 'flex-end',
  })
  const { tasks } = project

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
              <animated.div style={contentProps}>
                <Task category={task.category} />
              </animated.div>
            )
          })
        : null}
    </>
  )
}

export default TabItem
