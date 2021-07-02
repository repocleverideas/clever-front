import React from 'react'
import styles from '../../styles/cleverIt/cleverIt.module.css'

function Features({ data }) {
  return (
    <section className={styles.backFeatures}>
      <h3 className={`column ${styles.titleFeat}`}>{data.title}</h3>
      <div className={styles.layout}>
        {
          data.feature.map(item => (
            <article className={styles.card}>
              <img src={item.icon.url} alt="" />
              <h4>{item.feature_title}</h4>
              <p>{item.feature_description}</p>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Features
