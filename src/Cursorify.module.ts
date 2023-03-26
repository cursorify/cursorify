import React, { useEffect, useRef } from 'react'

const useGlobalStyleEffect = (styleString: string) => {
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = styleString
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return
}

const useCursorMove = (delay: number) => {
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
  }, [delay])

  return cursorRef
}

export { useGlobalStyleEffect, useCursorMove }
