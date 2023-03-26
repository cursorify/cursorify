import React from 'react'
import { useCursorMove, useGlobalStyleEffect } from './Cursorify.module'
import StyledWrapper from './Cursorify.style'
import DefaultCursor from './DefaultCursor'

type CursorifyProps = {
  cursor?: React.FC
  delay?: number
}

const Cursorify: React.FC<CursorifyProps> = ({
  cursor: Cursor = DefaultCursor,
  delay = 1,
}) => {
  useGlobalStyleEffect(`
    cursor: none !important;
  `)
  const cursorRef = useCursorMove(delay)

  return (
    <StyledWrapper ref={cursorRef}>
      <Cursor />
    </StyledWrapper>
  )
}

export default Cursorify
