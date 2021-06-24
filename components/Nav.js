import React from 'react'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'

function Nav() {
  return (
    <ul className={styles.nav}>
      <li className={`${styles.navItem} ${styles.dropItem}`}>Servicios<img src="/arrDown.svg" width='15' alt="" />
        <div className={styles.menuDrop}>
          <div className={styles.serviceSection}>
            <h4 className={styles.serviceTitle}>Oficina Virtual</h4>
            <div className={styles.services}>
              <Link href='clever-linea'><p>Clever Linea</p></Link>
              <p>Clever PBX</p>
              <p>Clever Conference</p>
              <p>Clever Show</p>
            </div>
          </div>

          <div className={styles.serviceSection}>
            <h4>Contact Center</h4>
            <div className={styles.services}>
              <p>Clever uContact</p>
              <p>Clever Chat</p>
              <p>Clever Avisos</p>
            </div>
          </div>
        </div>
      </li>
      <li className={styles.navItem}>Partners</li>
      <li className={styles.navItem}>Soporte</li>
      <li className={styles.navItem}>Conócenos</li>
      {/* <button className={`${styles.listItem} ${styles.button}`}>Charlemos</button> */}
    </ul>
  )
}

export default Nav