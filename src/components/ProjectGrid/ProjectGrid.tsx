import React from 'react'

import styles from './ProjectGrid.module.css'
import Paper from '../Paper'

interface Props {
  onAddProject: () => void
  projects: any
}

const ProjectGrid: React.FC<Props> = ({ onAddProject, projects }) => {
  return (
    <div className={styles.container} onClick={() => onAddProject()}>
      <Paper newBook />
      {projects.map((project: any) => (
        <Paper project={project} />
      ))}
    </div>
  )
}

export default ProjectGrid
