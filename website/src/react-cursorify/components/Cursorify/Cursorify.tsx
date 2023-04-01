import React, { ReactNode } from 'react'
import { StyledWrapper } from './style'
import useMouseRef from './hooks/useMouseRef'
import useGlobalStyleEffect from './hooks/useGlobalStyleEffect'
import { useCursorifyState } from '../../contexts/CursorifyContext/CursorifyContext'

const Cursorify: React.FC = () => {
  const { cursor: Cursor, delay, opacity } = useCursorifyState()
  const cursorRef = useMouseRef(delay)
  useGlobalStyleEffect(`
    * {
      cursor: none !important;
    }
  `)

  return (
    <StyledWrapper ref={cursorRef}>
      <Cursor />
    </StyledWrapper>
  )
}

export default Cursorify
