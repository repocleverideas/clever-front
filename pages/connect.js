import React, { useState } from 'react'
import styles from '../styles/connect/connect.module.css'
import { Header, Footer } from '../components'

function connect(data) {
  const [state, setState] = useState(data.questions.question[0].id)
  const changeState = (id) => {
    setState(id)
  }

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
                <h4>{item.feature_title}</h4>
                <p>{item.feature_description}</p>
              </div>
            ))
          }
        </div>
      </div>



      <div className={`column ${styles.backgroundFeat}`}>
        <h2 className={styles.titleFeat}>{data.questions.title}</h2>
          <div>
          {
            data.questions.question.map(item => (
              <div key={item.id}>
                <div
                  onClick={() => changeState(item.id)}
                  className={`${styles.question} ${item.id === state && styles.select}`}
                >
                  {item.slug}
                </div>
                <div>
                  {
                    item.id === state &&
                    <p className={styles.answer}>{item.description}</p>
                  }
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

export default connect

export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  const res = await fetch(`https://clever-strapi.herokuapp.com/connect`)
  const data = await res.json()

  return {
    props: data
  }
}
