import React from 'react'
import "./index.css"
import Card from "../mialanious/profileCard"
import Orders from "../mialanious/OrderSelector"
import PropertyCard from "../catalog/PropertyCard"
import SearchBox from './SearchBox'
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';
import Typography from '@mui/joy/Typography';

const MainCatalog = () => {
  return (
    <div>
      <div className="sell-banner">
            <h1 className='display-3 text-light'>Exclusive Range of Property in<label className="text-dark">KOTA</label></h1>
      </div>
        <div className="searchBox">
          <SearchBox></SearchBox>
        </div>
        <div className='container mb-4 card-block'>
        <Grid container spacing={2}>
          <Grid xs={3}>
          <Box component="section" sx={{ p: 2, }}>
            <h4>all afordable and exclusive properties</h4>
            <Typography >
          dksfjie fsdf dflsdfkkkdslfioewkfdm dslfdskfjiwd fdfkdsfiwklds,f ldkfois dfsdf sdfosid f
            </Typography>
          </Box>

          </Grid>
        <Grid  sm={12} md={9}>
          <div className='p-3'>
        <PropertyCard></PropertyCard>
          </div>
          <div className='p-3'>
        <PropertyCard></PropertyCard>
          </div>
          <div className='p-3'>
        <PropertyCard></PropertyCard>
          </div>
          <div className='p-3'>
        <PropertyCard></PropertyCard>
          </div>
          <div className='p-3'>
        <PropertyCard></PropertyCard>
          </div>
        </Grid>
    
      </Grid>
        </div>

    </div>
  )
}

export default MainCatalog
