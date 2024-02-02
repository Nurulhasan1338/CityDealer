import { useState } from 'react'
import './App.css'


import Navbar from "./components/Header/Navbar.jsx"
import PropertySlider from "./components/propertySlider/PropertySlider.jsx";
import propPhoto from "./assets/sliderImg2.jpg"
import Footer from "./components/footer/footer.jsx"
import Slider from "./components/slider.jsx"
import PropRange from "./components/exclusiveProperty/PropRanges.jsx"


import { CssVarsProvider } from '@mui/joy/styles';
import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';




function App() {

  const images = [
    propPhoto,
    propPhoto,
    propPhoto,
    propPhoto,
    propPhoto,
    propPhoto,
    propPhoto,
    propPhoto,
    propPhoto,
    propPhoto,
    propPhoto,
    propPhoto,
    propPhoto,
    propPhoto,
    propPhoto,
    propPhoto,
    propPhoto
  ]

  return (
    <>
      <CssVarsProvider defaultMode="dark">

        <div className='body'>
        <Navbar></Navbar>
        <Slider></Slider>
        
        <div className="container introCard">
            <div className="heading shadow">
              <h1>Discover Best Places to Live!</h1>
              <h4>One stop for all your need </h4>
              <h6>Buy | Sell | Decor | Rent</h6>
            </div>
            <div className='slidingimg'>
             <PropertySlider Propimages ={images} ></PropertySlider>
             
            </div>
        </div>

        <div className="container pb-5">
      
              {/* <OnSaleProperty></OnSaleProperty> */}
             <PropRange></PropRange>
              {/* <NewLaunch></NewLaunch>
              <OnRentProperty></OnRentProperty>
              <ExclusivePropertyOnRent></ExclusivePropertyOnRent> */}
          </div>


      <Footer></Footer>


        </div>
      </CssVarsProvider>
    </>
  )
}

export default App
