import React ,{useEffect,useState}from 'react'
import "./index.css"
import PropertyCard from "../catalog/PropertyCard"
import SearchBox from './menuBox.jsx'
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import Chip from '@mui/joy/Chip'
import Banner from "../banner.jsx"

const MainCatalog = () => {
   const [Properties, setProperties] = useState([]);
   const [filters,setFilter] =  React.useState({
    direction:null,
    price:null,
    size:[200,500],
    propertyType:null,
    location:null
  });

  const realEstateProperties = [
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



const kotaLocalities = [
  "Rajeev Gandhi Nagar",
  "Vigyan Nagar",
  "Kota City",
  "Kota Industrial Area",
  "Mahaveer Nagar",
  "Talwandi",
  "Keshavpura",
  "Rampura",
  "Nayapura",
  "Shakti Nagar",
  "Saket",
  "Kunhari",
  "Bundi Road",
  "Gumanpura",
  "Dadabari",
  "Baran Road",
  "Dadwara",
  "Swami Vivekanand Nagar",
  "Borkhera",
  "Bhimganj Mandi",
  "Chambal Industrial Area",
  "Chhawani",
  "Kotri",
  "Sindhu Nagar",
  "Balita Road",
  "Rangbari",
  "Aerodrome Circle",
  "Srinathpuram",
  "Surya Nagar",
  "Dadabari Extension"
];
const color = ["primary","danger","warning","success","neutral"];
const getColor = ()=>{
  const randomIndex = Math.floor(Math.random() * color.length);
  // Return the element at the random index
  return color[randomIndex];
}



const applyFilters = () =>{
  console.log(filters);
}
function applyFilterOnLocatioin(place){
  alert(place)
}





  return (
    <div>
      <Banner ></Banner>
        <div className="searchBox">
          <SearchBox filters = {filters} applyFilters = {applyFilters} setFilter = {setFilter}></SearchBox>
        </div>
        <div className='container mb-4'>
        <Grid container spacing={2}>
          <Grid md={12}>
            <div className='w-100 text-center'>

          <h4 className='display-5'>Unlock the door to your new beginnings.</h4>
            <Typography  >
            Where every house tells a story.
            </Typography>
          </div>
          </Grid>

     

        <Grid sm={12} md={12} className="card-block">
        {
          realEstateProperties.map((ele,key)=>{
            return(
              <div key={key} className='p-3'>
          <PropertyCard  item={ele}></PropertyCard>
          </div>
      )}) } 
      </Grid>
        
      </Grid>
   </div>

    </div>
  )
}

export default MainCatalog
