import React from 'react'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import { useLatest } from 'react-use'


function Nav() {
  return (
    <ul className={styles.nav}>
      <li className={`${styles.navItem} ${styles.dropItem}`}>Servicios<img src="/arrDown.svg" width={13} alt="" />
        <div className={styles.menuDrop}>
          <div className={styles.serviceSection}>
            <h4 className={styles.serviceTitle}>Oficina Virtual</h4>
            <ul className={styles.services}>
              <Link href='/clever-linea'><a className={styles.item}>Clever Linea</a></Link>
              <Link href='/pbx'><a className={styles.item}>Clever PBX</a></Link>
              <Link href='/conference'><a className={styles.item}>Clever Conference</a></Link>
              <Link href='/show'><a className={styles.item}>Clever Show</a></Link>
            </ul>
          </div>

          <div className={styles.serviceSection}>
            <h4>Contact Center</h4>
            <ul className={styles.services}>
              <Link href='/u-contact'><a className={styles.item}>Clever uContact</a></Link>
              <Link href='/chat'><a className={styles.item}>Clever Chat</a></Link>
              <Link href='/avisos'><a className={styles.item}>Clever Avisos</a></Link>
            </ul>
          </div>

          <div className={styles.serviceSection}>
            <h4>IoT</h4>
            <ul className={styles.services}>
              <Link href='/iot-box'><a className={styles.item}>IoT in a Box</a></Link>
              <Link href='/tracking'><a className={styles.item}>Clever Tracking</a></Link>
              <Link href='/connect'><a className={styles.item}>Clever Connect</a></Link>
            </ul>
          </div>

          <div className={styles.serviceSection}>
            <h4>Smart App's</h4>
            <ul className={styles.services}>
              <Link href='/evidence'><a className={styles.item}>Clever Evidence</a></Link>
              <Link href='/ptt'><a className={styles.item}>Clever PTT</a></Link>
              <Link href='/wallet'><a className={styles.item}>Clever Wallet</a></Link>
            </ul>
          </div>

          <div>
            <Link href='/clever-it'><a className={`${styles.item2}`}>Clever IT</a></Link>
          </div>
        </div>
      </li>

      <li className={styles.navItem}><Link href='/partners'>Partners</Link></li>
      <li className={styles.navItem}><Link href='/soporte'>Soporte</Link></li>
      <li className={styles.navItem}><Link href='/nosotros'>Conócenos</Link></li>
      {/* <button className={`${styles.listItem} ${styles.button}`}>Charlemos</button> */}
    </ul>
  )
}

export default Nav