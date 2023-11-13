import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { Nav, Language } from '../components'
import styles from '../styles/Header.module.css'

const es = {
  enterprise: 'Empresas',
  support: 'Soporte',
  us: 'Nosotros',
  notices: 'Avisos',
  agents: 'Agentes',
  line: 'Línea',
  education: 'Educación'
}
const en = {
  enterprise: 'Enterprise',
  support: 'Support',
  us: 'Us',
  notices: 'Notices',
  agents: 'Agents',
  line: 'Line',
  education: 'Education'
}

function Header() {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'es' ? es : en

  const menuDropItems = [
    { 
      title: 'Contact Centers', 
      links: [ 
        { navTitle: 'uContact', link: '/u-contact' },
        { navTitle: 'Chat', link: '/chat' },
        { navTitle: t.notices, link: '/avisos' },
        { navTitle: t.agents, link: '/agentes' },
      ] 
    },
    { 
      title: t.enterprise, 
      links: [ 
        { navTitle: 'PBX', link: '/pbx' },
        { navTitle: t.line, link: '/clever-linea' },
        { navTitle: 'Show Me', link: '/show' },
        { navTitle: 'Whatsapp Business', link: '/wab' },
        { navTitle: 'Conference', link: '/conference' },
        { navTitle: 'Evidence', link: '/evidence' },
      ] 
    },
    { 
      title: 'IoT', 
      links: [ 
        { navTitle: 'IoT in a Box', link: '/iot-box' },
        { navTitle: 'Connect', link: '/connect' },
      ] 
    }
  ]

  const menuSingleItems = [
    { navTitle: t.education, link: '/educacion' },
    { navTitle: 'Partners', link: '/partners' },
    { navTitle: t.support, link: '/soporte' },
    { navTitle: t.us, link: '/nosotros' },
    { navTitle: 'Blog', link: '/blog' },
  ]

  // Open and close Menu
  const [menu, setMenu] = useState(false)
  const handleMenu = () => {
    setMenu(!menu)
  }

  // Manage services items
  const [services, setServices] = useState()
  const handleServices = (index) => {
    if(index === services) {
      setServices(null)
    } else {
      setServices(index)
    }
  }

  return (
    <div className={styles.header}>
      
      <div className={styles.logoContainer}>
        <Link href='/'>
          <Image src='/logo-black-h.png' alt='Clever Logo' width={90} height={30} priority />
        </Link>
      </div>

      <nav className={styles.nav}>
        <Nav menuDropItems={menuDropItems} menuSingleItems={menuSingleItems} />
        <Language />

        <div className={`${styles.menu_icon} ${menu && styles.menu_icon_open}`} onClick={handleMenu}>
          <div className={styles.menu_bar}></div>
          <div className={styles.menu_bar}></div>
          <div className={styles.menu_bar}></div>
        </div>

        <ul className={`${styles.menu_hidden} ${!menu && styles.displayed}`}>
          { menuDropItems.map((section, index) => (
            <li 
              key={`SectionItem-${index}`}
              className={styles.listItem} 
              onClick={() => handleServices(index)}
            >
              {section.title} 
              <img src="/arrDown.svg" width='15' alt="" />

              { services === index && section.links.map((item, index) => (
                <ul key={`MenuItem-${index}`}
                 className={`${styles.servicesDrop} 
                    
                  `}
                >
                  <li className={styles.subItem}>
                    <Link href={item.link} className={styles.link}>{item.navTitle}</Link>
                  </li>
                </ul>

              )) }
            
            </li>
          )) }

          { menuSingleItems.map((item, index) => (
            <Link href={item.link} key={`SingleItem-${index}`}>
              <li className={styles.listItem}>{item.navTitle}</li>
            </Link>
          )) }

        </ul>
      </nav>
    </div>
  )
}

export default Header
