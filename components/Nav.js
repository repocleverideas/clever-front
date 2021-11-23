import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const es = {
  enterprise: 'Empresas',
  support: 'Soporte',
  us: 'Nosotros',
  notices: 'Avisos',
  agents: 'Agentes',
  line: 'Línea'
}
const en = {
  enterprise: 'Enterprise',
  support: 'Support',
  us: 'Us',
  notices: 'Notices',
  agents: 'Agents',
  line: 'Line'
}

function Nav() {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'es' ? es : en

  return (
    <ul className={styles.nav}>
      <li className={`${styles.navItem} ${styles.dropItem}`}>Contact Centers<img src="/arrDown.svg" width={13} alt="" />
        <div className={styles.menuDrop}>

          <div className={styles.serviceSection}>
            <Link href='/u-contact'><a className={styles.serviceTitle}>uContact</a></Link>
          </div>

          <div className={styles.serviceSection}>
            <Link href='/chat'><a className={styles.serviceTitle}>Chat</a></Link>
          </div>

          <div className={styles.serviceSection}>
            <Link href='/avisos'><a className={styles.serviceTitle}>{t.notices}</a></Link>
          </div>

          <div className={styles.serviceSection}>
            <Link href='/agentes'><a className={styles.serviceTitle}>{t.agents}</a></Link>
          </div>
        </div>
      </li>

      <li className={`${styles.navItem} ${styles.dropItem}`}>{t.enterprise}<img src="/arrDown.svg" width={13} alt="" />
        <div className={styles.menuDrop}>

          <div className={styles.serviceSection}>

            <Link href='/pbx'><a className={styles.serviceTitle}>PBX</a></Link>

          </div>

          <div className={styles.serviceSection}>
            <Link href='/clever-linea'><a className={styles.serviceTitle}>{t.line}</a></Link>

          </div>

          <div className={styles.serviceSection}>
            <Link href='/show'><a className={styles.serviceTitle}>Show Me</a></Link>

          </div>

          <div className={styles.serviceSection}>
            <Link href='/wab'><a className={styles.serviceTitle}>Whatsapp Business</a></Link>

          </div>

          <div className={styles.serviceSection}>
            <Link href='/conference'><a className={styles.serviceTitle}>Conference</a></Link>

          </div>

          <div className={styles.serviceSection}>
            <Link href='/evidence'><a className={styles.serviceTitle}>Evidence</a></Link>

          </div>

        </div>
      </li>

      <li className={`${styles.navItem} ${styles.dropItem}`}>IoT<img src="/arrDown.svg" width={13} alt="" />
        <div className={styles.menuDrop}>

          <div className={styles.serviceSection}>

            <Link href='/iot-box'><a className={styles.serviceTitle}>IoT in a Box</a></Link>

          </div>

          <div className={styles.serviceSection}>

            <Link href='/connect'><a className={styles.serviceTitle}>Connect</a></Link>

          </div>
        </div>
      </li>

      <li className={styles.navItem}><Link href='/partners'>Partners</Link></li>
      <li className={styles.navItem}><Link href='/soporte'>{t.support}</Link></li>
      <li className={styles.navItem}><Link href='/nosotros'>{t.us}</Link></li>
      {/* <button className={`${styles.listItem} ${styles.button}`}>Charlemos</button> */}
    </ul>

  )
}

export default Nav


    // <ul className={styles.services}>
    //           <Link href='/evidence'><a className={styles.item}>Clever Evidence</a></Link>
    //           <Link href='/ptt'><a className={styles.item}>Clever PTT</a></Link>
    //           <Link href='/wallet'><a className={styles.item}>Clever Wallet</a></Link>
    //         </ul>