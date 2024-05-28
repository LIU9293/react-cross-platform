import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../assets/global.css'

// @ts-expect-error
window.__REACT_CROSS_PLATFORM_IS_WEB__ = true

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)