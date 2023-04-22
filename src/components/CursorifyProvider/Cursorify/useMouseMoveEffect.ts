import React, { RefObject, useEffect, useRef } from 'react'
import { useCursorifyDispatch, useCursorifyState } from '..'
import { CursorStyle } from '../../..'

/*
const getCursorStyleFromTagName = (tagName: string): CursorStyle => {
  switch (tagName) {
    case 'A':
      return 'pointer'
    case 'P':
    case 'H1':
    case 'H2':
    case 'H3':
    case 'H4':
    case 'H5':
    case 'H6':
    case 'SPAN':
      return 'text'
    default:
      return 'default'
  }
}
*/

const useMouseMoveEffect = (mouseRef: RefObject<HTMLDivElement>) => {
  const { delay, opacity } = useCursorifyState()
  const dispatch = useCursorifyDispatch()
  const endX = useRef(0)
  const endY = useRef(0)

  const _x: React.MutableRefObject<number | null> = useRef(null)
  const _y: React.MutableRefObject<number | null> = useRef(null)

  const requestRef = useRef(0)

  const animateMouse = () => {
    if (mouseRef.current === null) return
    if (_x.current !== null && _y.current !== null) {
      _x.current += (endX.current - _x.current) / delay
      _y.current += (endY.current - _y.current) / delay
    }
    mouseRef.current.style.transform = `translate(-50%, -50%) translate3d(${_x.current}px, ${_y.current}px, 0)`

    requestRef.current = requestAnimationFrame(animateMouse)
  }

  const handleMouseMove: (e: MouseEvent) => void = (e) => {
    if (mouseRef.current === null) return

    endX.current = e.clientX
    endY.current = e.clientY

    if (_x.current === null || _y.current === null) {
      _x.current = endX.current
      _y.current = endY.current
      mouseRef.current.style.opacity = `${opacity}`
      mouseRef.current.style.transform = `translate(-50%, -50%) translate3d(${_x.current}px, ${_y.current}px, 0)`
    }

    if (!(e.target instanceof HTMLElement)) return

    let cursorStyle: CursorStyle = 'default'
    let currentElement: HTMLElement | null = e.target
    while (currentElement) {
      const _cursorStyle = currentElement.style.cursor
      if (_cursorStyle) {
        cursorStyle = _cursorStyle as CursorStyle
        break
      }
      currentElement = currentElement.parentElement
    }

    dispatch({
      type: 'UPDATE_STYLE',
      payload: cursorStyle,
    })
  }

  useEffect(() => {
    if (!mouseRef.current) return
    animateMouse()
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      cancelAnimationFrame(requestRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [delay, opacity])

  return mouseRef
}

export default useMouseMoveEffect
