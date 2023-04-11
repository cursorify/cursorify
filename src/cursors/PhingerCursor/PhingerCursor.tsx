import styled from '@emotion/styled'
import useCursorify from '../../hooks/useCursorify'
import Default from './svgs/Default'
import Pointer from './svgs/Pointer'
import Text from './svgs/Text'
import { CursorProps } from '../../types'
import React from 'react'

const PhingerCursor: React.FC<CursorProps> = ({ disabled }) => {
  const { hoverState } = useCursorify()
  return (
    <StyledWrapper data-hover={disabled ? 'default' : hoverState}>
      {(() => {
        if (disabled) return <Default />
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
