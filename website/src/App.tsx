import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Global } from '@emotion/react'
import { routes } from '@routes/index'
import { globalStyles } from '@styles/global'

const App: React.FC = () => {
  const router = createHashRouter(routes)
  console.log("!");
  
  return (
    <>
      <Global styles={globalStyles} />
      <RouterProvider router={router} />
    </>
  )
}

export default App
