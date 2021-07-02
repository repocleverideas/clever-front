import React from 'react'
import styles from '../../styles/show/cards.module.css'

function Cards({ data }) {
  return (
    <section className={styles.background}>
      <div className={styles.gap}>

        {
          data.map(item => (
            <div className={styles.card} key={item.id}>
              <h3 className={styles.title}>{item.title}</h3>
              <h6 className={styles.subtitle}>{item.description}</h6>
              <div>
                {
                  item.features.map(item => (
                    <div key={item.id} className={styles.item}>
                      <img src="/checkWhite.svg" alt="" width={25} />
                      <span>{item.feature_title}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }

      </div>
    </section>
  )
}

export default Cards
