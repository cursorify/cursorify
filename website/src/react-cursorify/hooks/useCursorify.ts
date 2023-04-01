import { useCursorifyState } from '../contexts/CursorifyContext/CursorifyContext'

// cursor 컴포넌트를 만들 때 사용.
const useCursorify = () => {
  const state = useCursorifyState()
  return { hoverState: state.hoverState, mouseState: state.mouseState }
}

export default useCursorify
