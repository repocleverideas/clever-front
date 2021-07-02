import React from 'react'
import { Header, Footer } from '../components'
import Cards from '../components/show/Cards'
import styles from '../styles/show/show.module.css'

const tools = [1, 2, 3, 4, 5, 6, 7, 8]
const values = [1, 2, 3, 4, 5, 6]

function show(data) {
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

      <div className={styles.backgroundFeat}>
        <h2 className={styles.titleFeat}>{data.herramientas.title}</h2>
        <div className={`layout ${styles.gap}`}>
          {
            data.herramientas.feature.map(item => (
              <div key={item.id} className={styles.card}>
                <h4>{item.feature_title}</h4>
              </div>
            ))
          }
        </div>

      </div>


      <div className={styles.backgroundValue}>
        <h2 className={styles.titleFeat}>{data.valor.title}</h2>
        <div className={`layout ${styles.gap}`}>
          {
            data.valor.feature.map(item => (
              <div key={item.id} className={styles.item}>
                <img src="/checkWhite.svg" alt="" width={25} />
                <h4>{item.feature_title}</h4>
              </div>
            ))
          }
        </div>
      </div>

      <div className={styles.backgroundServer}>
        <div className={`layout`}>
          <div>
            <h2>{data.servidor.title}</h2>
            <p>{data.servidor.subtitle}</p>
          </div>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={data.servidor.image.image.url} alt="" />
          </div>
        </div>
      </div>

      <Cards data={data.cards} />

      <Footer />
    </>
  )
}

export default show


export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  const res = await fetch(`https://clever-strapi.herokuapp.com/clever-show`)
  const data = await res.json()

  return {
    props: data
  }
}