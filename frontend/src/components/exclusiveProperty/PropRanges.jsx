import React from 'react'
import ExclusiveCard from './exclusiveCard'

import Grid from '@mui/system/Unstable_Grid';

const PropRanges = () => {
  return (
   
         <Grid container spacing={2}>
         <Grid xs={12}>
            <div className='d-flex flex-column align-items-center'>
                <h6 className='fs-5'>ALL PROPERTY NEEDS - ONE PORTAL</h6>
                <h1 className='display-3 text-center'>Find Better Places to Live, Work and Wonder...</h1>
            </div>
        </Grid>

        <ExclusiveCard></ExclusiveCard>
        <ExclusiveCard></ExclusiveCard>
        <ExclusiveCard></ExclusiveCard>
        

        </Grid>

      
   
  )
}

export default PropRanges
