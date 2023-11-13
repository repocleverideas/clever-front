import React from 'react'
import styles from '../styles/Cta.module.css'
import { Button } from '../components'

function Cta({ data }) {
  return (
    <section className={styles.background}>
      <div className={`layout`}>
        <div className={styles.text}>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.subtitle}>{data.subtitle}</p>
          
          <Button href={data.link}>{data.button}</Button>
        </div>
        
      </div>
    </section>
  )
}

export default Cta
