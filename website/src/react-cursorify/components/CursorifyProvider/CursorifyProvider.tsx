import { createContext, ReactNode, Dispatch, useContext } from 'react'
import { defaultCursorifyState } from '../../constants'
import useCursorifyReducer from './useCursorifyReducer'
import {
  CursorifyReducerActionType,
  CursorState,
  CusorifyStateType,
} from '../../types'
import { Cursorify } from '@/react-cursorify/components/Cursorify'
import { CircleCursor } from '@/react-cursorify/cursors'

const CursorifyStateContext = createContext<CusorifyStateType>(
  defaultCursorifyState
)

const CursorifyDispatchContext =
  createContext<Dispatch<CursorifyReducerActionType> | null>(null)

type Props = {
  children?: ReactNode
  cursor?: CursorState
  opacity?: number
  delay?: number
  visibleDefaultCursor?: boolean
}

export const CursorifyProvider: React.FC<Props> = ({ children, ...props }) => {
  const {
    cursor = CircleCursor,
    delay = 1,
    opacity = 0.7,
    visibleDefaultCursor = false,
  } = props

  const [state, dispatch] = useCursorifyReducer({
    ...defaultCursorifyState,
    cursor,
    delay,
    opacity,
    visibleDefaultCursor,
  })

  return (
    <CursorifyStateContext.Provider value={state}>
      <CursorifyDispatchContext.Provider value={dispatch}>
        <Cursorify />
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
