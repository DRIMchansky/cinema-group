import { contentfulClient, getPromotions } from '../../api/contentful'
import Layout from '../../components/layout'
import Container from '@material-ui/core/Container'

const Promotion = ({ promotion }: any) => {

  return (
    <Layout>
      <Container maxWidth="xl">
        <h1>{promotion.fields.title}</h1>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }: any) {

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

  const allPromotions: any = await getPromotions()

  const paths = allPromotions.map((item: any) => ({
    params: { slug: item.fields.slug },
  }))

  return { paths, fallback: false }
}

export default Promotion
