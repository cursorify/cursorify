import { ReactNode } from 'react'

export type CusorifyStateType = {
  cursorStyle: CursorStyle
  mouseState: MouseState
  cursor: ReactNode
  delay: number
  opacity: number
  defaultCursorVisible: boolean
  breakpoint: number
}

export type CursorProps = {
  disabled?: boolean
}

export type CursorStyle =
  | 'auto'
  | 'default'
  | 'none'
  | 'contextMenu'
  | 'help'
  | 'pointer'
  | 'click'
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
      type: 'UPDATE_STYLE'
      payload: CursorStyle
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
  | {
      type: 'UPDATE_ENABLED'
      payload: boolean
    }
