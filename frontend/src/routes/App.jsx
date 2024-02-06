import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

import Navbar from "../components/Header/Navbar.jsx"
import Home from "../components/Home.jsx"
import Footer from "../components/footer/footer.jsx"
import PropertyForSell from "../components/catalog/index.jsx"
import { CssVarsProvider } from '@mui/joy/styles';





function App() {

 

  return (
    <>
  
      <div className='body'>
      <Navbar></Navbar>
      <Outlet/>
    
       <Footer></Footer>


        </div>
    </>
  )
}

export default App
