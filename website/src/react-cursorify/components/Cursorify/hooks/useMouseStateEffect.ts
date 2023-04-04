import { useEffect } from 'react'
import { useCursorifyDispatch } from '../../CursorifyProvider'

const useMouseStateEffect = () => {
  const dispatch = useCursorifyDispatch()

  const handleMouseDown = (e: MouseEvent) => {
    dispatch({
      type: 'CHANGE_MOUSE_STATE',
      payload: 'mouseDown',
    })
  }
  const handleMouseUp = (e: MouseEvent) => {
    dispatch({
      type: 'CHANGE_MOUSE_STATE',
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
