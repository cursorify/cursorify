import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
} from 'react'
import { CursorifyReducerActionType, CursorifyStateType } from '../../types'
import { DefaultCursor } from '../DefaultCursor'
import Cursorify from './Cursorify'
import useBreakpoint from './hooks/useBreakpoint'
import useCursorifyReducer from './hooks/useCursorifyReducer'

const defaultCursorifyState: CursorifyStateType = {
  cursor: <DefaultCursor />,
  delay: 1,
  opacity: 1,
  defaultCursorVisible: false,
  breakpoint: 0,
  cursorStyle: 'default',
  mouseState: 'default',
}

const CursorifyStateContext = createContext<CursorifyStateType>(
  defaultCursorifyState
)

const CursorifyDispatchContext =
  createContext<Dispatch<CursorifyReducerActionType> | null>(null)

type Props = PropsWithChildren<{
  cursor?: CursorifyStateType['cursor']
  delay?: CursorifyStateType['delay']
  opacity?: CursorifyStateType['opacity']
  defaultCursorVisible?: CursorifyStateType['defaultCursorVisible']
  breakpoint?: CursorifyStateType['breakpoint']
  enabled?: boolean
}>

export const CursorifyProvider: React.FC<Props> = ({
  children,
  enabled,
  ...props
}) => {
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
