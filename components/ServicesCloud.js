import React, { useState } from 'react'
import styles from '../styles/ServicesCloud.module.css'
import Link from 'next/link'


function ServicesCloud({ data, title, background }) {

  const [select, setSelect] = useState(0)
  const changeSelect = (e) => {
    const selected = e.target.value
    setSelect(selected)
  }

  return (
    <section className={styles.background} style={{backgroundImage: `url(${background?.url})`}}>
      <h3 className={styles.title}>{title}</h3>

      <div className={`${styles.gap}`}>
        <div className={styles.containerCircle}>
          <div className={styles.circle}></div>
          <button onClick={changeSelect} value={0} className={`${styles.button} ${styles.one} ${select == 0 && styles.buttonSelected}`}>{data[0].title}</button>
          <button onClick={changeSelect} value={1} className={`${styles.button} ${styles.two} ${select == 1 && styles.buttonSelected}`}>{data[1].title}</button>
          <button onClick={changeSelect} value={2} className={`${styles.button} ${styles.three} ${select == 2 && styles.buttonSelected}`}>{data[2].title}</button>
        </div>


        <div className={styles.card}>
          <h4 className={styles.cardTitle}>{data[select]?.title}</h4>
          <h5 className={styles.description}>{data[select].description}</h5>
          {
            data[select].product.map(item => (
              <div key={item.id} className={styles.items}>
                <img src="/check.svg" alt="" className={styles.icon} />
                <Link href={item.link}>{item.feature_title}</Link>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ServicesCloud
