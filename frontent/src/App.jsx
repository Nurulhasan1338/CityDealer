import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './comp/Header/Header'
import List from "./comp/List/List"

function App() {


  return (
    <>
    <Header></Header>
    
    <div className='row'>
      <div className='col-2'>
        {/* <sideMenu></sideMenu> */}
        side menu
      </div>
      <div className='col-10'>
        <List></List>
      </div>
    </div>
     
    </>
  )
}

export default App
