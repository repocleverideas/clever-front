import React from 'react'
import styles from '../styles/tracking/tracking.module.css'
import { Header, Footer } from '../components'


function tracking(data) {
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

      <div className={styles.backgroundValue}>
        <h2 className={`column ${styles.titleFeat}`}>{data.value.title}</h2>
        <div className={`layout ${styles.gap}`}>
          {
            data.value.feature.map(item => (
              <div key={item.id} className={styles.cardValue}>
                <img src={item.icon.url} alt="" width={40} />
                <h4>{item.feature_title}</h4>
              </div>
            ))
          }
        </div>
      </div>

      <div className={styles.backgroundFeature}>
        <h2 className={`column ${styles.titleFeat}`}>{data.features.title}</h2>
        <div className={`layout ${styles.gap}`}>
          {
            data.features.feature.map(item => (
              <div key={item.id} className={styles.cardFeature}>
                <img src={item.icon.url} alt="" width={40} />
                <h4 className={styles.titleCard}>{item.feature_title}</h4>
                <p>{item.feature_description}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className={styles.backgroundFeature}>
        <div className={`column`}>
          <h2 className={styles.titleDiferent}>{data.diferenciador.feature_title}</h2>
          <h3 className={styles.subtitleDiferent}>{data.diferenciador.feature_description}</h3>
        </div>
        <div className={styles.imgContainer}>
            <img className={styles.img} src={data.diferenciador.icon.url} alt="" />
          </div>
      </div>

      <Footer />
    </>
  )
}

export default tracking


export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  const res = await fetch(`https://clever-strapi.herokuapp.com/tracking?_locale=${locale}`)
  const data = await res.json()

  return {
    props: data,
    revalidate: 1
  }
}

