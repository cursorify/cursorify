import styled from '@emotion/styled'
import React from 'react'

const NotFound: React.FC = () => {
  return (
    <StyledWrapper>
      <div className="wrapper">
        <h1>404</h1>
        <div>Page not found</div>
      </div>
    </StyledWrapper>
  )
}

export default NotFound

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .wrapper {
    text-align: center;
    h1 {
    }
    div {
      font-size: 2rem;
    }
  }
`
