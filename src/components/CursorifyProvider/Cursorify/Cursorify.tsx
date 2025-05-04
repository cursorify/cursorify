import { FC, PropsWithChildren, useRef } from 'react'
import useDefaultCursorVisibleEffect from './useDefaultCursorVisibleEffect'
import useMouseMoveEffect from './useMouseMoveEffect'
import useMouseStateEffect from './useMouseStateEffect'

type CursorifyProps = PropsWithChildren<unknown>

const Cursorify: FC<CursorifyProps> = ({ children }) => {
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
