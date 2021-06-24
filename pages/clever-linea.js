import React from 'react'
import HeroServices from '../components/HeroServices'

function cleverLinea(data) {
  console.log(data)
  return (
    <>
      <HeroServices data={data.hero} />
    </>
  )
}

export default cleverLinea


export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  const res = await fetch(`http://localhost:1337/clever-linea`)
  const data = await res.json()

  return {
    props: data
  }
}
