import styled from '@emotion/styled'
import React from 'react'
import useCursorify from '../src/useCursorify'

const DefaultCursor: React.FC = () => {
  const { isPointer } = useCursorify()
  return <StyledWrapper data-pointer={isPointer}></StyledWrapper>
}

export default DefaultCursor

const StyledWrapper = styled.div`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: rgba(224, 224, 224, 0.8);
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out,
    background-color 0.1s ease-in-out;
  &[data-pointer='true'] {
    transform: scale(2.3);
    background-color: rgba(224, 224, 224, 0.4);
  }
`
