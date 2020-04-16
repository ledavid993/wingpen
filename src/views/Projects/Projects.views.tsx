import React from 'react'

import { ProjectGrid, MenuBar } from '@components/'

import styles from './Projects.module.css'

const Project = () => {
  return (
    <div className={styles.container}>
      <h1>Project</h1>
      <MenuBar />
      <ProjectGrid />
    </div>
  )
}

export default Project
