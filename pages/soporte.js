import React from 'react'
import { HeroServicesTwo, Header, Locations, Footer } from '../components'
import styles from '../styles/soporte/soporte.module.css'

function soporte(data) {
  return (
    <div>
      <Header />
      {/* <HeroServicesTwo data={data.hero} /> */}
      <div className={styles.layout}>
        <section className={styles.mainContainer}
          style={{backgroundImage: `url(${data.background?.url})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}
        >
          <img src={data.image.url} alt="" className={styles.img} />
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.subtitle}>{data.subtitle}</p>
          <div className={styles.layoutCards}>
            {
              data.listLink_icon.map(item => (
                <a href={item.link} key={item.id}>
                  <div className={styles.card}>
                    <img src={item.icon[0].url} alt="" className={styles.cardIcon} />
                    <p>{item.text}</p>
                  </div>
                </a>
              ))
            }
          </div>
        </section>

        <aside className={styles.faq}>
          <h3 className={styles.faqTitle}>{data.faq_title}</h3>
          <ul className={styles.list}>
            {
              data.listLink.map(item => (
                <a href={item.link} target='_blank' key={item.id}><li className={styles.listItem}>{item.text}</li></a>
              ))
            }
          </ul>
        </aside>

      </div>
      <Footer />
    </div>
  )
}

export default soporte

export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  // const res = await fetch(`http://localhost:1337/soporte?_locale=${locale}`)
  const res = await fetch(`https://clever-strapi.herokuapp.com/soporte?_locale=${locale}`)
  const data = await res.json()

  return {
    props: data,
    revalidate: 1
  }
}