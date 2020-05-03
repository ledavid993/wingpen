import React from 'react'

import styles from './ProjectGrid.module.css'
import Paper from '../Paper'

interface Props {
  handleBookClick: (project: any) => void
  projects: any
  onOpen: () => void
}

const ProjectGrid: React.FC<Props> = ({
  onOpen,
  handleBookClick,
  projects,
}) => {
  return (
    <div className={styles.container}>
      <Paper newBook handleBookClick={handleBookClick} onOpen={onOpen} />
      {projects.map((project: any) => (
        <Paper project={project} handleBookClick={handleBookClick} />
      ))}
    </div>
  )
}

export default ProjectGrid
