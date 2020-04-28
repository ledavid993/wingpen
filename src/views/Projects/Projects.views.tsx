import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useTransition, animated } from 'react-spring'
import { ProjectGrid, MenuBar } from '@components/index'

import styles from './Projects.module.css'

import { mainActions } from '@redux/actions'

const { changeMainView, setProject } = mainActions

interface Props {
  projects: any
}

const Project: React.FC<Props> = ({ projects }) => {
  const [show, set] = useState(false)
  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
  })

  const dispatch = useDispatch()

  const handleBookClick = (project: any) => {
    console.log(project)
    dispatch(setProject(project))
    dispatch(changeMainView('tasks'))
  }

  return (
    <div className={styles.container}>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <ProjectGrid handleBookClick={handleBookClick} projects={projects} />
        </animated.div>
      ))}
    </div>
  )
}

export default Project
