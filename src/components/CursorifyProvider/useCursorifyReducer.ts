import { Reducer, useReducer, Dispatch } from 'react'
import { CusorifyStateType, CursorifyReducerActionType } from '../../types'

const reducer: Reducer<CusorifyStateType, CursorifyReducerActionType> = (
  state,
  action
) => {
  switch (action.type) {
    case 'UPDATE_HOVER_STATE':
      return {
        ...state,
        hoverState: action.payload,
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
        visibleDefaultCursor: action.payload,
      }
    default:
      return state
  }
}

type UseCursorifyReducerType = (
  defaultState: CusorifyStateType
) => [CusorifyStateType, Dispatch<CursorifyReducerActionType>]

const useCursorifyReducer: UseCursorifyReducerType = (defaultState) => {
  return useReducer(reducer, defaultState)
}

export default useCursorifyReducer
