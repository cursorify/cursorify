import styled from '@emotion/styled'
import OpenColor from 'open-color'
import React from 'react'

type Props = {}

const Footer: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div>Copyright © 2023 morethanmin.</div>
    </StyledWrapper>
  )
}

export default Footer

const StyledWrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: 50px;
  background-color: ${OpenColor.gray[1]};
  color: ${OpenColor.gray[9]};
  font-weight: 200;
`
