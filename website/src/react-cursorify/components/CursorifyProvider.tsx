import React, { ReactNode } from 'react'
import { CursorifyContext } from '../contexts/CursorifyContext/CursorifyContext'
import { Cursorify } from './Cursorify'

type CursorifyProviderProps = {
  delay?: number
  children?: ReactNode
}

const CursorifyProvider: React.FC<CursorifyProviderProps> = ({
  children,
  ...props
}) => (
  <CursorifyContext>
    <Cursorify {...props} />
    {children}
  </CursorifyContext>
)

export { CursorifyProvider }
