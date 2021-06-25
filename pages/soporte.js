import React from 'react'
import { HeroServicesTwo, Header, Locations } from '../components'
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
    </div>
  )
}

export default soporte

export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  const res = await fetch(`http://localhost:1337/soporte`)
  const data = await res.json()

  return {
    props: data
  }
}