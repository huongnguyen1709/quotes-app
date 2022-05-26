import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Quotes | Home</title>
        <meta name='keywords' content='quotes' />
      </Head>
      <div>
        <h1 className={styles.title}>Welcome to Quotes World</h1>
        <p className={styles.text}>Quotes can help generate ideas within brainstorming, which can influence the ideas within the piece. They can send you in new directions by presenting the ideas of others. Finally, quotes can be a succinct way to fuel a writer as they pull a piece together, which will not distract them from writing for too long</p>
      </div>
    </>
  )
}
