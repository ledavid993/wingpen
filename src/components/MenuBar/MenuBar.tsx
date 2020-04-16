import React from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import {} from 'react-spring'

import styles from './MenuBar.module.css'

const MenuBar = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.button}>
          <span>
            <IoMdAddCircle color="white" />
          </span>
          <div>
            <p>New</p>
            <p>Project</p>
          </div>
        </div>
      </div>
      <div>
        <div>Filter</div>
      </div>
    </div>
  )
}

export default MenuBar
