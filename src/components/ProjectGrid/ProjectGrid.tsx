import React from 'react'

import styles from './ProjectGrid.module.css'
import Paper from '../Paper'

const arr = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
]

interface Props {
  onAddProject: () => void
}

const ProjectGrid: React.FC<Props> = ({ onAddProject }) => {
  return (
    <div className={styles.container} onClick={() => onAddProject()}>
      <Paper newBook />
      {arr.map((e) => (
        <Paper />
      ))}
    </div>
  )
}

export default ProjectGrid
