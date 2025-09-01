
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppContaxtProvider from './context/AppContext.jsx'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppContaxtProvider>
    <App />
  </AppContaxtProvider>
 </BrowserRouter>
)
