import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'

import styles from '../../styles/uContact/carouselScreens.module.css'

SwiperCore.use([Pagination, Autoplay, Navigation])

function CarouselScreens({ data }) {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{'delay': 3500}}
        className={styles.swiper}
      >
        {
          data.map(item => (
            <SwiperSlide key={item.id}>
              <div className={`column`}>
                <div className={styles.text}>
                  <h2 className={styles.title}>{item.title}</h2>
                  <h4>{item.subtitle}</h4>
                </div>
                <img className={styles.img} src={item.image.url} alt="" />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
  )
}

export default CarouselScreens
