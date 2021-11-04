import React, { useState } from 'react'
import { Header, HeroServicesTwo, Footer } from '../components'
import { Information } from '../components/partners'
import { Button } from '../components'
import styles from '../styles/partners/partners.module.css'

import Hero from '../components/shared/Hero'
import Info from '../components/shared/Info'
import { Cta } from '../components'

function HeroLeft({ data }) {
  return (
    <div className={`layout`}>
      <div className={styles.imgContainer}>
        {
          data.isVideo
            ? <video className={styles.videoSide} autoPlay muted controls loop>
                <source src={data.image.image.url} type='video/mp4' />
              </video>
            : <img className={styles.img} src={data.image.image.url} alt="" />
        }
      </div>

      <div className={styles.text}>
        <span className={styles.category}>{data.category}</span>
        <h1 className={styles.title}>{data.title}</h1>
        <h3 style={{marginBottom:'30px'}}>{data.subtitle}</h3>
        <Button href={data.link}>{data.button}</Button>
      </div>
    </div>
  )
}

function partners(data) {
  const [state, setState] = useState('contact')
  const handleState = (id_share) => {
    setState(id_share)
  }

  const filtered = () => {
    const filter = data.partnerTypes.tabImage.filter(item => item.id_share === state)
    return (
      <>
        <p className={styles.textTabs}>{filter[0].text}</p>
        <img src={filter[0].image.url} alt="" className={styles.imgTabs} />
      </>
    )
  }
  return (
    <div>
      <Header />
      {/* <HeroServicesTwo data={data.hero} />
      <Information data={data.information} image={data.image} /> */}
      <section className={styles.background} style={{background: data.hero.color && data.hero.color}}>
        <Hero data={data} />
      </section>

      <section style={{backgroundImage: `url(${data.info.background?.url})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
        <Info data={data} />
      </section>

      <section className={styles.tabsBackground}
        style={{backgroundImage: `url(${data.partnerTypes.background?.url})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}
      >
        <div className='column'>
          <h2 className={styles.tabsTitle}>{data.partnerTypes.title}</h2>
        </div>

        <div className={styles.containerTabs}>
          <div className={styles.containerButtons}>
            {
              data.partnerTypes.tabImage.map(item => (
              <div key={item.id} onClick={() => handleState(item.id_share)} className={styles.buttonContainer}>
                <img src={item.icon?.url} alt="" className={styles.buttonIcon} />
                <h4 className={`${styles.buttonItem} ${state === item.id_share && styles.selected}`}>{item.title}</h4>
              </div>
              ))
            }
          </div>
          {/* <p className={styles.textTabs}>{data.partnerTypes.text}</p> */}
          <div>
            {
              filtered()
            }
          </div>

        </div>
      </section>

      <Cta data={data.cta} />

      <Footer />
    </div>
  )
}

export default partners

export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  const res = await fetch(`https://clever-strapi.herokuapp.com/partners?_locale=${locale}`)
  // const res = await fetch(`http://localhost:1337/partners?_locale=${locale}`)
  const data = await res.json()

  return {
    props: data,
    revalidate: 1
  }
}