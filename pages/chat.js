import React from 'react'
import { Header, Footer } from '../components'
import styles from '../styles/chat/chat.module.css'

function chat(data) {
  return (
    <>
      <Header />

      {/* <div className={styles.backgroundInfo}>
        <p className={`column ${styles.description}`}>{data.info.description}</p>
        <div className={`layout ${styles.gap}`}>
          {
            data.info.features.map(item => (
              <div key={item.id} className={styles.item}>
                <img src="/check.svg" alt="" width={25} />
                <h4 className={styles.titleCard}>{item.feature_title}</h4>
              </div>
            ))
          }
        </div>
      </div> */}

      {/* {
        data.features.map(item => (
          <div className={styles.backgroundFeat} key={item.id}>
            <div className={`layout`}>
              <div>
                <h3 className={styles.titleFeat}>{item.feature_title}</h3>
                <p>{item.feature_description}</p>
              </div>
              <div className={styles.imgContainer}>
                <img className={styles.img} src={item.icon.url} alt="" />
              </div>
            </div>
          </div>
        ))
      } */}

      <Footer />
    </>
  )
}

export default chat


export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  const res = await fetch(`https://clever-strapi.herokuapp.com/chat?_locale=${locale}`)
  const data = await res.json()

  return {
    props: data,
    revalidate: 1
  }
}
