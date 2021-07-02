import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {
  Header,
  Hero,
  VideoMain,
  ServicesCloud,
  Clients,
  BrandsClients,
  Cta,
  Benefits,
  Footer
} from '../components'

{/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}


export default function Home(data) {
  return (
    <>
      <Head>
        <title>Clever IDEAS</title>
        <meta name="description" content="Clever Ideas 2021" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero data={data.hero} />
      <ServicesCloud data={data.service_item} title={data.services_title} />
      <VideoMain />
      <Benefits data={data.benefits} />
      <Clients data={data.clients} />
      <BrandsClients data={data.brands_clients} />
      <Cta data={data.cta} />

      <Footer />
    </>
  )
}

export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  // const res = await fetch(`http://localhost:1337/home`)
  const res = await fetch(`https://clever-strapi.herokuapp.com/home?_locale=${locale}`)
  const data = await res.json()

  return {
    props: data
  }
}