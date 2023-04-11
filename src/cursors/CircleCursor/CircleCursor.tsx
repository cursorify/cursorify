import styled from '@emotion/styled'
import React from 'react'
import useCursorify from '../../hooks/useCursorify'
import { CursorProps } from '../../types'

const CircleCursor: React.FC<CursorProps> = ({ disabled }) => {
  const { hoverState } = useCursorify()

  return (
    <StyledWrapper>
      <div className="circle" data-hover={disabled ? '' : hoverState}></div>
    </StyledWrapper>
  )
}

export default CircleCursor

const StyledWrapper = styled.div`
  mix-blend-mode: difference;
  .circle {
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
  }
`
