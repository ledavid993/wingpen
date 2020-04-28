import React from 'react'
import { TaskGrid, MenuBar } from '@components/index'
import { useDispatch } from 'react-redux'

import styles from './Tasks.module.css'

import { mainActions } from '@redux/actions'

const { changeMainView, setTaskItems } = mainActions

interface Props {
  project: any
}

const Tasks: React.FC<Props> = ({ project }) => {
  const dispatch = useDispatch()

  const handleProjectClick = (tasks: any) => {
    dispatch(setTaskItems(tasks))
    dispatch(changeMainView('subTasks'))
  }

  return (
    <div className={styles.container}>
      <TaskGrid data={project.tasks} handleProjectClick={handleProjectClick} />
    </div>
  )
}

export default Tasks
