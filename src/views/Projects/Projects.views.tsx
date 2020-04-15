import React from 'react'

import { ProjectGrid } from '@components/'

import styles from './Projects.module.css'

const Project = () => {
  return (
    <div className={styles.container}>
      <h1>Project</h1>
      <ProjectGrid />
    </div>
  )
}

export default Project
