import { FC, PropsWithChildren, useRef } from 'react'
import useMouseMoveEffect from './useMouseMoveEffect'
import useMouseStateEffect from './useMouseStateEffect'
import useDefaultCursorVisibleEffect from './useDefaultCursorVisibleEffect'

const Cursorify: FC<PropsWithChildren<any>> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)

  useMouseMoveEffect(ref)
  useDefaultCursorVisibleEffect()
  useMouseStateEffect()

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
        zIndex: 9999,
      }}
    >
      {children}
    </div>
  )
}

export default Cursorify
