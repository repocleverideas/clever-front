import React from 'react'
import styles from '../styles/Hero.module.css'

function Hero({ data }) {
  // console.log(data)
  return (
    <div className={styles.background}>
      <div className={styles.info}>
        <div className={styles.text}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.description}>{data.subtitle}</p>
        </div>
        <img className={styles.image} src={data.image.image.url} alt="" />
      </div>
    </div>
  )
}

export default Hero
