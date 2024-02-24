import React from 'react'
import Filter from "./Filters"
import CountrySelector from "./CountrySelector"
import Grid from '@mui/system/Unstable_Grid';
import Button from '@mui/joy/Button';



const MenuBox = (props) => {

  const {filters,applyFilters,setFilter} = props;


  const handleSearch = () => {
      console.log(filters);
  }

   
  
  return (
    <div className='w-75 innerBox shadow'>
    <Grid container spacing={2}>
        <Grid md={9} sm={12}>
        <CountrySelector filter = {filters} setFilter = {setFilter} applyFilter = {applyFilters}></CountrySelector>
        </Grid>
        <Grid className="d-flex justify-content-between" md={3} sm={12}>
        <Button size="md" color="success" className='mx-2' onClick={handleSearch} variant="solid">Search</Button>
        <Filter filter={filters} setFilter = {setFilter} showFilter = {applyFilters}></Filter>
        </Grid>

    </Grid>
   </div >
  )
}

export default MenuBox;
