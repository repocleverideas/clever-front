import React from 'react'
import styles from '../styles/HeroServices.module.css'

function HeroServices({ data }) {
  return (
    <section className={styles.layout}>
      <div>
        <h1>{data.title}</h1>
      </div>
      <div>
        <h2>{data.subtitle}</h2>
      </div>
    </section>
  )
}

export default HeroServices
