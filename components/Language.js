import React from 'react'
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
    >
      <option value="es">ES</option>
      <option value="en">EN</option>
    </select>
  )
}

export default Language
