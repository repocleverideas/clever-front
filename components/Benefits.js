import React, { useState } from 'react'
import styles from '../styles/Benefits.module.css'

function Benefits({ data }) {
  const [state, setState] = useState(0)
  const handleState = (e) => {
    const newState = e.target.value
    setState(newState)
  }
  return (
    <section className={styles.background}>
      <h3 className={styles.title}>{data.title}</h3>
      <div className={styles.content}>
        <div className={styles.buttons}>
          <button value={0} onClick={handleState} className={`${styles.button} ${state == 0 && styles.select}`}>{data.benefit_item[0].slug}</button>
          <button value={1} onClick={handleState} className={`${styles.button} ${state == 1 && styles.select}`}>{data.benefit_item[1].slug}</button>
          <button value={2} onClick={handleState} className={`${styles.button} ${state == 2 && styles.select}`}>{data.benefit_item[2].slug}</button>
          <button value={3} onClick={handleState} className={`${styles.button} ${state == 3 && styles.select}`}>{data.benefit_item[3].slug}</button>
        </div>
        { data.benefit_item[state].description }
      </div>
    </section>
  )
}

export default Benefits
