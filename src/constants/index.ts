import { CusorifyStateType } from '../types'

export const defaultCursorifyState: CusorifyStateType = {
  cursorStyle: 'default',
  mouseState: 'default',
  cursor: (() => null)(),
  delay: 1,
  opacity: 1,
  defaultCursorVisible: false,
  enabled: true,
}
