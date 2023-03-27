import { RouteObject } from 'react-router-dom'

import { Home } from '@routes/Home'
import { Cursor } from '@routes/Cursor'
import { Playground } from '@routes/Playground'
import { NotFound } from './NotFound'
import { Layout } from '@components/Layout'

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/cursor',
    element: (
      <Layout>
        <Cursor />
      </Layout>
    ),
  },
  {
    path: '/playground',
    element: (
      <Layout>
        <Playground />
      </Layout>
    ),
  },
  {
    path: '*',
    errorElement: (
      <Layout>
        <NotFound />
      </Layout>
    ),
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
]

export { routes }
