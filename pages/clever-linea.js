import React from 'react'
import { Header, HeroServices, Footer } from '../components'
import { Features, Questions } from '../components/linea'

function cleverLinea(data) {
  // console.log(data.questions)
  return (
    <>
      <Header />
      <HeroServices data={data.hero} />
      <Features data={data.information} features={data.features} />
      <Questions data={data.questions} />
      <Footer />
    </>
  )
}

export default cleverLinea


export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  const res = await fetch(`https://clever-strapi.herokuapp.com/clever-linea?_locale=${locale}`)

  const data = await res.json()

  return {
    props: data,
    revalidate: 1
  }
}
