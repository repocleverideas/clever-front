import React from 'react'
import styles from '../styles/Hero.module.css'

function Hero() {
  return (
    <div className={styles.background}>
      <div className={styles.info}>
        <div className={styles.text}>
          <h1 className={styles.title}>Lleva tu negocio al siguiente nivel con Clever IDEAS</h1>
          <p>Te apoyamos en la migración digital para que tu empresa alcance mayor productividad y eficiencia.</p>
        </div>
        <img className={styles.image} src="/home-hero.png" alt="" />
      </div>
      {/* <div className={styles.skewedEnd}>
        <div className={`${styles.line} ${styles.left}`}></div>
        <div className={`${styles.line} ${styles.leftDown}`}></div>
        <div className={`${styles.line} ${styles.right}`}></div>
        <div className={`${styles.line} ${styles.rightDown}`}></div>
      </div> */}
    </div>
  )
}

export default Hero
