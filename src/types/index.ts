import { ReactNode } from 'react'

export type CusorifyStateType = {
  hoverState: HoverState
  mouseState: MouseState
  cursor: ReactNode
  delay: number
  opacity: number
  defaultCursorVisible: boolean
}

export type CursorProps = {
  disabled?: boolean
}

export type HoverState =
  | 'auto'
  | 'default'
  | 'none'
  | 'contextMenu'
  | 'help'
  | 'pointer'
  | 'progress'
  | 'wait'
  | 'cell'
  | 'crosshair'
  | 'text'
  | 'verticalText'
  | 'alias'
  | 'copy'
  | 'move'
  | 'noDrop'
  | 'notAllowed'
  | 'grab'
  | 'grabbing'
  | 'allScroll'
  | 'colResize'
  | 'rowResize'
  | 'nResize'
  | 'eResize'
  | 'sResize'
  | 'wResize'
  | 'neResize'
  | 'nwResize'
  | 'seResize'
  | 'swResize'
  | 'ewResize'
  | 'nsResize'
  | 'neswResize'
  | 'nwseResize'
  | 'zoomIn'
  | 'zoomOut'

export type MouseState = 'default' | 'mouseDown'
export type CursorifyReducerActionType =
  | {
      type: 'UPDATE_HOVER_STATE'
      payload: HoverState
    }
  | {
      type: 'UPDATE_MOUSE_STATE'
      payload: MouseState
    }
  | {
      type: 'UPDATE_CURSOR'
      payload: ReactNode
    }
  | {
      type: 'UPDATE_DELAY'
      payload: number
    }
  | {
      type: 'UPDATE_OPACITY'
      payload: number
    }
  | {
      type: 'UPDATE_VISIBLE_DEFAULT_CURSOR'
      payload: boolean
    }
