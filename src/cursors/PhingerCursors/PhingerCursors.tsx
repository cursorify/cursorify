import styled from '@emotion/styled'
import React from 'react'
import { useCursorify } from '../../useCursorify'
import LeftPtr from './svgs/default/left_ptr.svg'

const PhingerCursors: React.FC = () => {
  const { isPointer } = useCursorify()
  return <StyledWrapper data-pointer={isPointer}></StyledWrapper>
}

export default PhingerCursors

const StyledWrapper = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${LeftPtr});
  &[data-pointer='true'] {
  }
`
