import React from 'react'
import styles from '../styles/Cta.module.css'
import { Button } from '../components'
import Link from 'next/link'

function Cta({ data }) {
  return (
    <section className={styles.background}>
      <div className={`layout`}>
        <div className={styles.text}>
          <h2 className={styles.title}>{data.title}</h2>
          <Link href='/contacto'>
            <a><button className={styles.button}>{data.button}</button></a>
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <img src={data.image.image.url} alt="" className={styles.image} />
        </div>
      </div>
    </section>
  )
}

export default Cta
