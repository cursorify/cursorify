import React from 'react'
import { StyledWrapper } from './style'
import useMouseMove from './hooks/useMouseMove'
import useGlobalStyleEffect from './hooks/useGlobalStyleEffect'
import { useCursorifyState } from '../../contexts/CursorifyContext/CursorifyContext'
import useMouseStateEffect from './hooks/useMouseStateEffect'
import useRouteChange from './hooks/useRouteChange'

const Cursorify: React.FC = () => {
  const { cursor: Cursor, delay, opacity } = useCursorifyState()
  const mouseRef = useMouseMove(delay)
  useMouseStateEffect()

  useRouteChange()
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
