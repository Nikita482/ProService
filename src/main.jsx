import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import App from './App.jsx'
import Page1 from './pages/page1/page1.jsx'
import Page2 from './pages/page2/page2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename = "/ProService">
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Page1' element={<Page1 />} />
        <Route path='/Page2' element={<Page2 />} />
      </Routes>
    </Router>
  </StrictMode>,
)
