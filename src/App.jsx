import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './components/Layout/RootLayout.jsx'

import Home from './pages/Home.jsx'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
