import React from 'react'
import Filter from "../mialanious/Filters"
import CountrySelector from "../mialanious/CountrySelector"
import Grid from '@mui/system/Unstable_Grid';
import Button from '@mui/joy/Button';


const SearchBox = () => {
  return (
    <div className='w-75 innerBox shadow'>
    <Grid container spacing={3}>
        <Grid xs={9}>
        <CountrySelector></CountrySelector>
        </Grid>
        <Grid xs={1}>
        <Button size="md" color="success" variant="solid">Search</Button>
        </Grid>
        <Grid md={2} sm={12} className="">
          <div className='px-2'>

        <Filter></Filter>
          </div>
        </Grid>
    </Grid>
   </div >
  )
}

export default SearchBox;
