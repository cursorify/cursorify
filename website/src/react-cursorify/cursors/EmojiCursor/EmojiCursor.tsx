import useCursorify from '@/react-cursorify/hooks/useCursorify'
import styled from '@emotion/styled'
import React from 'react'

const EmojiCursor: React.FC = () => {
  const { hoverState } = useCursorify()

  return (
    <StyledWrapper data-hover={hoverState} {...{ a: 1 }}>
      {(() => {
        // if(mouseState)
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
