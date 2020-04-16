import React from 'react'

import styles from './ProjectGrid.module.css'
import Paper from '../Paper'

const arr = ['1', '2', '3', '4', '5']

const ProjectGrid = () => {
  return (
    <div className={styles.container}>
      <Paper newBook />
      {arr.map((e) => (
        <Paper />
      ))}
    </div>
  )
}

export default ProjectGrid
