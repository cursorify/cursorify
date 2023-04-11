import React, { ReactNode } from 'react'
import { createContext, Dispatch, useContext } from 'react'
import { defaultCursorifyState } from '../../constants'
import useCursorifyReducer from './hooks/useCursorifyReducer'
import { CursorifyReducerActionType, CusorifyStateType } from '../../types'
import { CircleCursor } from '../../cursors'
import useGlobalStyleEffect from './hooks/useGlobalStyleEffect'
import useRouteChangeEffect from './hooks/useRouteChangeEffect'
import useMouseStateEffect from './hooks/useMouseStateEffect'
import Cursorify from './Cursorify'

const CursorifyStateContext = createContext<CusorifyStateType>(
  defaultCursorifyState
)

const CursorifyDispatchContext =
  createContext<Dispatch<CursorifyReducerActionType> | null>(null)

type Props = {
  children?: ReactNode
  cursor?: ReactNode
  opacity?: number
  delay?: number
  defaultCursorVisible?: boolean
}

export const CursorifyProvider: React.FC<Props> = ({ children, ...props }) => {
  const {
    cursor = <CircleCursor />,
    delay = 1,
    opacity = 1,
    defaultCursorVisible = false,
  } = props
  const [state, dispatch] = useCursorifyReducer({
    ...defaultCursorifyState,
    cursor,
    delay,
    opacity,
    defaultCursorVisible,
  })
  useRouteChangeEffect(dispatch)
  useMouseStateEffect(dispatch)
  useGlobalStyleEffect(
    state.defaultCursorVisible
      ? ''
      : `
    * {
      cursor: none !important;
    }
  `
  )

  return (
    <CursorifyStateContext.Provider value={state}>
      <CursorifyDispatchContext.Provider value={dispatch}>
        <Cursorify>{state.cursor}</Cursorify>
        {children}
      </CursorifyDispatchContext.Provider>
    </CursorifyStateContext.Provider>
  )
}

export function useCursorifyState() {
  const context = useContext(CursorifyStateContext)
  if (!context) {
    throw new Error('Cannot find Cursorify Provider')
  }
  return context
}

export function useCursorifyDispatch() {
  const context = useContext(CursorifyDispatchContext)
  if (!context) {
    throw new Error('Cannot find Cursorify Provider')
  }
  return context
}
