import React from 'react'
import { Button } from '..'
// import styles from '../../styles/uContact/uContact.module.css'
import styles from './Hero.module.css'

function Hero({ data }) {
  return (
    <div className={`layout`}>
      <div className={styles.text}>
        <span className={styles.category}>{data.hero.category}</span>
        <h1 className={styles.title}>{data.hero.title}</h1>
        <p className={styles.subtitle}>{data.hero.subtitle}</p>
        <Button href={data.hero.link}>{data.hero.button}</Button>
      </div>


      <div className={styles.imgContainer}>
        {
          data.hero.isVideo
            ? <video className={styles.videoSide} autoPlay muted controls loop>
                <source src={data.hero.image.image.url} type='video/mp4' />
              </video>
            : <img className={styles.img} src={data.hero.image.image.url} alt="" />
        }
      </div>
    </div>
  )
}

export default Hero
