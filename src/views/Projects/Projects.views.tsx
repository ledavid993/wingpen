import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import { ProjectGrid, MenuBar } from '@components/index'

import Banner from '@assets/banner.svg'

import styles from './Projects.module.css'
import SVG from 'react-inlinesvg'

interface Props {
  projects: any
}

const Project: React.FC<Props> = ({ projects }) => {
  const [show, set] = useState(false)
  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
  })
  const handleAddProject = () => {
    console.log('click')
  }

  return (
    <div className={styles.container}>
      <h3>Project</h3>
      <MenuBar />
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <ProjectGrid onAddProject={handleAddProject} projects={projects} />
        </animated.div>
      ))}

      <div className={styles.banner}>
        <SVG src={Banner} />
      </div>
      <div className={styles.banner2}>
        <SVG src={Banner} />
      </div>
    </div>
  )
}

export default Project
