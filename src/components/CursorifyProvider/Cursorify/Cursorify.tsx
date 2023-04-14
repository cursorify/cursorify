import React, { FC, PropsWithChildren, useRef } from 'react'
import useMouseMoveEffect from './useMouseMoveEffect'
import { useCursorifyState } from '../CursorifyProvider'

// ref를 cursor에서 넣었을 때 문제점
// 1. 스타일 적용
// 2.
const Cursorify: FC<PropsWithChildren> = ({ children }) => {
  const { delay, opacity } = useCursorifyState()
  const ref = useRef<HTMLDivElement>(null)

  useMouseMoveEffect(ref, delay, opacity)

  return (
    <div
      ref={ref}
      style={{
        pointerEvents: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        transform: 'translate(-50%, -50%)',
        opacity: 0,
      }}
    >
      {children}
    </div>
  )
}

export default Cursorify
