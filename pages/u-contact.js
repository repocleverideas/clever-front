import React, { useState } from 'react'
import Head from 'next/head'
import { Header, Footer } from '../components'
import styles from '../styles/uContact/uContact.module.css'
import CarouselScreens from '../components/ucontact/CarouselScreens'
import { Button } from '../components'


function uContact(data) {
  const [state, setState] = useState('voice')
                                    // 614a96529498647f3ce259fd
  const handleState = (id) => {
    setState(id)
  }
  const filteredList = () => {
    const filter = data.tabs.filter(item => item.id_share === state)
    // console.log(filter)
    const features = filter.map(item => item.item_simple)

    return features[0].map(item => (
      <div key={item.id} className={styles.itemFeature}>
        <img src={item.icon?.url} alt="" className={styles.itemFeatureIcon} />
        {item.text}
      </div>
    ))
  }
  return (
    <>
      <Head>
        <title>uContact</title>
        <meta name="description" content="uContact - Clever IDEAS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section className={styles.background} style={{background: data.hero.color && data.hero.color}}>
        <div className={`layout`}>
          <div className={styles.text}>
            <span className={styles.category}>{data.hero.category}</span>
            <h1 className={styles.title}>{data.hero.title}</h1>
            <h3 style={{marginBottom:'30px'}}>{data.hero.subtitle}</h3>
            <Button href={data.hero.link}>{data.hero.button}</Button>
          </div>


          <div className={styles.imgContainer}>
            {
              data.hero.isVideo
                ? <video className={styles.videoSide} autoPlay muted controls loop>
                    <source src={data.hero.image.image.url} type='video/mp4' />
                  </video>
                : <img className={styles.img} src={data.hero.image.image.url} alt="" />
            }

          </div>
        </div>
      </section>

      <section className={styles.background} style={data.complement[0].color ? {background: data.complement[0].color} : {backgroundImage: `url(${data.complement[0].background?.url})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
      {/* {background: data.complement[0].color} || {backgroundImage: data.complement[0].background.url} */}
        <div className={`layout`}>

          <div className={styles.imgContainer}>
            {
              data.complement[0].isVideo
                ? <video className={styles.videoSide} autoPlay muted controls loop>
                    <source src={data.complement[0].image.image.url} type='video/mp4' />
                  </video>
                : <img className={styles.img} src={data.complement[0].image.image.url} alt="" />
            }
          </div>

          <div className={styles.textSecond}>
            <h1 className={styles.titleSecond}>{data.complement[0].title}</h1>
            <h3 style={{marginBottom:'30px'}} className={styles.subtitle}>{data.complement[0].description}</h3>
          </div>
        </div>
      </section>

      <div className={styles.backgroundFeat} style={{ background: data.features.color && data.features.color }}>
        <div className='column'>
          <h2 className={styles.titleFeat}>{data.features.title}</h2>
          <p className={styles.descriptionFeat}>{data.features.description}</p>
        </div>
        <div className={`layout ${styles.gap}`}>
          {
            data.features.features.map(item => (
              <div key={item.id} className={styles.item}>
                <img src={item.icon?.url} alt="" width={25} />
                <span>{item.feature_title}</span>
              </div>
            ))
          }
        </div>
      </div>

      <section className={styles.backgroundPlatform} style={{background: data.complement[1].color && data.complement[1].color}}>
        <h1 className={styles.titlePlatform}>{data.complement[1].title}</h1>
        <div className={`layout`}>
          <div className={styles.imgContainer}>
            {
              data.complement[1].isVideo
                ? <video className={styles.videoSide} autoPlay muted controls loop>
                    <source src={data.complement[1].image.image.url} type='video/mp4' />
                  </video>
                : <img className={styles.img} src={data.complement[1].image.image.url} alt="" />
            }

          </div>

          <div className={styles.text} style={{marginLeft:'24px'}}>
            <h3 style={{marginBottom:'30px'}} className={styles.subtitle}>{data.complement[1].subtitle}</h3>
            <Button href={data.complement[1].link}>{data.complement[1].button}</Button>
          </div>

        </div>
      </section>


      <section className={styles.buttonsBackground}
        style={{backgroundImage: `url(${data.tabsBackground?.url})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}
      >
        <h2>{data.tab_title}</h2>
        <div className={styles.buttons}>
          {
            data.tabs.map(item => (
              <div key={item.id} onClick={() => handleState(item.id_share)} className={styles.buttonContainer}>
                <img src={item.icon.url} alt="" className={styles.buttonIcon} />
                <div className={`${styles.buttonItem} ${state === item.id_share && styles.selected}`}>{item.title}</div>
              </div>
            ))
          }
        </div>
        <div className={styles.itemsContainer}>
          <div className={styles.itemsGrid}>
            {
              filteredList()
            }
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default uContact

export async function getStaticProps({ locale }) {
  // const res = await fetch(`http://localhost:1337/ucontact?_locale=${locale}`)
  const res = await fetch(`https://clever-strapi.herokuapp.com/ucontact?_locale=${locale}`)
  const data = await res.json()

  return {
    props: data,
    revalidate: 1
  }
}
