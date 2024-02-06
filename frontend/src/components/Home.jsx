import React from 'react'
import Slider from './slider'
import PropertySlider from "./propertySlider/PropertySlider.jsx";
import PropRange from "./exclusiveProperty/PropRanges.jsx"
import propPhoto from "../assets/sliderImg2.jpg"

const Home = () => {

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

      
    </>
  )
}

export default Home
