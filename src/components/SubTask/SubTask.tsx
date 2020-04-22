import React from 'react'
import { useDispatch } from 'react-redux'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import clsx from 'clsx'

import styles from './SubTask.module.css'

import { mainActions } from '@redux/actions'

const { changeMainView } = mainActions

interface Props {
  onTaskClick: (type: string, category: string) => any
  item: any
}

const SubTask: React.FC<Props> = ({ onTaskClick, item }) => {
  const dispatch = useDispatch()

  return (
    <div
      className={styles.container}
      onClick={() => dispatch(changeMainView('document'))}
    >
      {item.name}
    </div>
  )
}

export default SubTask
