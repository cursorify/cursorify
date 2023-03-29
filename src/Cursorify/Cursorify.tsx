import React from 'react'
import { useCursorMove, useGlobalStyleEffect } from './Cursorify.module'
import StyledWrapper from './Cursorify.style'
import { CircleCursor } from '../cursors/CircleCursor'

type CursorifyProps = {
  cursor?: React.FC
  delay?: number
}

const Cursorify: React.FC<CursorifyProps> = ({
  cursor: Cursor = CircleCursor,
  delay = 1,
}) => {
  useGlobalStyleEffect(`
    * {
      cursor: none !important;
    }
  `)
  const cursorRef = useCursorMove(delay)

  return (
    <StyledWrapper ref={cursorRef}>
      <Cursor />
    </StyledWrapper>
  )
}

export default Cursorify
