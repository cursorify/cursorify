import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Global } from '@emotion/react'

import { routes } from '@routes/index'
import { globalStyles } from '@styles/global'
import { Cursorify } from 'react-cursorify'
import { PhingerCursor } from './cursors/PhingerCursor'
import { EmojiCursor } from './cursors/EmojiCursor'

const App: React.FC = () => {
  const router = createBrowserRouter(routes)

  return (
    <>
      <Cursorify cursor={PhingerCursor} />
      <Global styles={globalStyles} />
      <RouterProvider router={router} />
    </>
  )
}

export default App
