import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About/About'
import Header from '../components/Header'
import Slideshow from '../components/Menus/Slideshow'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={` ${styles.container}`}>
      <Head>
        <title>Kuisine Eats</title>
        <meta name="description" content="The best place to order your dishes and beverages" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Slideshow />
      <About />
    </div>
  )
}
