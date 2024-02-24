import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

import Navbar from "../components/Header/Navbar.jsx"
import Footer from "../components/footer/footer.jsx"





function App() {

 


 

  return (
    <>
  
      <div className='body'>
      <Navbar></Navbar>
      <Outlet />
       <Footer></Footer>
        </div>
    </>
  )
}

export default App
