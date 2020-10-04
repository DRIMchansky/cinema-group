// packages
import React from 'react'

// components
import Head from 'next/head'
import Layout from '../components/layout'
import PromotionSlider from '../components/promotion-slider'
import fetchPromotions from '../api/fetch-promotions'

export async function getStaticProps() {
  const entries = await fetchPromotions()

  return {
    props: {
      entries: entries,
    },
  }
}

export default function Home({ entries }: any) {
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
