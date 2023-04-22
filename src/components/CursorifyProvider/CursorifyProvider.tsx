import React, { PropsWithChildren, ReactNode } from 'react'
import { createContext, Dispatch, useContext } from 'react'
import { defaultCursorifyState } from '../../constants'
import useCursorifyReducer from './hooks/useCursorifyReducer'
import { CursorifyReducerActionType, CusorifyStateType } from '../../types'
import useDefaultCursorVisibleEffect from './hooks/useDefaultCursorVisibleEffect'
import useMouseStateEffect from './hooks/useMouseStateEffect'
import Cursorify from './Cursorify'
import { DefaultCursor } from '../DefaultCursor'

const CursorifyStateContext = createContext<CusorifyStateType>(
  defaultCursorifyState
)

const CursorifyDispatchContext =
  createContext<Dispatch<CursorifyReducerActionType> | null>(null)

type Props = PropsWithChildren<{
  cursor?: ReactNode
  opacity?: number
  delay?: number
  defaultCursorVisible?: boolean
  enabled?: boolean
}>

export const CursorifyProvider: React.FC<Props> = ({ children, ...props }) => {
  const {
    cursor = <DefaultCursor />,
    delay = 1,
    opacity = 1,
    defaultCursorVisible = false,
    enabled = true,
  } = props
  const [state, dispatch] = useCursorifyReducer({
    ...defaultCursorifyState,
    cursor,
    delay,
    opacity,
    defaultCursorVisible,
    enabled,
  })
  useDefaultCursorVisibleEffect()
  useMouseStateEffect()

  return (
    <CursorifyStateContext.Provider value={state}>
      <CursorifyDispatchContext.Provider value={dispatch}>
        {state.enabled && <Cursorify>{state.cursor}</Cursorify>}
        {children}
      </CursorifyDispatchContext.Provider>
    </CursorifyStateContext.Provider>
  )
}

export function useCursorifyState() {
  const context = useContext(CursorifyStateContext)
  if (!context) {
    throw new Error(
      'Cannot find Cursorify Provider. You need to use Cursorify Provider within its parent component.'
    )
  }
  return context
}

export function useCursorifyDispatch() {
  const context = useContext(CursorifyDispatchContext)
  if (!context) {
    throw new Error(
      'Cannot find Cursorify Provider. You need to use Cursorify Provider within its parent component.'
    )
  }
  return context
}
