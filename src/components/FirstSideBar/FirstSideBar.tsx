import React from 'react'
import { FaBookMedical } from 'react-icons/fa'

import logo from '@assets/logo.png'

import styles from './FirstSideBar.module.css'

const FirstSideBar = () => {
  return (
    <div className={styles.firstSidebar}>
      <img src={logo} />
      <div className={styles.menu}>
        <div className={styles.item}>
          <FaBookMedical size="2em" />
          <div>Project</div>
        </div>
      </div>
    </div>
  )
}

export default FirstSideBar
