import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Nav, Button, Language } from '../components'
import styles from '../styles/Header.module.css'

function Header() {
  const [menu, setMenu] = useState(false)
  const [services, setServices] = useState(true)

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
        <Link href='/'>
          <a><Image src='/logo-black-h.png' alt='Clever Logo' layout='fill' priority /></a>
        </Link>
      </div>
      <nav className={styles.nav}>
        <Nav />
        <Language />
        <Link href='/contacto'><a><Button>Charlemos</Button></a></Link>

        <div className={`${styles.menu_icon} ${menu && styles.menu_icon_open}`} onClick={handleMenu}>
          <div className={styles.menu_bar}></div>
          <div className={styles.menu_bar}></div>
          <div className={styles.menu_bar}></div>
        </div>

        <ul className={`${styles.menu_hidden} ${menu && styles.displayed}`}>
          <li className={styles.listItem} onClick={handleServices}>Servicios <img src="/arrDown.svg" width='15' alt="" />
            <ul className={`${styles.servicesDrop} ${services && styles.servicesDropNon}`}>
              <li className={styles.subItem}>
                <h4>Oficina Virtual</h4>
                <Link href='/clever-linea'><a className={styles.link}>Clever Linea</a></Link>
                <Link href='/pbx'><a className={styles.link}>Clever PBX</a></Link>
                <Link href='/conference'><a className={styles.link}>Clever Conference</a></Link>
                <Link href='/show'><a className={styles.link}>Clever Show</a></Link>
              </li>
              <li className={styles.subItem}>
                <h4>Contact Center</h4>
                <Link href='/u-contact'><a className={styles.link}>Clever uContact</a></Link>
                <Link href='/chat'><a className={styles.link}>Clever Chat</a></Link>
                <Link href='/avisos'><a className={styles.link}>Clever Avisos</a></Link>
              </li>
              <li className={styles.subItem}>
                <h4>IoT</h4>
                <Link href='/iot-box'><a className={styles.link}>IoT in a Box</a></Link>
                <Link href='/tracking'><a className={styles.link}>Clever Tracking</a></Link>
                <Link href='/connect'><a className={styles.link}>Clever Connect</a></Link>
              </li>
              <li className={styles.subItem}>
                <h4>Smart App's</h4>
                <Link href='/evidence'><a className={styles.link}>Clever Evidence</a></Link>
                <Link href='/ptt'><a className={styles.link}>Clever PTT</a></Link>
                <Link href='/wallet'><a className={styles.link}>Clever Wallet</a></Link>
              </li>
            </ul>
          </li>

          <Link href='/partners'><li className={styles.listItem}>Partners</li></Link>
          <Link href='/soporte'><li className={styles.listItem}>Soporte</li></Link>
          <Link href='/nosotros'><li className={styles.listItem}>Conócenos</li></Link>

          <button>Ver</button>
        </ul>
      </nav>
    </div>
  )
}

export default Header
