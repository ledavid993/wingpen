import React from 'react'
import cover from '../../assets/cover.jpg'

import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={cover} />
      </div>
      <div>
        <h1>Welcome</h1>
      </div>
    </div>
  )
}

export default Home
