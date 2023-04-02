import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Global } from '@emotion/react'
import { routes } from '@routes/index'
import { globalStyles } from '@styles/global'

const App: React.FC = () => {
  const router = createBrowserRouter(routes)

  return (
    <>
      <Global styles={globalStyles} />
      <RouterProvider router={router} />
    </>
  )
}

export default App
