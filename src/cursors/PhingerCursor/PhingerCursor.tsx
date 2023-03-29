import styled from '@emotion/styled'
import React from 'react'
import { useCursorify } from '../../useCursorify'
import Default from './svgs/light/Default'

const PhingerCursor: React.FC = () => {
  const { isPointer } = useCursorify()
  return (
    <StyledWrapper data-pointer={isPointer}>
      <Default />
    </StyledWrapper>
  )
}

export default PhingerCursor

const StyledWrapper = styled.div`
  width: 24px;
  height: 24px;
  &[data-pointer='true'] {
  }
`
