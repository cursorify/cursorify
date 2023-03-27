import React from 'react'
import styled from '@emotion/styled'
import { Footer } from './Footer'
import { Header } from './Header'

type Props = {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <StyledWrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledWrapper>
  )
}

export default Layout

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  min-height: 100vh;
`
