import { useRegisterHover } from '@/react-cursorify'
import styled from '@emotion/styled'
import OpenColor from 'open-color'
import React from 'react'

type Props = {}

const Footer: React.FC<Props> = () => {
  const register = useRegisterHover()
  return (
    <StyledWrapper>
      <div>
        Copyright © 2023{' '}
        <a
          href="https://github.com/morethanmin"
          target="_blank"
          rel="noreferrer"
          {...register('pointer')}
        >
          morethanmin
        </a>
        .
      </div>
    </StyledWrapper>
  )
}

export default Footer

const StyledWrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: 50px;
  background-color: ${OpenColor.gray[1]};
  color: ${OpenColor.gray[9]};
  font-weight: 200;
`
