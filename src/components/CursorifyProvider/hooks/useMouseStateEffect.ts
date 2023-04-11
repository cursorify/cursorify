import { Dispatch, useEffect } from 'react'
import { CursorifyReducerActionType } from '../../../types'

const useMouseStateEffect = (
  dispatch: Dispatch<CursorifyReducerActionType>
) => {
  const handleMouseDown = (e: MouseEvent) => {
    dispatch({
      type: 'UPDATE_MOUSE_STATE',
      payload: 'mouseDown',
    })
  }
  const handleMouseUp = (e: MouseEvent) => {
    dispatch({
      type: 'UPDATE_MOUSE_STATE',
      payload: 'default',
    })
  }

  useEffect(() => {
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return
}

export default useMouseStateEffect
