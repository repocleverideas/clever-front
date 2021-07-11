import React from 'react'
import { Header, Footer } from '../components'
import ReactMarkdown from 'react-markdown'
import styles from '../styles/pua/pua.module.css'

function privacidad(data) {
  return (
    <>
      <Header />
      <section className={`column ${styles.background}`}>
        <h1 className={styles.title}>{data.title}</h1>
        <ReactMarkdown>{data.text}</ReactMarkdown>
      </section>

      <Footer />
    </>
  )
}

export default privacidad

export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  const res = await fetch(`https://clever-strapi.herokuapp.com/privacidad`)
  const data = await res.json()

  return {
    props: data,
    revalidate: 1
  }
}