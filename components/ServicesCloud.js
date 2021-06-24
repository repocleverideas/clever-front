import React, { useState } from 'react'
import styles from '../styles/ServicesCloud.module.css'



function ServicesCloud({ data, title }) {

  const [select, setSelect] = useState(0)
  const changeSelect = (e) => {
    const selected = e.target.value
    setSelect(selected)
  }

  return (
    <section className={styles.background}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.container}>
        <div className={styles.containerCircle}>
          <div className={styles.circle}></div>
          <button onClick={changeSelect} value={0} className={`${styles.button} ${styles.one} ${select == 0 && styles.buttonSelected}`}>{data[0].title}</button>
          <button onClick={changeSelect} value={1} className={`${styles.button} ${styles.two} ${select == 1 && styles.buttonSelected}`}>{data[1].title}</button>
          <button onClick={changeSelect} value={2} className={`${styles.button} ${styles.three} ${select == 2 && styles.buttonSelected}`}>{data[2].title}</button>
          <button onClick={changeSelect} value={3} className={`${styles.button} ${styles.four} ${select == 3 && styles.buttonSelected}`}>{data[3].title}</button>
          {/* <button onClick={handleState} value={1}>Contact Center</button> */}
        </div>


        <div className={styles.card}>
        <h4 className={styles.cardTitle}>{data[select]?.title}</h4>
        <h5 className={styles.description}>{data[select].description}</h5>
        {
          data[select].product.map(item => (
            <div key={item} className={styles.items}><img src="/check.svg" alt="" className={styles.icon} />{item.feature_title}</div>
          ))
        }
      </div>
      </div>
    </section>
  )
}

export default ServicesCloud
