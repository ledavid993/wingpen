import React from 'react'

import styles from './ProjectGrid.module.css'
import Paper from '../Paper'

interface Props {
  handleBookClick: (project: any) => void
  projects: any
}

const ProjectGrid: React.FC<Props> = ({ handleBookClick, projects }) => {
  return (
    <div className={styles.container}>
      <Paper newBook handleBookClick={handleBookClick} />
      {projects.map((project: any) => (
        <Paper project={project} handleBookClick={handleBookClick} />
      ))}
    </div>
  )
}

export default ProjectGrid
