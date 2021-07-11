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
      <div className={`layout ${styles.gap}`}>
        <div>
          <div className={styles.imgContainer}>
            <img className={styles.img} src="/logoV.svg" alt="" />
          </div>

          <div className={styles.social}>
            <a href="https://www.linkedin.com/company/clever.ideas./" target="_blank"><img src="/social/LinkedIn.svg" width={37} alt="" /></a>
            <a href="https://www.linkedin.com/company/clever.ideas./" target="_blank"><img src="/social/Facebook.svg" width={37} alt="" /></a>
            <a href="https://www.linkedin.com/company/clever.ideas./" target="_blank"><img src="/social/Youtube.svg" width={37} alt="" /></a>
            <a href="https://www.linkedin.com/company/clever.ideas./" target="_blank"><img src="/social/Twitter.svg" width={37} alt="" /></a>
          </div>
        </div>
        <div>
          <h4 className={styles.title}>{t.contact}</h4>
          <div>
            <p>Calle Pegaso Ext. 3692 Int. 201 La Calma C.P. 45070 Zapopan</p>
          </div>
        </div>
      </div>
      <div className={styles.copy}>© Copyright 2021 | Clever IDEAS</div>

      <div>
        <Link href='/pua'><a>PUA</a></Link>
        <Link href='/terminos-de-venta'><a>Términos de venta</a></Link>
        <Link href='/privacidad'><a>Aviso de privacidad</a></Link>
      </div>
    </footer>
  )
}

export default Footer

