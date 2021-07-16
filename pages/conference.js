import React from 'react'
import { Header, Footer } from '../components'
import styles from '../styles/conference/conference.module.css'

function conference(data) {
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
            {/* <img className={styles.img} src='/home-hero.png' alt="" /> */}
          </div>
        </div>
      </section>
      <div className={styles.description}>
        <p className={`column`}>{data.hero.description}</p>
      </div>

      <div className={styles.backgroundBen}>
        <h2 className={styles.titleBen}>{data.benefits.title}</h2>
        <div className={`layout ${styles.gap}`}>
          {
            data.benefits.feature.map(item => (
              <div key={item.id} className={styles.card}>
                <img src="/checkWhite.svg" alt="" />
                <h4 className={styles.titleCard}>{item.feature_title}</h4>
                <p>{item.feature_description}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className={styles.imgContainer}>
        <img className={styles.img} src={data.benefits_image.image.url} alt="" />
      </div>

      <div className={styles.backgroundFeat}>
        <h3 className={styles.titleBen}>{data.features.title}</h3>
        <div className={`layout ${styles.gap}`}>
          {
            data.features.feature.map(item => (
              <div key={item.id} className={styles.item}>
                <img src="/check.svg" alt="" />
                <p>{item.feature_title}</p>
              </div>
            ))
          }
        </div>
      </div>

      <Footer />
    </>
  )
}

export default conference

export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  const res = await fetch(`https://clever-strapi.herokuapp.com/conference?_locale=${locale}`)
  const data = await res.json()

  return {
    props: data,
    revalidate: 1
  }
}