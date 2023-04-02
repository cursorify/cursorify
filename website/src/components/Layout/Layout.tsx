import React from 'react'
import styled from '@emotion/styled'
import { Header } from './Header'
import { Footer } from './Footer'
import { CursorifyProvider } from '@/react-cursorify'

type Props = {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <CursorifyProvider>
      <StyledWrapper>
        <Header />
        <main>{children}</main>
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
