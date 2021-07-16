import React from 'react'
import { Header, Footer } from '../components'
import styles from '../styles/avisos/avisos.module.css'

function avisos(data) {
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


      <div className={`column ${styles.backgroundVoice}`}>
        <h2 className={styles.titleFeat}>{data.voz.title}</h2>
        <div className={`layout ${styles.gap}`}>
          {
            data.voz.feature.map(item => (
              <div key={item.id} className={styles.card}>
                <img src="/checkWhite.svg" alt="" />
                <h4 className={styles.titleCard}>{item.feature_title}</h4>
              </div>
            ))
          }
        </div>
      </div>

      <div className={`column ${styles.backgroundVoice}`}>
        <h2 className={styles.titleSMS}>{data.sms.title}</h2>
        <div className={`layout ${styles.gap}`}>
          {
            data.sms.feature.map(item => (
              <div key={item.id} className={styles.cardSMS}>
                <img src="/checkWhite.svg" alt="" />
                <h4 className={styles.titleCard}>{item.feature_title}</h4>
              </div>
            ))
          }
        </div>
      </div>

      <div className={`column ${styles.backgroundInfo}`}>
        <h2>{data.information.title}</h2>
        <p>{data.information.subtitle}</p>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={data.information.image.image.url} alt="" />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default avisos

export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  const res = await fetch(`https://clever-strapi.herokuapp.com/avisos?_locale=${locale}`)
  const data = await res.json()

  return {
    props: data,
    revalidate: 1
  }
}