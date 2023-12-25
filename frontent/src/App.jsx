import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './comp/Header/Header'
import List from "./comp/List/List"
import Slider from "./comp/slider"
import { CssVarsProvider } from '@mui/joy/styles';
import Grid from '@mui/joy/Grid';
import SideMenu from "./comp/sidemenu/filterMenu"
import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';




function App() {

  return (
    <>
<CssVarsProvider defaultMode="system">
    <Header></Header>
    <div className='row'>
      <div className="col-12 p-0">
        <Slider></Slider>
      </div>
    </div>
    <div className="overlay"></div>
    
    <Grid className="bg-dark py-4" container spacing={3} sx={{ flexGrow: 1 }}>
    <Grid className="my-3" lg={12}>
<Typography
 color="neutral"
  level="h1"
  textAlign={'center'}>
   Most Valuable Properties of Kota under one Roof
    </Typography>
   <Typography  className="mb-3" textAlign={'center'}>
    At Afordable Price at <Chip> 0% brokerage </Chip>
  </Typography>
    
  </Grid>
      <Grid  xs={12} md={3}>
      <SideMenu></SideMenu>
      </Grid>
      <Grid container spacing={0.5} xs={12} md={9}>
          <List></List>
      </Grid>
    </Grid>

    </CssVarsProvider>
    </>
  )
}

export default App
