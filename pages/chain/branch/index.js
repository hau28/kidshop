import Head from 'next/head'
import { Typography } from 'antd'
const { Title } = Typography

export default function BranchPage() {
  return (
    <div>
      <Head>
        <title>Branches Management - Kidshop</title>
      </Head>
      <main>
        <Title>Branches management</Title>
      </main>
    </div>
  )
}
