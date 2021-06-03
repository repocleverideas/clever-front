import { useState } from 'react'
import Image from 'next/image'
import { Nav, Button } from '../components'
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
        <Button>Charlemos</Button>
        <select name="" id="" className={styles.select}>
          <option value="">ES 🇪🇸</option>
          <option value="">EN 🇺🇸</option>
        </select>
        <img src="/menu.svg" alt="menu" className={styles.menu_icon} onClick={handleMenu} />
        <ul className={`${menu ? styles.menu_displayed : styles.menu_displayed_non}`}>
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
