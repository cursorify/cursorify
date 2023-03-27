import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Cursorify } from 'react-cursorify'
import { Global } from '@emotion/react'

import { routes } from '@routes/index'
import { globalStyles } from '@styles/global'
import { Layout } from '@components/Layout'

const App: React.FC = () => {
  const router = createBrowserRouter(routes)

  return (
    <Layout>
      <Cursorify />
      <Global styles={globalStyles} />
      <RouterProvider router={router} />
    </Layout>
  )
}

export default App
