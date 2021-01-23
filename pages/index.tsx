// packages
import React from 'react'

// components
import Head from 'next/head'
import Layout from '../components/layout'
import PromotionSlider from '../components/promotion-slider'
import { getPromotions } from '../api/contentful'

export async function getStaticProps() {
  const entries:any = await getPromotions()

  if (!entries) {
    return {
      props: {}
    }
  }

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
        <title>Cinema Group</title>
      </Head>
      <Layout>
        <PromotionSlider entries={entries} />
      </Layout>
    </>
  )
}
