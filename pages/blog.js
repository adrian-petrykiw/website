import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  SectionTitle,
} from '../components/shared-styled'

export default function Blogs() {
    return (
      <div className={styles.container}>
        <Head>t
          <title>Illini Blockchain</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <SectionTitle>Blogs</SectionTitle>
        
      </div>
    )
  }