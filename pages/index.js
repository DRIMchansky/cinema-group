// components
import Head from 'next/head'
import Layout from '../components/Layout'
import PromotionSlider from '../components/PromotionSlider'
import fetchPromotions from '../api/fetchPromotions'

export async function getStaticProps() {
  const entries = await fetchPromotions()

  return {
    props: {
      entries: entries,
    },
  }
}

export default function Home({ entries }) {
  return (
    <>
      <Head>
        <title>Рублион Синема</title>
      </Head>
      <Layout>
        <PromotionSlider entries={entries} />
      </Layout>
    </>
  )
}
