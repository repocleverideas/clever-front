import React from 'react'
import styles from '../styles/evidence/evidence.module.css'
import { Header, Footer } from '../components'

function evidence(data) {
  return (
    <>
      <Header />
      <section className={styles.background}>
        <div className={`layout`}>
          <div className={styles.text}>
            <span className={styles.category}>{data.hero.category}</span>
            <h1 className={styles.title}>{data.hero.title}</h1>
            <h3>{data.hero.subtitle}</h3>
          </div>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={data.hero.image.image.url} alt="" />
          </div>
        </div>
      </section>
      <div className={styles.description}>
        <p className={`column`}>{data.hero.description}</p>
      </div>

      <div className={styles.backgroundFeat}>
        <h2 className={styles.titleFeat}>{data.features.title}</h2>
        <div className={`layout ${styles.gap}`}>
          {
            data.features.feature.map(item => (
              <div key={item.id} className={styles.card}>
                <h4 className={styles.titleCard}>{item.feature_title}</h4>
                <p>{item.feature_description}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className={styles.backgroundFeat2}>
        <div className={`layout ${styles.gap2}`}>
          {
            data.feature_single.feature.map(item => (
              <div key={item.id}>
                <div className={styles.imgContainer}>
                  <img className={styles.img} src={item.icon.url} alt="" />
                </div>
                <div className={styles.textCard}>
                  <h4 className={styles.titleCard}>{item.feature_title}</h4>
                  <p>{item.feature_description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <Footer />
    </>
  )
}

export default evidence

export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  const res = await fetch(`https://clever-strapi.herokuapp.com/evidence`)
  const data = await res.json()

  return {
    props: data
  }
}
