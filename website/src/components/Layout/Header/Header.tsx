import styled from '@emotion/styled'
import OpenColor from 'open-color'
import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'

type Props = {}

const Header: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="lt">
        <Link className="logo cursorify-pointer" to={'/'}>
          🕹️ React Cursorify
        </Link>
        <nav>
          {/* active시 primary color */}
          <Link className="menu cursorify-pointer" to={'/'}>
            Home
          </Link>
          <Link className="menu cursorify-pointer" to={'/cursor'}>
            Cursor
          </Link>
          <Link className="menu cursorify-pointer" to={'/playground'}>
            Playground
          </Link>
        </nav>
      </div>
      <div className="rt">
        <a
          className="cursorify-pointer"
          href="https://github.com/morethanmin/react-cursorify"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillGithub />
        </a>
      </div>
    </StyledWrapper>
  )
}

export default Header

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  border-bottom: 1px solid ${OpenColor.gray[3]};
  padding: 0 20px;
  > .lt {
    display: flex;
    align-items: center;
    gap: 40px;
    .logo {
      color: ${OpenColor.gray[9]};
      text-decoration: none;
      font-weight: bold;
      font-size: 18px;
    }
    nav {
      display: flex;
      align-items: center;
      gap: 20px;
      .menu {
        color: ${OpenColor.gray[9]};
        text-decoration: none;
      }
    }
  }
  > .rt {
    a {
      text-decoration: none;
      svg {
        color: ${OpenColor.gray[9]};
        font-size: 28px;
      }
    }
  }
`
