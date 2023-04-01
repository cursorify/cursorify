import React, { useEffect, useRef } from 'react'

const useMouseRef = (delay: number) => {
  const endX = useRef(0)
  const endY = useRef(0)

  const _x: React.MutableRefObject<number | null> = useRef(null)
  const _y: React.MutableRefObject<number | null> = useRef(null)

  const mouseRef = useRef<HTMLDivElement>(null)

  const requestRef = useRef(0)

  const animateMouse = () => {
    if (mouseRef.current === null) return
    if (_x.current !== null && _y.current !== null) {
      _x.current += (endX.current - _x.current) / delay
      _y.current += (endY.current - _y.current) / delay
    }

    mouseRef.current.style.top = `${_y.current}px`
    mouseRef.current.style.left = `${_x.current}px`

    requestRef.current = requestAnimationFrame(animateMouse)
  }

  const handleMouseMove: (this: Window, ev: MouseEvent) => any = (e) => {
    if (mouseRef.current === null) return
    mouseRef.current.style.opacity = '1'

    endX.current = e.pageX
    endY.current = e.pageY

    if (_x.current === null || _y.current === null) {
      _x.current = endX.current
      _y.current = endY.current
      mouseRef.current.style.top = `${_y.current}px`
      mouseRef.current.style.left = `${_x.current}px`
    }
  }

  useEffect(() => {
    if (!mouseRef.current) return
    animateMouse()
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      cancelAnimationFrame(requestRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [delay])

  return mouseRef
}

export default useMouseRef
