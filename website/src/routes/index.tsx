import { RouteObject } from 'react-router-dom'

import { Home } from '@routes/Home'
import { Cursor } from '@routes/Cursor'
import { Playground } from '@routes/Playground'
import { NotFound } from './NotFound'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
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
    errorElement: <NotFound />,
    element: <NotFound />,
  },
]

export { routes }
