import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'
import styles from  '../styles/clientsCarousel.module.css'

SwiperCore.use([Pagination, Autoplay, Navigation])

function ClientsCarousel({ data }) {
  return (
    <div style={{background: data.color}} className={styles.container}>
      <h1 style={{textAlign:'center', color:'white'}}>{data.title}</h1>
      <Swiper
        slidesPerView={1}
        // pagination={{ clickable: true }}
        navigation
        autoplay={{ 'delay': 3500 }}
        className={styles.swiper}
      >
        {
          data.feature_item.map(item => (
            <SwiperSlide key={item.id}>
              <div className={styles.slide}>
                {/* <img className={styles.slideImg} src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" /> */}
                <div className='column'>
                  <div className={styles.slideContent}>
                    <div className={styles.slideImg}>
                      <img src={item.icon.url} alt="" className={styles.img} />
                    </div>
                    <div>
                      <p className={`${styles.title} ${styles.bold}`}>{item.feature_description}</p>
                      <p className={styles.title}>{item.feature_title}</p>
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

export default ClientsCarousel
