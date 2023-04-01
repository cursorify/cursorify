import React, { ReactNode } from 'react'
import { CursorifyContext } from '../contexts/CursorifyContext/CursorifyContext'
import { Cursorify } from './Cursorify'

type CursorifyProviderProps = {
  children?: ReactNode
}

const CursorifyProvider: React.FC<CursorifyProviderProps> = ({ children }) => (
  <CursorifyContext>
    <Cursorify />
    {children}
  </CursorifyContext>
)

export { CursorifyProvider }
