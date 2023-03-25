import React, { useEffect, useState } from 'react'
import { cursorSelectors, initialCursorState } from './useCursorify.constant'
import { getCursorStateKey } from './useCursorify.module'

type CursorifyOptions = {}

const useCursorify = (options: CursorifyOptions = {}) => {
  const [cursorState, setCursorState] = useState(initialCursorState)
  const [currentRoute, setCurrentRoute] = useState('')
  const handleMouseenter = (e: Event) => {
    if (!(e.target instanceof HTMLElement)) return
    const cursorStateKey = getCursorStateKey(e.target)

    if (!cursorStateKey) return
    setCursorState((prevCursorState) => ({
      ...prevCursorState,
      [cursorStateKey]: true,
    }))
  }

  const handleMouseleave = (e: Event) => {
    if (!(e.target instanceof HTMLElement)) return
    const cursorStateKey = getCursorStateKey(e.target)

    if (!cursorStateKey) return
    setCursorState((prevCursorState) => ({
      ...prevCursorState,
      [cursorStateKey]: false,
    }))
  }

  useEffect(() => {
    document.querySelectorAll(cursorSelectors).forEach((node) => {
      node.addEventListener('mouseenter', handleMouseenter)
      node.addEventListener('mouseleave', handleMouseleave)
    })
    return () => {
      document.querySelectorAll(cursorSelectors).forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseenter)
        element.removeEventListener('mouseleave', handleMouseleave)
      })
    }
  }, [currentRoute])

  if (window) {
    if (currentRoute !== window.location.pathname) {
      setCurrentRoute(window.location.pathname)
    }
  }
  return {
    ...cursorState,
  }
}

export default useCursorify
