/**
 * @copyright 2025 medo
 * @license Apache-2.0
 */


/**
 * Node module 
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * Components
 */
import App from './App.jsx'
/**
 * Styles
 */
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
