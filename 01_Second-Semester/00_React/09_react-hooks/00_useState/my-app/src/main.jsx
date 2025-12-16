import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


// Import Root Component
import App from './App.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
