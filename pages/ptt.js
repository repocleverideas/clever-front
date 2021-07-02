import React from 'react'
import styles from '../styles/ptt/ptt.module.css'
import { Header, Footer } from '../components'


const values = [1, 2, 3, 4, 5, 6]

function ptt(data) {
  return (
    <>
      <Header />
      <section className={styles.background}>
        <div className={`layout`}>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={data.hero.image.image.url} alt="" />
            {/* <img className={styles.img} src='/home-hero.png' alt="" /> */}
          </div>
          <div className={styles.text}>
            <span className={styles.category}>{data.hero.category}</span>
            <h1 className={styles.title}>{data.hero.title}</h1>
            <h3>{data.hero.subtitle}</h3>
          </div>
        </div>
      </section>
      <p className={`column ${styles.description}`}>{data.hero.description}</p>


      <div className={styles.backgroundFeat}>
        <h2 className={styles.titleFeat}>{data.features.title}</h2>
        <div className={`layout ${styles.gap}`}>
          {
            data.features.feature.map(item => (
              <div key={item.id} className={styles.item}>
                <img src="/checkWhite.svg" alt="" width={25} />
                <h4>{item.feature_title}</h4>
              </div>
            ))
          }
        </div>
      </div>


      <div className={styles.backgroundComponents}>
        <div className={`column ${styles.componentsText}`}>
          <h2>{data.benefits.title}</h2>
          <p>{data.benefits.description}</p>
        </div>

        <div className={`layout ${styles.gap2}`}>
          {
            data.benefits.features.map(item => (
              <div key={item.id} className={styles.card}>
                <img src={item.icon.url} alt="" />
                <h4>{item.feature_title}</h4>
              </div>
            ))
          }
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ptt


export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  const res = await fetch(`https://clever-strapi.herokuapp.com/ptt`)
  const data = await res.json()

  return {
    props: data
  }
}