import React, { useEffect, useRef } from 'react'

const useMouseMove = (delay: number, opacity: number) => {
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
    mouseRef.current.style.transform = `translate(-50%, -50%) translate3d(${_x.current}px, ${_y.current}px, 0)`

    requestRef.current = requestAnimationFrame(animateMouse)
  }

  const handleMouseMove: (this: Window, ev: MouseEvent) => any = (e) => {
    if (mouseRef.current === null) return
    mouseRef.current.style.opacity = `${opacity}`

    endX.current = e.clientX
    endY.current = e.clientY

    if (_x.current === null || _y.current === null) {
      _x.current = endX.current
      _y.current = endY.current

      mouseRef.current.style.transform = `translate(-50%, -50%) translate3d(${_x.current}px, ${_y.current}px, 0)`
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

export default useMouseMove
