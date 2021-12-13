import React from 'react'
import Head from 'next/head'
import { Header, Footer } from '../components'
import { useRouter } from 'next/router'
import { container } from '../styles/ruta.module.css'

function ruta(data) {
  const router = useRouter()
  const { locale } = router

  
  const es = {
    img: "https://res.cloudinary.com/clever-ideas/image/upload/v1637525535/ESP_Infografia_Historia_0389642199.png"
  }
  const en = {
    img: "https://res.cloudinary.com/clever-ideas/image/upload/v1637525803/ENG_Infografia_Historia_Entrepreneur_e2497c4e7a.png"
  }
  
  const t = locale === 'es' ? es : en


  return (
    <>
      <Head>
        <title>Infográfico</title>
        <meta name="description" content="Infográfico - Clever IDEAS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className={container}>
        <img
          style={{width:'100%'}}
          // src={t.img}
          src={data.info.link}
          alt="Infográfico - Clever Ideas"
        />
      </section>

      <Footer />
    </>
  )
}

export default ruta

export async function getStaticProps({ locale }) {
  // const res = await fetch(`http://localhost:1337/nosotros?_locale=${locale}`)
  const res = await fetch(`https://cleverideas-web.herokuapp.com/nosotros?_locale=${locale}`)
  const data = await res.json()

  return {
    props: data,
    revalidate: 1
  }
}
