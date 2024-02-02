import React from 'react'
import img1 from "../assets/sliderImg1.jpg";
import img2 from "../assets/sliderImg2.jpg"
import img3 from "../assets/sliderImg3.jpg"
import img4 from "../assets/sliderImg4.jpg"

const Slider = () => {
  return (
    <div id="carouselExampleCaptions" data-bs-ride="carousel" className="carousel slide carouselBlock" >
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img src={img1}
            className="d-block w-100"
            alt="slider img"
          />
          
        </div>

        <div className="carousel-item" data-bs-interval="5000">
          <img src={img3}
            className="d-block w-100"
            alt="slider img"
          />
         
        </div>

        <div className="carousel-item" data-bs-interval="5000">
          <img src={img2}
            className="d-block w-100"
            alt="slider img"
          />
         
        </div>

        <div className="carousel-item" data-bs-interval="5000">
          <img src={img4} className="d-block w-100" alt="slider img" />
         
        </div>
      </div>
      
    </div>
  )
};

export default Slider;


