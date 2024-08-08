import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Full from './Full/Full.jsx'
import Page1 from './pages/page1/page1.jsx'
import Page2 from './pages/page2/page2.jsx'
import Page3 from './pages/page3/page3.jsx'
import Page4 from './pages/page4/page4.jsx'
import Page5 from './pages/page5/page5.jsx'
import Page6 from './pages/page6/page6.jsx'
import Page7 from './pages/page7/page7.jsx'
import Page8 from './pages/page8/page8.jsx'
import Page9 from './pages/page9/page9.jsx'
import Page10 from './pages/page10/page10.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename = "/ProService">
      <Routes>
        <Route path='/' element={<Full />} />
        <Route path='/Page1' element={<Page1 />} />
        <Route path='/Page2' element={<Page2 />} />
        <Route path='/Page3' element={<Page3 />} />
        <Route path='/Page4' element={<Page4 />} />
        <Route path='/Page5' element={<Page5 />} />
        <Route path='/Page6' element={<Page6 />} />
        <Route path='/Page7' element={<Page7 />} />
        <Route path='/Page8' element={<Page8 />} />
        <Route path='/Page9' element={<Page9 />} />
        <Route path='/Page10' element={<Page10 />} />
      </Routes>
    </Router>
  </StrictMode>,
)
