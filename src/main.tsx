import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Patterns from './pages/Patterns'
import Favorites from './pages/Favorites'
import Home from './pages/Home'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="pattern" element={<Patterns />} />
          <Route path="favorite" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
