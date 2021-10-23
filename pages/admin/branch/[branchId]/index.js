import Head from 'next/head'
import { Typography } from 'antd'
import EditBranch from './edit'
const { Title } = Typography

export default function ViewBranch() {
  return <EditBranch viewOnly />
}
