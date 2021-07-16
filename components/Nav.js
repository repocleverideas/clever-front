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
              <li className={styles.item}>
                <Link href='/clever-linea'><a>Linea</a></Link>
              </li>
              <li className={styles.item}>
                <Link href='/pbx'><a>PBX</a></Link>
              </li>
              <li className={styles.item}>
                <Link href='/conference'><a>Conference</a></Link>
              </li>
              <li className={styles.item}>
                <Link href='/show'><a>Show</a></Link>
              </li>
            </ul>
          </div>

          <div className={styles.serviceSection}>
            <h4>Contact Center</h4>

            <ul className={styles.services}>
              <li className={styles.item}>
                <Link href='/u-contact'><a>uContact</a></Link>
              </li>
              <li className={styles.item}>
                <Link href='/chat'><a>Chat</a></Link>
              </li>
              <li className={styles.item}>
                <Link href='/avisos'><a>Avisos</a></Link>
              </li>
            </ul>
          </div>

          <div className={styles.serviceSection}>
            <h4>IoT</h4>

            <ul className={styles.services}>
              <li className={styles.item}>
                <Link href='/iot-box'><a>IoT in a Box</a></Link>
              </li>
              <li className={styles.item}>
                <Link href='/tracking'><a>Tracking</a></Link>
              </li>
              <li className={styles.item}>
                <Link href='/connect'><a>Connect</a></Link>
              </li>
            </ul>
          </div>

          <div className={styles.serviceSection}>
            <h4>Smart App's</h4>

            <ul className={styles.services}>
              <li className={styles.item}>
                <Link href='/evidence'><a>Evidence</a></Link>
              </li>
              <li className={styles.item}>
                <Link href='/ptt'><a>PTT</a></Link>
              </li>
              <li className={styles.item}>
                <Link href='/wallet'><a>Wallet</a></Link>
              </li>
            </ul>

          </div>

          <div className={styles.serviceSection}>
            <h4>
              <Link href='/clever-it'><a>Clever IT</a></Link>
            </h4>
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


    // <ul className={styles.services}>
    //           <Link href='/evidence'><a className={styles.item}>Clever Evidence</a></Link>
    //           <Link href='/ptt'><a className={styles.item}>Clever PTT</a></Link>
    //           <Link href='/wallet'><a className={styles.item}>Clever Wallet</a></Link>
    //         </ul>