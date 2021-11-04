import React, { useState } from 'react'
import styles from '../styles/Benefits.module.css'

function Benefits({ data }) {
  const [state, setState] = useState('60d10af57fc8c60566f0abfb')
  const handleState = (e) => {
    const newState = e.target.value
    setState(newState)
  }

  const filtered = () => {
    const filter = data.benefit_item.filter(item => item.id === state)
    // console.log(filter.description)
    return filter.map(item => (
      <p key={item.id} className={styles.textSelected}>{item.description}</p>
    ))
  }

  // const filter = data.benefit_item.filter(item => item.id === state)
  //   console.log(filter.map(item => item.description))

  return (
    <section className={styles.background}>
      <h3 className={styles.title}>{data.title}</h3>
      <div className={styles.content}>
        <div className={styles.buttons}>
          {/* <button value={0} onClick={handleState} className={`${styles.button} ${state == 0 && styles.select}`}>{data.benefit_item[0].slug}</button>
          <button value={1} onClick={handleState} className={`${styles.button} ${state == 1 && styles.select}`}>{data.benefit_item[1].slug}</button>
          <button value={2} onClick={handleState} className={`${styles.button} ${state == 2 && styles.select}`}>{data.benefit_item[2].slug}</button>
          <button value={3} onClick={handleState} className={`${styles.button} ${state == 3 && styles.select}`}>{data.benefit_item[3].slug}</button> */}
          {
            data.benefit_item.map(item => (
              <div key={item.id} className={styles.buttonIcon}>
                <img src={item.icon?.url} alt=""  className={styles.icon}/>
                <button  value={item.id} onClick={handleState} className={`${styles.button} ${state === item.id && styles.select}`}>{item.slug}</button>
              </div>
            ))
          }
        </div>
        {/* { data.benefit_item[state].description } */}
        {
          // data.benefit_item.map(item => (item.slug))
          filtered()
        }
      </div>
    </section>
  )
}

export default Benefits
