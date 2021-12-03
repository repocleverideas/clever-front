import React, { useState } from 'react'
import styles from '../styles/contacto/contacto.module.css'
import { Header, Footer } from '../components'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

function contacto(data) {
  const notify = (message) => toast.success(message)

  const [state, setState] = useState()
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSend = (e) => {
    e.preventDefault()
    // console.log(state)

    const xhr = new XMLHttpRequest()
    const url = 'https://api.hsforms.com/submissions/v3/integration/submit/20346131/9fb8bbc9-c38e-47e0-9f7b-5b50ec195072'

    const data = {
      fields: [
        {
          "name": "firstname",
          "value": state.name
        },
        {
          "name": "email",
          "value": state.mail
        },
        {
          "name": "phone",
          "value": state.tel
        },
        {
          "name": "message",
          "value": state.message
        }
      ],
      "legalConsentOptions":{ // Include this object when GDPR options are enabled
        "consent":{
          "consentToProcess":true,
          "text":"I agree to allow Example Company to store and process my personal data.",
          "communications":[
            {
              "value":true,
              "subscriptionTypeId":999,
              "text":"I agree to receive marketing communications from Example Company."
            }
          ]
        }
      }
    }

    const finalData = JSON.stringify(data)

    xhr.open('POST', url)

    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onreadystatechange = function() {
      if(xhr.readyState == 4 && xhr.status == 200) {
        // alert(xhr.responseText); // Returns a 200 response if the submission is successful.
        notify('Gracias por enviar tus datos. Recibirás un correo muy pronto')

      } else if (xhr.readyState == 4 && xhr.status == 400){
        alert(xhr.responseText); // Returns a 400 error the submission is rejected.
      } else if (xhr.readyState == 4 && xhr.status == 403){
          alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.
      } else if (xhr.readyState == 4 && xhr.status == 404){
          alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found
      }
    }

    xhr.send(finalData)
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

            <label htmlFor="tel">
              <span className={styles.label}>Teléfono</span>
              <input
                className={styles.input}
                type="phone"
                id="tel"
                name="tel"
                onChange={handleChange}
              />
            </label>

            <label htmlFor="message">
              <span className={styles.label}>Mensaje</span>
              <textarea
                className={styles.input}
                type="text"
                id="message"
                name="message"
                onChange={handleChange}
              />
            </label>

            {/* <label htmlFor="service">
              <span className={styles.label}>Servicio</span>
              <select className={styles.input} name="service" id="service" onChange={handleChange}>
                <option value="hola">1</option>
                <option value="mundo">2</option>
              </select>
            </label> */}

            <button className={styles.button} onClick={handleSend}>Enviar</button>
          </form>
        </div>
        {/* <img src="/circle-cloud.svg" alt=""  className={styles.cloud} /> */}
      </section>
      <ToastContainer />

      <Footer />
    </>
  )
}

export default contacto

export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  const res = await fetch(`https://cleverideas-web.herokuapp.com/contacto?_locale=${locale}`)
  const data = await res.json()

  return {
    props: data,
    revalidate: 1
  }
}
