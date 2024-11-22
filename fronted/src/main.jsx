import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'

// import { Router } from '@/components/routes/index.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)

    //  router={Router}>