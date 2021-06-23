import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

import { Header, Hero, VideoMain, ServicesCloud, Clients } from '../components'

{/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}


export default function Home(data) {
  console.log(data.clients)
  // const router = useRouter()
  // const { locale } = router

  return (
    <>
      <Head>
        <title>Clever IDEAS</title>
        <meta name="description" content="Clever Ideas 2021" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero data={data.hero} />
      <ServicesCloud />
      <Clients data={data.clients} />
      {/* <VideoMain /> */}
    </>
  )
}

export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  const res = await fetch(`http://localhost:1337/home?_locale=${locale}`)
  const data = await res.json()

  return {
    props: data
  }
}