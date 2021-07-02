import React from 'react'
import styles from '../styles/HeroServices.module.css'

function HeroServices({ data }) {
  return (
    <section className={styles.background}>
      <div className={styles.layout}>
        <div>
          <span>{data.category}</span>
          <h1 className={styles.title}>{data.title}</h1>
          <p>{data.subtitle}</p>
        </div>
        <div className={styles.imageContainer}>
          <img src={data.image.image.url} alt="" className={styles.image} />
        </div>
      </div>
      <div className={styles.column}>
        <p className={styles.text}>{data.description}</p>
      </div>
    </section>
  )
}

export default HeroServices
