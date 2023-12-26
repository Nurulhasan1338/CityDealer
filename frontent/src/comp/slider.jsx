import React from 'react'
import img1 from "../assets/pexels-fomstock-com-1123982.jpg"
import img2 from "../assets/pexels-flo-dahm-699467.jpg"
import img3 from "../assets/pexels-m-venter-1659438.jpg"
import img4 from "../assets/pexels-krivec-ales-547119.jpg"

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
        <div className="carousel-item active">
          <img src={img1}
            className="d-block w-100"
            alt="slider img"
          />
          <div className="carousel-caption d-md-block banner">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src={img3}
            className="d-block w-100"
            alt="slider img"
          />
          <div className="carousel-caption d-md-block banner">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src={img2}
            className="d-block w-100"
            alt="slider img"
          />
          <div className="carousel-caption d-md-block banner">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src={img4} className="d-block w-100" alt="slider img" />
          <div className="carousel-caption d-md-block banner">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
};

export default Slider;


