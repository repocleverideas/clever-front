import React, { useState } from 'react'
import styles from '../styles/contacto/contacto.module.css'
import { Header } from '../components'

function contacto(data) {
  const [state, setState] = useState()
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSend = (e) => {
    e.preventDefault()
    console.log(state)
  }

  return (
    <>
      <Header />
      <section className={styles.background}>
        <div className={`layout`}>
          <div>
            <span>{data.info.category}</span>
            <h1 className={styles.title}>{data.info.title}</h1>
            <p>{data.info.subtitle}</p>
          </div>
          <form className={styles.form}>
            <label htmlFor="name">
              <span className={styles.label}>Nombre</span>
              <input
                className={styles.input}
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
              />
            </label>

            <label htmlFor="mail">
              <span className={styles.label}>Correo</span>
              <input
                className={styles.input}
                type="email"
                id="mail"
                name="mail"
                onChange={handleChange}
              />
            </label>

            <label htmlFor="service">
              <span className={styles.label}>Servicio</span>
              <select className={styles.input} name="service" id="service" onChange={handleChange}>
                <option value="hola">1</option>
                <option value="mundo">2</option>
              </select>
            </label>

            <button className={styles.button} onClick={handleSend}>Enviar</button>
          </form>
        </div>
        {/* <img src="/circle-cloud.svg" alt=""  className={styles.cloud} /> */}
      </section>
    </>
  )
}

export default contacto

export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  const res = await fetch(`http://localhost:1337/contacto`)
  const data = await res.json()

  return {
    props: data
  }
}
