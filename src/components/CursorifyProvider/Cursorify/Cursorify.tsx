import React, { FC, PropsWithChildren, useRef } from 'react'
import useMouseMoveEffect from './useMouseMoveEffect'
import { useCursorifyState } from '../CursorifyProvider'

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
