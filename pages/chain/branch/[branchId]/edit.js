import Head from 'next/head'
import { Typography } from 'antd'
const { Title } = Typography

export default function EditBranch({ viewOnly, createNew }) {
  return (
    <div>
      <Head>
        <title>Edit Branch - Kidshop</title>
      </Head>
      <main>
        {viewOnly && <Title>Editable</Title>}
        {createNew && <Title>Create new</Title>}
        <Title>Edit this Branch</Title>
      </main>
    </div>
  )
}
