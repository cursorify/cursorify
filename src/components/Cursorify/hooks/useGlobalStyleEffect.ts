import { useEffect } from 'react'

const useGlobalStyleEffect = (styleString: string) => {
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = styleString
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [styleString])

  return
}

export default useGlobalStyleEffect
