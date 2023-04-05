import React from 'react'
import { StyledWrapper } from './style'
import useMouseMove from './hooks/useMouseMove'
import useGlobalStyleEffect from './hooks/useGlobalStyleEffect'
import { useCursorifyState } from '../CursorifyProvider/CursorifyProvider'
import useMouseStateEffect from './hooks/useMouseStateEffect'
import useRouteChange from './hooks/useRouteChange'

const Cursorify: React.FC = () => {
  const {
    cursor: Cursor,
    delay,
    opacity,
    visibleDefaultCursor,
  } = useCursorifyState()
  const mouseRef = useMouseMove(delay, opacity)
  useMouseStateEffect()

  useRouteChange()
  useGlobalStyleEffect(
    visibleDefaultCursor
      ? ''
      : `
    * {
      cursor: none !important;
    }
  `
  )

  return (
    <StyledWrapper ref={mouseRef}>
      <Cursor />
    </StyledWrapper>
  )
}

export default Cursorify
