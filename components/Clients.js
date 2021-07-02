import React, { useRef } from 'react'
import { useIntersection } from 'react-use'
import styles from '../styles/Clients.module.css'

function Clients({ data }) {
  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '10px',
    threshold: 1
  })

  const animation = intersection && intersection.isIntersecting > .5 && styles.animation

  return (
    <section className={styles.container}>
      <div className={`${styles.content}`} ref={intersectionRef}>
        <h3 className={`column ${styles.title}`}>{data.tile}</h3>
        <div className={`layout ${styles.gap}`}>
          {
            data.client_item.map(item => (
              <div key={item._id}>
                <div  className={styles.comment}>
                  <h4 className={styles.title_testimony}>{item.title_testimony}</h4>
                  <p className={styles.description}>{item.description_testimony}</p>
                </div>
                <div className={styles.position}>
                  <h5 className={styles.client}>{item.client}</h5>
                  <p className={styles.position_text}>{item.client_posiiton}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Clients

// {
//   intersection && intersection.intersectionRatio < 1
//     ? 'Obscured'
//     : 'Full in view'
// }
