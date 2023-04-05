import styled from '@emotion/styled'
import React from 'react'
import useCursorify from '../../hooks/useCursorify'

const EmojiCursor: React.FC = () => {
  const { mouseState, hoverState } = useCursorify()

  return (
    <StyledWrapper data-hover={hoverState} {...{ a: 1 }}>
      {(() => {
        if (mouseState === 'mouseDown') return '✊'
        if (hoverState === 'pointer') return '👆'
        if (hoverState === 'text') return '✍️'

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
