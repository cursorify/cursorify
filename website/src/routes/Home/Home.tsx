import { Footer } from '@components/Footer'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import StyledWrapper from './Home.style'
import Community from './svgs/Community'
import Declarative from './svgs/Declarative'
import EasyToUse from './svgs/EasyToUse'

const Home: React.FC = () => {
  const navigate = useNavigate()
  return (
    <StyledWrapper>
      <div className="header">
        <h1>🕹️</h1>
        <h1>React Cursorify</h1>
        <div className="description">
          Customizable cursor component in react project
        </div>
        <div className="buttons">
          <button
            className="cursorify-pointer"
            onClick={() => navigate('/docs')}
          >
            Get Started
          </button>
          <button
            className="cursorify-pointer"
            onClick={() => navigate('/cursor')}
          >
            Cursors
          </button>
        </div>
      </div>
      <main>
        <div className="window">
          <div className="header">
            <div className="lt">
              <div className="btn cursorify-pointer" data-type="close"></div>
              <div className="btn cursorify-pointer" data-type="minimize"></div>
              <div className="btn cursorify-pointer" data-type="maximize"></div>
            </div>
            {/* <div className="rt">🕹️</div> */}
          </div>
          <div className="title">
            <h2>Easily customize your mouse cursor! 🎉</h2>
            <div className="description">
              React Cursorify is a library that helps you easily change the
              style of the mouse cursor in a React project.
            </div>
          </div>
          <div className="features">
            <div className="feature">
              <div className="svg-wrapper">
                <EasyToUse />
              </div>
              <h4 className="title">Easy to use</h4>
              <div className="description">
                React Cursorify is designed to be user-friendly and easy to use.
              </div>
            </div>
            <div className="feature">
              <div className="svg-wrapper">
                <Community />
              </div>
              <div className="title">Community friendly</div>
              <div className="description">
                React Cursorify is built with a focus on fostering a friendly
                and supportive community.
              </div>
            </div>
            <div className="feature">
              <div className="svg-wrapper">
                <Declarative />
              </div>
              <div className="title">Declarative</div>
              <div className="description">
                Simplifying programming with a declarative approach.
              </div>
            </div>
          </div>

          {/* cursor control section */}
          {/* 
          cursor component mac scroll style
          delay, 
          size, 
          opacity 
          */}
        </div>
      </main>
      <Footer />
    </StyledWrapper>
  )
}

export default Home
