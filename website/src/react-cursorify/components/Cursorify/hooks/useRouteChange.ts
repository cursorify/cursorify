import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useCursorifyDispatch } from '../../CursorifyProvider'

const isNext =
  typeof window !== 'undefined' && (window as any).__NEXT_DATA__ !== undefined

// TODO: support with Next.js
const useRouteChange = () => {
  const dispatch = useCursorifyDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch({
      type: 'UPDATE_HOVER_STATE',
      payload: 'default',
    })
  }, [location])

  return
}

export default useRouteChange
