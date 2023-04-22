import React from 'react'
import ReactDOM from 'react-dom/client'
import { CursorifyProvider } from '.'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CursorifyProvider>
      <h1>cursorify test</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </CursorifyProvider>
  </React.StrictMode>
)
