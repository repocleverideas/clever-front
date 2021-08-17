import React from 'react'
import Head from 'next/head'
import { Header, Footer } from '../components'
import styles from '../styles/uContact/uContact.module.css'
import CarouselScreens from '../components/ucontact/CarouselScreens'
import { Button } from '../components'


function uContact(data) {
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
            <a href={data.hero.link}><Button>{data.hero.button}</Button></a>
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

      {/* Video Background */}
      {/* <section className={styles.backgroundVideo}>
        <div className={styles.videoContainer}>
          <video className={styles.video} autoPlay muted loop>
            <source src={data.hero.image.image.url} type='video/mp4' />
          </video>
        </div>
        <div className={styles.colorBackground}></div>
        <div className={`column ${styles.textVideo}`}>
          <div className={`column ${styles.textVideoBack}`}>
            <span className={styles.category}>{data.hero.category}</span>
            <h1 className={styles.title}>{data.hero.title}</h1>
            <h3>{data.hero.subtitle}</h3>
          </div>
        </div>
      </section> */}

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

      <section className={styles.background} style={{background: data.complement[0].color && data.complement[0].color}}>
        <div className={`layout`}>
          <div className={styles.text}>
            {/* <span className={styles.category}>{data.hero.category}</span> */}
            <h1 className={styles.title}>{data.complement[0].title}</h1>
            <h3 style={{marginBottom:'30px'}}>{data.complement[0].subtitle}</h3>
            <a href={data.complement[0].link}><Button>{data.complement[0].button}</Button></a>
          </div>


          <div className={styles.imgContainer}>
            {
              data.complement[0].isVideo
                ? <video className={styles.videoSide} autoPlay muted controls loop>
                    <source src={data.complement[0].image.image.url} type='video/mp4' />
                  </video>
                : <img className={styles.img} src={data.complement[0].image.image.url} alt="" />
            }

          </div>
        </div>
      </section>

      <section className={styles.background} style={{background: data.complement[1].color && data.complement[1].color}}>
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
            {/* <span className={styles.category}>{data.hero.category}</span> */}
            <h1 className={styles.title}>{data.complement[1].title}</h1>
            <h3 style={{marginBottom:'30px'}}>{data.complement[1].subtitle}</h3>
            {/* <a href={data.complement[1].link}><Button>{data.complement[1].button}</Button></a> */}
          </div>

        </div>
      </section>

      <section className={styles.cardsContainer} style={{background: data.complement[2].color && data.complement[2].color}}>
        <h2 className='column' style={{marginBottom:'1em'}}>{data.complement[2].title}</h2>
        <div className={`layout ${styles.cards}`}>
          {data.complement[2].feature_item.map(item => (
            <div className={styles.card}>
              <img src={item.icon.url} className={styles.cardImg} alt="" />
              <h4>{item.feature_title}</h4>
              <p>{item.feature_description}</p>
            </div>
          ))}
        </div>
      </section>

      <CarouselScreens data={data.carousel} />

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
