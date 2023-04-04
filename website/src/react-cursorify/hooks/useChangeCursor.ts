import { useCursorifyDispatch } from '../components/CursorifyProvider'
import { CursorState } from '../types'

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
