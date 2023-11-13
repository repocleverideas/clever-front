import Head from 'next/head'

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
import Script from 'next/script'


export default function Home(data) {
  return (
    <>
      <Head>
        <title>Clever IDEAS</title>
        <meta name="description" content="Clever Ideas 2021" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://clevercc.ucontactcloud.com/webchatclient/integrawebchat.js"></script>
        <script async>
          {
            `initwebchat({
              ip: "clevercc.ucontactcloud.com",
              campaign: "CleverIdeas"
            })`
          }
        </script>
      </Head>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-Z95CFRLS0N" strategy='afterInteractive'
        onLoad={() => {
          `window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
  
             gtag('config', 'G-Z95CFRLS0N');`
        }}
      />

      <Header />
      <MainCarousel data={data.carousel_hero} />
      <ServicesCloud data={data.service_item} title={data.services_title} background={data.backgroundServices} />
      <Hero data={data.hero} />
      
      <Benefits data={data.benefits} />
      
      <ClientsCarousel data={data.clients_carousel} />
      <Cta data={data.cta} />

      <Footer />
    </>
  )
}

export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  // const res = await fetch(`http://localhost:1337/home?_locale=${locale}`)
  const res = await fetch(`https://cleverideas-web.herokuapp.com/home?_locale=${locale}`)
  const data = await res.json()

  return {
    props: data,
    revalidate: 1
  }
}