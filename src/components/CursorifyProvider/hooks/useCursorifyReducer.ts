import { Dispatch, Reducer, useReducer } from 'react'
import { CursorifyReducerActionType, CursorifyStateType } from '../../../types'

const reducer: Reducer<CursorifyStateType, CursorifyReducerActionType> = (
  state,
  action
) => {
  switch (action.type) {
    case 'UPDATE_STYLE':
      return {
        ...state,
        cursorStyle: action.payload,
      }
    case 'UPDATE_MOUSE_STATE':
      return {
        ...state,
        mouseState: action.payload,
      }
    case 'UPDATE_CURSOR':
      return {
        ...state,
        cursor: action.payload,
      }
    case 'UPDATE_DELAY':
      return {
        ...state,
        delay: action.payload,
      }
    case 'UPDATE_OPACITY':
      return {
        ...state,
        opacity: action.payload,
      }
    case 'UPDATE_VISIBLE_DEFAULT_CURSOR':
      return {
        ...state,
        defaultCursorVisible: action.payload,
      }
    case 'UPDATE_ENABLED':
      return {
        ...state,
        enabled: action.payload,
      }
    default:
      return state
  }
}

type UseCursorifyReducerType = (
  defaultState: CursorifyStateType
) => [CursorifyStateType, Dispatch<CursorifyReducerActionType>]

const useCursorifyReducer: UseCursorifyReducerType = (defaultState) => {
  return useReducer(reducer, defaultState)
}

export default useCursorifyReducer
