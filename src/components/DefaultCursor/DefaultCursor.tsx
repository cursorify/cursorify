import React from 'react'
import { useCursorify } from '../../hooks/useCursorify'
import { CursorProps } from '../../types'

export const DefaultCursor: React.FC<CursorProps> = ({ disabled }) => {
  const { style } = useCursorify()
  const isPointed = !disabled && style === "pointer"
  const isClicked = !disabled && style === "click"

  return (
    <div
      style={{
        width: '23px',
        height: '23px',
        borderRadius: '50%',
        transition: isClicked
          ? "opacity 0.13s ease-in-out, transform 0.13s ease-in-out, background-color 0.08s ease-in-out"
          : "opacity 0.1s ease-in-out, transform 0.1s ease-in-out, background-color 0.1s ease-in-out",
        backgroundColor: isClicked
          ? "rgba(210, 210, 210, 0.2)"
          : isPointed
          ? "rgba(210, 210, 210, 0.4)"
          : "rgba(210, 210, 210, 0.8)",
        transform: isClicked
          ? "scale(2)"
          : isPointed
          ? "scale(2.3)"
          : "scale(1)",
      }}
    />
  )
}
