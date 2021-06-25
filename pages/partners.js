import React from 'react'
import { Header, HeroServicesTwo } from '../components'
import { Information } from '../components/partners'

function partners(data) {
  return (
    <div>
      <Header />
      <HeroServicesTwo data={data.hero} />
      <Information data={data.information} image={data.image} />
    </div>
  )
}

export default partners

export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  const res = await fetch(`http://localhost:1337/partners`)
  const data = await res.json()

  return {
    props: data
  }
}