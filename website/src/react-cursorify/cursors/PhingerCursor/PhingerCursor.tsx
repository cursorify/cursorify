import useCursorify from '@/react-cursorify/hooks/useCursorify'
import styled from '@emotion/styled'
import React from 'react'
import Default from './svgs/Default'
import Pointer from './svgs/Pointer'
import Text from './svgs/Text'

const PhingerCursor: React.FC = () => {
  const { hoverState } = useCursorify()
  return (
    <StyledWrapper data-hover={hoverState}>
      {(() => {
        if (hoverState === 'pointer') return <Pointer />
        if (hoverState === 'text') return <Text />
        return <Default />
      })()}
    </StyledWrapper>
  )
}

export default PhingerCursor

const StyledWrapper = styled.div`
  width: 24px;
  height: 24px;

  margin-top: 12px;
  margin-left: 12px;
  &[data-hover='default'] {
    margin-top: 24px;
    margin-left: 24px;
  }
`
