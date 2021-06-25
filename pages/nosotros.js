import React from 'react'
import { Header } from '../components'
import styles from '../styles/nosotros/nosotros.module.css'

function nosotros(data) {
  return (
    <>
      <Header />
      <section className={`column`}>
        {/* <div className={styles.imageContainer}>
          <img src={data.logo.url} alt="" className={styles.image} />
        </div> */}
        <div className={`column ${styles.layout}`}>
          <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </div>
        </div>

        <div>
          <h2 className={styles.title}>{data.title_numbers}</h2>
          <div className={styles.numbers}>
            {
              data.numbers.map(item => (
                <div key={item.id} className={styles.number}>
                  <h3 className={styles.item}>{item.description}</h3>
                  <span>{item.slug}</span>
                </div>
              ))
            }
          </div>
        </div>
      </section>

        <div className={styles.background}>
          <div className={`layout ${styles.certification}`}>
            <div>
              <h2 className={styles.title_certification}>{data.certification}</h2>
              <p>{data.certification_desciprtion}</p>
            </div>
            <div className={styles.imageContainer}>
              <img className={styles.image} src={data.certification_image.url} alt="" />
            </div>
          </div>
        </div>
    </>
  )
}

export default nosotros


export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  const res = await fetch(`http://localhost:1337/nosotros`)
  const data = await res.json()

  return {
    props: data
  }
}
