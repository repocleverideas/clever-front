import React from 'react'
import styles from '../styles/cleverIt/cleverIt.module.css'
import { Header, Footer } from '../components'
import Features from '../components/it/Features'
import Softwares from '../components/it/Softwares'

function cleverIt(data) {
  return (
    <div>
      <Header />
      <section className={styles.background}>
        <div className={`layout`}>
          <div className={styles.text}>
            <h1 className={styles.title}>{data.hero.title}</h1>
            <h3>{data.hero.subtitle}</h3>
          </div>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={data.hero.image.image.url} alt="" />
          </div>
        </div>
      </section>
      <Features data={data.features} />
      <Softwares data={data.softwares} />

      <div className={styles.background}>
        <div className={`layout ${styles.gap}`}>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={data.imageFeature.url} alt="" />
          </div>
          <div className={styles.textFeature}>
            <h3 className={styles.titleBenefit}>{data.benefits.title}</h3>
            <div>
              {
                data.benefits.feature.map(item => (
                  <div className={styles.item} key={item.id}><img src="/check.svg" alt="" />{item.feature_title}</div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default cleverIt

export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  const res = await fetch(`https://cleverideas-web.herokuapp.com/clever-it?_locale=${locale}`)
  const data = await res.json()

  return {
    props: data,
    revalidate: 1
  }
}
