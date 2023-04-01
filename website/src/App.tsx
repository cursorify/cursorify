import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Global } from '@emotion/react'
import { routes } from '@routes/index'
import { globalStyles } from '@styles/global'
import { CursorifyProvider } from './react-cursorify'

const App: React.FC = () => {
  const router = createBrowserRouter(routes)

  return (
    <CursorifyProvider>
      <Global styles={globalStyles} />
      <RouterProvider router={router} />
    </CursorifyProvider>
  )
}

export default App
