import React from 'react'
import { useDispatch } from 'react-redux'

import styles from './TaskGrid.module.css'

import { mainActions } from '@redux/actions'

const { changeMainView } = mainActions

interface Props {
  items: any
}

const TaskGrid: React.FC<Props> = ({ items }) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.grid}>
      {items.map((item: any) => (
        <div onClick={() => dispatch(changeMainView('document'))}>
          <div className={styles.letter}>
            <p>Chapter 1</p>
            <p>{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskGrid
