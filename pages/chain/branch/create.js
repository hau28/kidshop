import Head from 'next/head'
import { Typography } from 'antd'
import EditBranch from './[branchId]/edit'
const { Title } = Typography

export default function BranchPage() {
  return <EditBranch createNew />
}
