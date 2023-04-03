import { RouteObject } from 'react-router-dom'

import { Home } from '@routes/Home'
import { Cursor } from '@routes/Cursor'
import { Playground } from '@routes/Playground'
import { NotFound } from './NotFound'
import { Layout } from '@components/Layout'
import { Docs } from './Docs'

const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/docs',
        element: <Docs />,
      },
      {
        path: '/cursor',
        element: <Cursor />,
      },
      {
        path: '/playground',
        element: <Playground />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]

export { routes }
