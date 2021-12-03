import React from 'react'
import { Header, Footer } from '../components'
import styles from '../styles/nosotros/nosotros.module.css'
import { Button } from '../components'
import Hero from '../components/shared/Hero'
import Info from '../components/shared/Info'
import { Cta } from '../components'

function nosotros(data) {
  return (
    <>
      <Header />
      <section className={styles.hero} style={{background: data.hero.color}}>
        <Hero data={data} />
      </section>

      <section 
        style={{backgroundImage: `url(${data.info.background?.url})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', padding:'3rem 0'}}
      >
        <Info data={data} />
      </section>

      <section className={styles.background} style={{background: data.IFT.color}}>
        <div className={`layout`}>
          <div className={styles.text}>
            <span className={styles.category}>{data.IFT.category}</span>
            <h1 className={styles.title}>{data.IFT.title}</h1>
            <h3 style={{marginBottom:'30px'}}>{data.IFT.subtitle}</h3>
            {data.IFT.button && <Button href={data.IFT.link}>{data.IFT.button}</Button>}
          </div>


          <div className={styles.imgContainer}>
            {
              data.IFT.isVideo
                ? <video className={styles.videoSide} autoPlay muted controls loop>
                    <source src={data.IFT.image.image.url} type='video/mp4' />
                  </video>
                : <img className={styles.img} src={data.IFT.image.image.url} alt="" />
            }

          </div>
        </div>
      </section>

      <section className={styles.backgroundQuote} style={{backgroundImage: `url(${data.quote.background?.url})`}}>
        <div className='layout'>
          <img src={data.quote.image.url} alt="" className={styles.quoteImage} />
          <div className={styles.quoteText}>
            <h2>{data.quote.text}</h2>
            <p>{data.quote.autor}</p>
          </div>
        </div>
      </section>

      <Cta data={data.cta} />

      {/* <section className={styles.background} style={{background: data.hero.color}}>
        <div className={`layout`}>
          <div className={styles.text}>
            <span className={styles.category}>{data.hero.category}</span>
            <h1 className={styles.title}>{data.hero.title}</h1>
            <h3 style={{marginBottom:'30px'}}>{data.hero.subtitle}</h3>
            {data.hero.button && <a href={data.hero.link}><Button>{data.hero.button}</Button></a>}
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
      </section> */}

      {/* <section className={styles.cardsContainer} style={{background: data.benefits.color}}>
        <h2 className='column' style={{marginBottom:'1em', color:'#C4D600'}}>{data.benefits.title}</h2>
        <div className={`layout ${styles.cards}`}>
          {data.benefits.feature_item.map(item => (
            <div className={styles.card}>
              <img src={item.icon.url} className={styles.cardImg} alt="" />
              <h4>{item.feature_title}</h4>
              <p>{item.feature_description}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* <section className={styles.background} style={{background: data.entrepeneur.color}}>
        <div className={`layout`}>
          <div className={styles.text}>
            <span className={styles.category}>{data.entrepeneur.category}</span>
            <h1 className={styles.title}>{data.entrepeneur.title}</h1>
            <h3 style={{marginBottom:'30px'}}>{data.entrepeneur.subtitle}</h3>
            {data.entrepeneur.button && <a href={data.entrepeneur.link}><Button>{data.entrepeneur.button}</Button></a>}
          </div>


          <div className={styles.imgContainer}>
            {
              data.entrepeneur.isVideo
                ? <video className={styles.videoSide} autoPlay muted controls loop>
                    <source src={data.entrepeneur.image.image.url} type='video/mp4' />
                  </video>
                : <img className={styles.img} src={data.entrepeneur.image.image.url} alt="" />
            }

          </div>
        </div>
      </section> */}

      {/* <section className={styles.cardsContainer} style={{background: data.opinions.color}}>
        <h2 className='column' style={{marginBottom:'1em', color:'#C4D600'}}>{data.opinions.title}</h2>
        <div className={`layout ${styles.cards}`}>
          {data.opinions.feature_item.map(item => (
            <div className={styles.card}>
              <img src={item.icon.url} className={styles.cardImg} alt="" />
              <h4>{item.feature_title}</h4>
              <p>{item.feature_description}</p>
            </div>
          ))}
        </div>
      </section> */}

      <Footer />
    </>
  )
}

export default nosotros


export async function getStaticProps({ locale }) {
  // const res = await fetch(`http://localhost:1337/nosotros?_locale=${locale}`)
  const res = await fetch(`https://cleverideas-web.herokuapp.com/nosotros?_locale=${locale}`)
  const data = await res.json()

  return {
    props: data,
    revalidate: 1
  }
}
