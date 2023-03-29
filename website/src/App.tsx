import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Cursorify, PhingerCursors } from 'react-cursorify'
import { Global } from '@emotion/react'

import { routes } from '@routes/index'
import { globalStyles } from '@styles/global'

const App: React.FC = () => {
  const router = createBrowserRouter(routes)

  return (
    <>
      <Cursorify cursor={PhingerCursors} />
      <Global styles={globalStyles} />
      <RouterProvider router={router} />
    </>
  )
}

export default App
