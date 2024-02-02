import React from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import Button from '@mui/joy/Button';

import "./card.css";
import IMAGE from "../../assets/sliderImg3.jpg"



const ExclusiveCard = () => {
  return (
    <Grid container className="ExclusiveCard" spacing={2}>
        <Grid md={7} xs={12}>
          <div className='imgcover'>
          <img src={IMAGE} className='w-100 exclusive-image' alt="exclusive" />
          </div>
        </Grid>

        <Grid md={5} xs={12}>
         <div className = "propFor-buy">
         <p className='uplable'>For Buying Property</p>
         <h2>Find, Buy & Own Your Dream Home</h2>
         <p className='downlabel'>Explore from Apartments, land, builder floors, villas and more</p>
         <div >
         <Button size="lg" className='px-4' variant="solid">View all</Button>

         </div>
          </div>
        </Grid>

        </Grid>
 
  )
}

export default ExclusiveCard
