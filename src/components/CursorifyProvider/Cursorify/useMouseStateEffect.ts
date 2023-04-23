import { useEffect } from 'react'
import { useCursorifyDispatch } from '..'

const useMouseStateEffect = () => {
  const dispatch = useCursorifyDispatch()

  const handleMouseDown = () => {
    dispatch({
      type: 'UPDATE_MOUSE_STATE',
      payload: 'mouseDown',
    })
  }
  const handleMouseUp = () => {
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
