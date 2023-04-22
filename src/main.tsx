import React from 'react'
import ReactDOM from 'react-dom/client'
import { CursorifyProvider } from '.'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CursorifyProvider>
      <h1>Cursorify</h1>
      <div style={{ cursor: 'pointer' }}>
        1 div
        <div>2div</div>
      </div>
      <a>link</a>
    </CursorifyProvider>
  </React.StrictMode>
)
