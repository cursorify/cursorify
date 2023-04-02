import React, { ReactNode } from 'react'
import { CursorifyContext } from '../contexts/CursorifyContext/CursorifyContext'
import { CursorState } from '../types'
import { Cursorify } from './Cursorify'

type Options = {
  cursor: CursorState
  opacity: number
  delay: number
}

type CursorifyProviderProps = {
  children?: ReactNode
  options?: Options
}

const CursorifyProvider: React.FC<CursorifyProviderProps> = ({ children }) => (
  <CursorifyContext>
    <Cursorify />
    {children}
  </CursorifyContext>
)

export { CursorifyProvider }
