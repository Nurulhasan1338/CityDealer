import React from 'react';
import Card from "./Card"

const realEstatePropertise = [
    {
      name: "Luxury Villa",
      price: 1200000,
      date: "2023-01-01",
      imageUrl: "https://example.com/luxury-villa.jpg",
      location: "Prime City, USA",
      size: 5000,
    },
    {
      name: "Cozy Apartment",
      price: 300000,
      date: "2023-02-15",
      imageUrl: "https://example.com/cozy-apartment.jpg",
      location: "Downtown, Cityville",
      size: 1200,
    },
    {
      name: "Waterfront Mansion",
      price: 2500000,
      date: "2023-03-10",
      imageUrl: "https://example.com/waterfront-mansion.jpg",
      location: "Seaside Drive, Coastal Town",
      size: 8000,
    },
    {
      name: "Mountain Retreat",
      price: 800000,
      date: "2023-04-05",
      imageUrl: "https://example.com/mountain-retreat.jpg",
      location: "Serenity Valley, Mountains",
      size: 3000,
    },
    {
      name: "Urban Loft",
      price: 500000,
      date: "2023-05-20",
      imageUrl: "https://example.com/urban-loft.jpg",
      location: "Metropolis Center, City",
      size: 1500,
    },
];

const List = () => {
  return (
    <div className='row row-cols-3'>

{
    
    realEstatePropertise.map((item,index)=>{

        return (

            <div className="col mt-4" key={index}>
            <Card item={item}></Card>
            </div>

    )})
        
 }

       
    </div>
  )
}

export default List
