import React from 'react'
import { Button } from '.'
import styles from '../styles/Hero.module.css'

function Hero({ data }) {
  return (
    <div className={styles.background} style={{backgroundImage: `url(${data.background?.url})`}}>
      <div className='column'>
        <h1 className={styles.title}>{data.title}</h1>

        <div className={styles.info}>
          {
            data.isVideo
              ? <iframe className={styles.videoSide} src={data.youtubeLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
              // <video className={styles.image} autoPlay muted controls width='520' height='300'>
              //     <source src={data.image.image.url} type='video/mp4' />
              //   </video>
              : <img className={styles.image} src={data.image.image.url} alt="" />
          }

          <div className={styles.text}>
            <p className={styles.description}>{data.subtitle}</p>
            <Button href={data.link}>{data.button}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
