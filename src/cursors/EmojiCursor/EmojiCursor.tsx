import styled from '@emotion/styled'
import useCursorify from '../../hooks/useCursorify'
import React from 'react'
import { CursorProps } from '../../types'

const EmojiCursor: React.FC<CursorProps> = ({ disabled }) => {
  const { mouseState, hoverState } = useCursorify()

  return (
    <StyledWrapper data-hover={hoverState}>
      {(() => {
        if (disabled) return '🖐️'
        if (mouseState === 'mouseDown') return '✊'
        if (hoverState === 'pointer') return '👆'
        return '🖐️'
      })()}
    </StyledWrapper>
  )
}

export default EmojiCursor

const StyledWrapper = styled.div`
  width: 40px;
  height: 40px;
  font-size: 30px;
`
