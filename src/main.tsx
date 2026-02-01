import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/variables.module.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
