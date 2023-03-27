import React from 'react'
import Layout from '@theme/Layout'
import Cursor from '../containers/Cursor/index'

export default function CursorPage(): JSX.Element {
  return (
    <Layout
      title={`Cursor`}
      description="Description will go into a meta tag in <head />"
    >
      <Cursor />
    </Layout>
  )
}
