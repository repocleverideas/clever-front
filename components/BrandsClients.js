import React from 'react'
import styles from '../styles/BrandsClients.module.css'

function BrandsClients({ data }) {
  return (
    <section className={styles.layout}>
      <div className={styles.text}>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.description}>{data.description}</p>
      </div>
      <div className={styles.logos}>
        {
          data.logo.map(item => (
            <div key={item.id}>
              <img
                src={item.image.url}
                alt=""
                className={styles.logoImg}
              />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default BrandsClients
