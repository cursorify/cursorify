import { useCursorifyDispatch } from '../components/CursorifyProvider'
import { CursorState } from '../types'

const useUpdateCursorify = () => {
  const dispatch = useCursorifyDispatch()

  const updateCursor = (cursor: CursorState) => {
    dispatch({
      type: 'UPDATE_CURSOR',
      payload: cursor,
    })
  }

  const updateDelay = (delay: number) => {
    dispatch({
      type: 'UPDATE_DELAY',
      payload: delay,
    })
  }

  const updateOpacity = (opacity: number) => {
    dispatch({
      type: 'UPDATE_OPACITY',
      payload: opacity,
    })
  }

  const updateVisibleDefaultCursor = (visibleDefaultCursor: boolean) => {
    dispatch({
      type: 'UPDATE_VISIBLE_DEFAULT_CURSOR',
      payload: visibleDefaultCursor,
    })
  }

  return {
    updateCursor,
    updateDelay,
    updateOpacity,
    updateVisibleDefaultCursor,
  }
}

export { useUpdateCursorify }
