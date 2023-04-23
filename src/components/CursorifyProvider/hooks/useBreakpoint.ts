import { useEffect, useState } from 'react'

const useBreakpoint = (breakpoint: number) => {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < breakpoint) {
        setEnabled(false)
      } else {
        setEnabled(true)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [breakpoint])

  return enabled
}

export default useBreakpoint
