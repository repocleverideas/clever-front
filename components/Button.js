import React from 'react'
import styles from '../styles/Button.module.css'

function Button({ children, href }) {
  return (
    <a href={href} target='_blank' className={styles.button}>
      { children }
    </a>
  )
}

export default Button
