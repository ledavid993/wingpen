import React from 'react'

import styles from './TaskGrid.module.css'

interface Props {
  data: any
  handleProjectClick: (items: any) => void
}

const TaskGrid: React.FC<Props> = ({ data, handleProjectClick }) => {
  return (
    <div className={styles.grid}>
      {data.map(({ category, name, items }: any) => (
        <div onClick={() => handleProjectClick(items)}>
          <div className={styles.letter}>
            <p>{category || name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskGrid
