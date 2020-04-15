import React from 'react'
import cover from '../../assets/cover.jpg'

import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={cover} />
      </div>
      <div className={styles.quote}>
        <p>
          <span>A</span>ny man who keeps working is not a failure. He may not be
          a great writer, but if he applies the old-fashioned virtues of hard,
          constant labor, he’ll eventually make some kind of career for himself
          as writer.
        </p>
      </div>
    </div>
  )
}

export default Home
