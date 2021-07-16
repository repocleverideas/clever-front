import React from 'react'
import { Header, HeroServicesTwo, Footer } from '../components'
import { Information } from '../components/partners'

function partners(data) {
  return (
    <div>
      <Header />
      <HeroServicesTwo data={data.hero} />
      <Information data={data.information} image={data.image} />
      <Footer />
    </div>
  )
}

export default partners

export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  const res = await fetch(`https://clever-strapi.herokuapp.com/partners?_locale=${locale}`)
  const data = await res.json()

  return {
    props: data,
    revalidate: 1
  }
}