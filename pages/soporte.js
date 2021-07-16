import React from 'react'
import { HeroServicesTwo, Header, Locations, Footer } from '../components'
import styles from '../styles/soporte/soporte.module.css'

function soporte(data) {
  return (
    <div>
      <Header />
      <HeroServicesTwo data={data.hero} />
      <div className={styles.text}>
        <h2 className={styles.title}>{data.title}</h2>
        <h4>{data.subtitle}</h4>
      </div>
      <Locations data={data.location} />
      <Footer />
    </div>
  )
}

export default soporte

export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  const res = await fetch(`https://clever-strapi.herokuapp.com/soporte?_locale=${locale}`)
  const data = await res.json()

  return {
    props: data,
    revalidate: 1
  }
}