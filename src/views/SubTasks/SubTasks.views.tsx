import React from 'react'
import { TaskGrid, MenuBar } from '@components/index'
import { useDispatch } from 'react-redux'

import styles from './SubTasks.module.css'

import { mainActions } from '@redux/actions'

const { changeMainView, setTaskItems } = mainActions

interface Props {
  project: any
}

const SubTasks: React.FC<Props> = ({ project }) => {
  const dispatch = useDispatch()

  const handleProjectClick = (tasks: any) => {
    dispatch(changeMainView('document'))
  }

  return (
    <div className={styles.container}>
      <TaskGrid data={project} handleProjectClick={handleProjectClick} />
    </div>
  )
}

export default SubTasks
