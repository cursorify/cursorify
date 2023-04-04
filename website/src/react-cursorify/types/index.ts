import React from 'react'
import { JsxAttribute } from 'typescript'

export type CursorifyOptions = {
  cursor: CursorState
  opacity: number
  delay: number
}

export type CusorifyStateType = {
  hoverState: HoverState
  mouseState: MouseState
  cursor: CursorState
  delay: number
  opacity: number
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
export type CursorState = any
export type CursorifyReducerActionType =
  | {
      type: 'CHANGE_HOVER_STATE'
      payload: HoverState
    }
  | {
      type: 'CHANGE_MOUSE_STATE'
      payload: MouseState
    }
  | {
      type: 'CHANGE_CURSOR'
      payload: CursorState
    }
