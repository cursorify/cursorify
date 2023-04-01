import { useCursorifyDispatch } from '../contexts'
import { CursorState } from '../types'

// 마우스 변경 함수를 내보낸다.
const useChangeCursor = () => {
  const dispatch = useCursorifyDispatch()
  const changeCursor = (cursor: CursorState) => {
    dispatch({
      type: 'CHANGE_CURSOR',
      payload: cursor,
    })
  }
  return changeCursor
}

export { useChangeCursor }
