import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import css
import './assets/App.css'

// Import Root Component
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
