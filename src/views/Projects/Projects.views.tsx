import React from 'react'

import { ProjectGrid, MenuBar } from '@components/index'

import Banner from '@assets/banner.svg'

import styles from './Projects.module.css'
import SVG from 'react-inlinesvg'

const Project = () => {
  const handleAddProject = () => {
    console.log('click')
  }

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <SVG src={Banner} />
      </div>
      <h1>Project</h1>
      <MenuBar />
      <ProjectGrid onAddProject={handleAddProject} />
    </div>
  )
}

export default Project
