import React from 'react'
import Layout from '@theme/Layout'
import Home from '../containers/Home/index'

export default function HomePage(): JSX.Element {
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />"
    >
      <Home />
    </Layout>
  )
}
