import React, { useState, useEffect } from 'react';
import "./index.css";


const PropertySlider = () => {
const [currentIndex, setCurrentIndex] = useState(0);
const List = [
  {
      address: "123 Main Street",
      city: "Anytown",
      state: "Anystate",
      zipCode: "12345",
      price: 250000,
      bedrooms: 3,
      direction:"North-facing",
      bathrooms: 2,
      squareFeet: 2000,
      description: "Beautiful single-family home with spacious backyard.",
      amenities: ["Hardwood floors", "Granite countertops", "Stainless steel appliances"],
      category: "Single Family Home",
      dateOfPosting: "2023-02-07",
      imgURL:"https://picsum.photos/id/237/200/300",
  },
  {
      address: "456 Elm Street",
      city: "Sometown",
      state: "Anotherstate",
      zipCode: "54321",
      price: 350000,
      bedrooms: 4,
      direction:"North-facing",
      bathrooms: 3,
      squareFeet: 2800,
      description: "Charming colonial-style home with wrap-around porch.",
      amenities: ["Fireplace", "Vaulted ceilings", "Deck"],
      category: "Colonial",
      imgURL:"https://picsum.photos/id/237/200/300",
      dateOfPosting: "2024-02-06"
  },
  {
      address: "789 Oak Avenue",
      city: "Anothercity",
      state: "Yetanotherstate",
      zipCode: "67890",
      price: 180000,
      bedrooms: 2,
      direction:"North-facing",
      bathrooms: 1,
      squareFeet: 1500,
      description: "Cozy starter home perfect for first-time buyers.",
      amenities: ["Updated kitchen", "Fenced yard", "Close to schools and parks"],
      category: "Starter Home",
      imgURL:"https://picsum.photos/seed/picsum/200/200",
      dateOfPosting: "2024-02-05"
  },
  {
      address: "789 Oak Avenue",
      city: "Anothercity",
      state: "Yetanotherstate",
      zipCode: "67890",
      price: 180000,
      bedrooms: 2,
      direction:"North-facing",
      bathrooms: 1,
      squareFeet: 1500,
      description: "Cozy starter home perfect for first-time buyers.",
      amenities: ["Updated kitchen", "Fenced yard", "Close to schools and parks"],
      category: "Starter Home",
      imgURL:"https://picsum.photos/seed/picsum/200/200",
      dateOfPosting: "2024-02-05"
  },
  {
      address: "789 Oak Avenue",
      city: "Anothercity",
      state: "Yetanotherstate",
      zipCode: "67890",
      price: 180000,
      bedrooms: 2,
      direction:"North-facing",
      bathrooms: 1,
      squareFeet: 1500,
      description: "Cozy starter home perfect for first-time buyers.",
      amenities: ["Updated kitchen", "Fenced yard", "Close to schools and parks"],
      category: "Starter Home",
      imgURL:"https://picsum.photos/seed/picsum/200/200",
      dateOfPosting: "2024-02-05"
  },
  {
      address: "789 Oak Avenue",
      city: "Anothercity",
      state: "Yetanotherstate",
      zipCode: "67890",
      price: 180000,
      bedrooms: 2,
      direction:"North-facing",
      bathrooms: 1,
      squareFeet: 1500,
      description: "Cozy starter home perfect for first-time buyers.",
      amenities: ["Updated kitchen", "Fenced yard", "Close to schools and parks"],
      category: "Starter Home",
      imgURL:"https://picsum.photos/seed/picsum/200/200",
      dateOfPosting: "2024-02-05"
  },
  {
      address: "789 Oak Avenue",
      city: "Anothercity",
      state: "Yetanotherstate",
      zipCode: "67890",
      price: 180000,
      bedrooms: 2,
      direction:"North-facing",
      bathrooms: 1,
      squareFeet: 1500,
      description: "Cozy starter home perfect for first-time buyers.",
      amenities: ["Updated kitchen", "Fenced yard", "Close to schools and parks"],
      category: "Starter Home",
      imgURL:"https://picsum.photos/seed/picsum/200/200",
      dateOfPosting: "2024-02-05"
  }
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % List.length);
    }, 1000); // Change the interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [List.length]);

  return (
 <div>

<div className="gallery-container">
      <div
        className="gallery"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {List.map((image, index) => (
          <img key={index} src={image.imgURL} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
    
      
</div>
  )
}

export default PropertySlider;
