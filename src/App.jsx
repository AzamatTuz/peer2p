import React from 'react'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Auth from './pages/Auth'
import "./App.css"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/authorization' element={<Auth/>}/>

      </Routes>
    
    </BrowserRouter>
      
  )
}

export default App