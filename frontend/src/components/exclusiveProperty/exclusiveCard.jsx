import React from 'react'
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';

import styled from '@mui/system/styled';

import IMAGE from "../../assets/sliderImg3.jpg"



const ExclusiveCard = () => {
  return (
    <div className='p-3'>
 
      <Grid container spacing={2}>
        <Grid xs={12}>
            
            <div className='d-flex flex-column align-items-center'>
                <h6 className='fs-5'>ALL PROPERTY NEEDS - ONE PORTAL</h6>
                <h1 className='display-3 text-center'>Find Better Places to Live, Work and Wonder...</h1>
            </div>

        </Grid>
        <Grid xs={7}>
          <div className='imgcover'>
          <img src={IMAGE} className='w-100 exclusive-image' alt="exclusive" />

          </div>
        </Grid>
        <Grid xs={5}>
         
         <h3>dfkhdiflkdjflkdf</h3>
         <h5>klisdfnlkvnlkf</h5>
         <p>flkdnfdhglkdg dslfksdkfjlsdkf sdfkljsdalkfjsdlkf dslkf sd flksdjfls</p>
        </Grid>
       
      </Grid>
 
      
    </div>
  )
}

export default ExclusiveCard
