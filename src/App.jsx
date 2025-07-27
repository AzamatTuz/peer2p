import React from 'react'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Auth from './pages/Auth'
import "./App.css"
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/authorization' element={<Auth/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}/>

      </Routes>
    
    </BrowserRouter>
      
  )
}

export default App