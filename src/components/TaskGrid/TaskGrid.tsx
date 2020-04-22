import React from 'react'

import styles from './TaskGrid.module.css'

const arr = ['1', '2', '3', '4', '6']

interface Props {
  items: any
}

const TaskGrid: React.FC<Props> = ({ items }) => {
  return (
    <div className={styles.grid}>
      {items.map((item: any) => (
        <div>
          <div className={styles.letter}>{item.name}</div>
        </div>
      ))}
    </div>
  )
}

export default TaskGrid
