import {
  useUpdateCursorify,
  useHoverRegister,
  CircleCursor,
  EmojiCursor,
  PhingerCursor,
  useCursorifyState,
} from 'react-cursorify'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import StyledWrapper from './Home.style'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const register = useHoverRegister()
  const state = useCursorifyState()
  const { updateCursor, updateOpacity, updateDelay } = useUpdateCursorify()

  return (
    <StyledWrapper>
      <div className="header">
        <h1 {...register('text')}>🕹️</h1>
        <h1 {...register('text')}>React Cursorify</h1>
        <div className="description" {...register('text')}>
          Customizable cursor component in react project
        </div>
        <div className="buttons">
          <button onClick={() => navigate('/docs')} {...register('pointer')}>
            Get Started
          </button>
          <button onClick={() => navigate('/cursor')} {...register('pointer')}>
            Cursors
          </button>
        </div>
      </div>
      <main>
        <div className="window container">
          <div className="header">
            <div className="lt">
              <div
                className="btn"
                data-type="close"
                {...register('pointer')}
              ></div>
              <div
                className="btn"
                data-type="minimize"
                {...register('pointer')}
              ></div>
              <div
                className="btn"
                data-type="maximize"
                {...register('pointer')}
              ></div>
            </div>
            {/* <div className="rt">🕹️</div> */}
          </div>
          <div className="content">
            <div className="title">
              <h2 {...register('text')}>
                Easily customize your mouse cursor! 🎉
              </h2>
              <div className="description" {...register('text')}>
                React Cursorify is a library that helps you easily custom the
                style of the mouse cursor in a React project. <br /> Choose your
                cursor below!
              </div>
            </div>
            <div className="cursors">
              <div className="cursor">
                <div
                  className="cursor-wrapper"
                  onClick={() => updateCursor(<CircleCursor />)}
                  {...register('pointer')}
                >
                  <CircleCursor disabled />
                </div>
                <h4 className="title" {...register('text')}>
                  Circle
                </h4>
              </div>
              <div className="cursor">
                <div
                  className="cursor-wrapper phinger"
                  onClick={() => updateCursor(<PhingerCursor />)}
                  {...register('pointer')}
                >
                  <PhingerCursor disabled />
                </div>
                <h4 className="title" {...register('text')}>
                  Phinger
                </h4>
              </div>
              <div className="cursor">
                <div
                  className="cursor-wrapper"
                  onClick={() => updateCursor(<EmojiCursor />)}
                  {...register('pointer')}
                >
                  <EmojiCursor disabled />
                </div>
                <h4 className="title" {...register('text')}>
                  Emoji
                </h4>
              </div>
            </div>
            <div className="options">
              <div className="option">
                <div className="label">Opacity</div>
                <input
                  type="range"
                  name="opacity"
                  id="opacity"
                  value={state.opacity}
                  onChange={(e) => {
                    updateOpacity(+e.target.value)
                  }}
                  min={0.1}
                  max={1}
                  step={0.1}
                />
                <div className="value">{state.opacity}</div>
              </div>
              <div className="option">
                <div className="label">Delay</div>
                <input
                  type="range"
                  name="delay"
                  id="delay"
                  value={state.delay}
                  onChange={(e) => {
                    updateDelay(+e.target.value)
                  }}
                  min={1}
                  max={40}
                  step={1}
                />
                <div className="value">{state.delay}</div>
              </div>
            </div>
          </div>
          {/* mouse component 선택 */}
          {/* cursor control section */}
          {/* 
          cursor component mac scroll style
          delay, 
          size, 
          opacity 
          */}
        </div>
      </main>
    </StyledWrapper>
  )
}

export default Home
