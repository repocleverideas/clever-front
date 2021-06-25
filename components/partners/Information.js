import React, { useState } from 'react'
import styles from '../../styles/partners/information.module.css'

function Information({ data, image }) {
  const [state, setState] = useState(0)
  const changeState = (e) => {
    setState(e.target.value)
  }


  return (
    <section className={`column`}>
      <h3 className={styles.title}>{data.title}</h3>
      <p>{data.description}</p>

      <div>
        <h4 className={styles.title}>{data.model}</h4>
        <div className={styles.buttons}>
          <button onClick={changeState} value={0} className={`${styles.button} ${state == 0 && styles.select}`}>{data.models[0].slug}</button>
          <button onClick={changeState} value={1} className={`${styles.button} ${state == 1 && styles.select}`}>{data.models[1].slug}</button>
          <button onClick={changeState} value={2} className={`${styles.button} ${state == 2 && styles.select}`}>{data.models[2].slug}</button>
        </div>
        <p>{data.models[state].description}</p>
      </div>
      <div className={`column ${styles.imgContainer}`}>
        <img src={image.url} alt="" className={styles.image} />
      </div>
    </section>
  )
}

export default Information
