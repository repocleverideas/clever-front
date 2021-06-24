import React, { useState } from 'react'
import styles from '../../styles/linea/features.module.css'

function Features({ data, features }) {
  const [state, setState] = useState(0)
  const handleState = (e) => {
    const selected = e.target.value
    setState(selected)
  }

  return (
    <>
      <section className={`column ${styles.background}`}>
        <h2 className={styles.title}>{data.title}</h2>
        <p>{data.description}</p>
        <div>
          <div className={styles.buttons}>
            <button onClick={handleState} value={0} className={`${styles.button} ${state == 0 && styles.select}`}>{data.features[0].feature_title}</button>
            <button onClick={handleState} value={1} className={`${styles.button} ${state == 1 && styles.select}`}>{data.features[1].feature_title}</button>
            <button onClick={handleState} value={2} className={`${styles.button} ${state == 2 && styles.select}`}>{data.features[2].feature_title}</button>
          </div>
          <div className={styles.card}>
            <h3 className={styles.title}>{data.features[state].feature_title}</h3>
            <span>{data.features[state].link}</span>
            <p>{data.features[state].feature_description}</p>
          </div>
        </div>
      </section>

      <div className={`column`}>
        <h2 className={styles.title}>{features.title}</h2>
        <div className={`layout ${styles.layout}`}>
          {
            features.feature.map(item => (
              <div key={item.id} className={styles.feature_item}>
                <img src="/check.svg" width={22} alt="" />
                {item.feature_title}
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Features
