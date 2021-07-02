import React, { useState } from 'react'
import styles from '../styles/VideoMain.module.css'

function VideoMain() {
  // const [video, setVideo] = useState(true)

  // const handleVideo = () => {
  //   setVideo(!video)
  // }

  return (
    <section className={styles.container}>
      <iframe className={styles.video}  src="https://www.youtube.com/embed/FIyKv1rTalI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </section>
  )
}

export default VideoMain
