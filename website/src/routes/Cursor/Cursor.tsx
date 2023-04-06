import styled from '@emotion/styled'
import React from 'react'
import { useUpdateCursorify } from 'react-cursorify'

const Cursor: React.FC = () => {
  const { updateCursor } = useUpdateCursorify()

  return (
    <StyledWrapper className="container">
      <div className="header">Find your own cursor 🎉</div>
      <div className="cursor-list">
        <div className="cursor"></div>
      </div>
    </StyledWrapper>
  )
}

export default Cursor

const StyledWrapper = styled.div`
  padding: 40px 0 120px;
  .header {
    font-size: 32px;
    font-weight: bold;
    border-bottom: 1px solid hsla(210, 18%, 87%, 1);
    margin-bottom: 16px;
    padding-bottom: 0.3em;
  }
`
