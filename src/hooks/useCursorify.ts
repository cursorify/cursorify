import { useCursorifyState } from '../components/CursorifyProvider/CursorifyProvider'

const useCursorify = () => {
  const state = useCursorifyState()
  return { hoverState: state.hoverState, mouseState: state.mouseState }
}

export default useCursorify
