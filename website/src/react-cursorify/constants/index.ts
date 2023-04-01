import { CircleCursor } from '../cursors/CircleCursor'
import { CusorifyStateType } from '../types'

export const defaultCursorifyState: CusorifyStateType = {
  hoverState: 'default',
  mouseState: 'default',
  cursor: CircleCursor,
  delay: 1,
  opacity: 1,
}
