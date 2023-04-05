import React from 'react'
import { Outlet } from 'react-router-dom'

import styled from '@emotion/styled'
import { CursorifyProvider } from 'react-cursorify'

import { Header } from './Header'
import { Footer } from './Footer'

type Props = {}

const Layout: React.FC<Props> = () => {
  return (
    <CursorifyProvider>
      <StyledWrapper>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </StyledWrapper>
    </CursorifyProvider>
  )
}

export default Layout

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  min-height: 100vh;
`
