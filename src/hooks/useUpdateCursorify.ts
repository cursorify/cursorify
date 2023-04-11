import { ReactNode } from 'react'
import { useCursorifyDispatch } from '../components/CursorifyProvider'

const useUpdateCursorify = () => {
  const dispatch = useCursorifyDispatch()

  const updateCursor = (cursor: ReactNode) => {
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

  const updatedefaultCursorVisible = (defaultCursorVisible: boolean) => {
    dispatch({
      type: 'UPDATE_VISIBLE_DEFAULT_CURSOR',
      payload: defaultCursorVisible,
    })
  }

  return {
    updateCursor,
    updateDelay,
    updateOpacity,
    updatedefaultCursorVisible,
  }
}

export { useUpdateCursorify }
