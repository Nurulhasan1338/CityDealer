import React from 'react'
import Filter from "../mialanious/Filters"
import CountrySelector from "../mialanious/CountrySelector"
import Grid from '@mui/system/Unstable_Grid';
import Button from '@mui/joy/Button';


const SearchBox = () => {
  return (
    <div className='w-75 innerBox shadow'>
    <Grid container spacing={2}>
        <Grid xs={8}>
        <CountrySelector></CountrySelector>
        </Grid>
        <Grid xs={1}>
        <Button size="md" color="success" variant="solid">Search</Button>
        </Grid>
        <Grid md={3} sm={12}>
        <Filter></Filter>
        </Grid>
    </Grid>
   </div >
  )
}

export default SearchBox;
