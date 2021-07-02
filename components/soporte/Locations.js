import React from 'react'
import styles from '../../styles/soporte/soporte.module.css'

function Locations({ data }) {
  return (
    <section className={`layout ${styles.layout}`}>
      {data.map(item => (
        <div key={item.id} className={styles.card}>
          <h3 className={styles.subtitle}>{item.name}</h3>
          {item.items.map(item => (
            <div key={item.id} className={styles.items}>
              <img src={item.icon.url} alt="" />
              <span>{item.feature_title}</span>
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}

export default Locations
