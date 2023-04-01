import { createContext, ReactNode, Dispatch, useContext } from 'react'
import { defaultCursorifyState } from '../../constants'
import useCursorifyReducer from './useCursorifyReducer'
import { CursorifyReducerActionType, CusorifyStateType } from '../../types'

const CursorifyStateContext = createContext<CusorifyStateType>(
  defaultCursorifyState
)

const CursorifyDispatchContext =
  createContext<Dispatch<CursorifyReducerActionType> | null>(null)

type Props = {
  children: ReactNode
}

export const CursorifyContext: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useCursorifyReducer()

  return (
    <CursorifyStateContext.Provider value={state}>
      <CursorifyDispatchContext.Provider value={dispatch}>
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
