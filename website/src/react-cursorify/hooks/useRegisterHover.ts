import { useCursorifyDispatch } from '../components/CursorifyProvider'
import { HoverState } from '../types'

const useRegisterHover = () => {
  const dispatch = useCursorifyDispatch()

  const register = (hoverState: HoverState) => {
    return {
      onMouseEnter: (e: any) => {
        dispatch({
          type: 'CHANGE_HOVER_STATE',
          payload: hoverState,
        })
      },
      onMouseLeave: (e: any) => {
        dispatch({
          type: 'CHANGE_HOVER_STATE',
          payload: 'default',
        })
      },
    }
  }
  return register
}

export { useRegisterHover }
