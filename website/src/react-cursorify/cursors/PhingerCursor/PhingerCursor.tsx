import useCursorify from '@/react-cursorify/hooks/useCursorify'
import styled from '@emotion/styled'
import React from 'react'
import Default from './svgs/light/Default'
import Pointer from './svgs/light/Pointer'

const PhingerCursor: React.FC = () => {
  const { hoverState } = useCursorify()
  return (
    <StyledWrapper data-hover={hoverState}>
      {(() => {
        if (hoverState) return <Pointer />
        return <Default />
      })()}
    </StyledWrapper>
  )
}

export default PhingerCursor

const StyledWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin-top: 24px;
  margin-left: 24px;
  &[data-pointer='true'] {
    margin-top: 12px;
    margin-left: 12px;
  }
`
