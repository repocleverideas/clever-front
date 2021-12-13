import React from 'react'
import Link from 'next/link'
import { Footer, Header } from '../../components'
import styles from './blogHome.module.css'
import Head from 'next/head'

function index({ posts, banner }) {
  const morePost = posts && posts.length > 7 && posts.slice(6)

  return (
    <div>
      <Head>
        <title>Blog | Clever IDEAS</title>
        <meta name="description" content="Clever Ideas 2021" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className={styles.blogHome}>

        <div className={styles.blogHomeMain}>
          <h1 className={styles.blog_title}>Clever IDEAS <span>Blog</span></h1>

          <section className={styles.grid}>
            {posts && posts.map((item, index) => (
              <Link key={index} href={`/blog/${item.slug}`}>
                <article className={styles.card}>
                  <div className={styles.cardImage}>
                    {/* <img src='https://images.unsplash.com/photo-1633114127451-558041183c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt="" /> */}
                    <img src={item.main_image.url} alt="" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.resume}</p>
                  <Link href={`/blog/${item.slug}`}>Leer más</Link>
                </article>
              </Link>
            ))}

          </section>
        </div>

        <div className={styles.banner}>
          <a href={banner.link} target="_blank" rel="noopener noreferrer">
            <div className={styles.bannerImage}>
              {/* <img src="/bannerBlogTest.jpeg" alt="" /> */}
              <img src={banner.banner.url} alt="" />
            </div>
          </a>
          {
            posts && posts.length > 6
            ? (
              <div className={styles.bannerMore}>
                <h4>Más entradas</h4>
                <ul>
                  {morePost.map((item, index) => (
                    <Link href={`/blog/${item.slug}`}><li key={index}>{item.title}</li></Link>
                  ))}
                </ul>
              </div> 
            )
            : null
          }
        </div>

      </section>

      <Footer />

    </div>
  )
}

export default index

export async function getStaticProps({ locale }) {
  // const res = await fetch(`https://cleverideas-web.herokuapp.com/blogs`)
  const res = await fetch(`https://cleverideas-web.herokuapp.com/blogs?_locale=${locale}`)
  const posts = await res.json()


  const bannerRes = await fetch(`https://cleverideas-web.herokuapp.com/blog-home`)
  const banner = await bannerRes.json()

  return {
    props: { posts, banner }
  }
}