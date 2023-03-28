import React from 'react'
import styled from '@emotion/styled'
import { Header } from './Header'

type Props = {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <StyledWrapper>
      <Header />
      <main>{children}</main>
    </StyledWrapper>
  )
}

export default Layout

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
`
