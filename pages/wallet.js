import React from 'react'
import styles from '../styles/wallet/wallet.module.css'
import { Header, Footer } from '../components'

function wallet(data) {
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
        <h2 className={`column ${styles.titleFeat}`}>{data.features.title}</h2>
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

      <div className={styles.caption}>
        <h3>{data.caption}</h3>
      </div>

      <div className={styles.backgroundFeat}>
        <div className={`layout`}>
            <div className={styles.text}>
              <h3 className={styles.title}>{data.sms.title}</h3>
              <p>{data.sms.description}</p>

              <div>
                {
                  data.sms.features.map(item => (
                    <div key={item.id} className={styles.item}>
                      <img src="/check.svg" alt="" width={25} />
                      <p>{item.feature_title}</p>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={data.image_sms.url} alt="" />
            </div>
          </div>
      </div>


      <div className={styles.backgroundFeat}>
        <div className={`layout`}>
            <div className={styles.text}>
              <h3 className={styles.title}>{data.gamification.title}</h3>
              <p>{data.gamification.description}</p>

              <div>
                {
                  data.gamification.features.map(item => (
                    <div key={item.id} className={styles.item}>
                      <img src="/check.svg" alt="" width={25} />
                      <p>{item.feature_title}</p>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={data.image_gamification.url} alt="" />
            </div>
          </div>
      </div>

      <Footer />
    </>
  )
}

export default wallet


export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  const res = await fetch(`https://clever-strapi.herokuapp.com/wallet`)
  const data = await res.json()

  return {
    props: data
  }
}
