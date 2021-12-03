import React, { useState } from 'react'
import Head from 'next/head'
import { Header, Footer } from '../components'
// import styles from '../styles/iotBox/iotBox.module.css'
import styles from '../styles/uContact/uContact.module.css'
import { Button } from '../components'

function iotBox(data) {
  const [state, setState] = useState('one')

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
        <title>Iot in a Box</title>
        <meta name="description" content="Iot in a box - Clever IDEAS" />
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
                ? <iframe className={styles.videoSide} src={data.hero.youtubeLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  // <video className={styles.videoSide} autoPlay muted controls loop>
                  //   <source src={data.hero.image.image.url} type='video/mp4' />
                  // </video>
                // : <Image width={500} height={500} placeholder="blur" className={styles.img} src={data.hero.image.image.url} alt="" />
                : <img className={styles.img} src={data.hero.image.image.url} alt="" />
            }

          </div>
        </div>
      </section>

      <section className={styles.background} style={data.info.color ? {background: data.info.color} : {backgroundImage: `url(${data.info.background?.url})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
      {/* {background: data.complement[0].color} || {backgroundImage: data.complement[0].background.url} */}
        <div className={`layout`}>

          <div className={styles.imgContainer}>
            {
              data.info.isVideo
                ? <iframe className={styles.videoSide} src={data.info.youtubeLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
                  //  <video className={styles.videoSide} autoPlay muted controls loop>
                  //     <source src={data.info.image.image.url} type='video/mp4' />
                  //   </video>
                // : <Image width={500} height={500} placeholder="blur" className={styles.img} src={data.info.image.image.url} alt="" /> 
                :  <img className={styles.img} src={data.info.image.image.url} alt="" />
            }
          </div>

          <div className={styles.textSecond}>
            <h1 className={styles.titleSecond}>{data.info.title}</h1>
            <h3 style={{marginBottom:'30px'}} className={styles.subtitle}>{data.info.description}</h3>
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
            data.features.feature_item.map(item => (
              <div key={item.id} className={styles.item}>
                <img src={item.icon?.url} alt="" width={50} />
                <span>{item.feature_title}</span>
              </div>
            ))
          }
        </div>
      </div>

      <section className={styles.backgroundPlatform} style={{background: data.info2.color && data.info2.color}}>
        <h1 className={styles.titlePlatform}>{data.info2.title}</h1>
        <div className={`layout`}>
          <div className={styles.imgContainer}>
            {
              data.info2.isVideo
                ? <iframe className={styles.videoSide} src={data.info2.youtubeLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
                // <video className={styles.videoSide} autoPlay muted controls loop>
                //     <source src={data.info2.image.image.url} type='video/mp4' />
                //   </video>
                // : <Image width={500} height={500} placeholder="blur" className={styles.img} src={data.info2.image.image.url} alt="" />
                :  <img className={styles.img} src={data.info2.image.image.url} alt="" />
            }

          </div>

          <div className={styles.text} style={{marginLeft:'24px'}}>
            <h3 style={{marginBottom:'30px'}} className={styles.subtitle}>{data.info2.subtitle}</h3>
            <Button href={data.info2.link}>{data.info2.button}</Button>
          </div>

        </div>
      </section>


      <section className={styles.buttonsBackground}
        style={{backgroundImage: `url(${data.tabsBackground?.url})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}
      >
        <h2 className={styles.buttonsTitle}>{data.tabs_title}</h2>
        <div className={styles.buttons}>
          {
            data.tabs.map(item => (
              <div key={item.id} onClick={() => handleState(item.id_share)} className={styles.buttonContainer}>
                <img src={item.icon?.url} alt="" className={styles.buttonIcon} />
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

export default iotBox

export async function getStaticProps({ locale }) {
  // http://localhost:1337/home?_locale=en
  // const res = await fetch(`http://localhost:1337/iot-v-2?_locale=${locale}`)
  const res = await fetch(`https://cleverideas-web.herokuapp.com/iot-v-2?_locale=${locale}`)
  const data = await res.json()

  return {
    props: data,
    revalidate: 1
  }
}
