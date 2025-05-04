import React from 'react'
import ReactDOM from 'react-dom/client'
import { CursorifyProvider, useCursorifyState, useUpdateCursorify } from '.'

const AppContainer = () => {
  return (
    <CursorifyProvider enabled breakpoint={1000}>
      <App />
    </CursorifyProvider>
  )
}

const App = () => {
  const { opacity } = useCursorifyState()
  const { updateOpacity } = useUpdateCursorify()

  return (
    <>
      <h1>Cursorify</h1>
      <div style={{ cursor: 'pointer' }}>
        1 div
        <div>2div</div>
      </div>
      <a>link</a>
      <input
        min={0}
        max={1}
        step={0.1}
        type="range"
        name="opacity"
        value={opacity}
        onChange={(e) => {
          updateOpacity(+e.target.value)
        }}
      />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
)
