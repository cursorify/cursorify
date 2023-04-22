import React from 'react'
import { useCursorify } from '../../hooks/useCursorify'
import { CursorProps } from '../../types'

export const DefaultCursor: React.FC<CursorProps> = ({ disabled }) => {
  const { style } = useCursorify()

  return (
    <div
      style={{
        width: '23px',
        height: '23px',
        borderRadius: '50%',
        transition:
          'opacity 0.1s ease-in-out, transform 0.1s ease-in-out, background-color 0.1s ease-in-out',
        backgroundColor:
          !disabled && style === 'pointer'
            ? 'rgba(210, 210, 210, 0.4)'
            : 'rgba(210, 210, 210, 0.8)',
        transform: !disabled && style === 'pointer' ? 'scale(2.3)' : 'scale(1)',
      }}
    />
  )
}
