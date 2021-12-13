import React from 'react'
import { Button } from '..'
import styles from './Info.module.css'
import Link from 'next/link'

function Info({ data }) {
  return (
    <div className={styles.infoBackground}>
      <div className='column'>
        <h2 className={styles.titleInfo}>{data.info.category}</h2>
      </div>
      <div className='layout'>
        <img src={data.info.image.image.url} alt="" className={styles.imgInfo} />

        <div>
          <h2>{data.info.title}</h2>
          <p className={styles.subtitle}>{data.info.description}</p>
          {/* <Button href='/ruta'>{data.info.button}</Button> */}
          <Link href='/ruta'><a className={styles.button}>{data.info.button}</a></Link>
        </div>
      </div>

    </div>
  )
}

export default Info
