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

        {
          data.isVideo
            ? <video className={styles.image} autoPlay muted controls width='520' height='300'>
                <source src={data.image.image.url} type='video/mp4' />
              </video>
            : <img className={styles.image} src={data.image.image.url} alt="" />
        }
      </div>
    </div>
  )
}

export default Hero
