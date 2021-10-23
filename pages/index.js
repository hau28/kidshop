import Head from 'next/head'
import { Typography } from 'antd'
const { Title } = Typography

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Kidshop</title>
      </Head>
      <main>
        <Title>Home Page</Title>
      </main>
    </div>
  )
}
