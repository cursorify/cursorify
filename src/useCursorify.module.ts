import { cursorTargets, targetStateMap } from './useCursorify.constant'
import { CursorStateKey } from './useCursorify.type'

export const getCursorStateKey = (element: HTMLElement) => {
  // get cursorTarget
  let selectedCursorTarget: string | undefined = undefined
  const classList = Array.from(element.classList)

  cursorTargets.forEach((cursorTarget) => {
    const searchedCursorTarget = classList.find(
      (target) => target === cursorTarget
    )
    if (searchedCursorTarget) {
      selectedCursorTarget = searchedCursorTarget
      return false
    }
  })

  // convert cursorTarget to cursorState
  if (!selectedCursorTarget) return
  const cursorStateKey = targetStateMap[selectedCursorTarget] as CursorStateKey

  return cursorStateKey
}
