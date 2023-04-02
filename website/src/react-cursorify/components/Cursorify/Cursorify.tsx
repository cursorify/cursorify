import React, { useState } from 'react'
import { StyledWrapper } from './style'
import useMouseMove from './hooks/useMouseMove'
import useGlobalStyleEffect from './hooks/useGlobalStyleEffect'
import { useCursorifyState } from '../../contexts/CursorifyContext/CursorifyContext'
import useMouseStateEffect from './hooks/useMouseStateEffect'

const Cursorify: React.FC = () => {
  const { cursor: Cursor, delay, opacity } = useCursorifyState()
  const mouseRef = useMouseMove(delay)
  useMouseStateEffect()
  useGlobalStyleEffect(`
    * {
      cursor: none !important;
    }
  `)

  return (
    <StyledWrapper ref={mouseRef}>
      <Cursor />
    </StyledWrapper>
  )
}

export default Cursorify
