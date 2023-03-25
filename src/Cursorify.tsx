import styled from '@emotion/styled'
import React, { useEffect, useRef } from 'react'
import DefaultCursor from './DefaultCursor'

type Props = {
  cursor?: React.FC
  delay?: number
}

const Cursorify: React.FC<Props> = ({
  cursor: Cursor = DefaultCursor,
  delay = 1,
}) => {
  const endX = useRef(0)
  const endY = useRef(0)

  const _x: React.MutableRefObject<number | null> = useRef(null)
  const _y: React.MutableRefObject<number | null> = useRef(null)

  const cursorRef = useRef<HTMLDivElement>(null)

  const requestRef = useRef(0)

  const animateCursor = () => {
    if (cursorRef.current === null) return
    if (_x.current !== null && _y.current !== null) {
      _x.current += (endX.current - _x.current) / delay
      _y.current += (endY.current - _y.current) / delay
    }

    cursorRef.current.style.top = `${_y.current}px`
    cursorRef.current.style.left = `${_x.current}px`

    requestRef.current = requestAnimationFrame(animateCursor)
  }

  const handleMouseMove: (this: Window, ev: MouseEvent) => any = (e) => {
    if (cursorRef.current === null) return
    cursorRef.current.style.opacity = '1'

    endX.current = e.pageX
    endY.current = e.pageY

    if (_x.current === null || _y.current === null) {
      _x.current = endX.current
      _y.current = endY.current
      cursorRef.current.style.top = `${_y.current}px`
      cursorRef.current.style.left = `${_x.current}px`
    }
  }

  useEffect(() => {
    if (!cursorRef.current) return
    animateCursor()
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      cancelAnimationFrame(requestRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <StyledWrapper ref={cursorRef}>
      <Cursor />
    </StyledWrapper>
  )
}

export default Cursorify

const StyledWrapper = styled.div`
  z-index: 99;
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
`
