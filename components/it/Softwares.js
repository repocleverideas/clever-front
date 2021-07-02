import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
// import "swiper/components/navigation/navigation.min.css"
import styles from '../../styles/cleverIt/softwares.module.css'

SwiperCore.use([Navigation, Pagination, Autoplay])

function Softwares({ data }) {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{'delay': 2500}}
        className={styles.swiper}
        // navigation
        // centeredSlides={true}
      >
        {
          data.map(item => (
            <SwiperSlide key={item.id} className={styles.slide}>
              <h3 className={styles.title}>{item.feature_title}</h3>
              <div className={`layout ${styles.layout}`}>
                <div className={styles.imgContainer}>
                  <img className={styles.img} src={item.icon.url} alt="" />
                </div>
                <div>
                  <h4 className={styles.subtitle}>{item.link}</h4>
                  <p>{item.feature_description}</p>
                </div>
              </div>
            </SwiperSlide>

          ))
        }

      </Swiper>
    </div>
  )
}

export default Softwares
