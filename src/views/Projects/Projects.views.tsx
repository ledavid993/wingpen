import React from 'react'

import { ProjectGrid, MenuBar } from '@components/'

import { getSettings, writeFile, removeDirectory } from '../../app-core/lib'

import styles from './Projects.module.css'

const Project = () => {
  const handleAddProject = () => {
    removeDirectory()
  }

  return (
    <div className={styles.container}>
      <h1>Project</h1>
      <MenuBar />
      <ProjectGrid onAddProject={handleAddProject} />
    </div>
  )
}

export default Project
