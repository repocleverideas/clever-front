import { useState } from 'react'
import Image from 'next/image'
import { Nav, Button, Language } from '../components'
import styles from '../styles/Header.module.css'

function Header() {
  const [menu, setMenu] = useState(false)
  const [services, setServices] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }
  const handleServices = () => {
    setServices(!services)
  }

  return (
    <div className={styles.header}>
      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
      <div className={styles.logoContainer}>
        <Image src='/logo-black-h.png' alt='Clever Logo' layout='fill' priority />
      </div>
      <nav className={styles.nav}>
        <Nav />
        <Language />
        <Button>Charlemos</Button>
        <div className={`${styles.menu_icon} ${menu && styles.menu_icon_open}`} onClick={handleMenu}>
          <div className={styles.menu_bar}></div>
          <div className={styles.menu_bar}></div>
          <div className={styles.menu_bar}></div>
        </div>
        <ul className={`${styles.menu_hidden} ${menu && styles.displayed}`}>
          <li className={styles.listItem} onClick={handleServices}>Servicios <img src="/arrDown.svg" width='15' alt="" />
            <ul className={`${styles.servicesDrop} ${services && styles.servicesDropNon}`}>
              <li className={styles.subItem}>Servicio 1</li>
              <li className={styles.subItem}>Servicio 2</li>
              <li className={styles.subItem}>Servicio 3</li>
            </ul>
          </li>
          <li className={styles.listItem} >Partners</li>
          <li className={styles.listItem} >Soporte</li>
          <li className={styles.listItem} >Conócenos</li>
          <button>Ver</button>
        </ul>
      </nav>
    </div>
  )
}

export default Header
