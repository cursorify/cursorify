import { useCursorifyState } from '../components/CursorifyProvider'

export const useCursorify = () => {
  const state = useCursorifyState()

  return {
    style: state.cursorStyle,
    mouseState: state.mouseState,
  }
}
