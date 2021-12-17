import React from 'react'
import Link from 'next/link'
import { Footer, Header } from '../../components'
import styles from './blogHome.module.css'
import Head from 'next/head'
import { useRouter } from 'next/router'

function index({ posts, banner }) {
  const gridPosts = posts.slice(0, 5)
  const morePost = posts && posts.length > 5 && posts.slice(5)

  const es = {
    read: 'Leer más'
  }

  const en = {
    read: 'Read more'
  }

  const router = useRouter()
  const { locale } = router
  
  const t = locale === 'es' ? es : en

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
            {posts && gridPosts.map((item, index) => (
              <Link key={index} href={`/blog/${item.slug}`}>
                <article className={styles.card}>
                  <div className={styles.cardImage}>
                    <img src={item.main_image.url} alt="" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.resume}</p>
                  <Link href={`/blog/${item.slug}`}>{t.read}</Link>
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
            posts && posts.length > 5
            ? (
              <div className={styles.bannerMore}>
                <h4>Más entradas</h4>
                <ul>
                  {morePost.map((item, index) => (
                    <li key={index}><Link href={`/blog/${item.slug}`}><a key={index}>{item.title}</a></Link></li>
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

  posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))


  const bannerRes = await fetch(`https://cleverideas-web.herokuapp.com/blog-home`)
  const banner = await bannerRes.json()

  return {
    props: { posts, banner },
    revalidate: 1
  }
}