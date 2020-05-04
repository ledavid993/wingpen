import React from 'react'
import { useSelector } from 'react-redux'
import { TaskGrid, MenuBar } from '@components/index'

import styles from './Items.module.css'

interface Props {
  project: any
  items: any
}

const Items: React.FC<Props> = ({ project }) => {
  return <div className={styles.container}></div>
}

export default Items
