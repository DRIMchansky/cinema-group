// components
import Head from 'next/head'
import Button from '@material-ui/core/Button'
import StyledButton from '../components/styled/StyledButton'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Рублион Синема</title>
      </Head>
      <Layout>
        <main>hello, please press the button</main>

        <Button>Простая кнопка</Button>
        <StyledButton>Стилизованная кнопка</StyledButton>
      </Layout>
    </div>
  )
}
