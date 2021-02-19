import Head from 'next/head'
import Layout from '../components/Layout';
import HomePage from '../components/HomePage'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Home Page</title>
      </Head>
      <HomePage />
    </Layout>
  )
}
