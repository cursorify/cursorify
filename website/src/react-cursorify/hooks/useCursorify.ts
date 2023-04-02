import { useCursorifyState } from '../contexts/CursorifyContext/CursorifyContext'

const useCursorify = () => {
  const state = useCursorifyState()
  return { hoverState: state.hoverState, mouseState: state.mouseState }
}

export default useCursorify
