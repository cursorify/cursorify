import useCursorify from '@/react-cursorify/hooks/useCursorify'
import styled from '@emotion/styled'
import React from 'react'

const DefaultCursor: React.FC = () => {
  const { hoverState } = useCursorify()
  console.log(hoverState)

  return <StyledWrapper data-hover={hoverState}></StyledWrapper>
}

export default DefaultCursor

const StyledWrapper = styled.div`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: rgba(224, 224, 224, 0.8);
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out,
    background-color 0.1s ease-in-out;
  &[data-hover='pointer'] {
    transform: scale(2.3);
    background-color: rgba(224, 224, 224, 0.4);
  }
`
