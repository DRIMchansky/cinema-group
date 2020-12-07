// components
import Head from 'next/head'
import Layout from '../components/layout'
import SignUp from '../components/login/sign-up'

const Login = () => {
  return (
    <>
      <Head>
        <title>Войти в систему</title>
      </Head>
      <Layout>
        <SignUp />
      </Layout>
    </>
  )
}

export default Login
