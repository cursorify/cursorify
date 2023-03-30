import styled from '@emotion/styled'
import React from 'react'
import { useCursorify } from 'react-cursorify'

const EmojiCursor: React.FC = () => {
  const { isPointer } = useCursorify()

  return (
    <StyledWrapper data-pointer={isPointer} {...{ a: 1 }}>
      {(() => {
        // if(mouseState)
        if (isPointer) return '🖐️'
        return '👆'
      })()}
    </StyledWrapper>
  )
}

export default EmojiCursor

const StyledWrapper = styled.div`
  width: 30px;
  height: 30px;
  font-size: 30px;
`
