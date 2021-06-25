import React from 'react'
import styles from '../styles/heroServicesTwo.module.css'
import { Button } from '../components'

function HeroServicesTwo({ data }) {
  return (
    <section className={styles.background}>
      <div className={`layout ${styles.layout}`}>
        <div>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.text}>{data.subtitle}</p>
          <Button>{data.button}</Button>
        </div>
        <div className={styles.imageContainer}>
          <img src={data.image.image.url} alt="" className={styles.image} />
        </div>
      </div>
    </section>
  )
}

export default HeroServicesTwo
