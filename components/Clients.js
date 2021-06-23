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

  const animation = intersection && intersection.isIntersecting > .5 && styles.anim

  return (
    <div className={styles.container}>
      <h3 className={`${styles.title} ${animation}`} ref={intersectionRef}>
        Clientes
        <div className={styles.comments}>
          <div className={styles.comment}>1</div>
          <div className={styles.comment}>2</div>
          <div className={styles.comment}>3</div>
        </div>
      </h3>
    </div>
  )
}

export default Clients

// {
//   intersection && intersection.intersectionRatio < 1
//     ? 'Obscured'
//     : 'Full in view'
// }
