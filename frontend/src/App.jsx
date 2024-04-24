import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './componenets/NavBar'
import Footer from './componenets/Footer'

function App() {
  return (
    <>
      <NavBar/>
      <div class='h-screen'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
