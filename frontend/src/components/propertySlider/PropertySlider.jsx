import React, { useState, useEffect } from 'react';
import "./index.css";


const PropertySlider = ({ Propimages }) => {
const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Propimages.length);
    }, 1000); // Change the interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [Propimages.length]);

  return (
 <div>

<div className="gallery-container">
      <div
        className="gallery"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Propimages.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
    
      
</div>
  )
}

export default PropertySlider;
