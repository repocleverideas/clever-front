import React from 'react'
import { Button } from '.'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'
import styles from  '../styles/mainCarousel.module.css'
import Image from 'next/image'

SwiperCore.use([Pagination, Autoplay, Navigation])

function MainCarousel({ data }) {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ 'delay': 5000 }}
        className={styles.swiper}
      >
        {
          data.map(item => (
            <SwiperSlide key={item.id}>
              <div className={styles.slide}>
                <Image
                  height={1200}
                  width={1350}
                  className={styles.slideImg}
                  src={item.image.image?.url}
                  placeholder='blur'
                  blurDataURL={item.image.image?.url}
                  quality={50}
                  alt="Clever Services"
                />
                <div className={styles.slideContent}>
                  <div className={`column`}>
                    <div className={styles.content}>
                      <span>{item.category}</span>
                      <h1 className={styles.title}>{item.title}</h1>
                      <p className={styles.subtitle}>{item.subtitle}</p>
                      <Button href={item.link}>{item.button}</Button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default MainCarousel
