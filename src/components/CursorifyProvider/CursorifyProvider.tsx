import React, { PropsWithChildren } from 'react'
import { createContext, Dispatch, useContext } from 'react'
import useCursorifyReducer from './hooks/useCursorifyReducer'
import { CursorifyReducerActionType, CusorifyStateType } from '../../types'
import Cursorify from './Cursorify'
import { DefaultCursor } from '../DefaultCursor'
import useBreakpoint from './hooks/useBreakpoint'

const defaultCursorifyState: CusorifyStateType = {
  cursor: <DefaultCursor />,
  delay: 1,
  opacity: 1,
  defaultCursorVisible: false,
  breakpoint: 0,
  cursorStyle: 'default',
  mouseState: 'default',
}

const CursorifyStateContext = createContext<CusorifyStateType>(
  defaultCursorifyState
)

const CursorifyDispatchContext =
  createContext<Dispatch<CursorifyReducerActionType> | null>(null)

type Props = PropsWithChildren<{
  cursor?: CusorifyStateType['cursor']
  delay?: CusorifyStateType['delay']
  opacity?: CusorifyStateType['opacity']
  defaultCursorVisible?: CusorifyStateType['defaultCursorVisible']
  breakpoint?: CusorifyStateType['breakpoint']
  enabled?: boolean
}>

export const CursorifyProvider: React.FC<Props> = ({ children, enabled, ...props }) => {
  const [state, dispatch] = useCursorifyReducer({
    ...defaultCursorifyState,
    ...props,
  })

  const breakpointEnabled = useBreakpoint(state.breakpoint)
  return (
    <CursorifyStateContext.Provider value={state}>
      <CursorifyDispatchContext.Provider value={dispatch}>
        {enabled && breakpointEnabled && <Cursorify>{state.cursor}</Cursorify>}
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
