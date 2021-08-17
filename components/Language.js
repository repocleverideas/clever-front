import React from 'react'
import styles from '../styles/language.module.css'
import { useRouter } from 'next/router'

function Language() {
  const router = useRouter()
  const { locale } = router

  const changeLanguage = (e) => {
    const locale = e.target.value
    router.push(router.pathname, router.pathname, { locale })
    // console.log(locale)
  }

  return (
    <select
      name="locale"
      id="locale"
      onChange={changeLanguage}
      defaultValue={locale}
      className={styles.select}
    >
      <option value="es">🇲🇽</option>
      <option value="en">🇺🇸</option>
    </select>
  )
}

export default Language
