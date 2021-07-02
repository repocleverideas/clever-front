import React from 'react'
import styles from '../styles/BrandsClients.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Pagination, Autoplay])


function BrandsClients({ data }) {
  return (
    <section className={`layout ${styles.background}`}>
      <div className={styles.text}>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.description}>{data.description}</p>
      </div>
      <div className={styles.logos}>
        {
          data.logo.map(item => (
            <div key={item.id}>
              <img
                src={item.image.url}
                alt=""
                className={styles.logoImg}
              />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default BrandsClients
