import React from 'react'
import { Header, Footer } from '../../components'
import ReactMarkdown from 'react-markdown'
import styles from './singleBlog.module.css'
import Link from 'next/link'
import Head from 'next/head'

function blog({ post }) {
  // const date = post?.date && new Date(post.date)
  const opt = { year: 'numeric', month: 'long', day: 'numeric' }

  return (
    <>
      <Head>
        <title>{post.title} | Clever IDEAS</title>
        <meta name="description" content="Clever Ideas 2021" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section className={styles.blog}>
        <div className={styles.blog_title}>
          <Link href='/blog'>
            <div>Clever IDEAS <span>Blog</span></div>
          </Link>
        </div>

        <div className={styles.titleSection}>
          <h1 className={styles.title}>{post.title}</h1>
          {/* <p>{date.toLocaleDateString('es', opt)}</p> */}
          <p>{post.author && `Autor: ${post.author}`}</p>
        </div>
        

        <img src={post.main_image?.url} className={styles.mainImage} alt="" />

        <ReactMarkdown className={styles.content}>
          {post.content}
        </ReactMarkdown>
      </section>
      <Footer />
    </>
  )
}

export default blog

export async function getStaticPaths() {
  const res = await fetch(`https://cleverideas-web.herokuapp.com/blogs`)
  const data = await res.json()

  const paths = data.map(item => ({
    params: { slug: item.slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const res = await fetch(`https://cleverideas-web.herokuapp.com/blogs?slug=${slug}`)
  const data = await res.json()


  const post = data[0]

  return {
    props: { post },
    revalidate: 1
  }
}

