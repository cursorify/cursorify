import { useCursorifyDispatch } from '@/react-cursorify/contexts'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const isNext =
  typeof window !== 'undefined' && (window as any).__NEXT_DATA__ !== undefined

// TODO: support with Next.js
const useRouteChange = () => {
  const dispatch = useCursorifyDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch({
      type: 'CHANGE_HOVER_STATE',
      payload: 'default',
    })
  }, [location])

  return
}

export default useRouteChange
