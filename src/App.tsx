import { Routes, Route } from 'react-router-dom'

import { HelloWorld } from './components/HelloWorld'
import './App.css'

export const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/*" element={<HelloWorld />} />
      </Routes>
    </div>
  )
}
