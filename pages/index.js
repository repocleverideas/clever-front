import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {
  Header,
  Hero,
  // VideoMain,
  ServicesCloud,
  Clients,
  BrandsClients,
  Cta,
  Benefits,
  Footer,
  MainCarousel,
  ClientsCarousel
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
      <MainCarousel data={data.carousel_hero} />
      <ServicesCloud data={data.service_item} title={data.services_title} background={data.backgroundServices} />
      {/* <Hero data={data.hero} /> */}
      {/* <VideoMain /> */}
      <Benefits data={data.benefits} />
      {/* <Clients data={data.clients} />
      <BrandsClients data={data.brands_clients} /> */}
      <ClientsCarousel data={data.clients_carousel} />
      <Cta data={data.cta} />

      <Footer />
    </>
  )
}

export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  // const res = await fetch(`http://localhost:1337/home?_locale=${locale}`)
  const res = await fetch(`https://clever-strapi.herokuapp.com/home?_locale=${locale}`)
  const data = await res.json()

  return {
    props: data,
    revalidate: 1
  }
}