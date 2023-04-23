import { useEffect } from 'react'
import { useCursorifyState } from '..'

const useDefaultCursorVisibleEffect = () => {
  const { defaultCursorVisible } = useCursorifyState()

  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = defaultCursorVisible
      ? ``
      : `
      * {
        cursor: none !important;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [defaultCursorVisible])

  return
}

export default useDefaultCursorVisibleEffect
