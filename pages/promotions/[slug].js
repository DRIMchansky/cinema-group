import fetchPromotions from '../../api/fetch-promotions'
import Layout from '../../components/layout'
import contentfulClient from '../../api/contentful'
import Container from '@material-ui/core/Container'

const Promotion = ({ promotion }) => {
  console.log(promotion)
  return (
    <Layout>
      <Container maxWidth="xl">
        <h1>{promotion.fields.title}</h1>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const entry = await contentfulClient.getEntries({
    content_type: 'promotion',
    limit: 1,
    'fields.slug[in]': params.slug,
  })

  return {
    props: {
      promotion: entry.items[0],
    },
  }
}

export async function getStaticPaths() {
  const allPromotions = await fetchPromotions()

  const paths = allPromotions.map((item) => ({
    params: { slug: item.fields.slug },
  }))

  return { paths, fallback: false }
}

export default Promotion
