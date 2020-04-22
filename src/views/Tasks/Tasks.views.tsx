import React from 'react'
import { TaskGrid, MenuBar } from '@components/index'

import styles from './Tasks.module.css'

interface Props {
  items: any
}

const Tasks: React.FC<Props> = ({ items }) => {
  return (
    <div className={styles.container}>
      <h3>Shadow Virtualization - Chapters</h3>
      <MenuBar />
      <TaskGrid items={items} />
    </div>
  )
}

export default Tasks
