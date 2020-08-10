// components
import Head from 'next/head'
import Layout from '../components/Layout'
import PromotionSlider from '../components/PromotionSlider'

export default function Home() {
  return (
    <>
      <Head>
        <title>Рублион Синема</title>
      </Head>
      <Layout>
        <PromotionSlider />
      </Layout>
    </>
  )
}
