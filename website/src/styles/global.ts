import { css } from '@emotion/react'
import OpenColor from 'open-color'

export const globalStyles = css`
  html {
    font-family: Pretendard, Roboto, sans-serif;
    background-color: #f8f9fa;
  }

  body {
    padding: 0;
    margin: 0;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  h1 {
    font-size: 3rem;
  }
  button {
    outline: none;
    border: none;
    background-color: transparent;
    border-radius: 6px;
    background-color: white;
    padding: 12px 24px;
    font-size: 1.3rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background-color: ${OpenColor.gray[2]};
    }
  }
`
