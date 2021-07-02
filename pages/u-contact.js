import React from 'react'
import { Header, Footer } from '../components'
import styles from '../styles/uContact/uContact.module.css'
import CarouselScreens from '../components/ucontact/CarouselScreens'



function uContact(data) {
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

      <div className={styles.backgroundFeat}>
        <h2 className={styles.titleFeat}>{data.features.title}</h2>
        <div className={`layout ${styles.gap}`}>
          {
            data.features.features.map(item => (
              <div key={item.id} className={styles.item}>
                <img src="/check.svg" alt="" width={25} />
                <span>{item.feature_title}</span>
              </div>
            ))
          }
        </div>
      </div>

      <CarouselScreens data={data.carousel} />

      <Footer />
    </>
  )
}

export default uContact

export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  const res = await fetch(`https://clever-strapi.herokuapp.com/ucontact`)
  const data = await res.json()

  return {
    props: data
  }
}
