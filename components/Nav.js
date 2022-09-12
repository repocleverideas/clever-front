import React from 'react'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'

function Nav({ menuDropItems, menuSingleItems }) {
  return (
    <ul className={styles.nav}>
      { menuDropItems.map((section, index) => (
        <li key={`SectionItem-${index}`} className={`${styles.navItem} ${styles.dropItem}`}>{section.title}<img src="/arrDown.svg" width={13} alt="" />
        <div className={styles.menuDrop}>
          { section.links.map((item, index) => (
            <div className={styles.serviceSection} key={`MenuItem-${index}`}>
              <Link href={item.link}><a className={styles.serviceTitle}>{item.navTitle}</a></Link>
            </div>
          )) }

        </div>
      </li>
      )) }

      { menuSingleItems.map((item, index) => (
        <li className={styles.navItem} key={`SingleItem-${index}`}>
          <Link href={item.link}>{item.navTitle}</Link>
        </li>
      )) }
      
    </ul>

  )
}

export default Nav
