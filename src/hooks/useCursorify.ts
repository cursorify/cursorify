import { useCursorifyState } from '../components/CursorifyProvider'

export const useCursorify = () => {
  const state = useCursorifyState()

  return {
    hoverState: state.hoverState,
    mouseState: state.mouseState,
  }
}
