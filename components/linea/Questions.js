import React, { useState } from 'react'
import styles from '../../styles/linea/questions.module.css'

function Questions({ data }) {
  const [state, setState] = useState(data.question[0].id)
  const changeState = (id) => {
    setState(id)
  }

  return (
    <section className={`column ${styles.background}`}>
      <h2 className={styles.title}>{data.title}</h2>
      <div>
        {
          data.question.map(item => (
            <div key={item.id}>
              <div
                onClick={() => changeState(item.id)}
                className={`${styles.question} ${item.id === state && styles.select}`}
              >
                {item.slug}
              </div>
              <div>
                {
                  item.id === state &&
                  <p className={styles.answer}>{data.question[0].description}</p>
                }
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Questions
