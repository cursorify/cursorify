import React, { ReactNode } from 'react'
import { StyledWrapper } from './style'
import useMouseRef from './hooks/useMouseRef'
import useGlobalStyleEffect from './hooks/useGlobalStyleEffect'
import { useCursorifyState } from '../../contexts/CursorifyContext/CursorifyContext'

type CursorifyProps = {
  delay?: number
  children?: ReactNode
}

const Cursorify: React.FC<CursorifyProps> = ({ delay = 1 }) => {
  const { cursor: Cursor } = useCursorifyState()
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
