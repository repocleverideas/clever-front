import React, { useState } from 'react'
import styles from '../styles/VideoMain.module.css'

function VideoMain() {
  const [video, setVideo] = useState(true)

  const handleVideo = () => {
    setVideo(!video)
  }

  return (
    <section className={styles.container}>
      <button>Mostrar</button>
      {
        video &&
        <div className={styles.modal}>
          <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/FIyKv1rTalI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      }
    </section>
  )
}

export default VideoMain
