import styled from '@emotion/styled'
import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import useCursorify from './useCursorify'

type Props = {}

const DefaultCursor: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  {},
  ref
) => {
  const { isPointer } = useCursorify()
  return <StyledWrapper ref={ref} data-pointer={isPointer}></StyledWrapper>
}

export default forwardRef(DefaultCursor)

const StyledWrapper = styled.div`
  display: block;
  width: 23px;
  height: 23px;
  background-color: rgba(224, 224, 224, 0.8);
  z-index: 99;
  border-radius: 50%;
  transition: opacity 0.1s ease-out, transform 0.1s ease-out,
    background-color 0.1s ease-out;
  &[data-pointer='true'] {
    transform: scale(2.3);
    background-color: rgba(224, 224, 224, 0.4);
  }
`
