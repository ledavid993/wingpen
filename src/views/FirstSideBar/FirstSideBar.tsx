import React from 'react'
import { FaBookMedical } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

import logo from '@assets/logo.png'
import styles from './FirstSideBar.module.css'

import { mainActions } from '@redux/actions'

const { changeMainView } = mainActions

const FirstSideBar = () => {
  const dispatch = useDispatch()

  return (
    <div className={styles.firstSidebar}>
      <img src={logo} />
      <div className={styles.menu}>
        <div>
          <div
            className={styles.item}
            onClick={() => dispatch(changeMainView('projects'))}
          >
            <FaBookMedical size="2em" />
            <div>Project</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstSideBar
