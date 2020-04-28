import React from 'react'
import { FaFilter, FaSortAlphaDown } from 'react-icons/fa'
import {} from 'react-spring'

import styles from './MenuBar.module.css'

const MenuBar = () => {
  return (
    <div className={styles.container}>
      <div></div>
      <div>
        <div className={styles.icons}>
          <FaFilter />
          <FaSortAlphaDown />
        </div>
      </div>
    </div>
  )
}

export default MenuBar
