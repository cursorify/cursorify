import styled from '@emotion/styled'
import OpenColor from 'open-color'
import React from 'react'

// todo mac window 창 처럼 표시해서 interactive하게 구현해보기
const Home: React.FC = () => {
  return (
    <StyledWrapper>
      <div className="header">
        <h1>🕹️</h1>
        <h1>React Cursorify</h1>
        <div className="description">
          Customizable cursor component in react project
        </div>
        <div className="buttons cursorify-pointer">
          <button>Get Started</button>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default Home

const StyledWrapper = styled.div`
  .header {
    background-color: ${OpenColor.violet[9]};
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    gap: 10px;
    .description {
      margin-top: 10px;
      font-size: 1.4rem;
    }
    .buttons {
      display: flex;
      margin-top: 40px;
      margin-bottom: 20px;
      button {
        color: ${OpenColor.gray[8]};
      }
    }
  }
`
