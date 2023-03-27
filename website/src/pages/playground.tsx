import React from 'react'
import Layout from '@theme/Layout'
import Playground from '../containers/playground'

export default function PlaygroundPage(): JSX.Element {
  return (
    <Layout
      title={`Playground`}
      description="Description will go into a meta tag in <head />"
    >
      <Playground />
    </Layout>
  )
}
