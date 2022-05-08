import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <Link href="/login">Login</Link>
        <Link href="/dashboard">Dashboard</Link>
      </Head>
    </div>
  )
}
