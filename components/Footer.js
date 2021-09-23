import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const es = {
  contact: 'Contáctanos'
}
const en = {
  contact: 'Contact us'
}

function Footer() {
  const router = useRouter()
  const { locale } = router

  const t = locale === 'es' ? es : en

  return (
    <footer className={styles.footer}>
      <div className={styles.footerLayout}>

        {/* <div> */}
          <div className={styles.infoLayout}>
            <h4 className={styles.title}>Links de interés</h4>
            <div className={styles.links}>
              <p><a className={styles.link} href=''>Portabilidad Numérica</a></p>
              <p><a className={styles.link} href=''>Solicitud Soporte</a></p>
              <p><a className={styles.link} href=''>WhatsApp</a></p>
              {/* <p><a className={styles.link} href=''>IA-Tools</a></p>
              <p><a className={styles.link} href=''>MKD</a></p> */}
            </div>
          </div>

          <div className={`${styles.infoLayout} ${styles.directionsLayout}`}>
            <h4 className={styles.title}>{t.contact}</h4>
            <div className={styles.directions}>
              <div>
                <div>México</div>
                <div className={styles.itemInfo}>
                  <img src="/5.svg" alt="" width={20} />
                  <p> Calle Pegaso Ext. 3692 Int. 201 La Calma C.P. 45070 Zapopan</p>
                </div>
                <div className={styles.itemInfo}>
                  <img src="/6.svg" alt="" width={20} />
                  <p>+ 52 (33) 5004 2255</p>
                </div>
                <div className={styles.itemInfo}>
                  <img src="/mail.svg" alt="" alt="" width={20} />
                  <p>info@cleverideas.com.mx</p>
                </div>

              </div>
              <div>
                <div>USA</div>
                <div className={styles.itemInfo}>
                  <img src="/5.svg" alt="" width={20} />
                  <p>950 SW 57th Ave. Apt. 330 West Miami, FL CP 33144.</p>
                </div>
                <div className={styles.itemInfo}>
                  <img src="/6.svg" alt="" width={20} />
                  <p>+1 (305) 677 6828</p>
                </div>
              </div>

            </div>
          </div>
        {/* </div> */}

        <div className={styles.infoLayout}>
          <h4>¿Deseas más información?</h4>
          <div className={styles.buttons}>
            <a className={styles.buttonLink} href="#" target="_blank" rel="noopener noreferrer">Hablemos</a>
            <a className={styles.buttonLink} href="#" target="_blank" rel="noopener noreferrer">Soporte</a>
          </div>
          <div className={styles.social}>
            <a href="https://facebook.com/cleverideasMX" target="_blank"><img src="/facebook.svg" width={40} alt="" /></a>
            <a href="" target="_blank"><img src="/whatsapp.svg" width={40} alt="" /></a>
            <a href="https://www.linkedin.com/company/clever.ideas./" target="_blank"><img src="/linkedin.svg" width={40} alt="" /></a>
            <a href="https://youtube.com/channel/UCAtYcWPgywnrY74ujukxlqg" target="_blank"><img src="/youtube.svg" width={40} alt="" /></a>
            <a href="https://twitter.com/CleverIdeas3" target="_blank"><img src="/twitter.svg" width={40} alt="" /></a>
          </div>
        </div>


      </div>


      <div className={styles.legalBackground}>
        <span>Copyright 2021 | Clever IDEAS</span>
        <div className={styles.legal}>
          <Link href='/pua'><a className={styles.link}>PUA</a></Link>
          <Link href='/terminos-de-venta'><a className={styles.link}>Términos de venta</a></Link>
          <Link href='/privacidad'><a className={styles.link}>Aviso de privacidad</a></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

