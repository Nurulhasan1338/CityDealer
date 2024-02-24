import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import "./index.css"
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import ModalClose from '@mui/joy/ModalClose';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Stack from '@mui/joy/Stack';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Sheet from '@mui/joy/Sheet';
import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';
import TuneIcon from '@mui/icons-material/TuneRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import DeckRoundedIcon from '@mui/icons-material/DeckRounded';
import NaturePeopleRoundedIcon from '@mui/icons-material/NaturePeopleRounded';
import { Slider } from '@mui/joy';

export default function DrawerFilters(props) {

  const [open, setOpen] = React.useState(false);

  const {filter,setFilter,showFilter} = props;

  const applyFilter = ()=>{
    setOpen(false);
    // console.log(filter);
    showFilter();
  }



  const handleChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]:e.target.value
  });
    console.log(e.target.name,":",e.target.value);
  };


  


  const PropertyType = [
    {
      name: 'House',
      icon: <HomeRoundedIcon />,
    },
    {
      name: 'Flat/Apartment',
      icon: <ApartmentRoundedIcon />,
    },
    {
      name: 'Plot',
      icon: <NaturePeopleRoundedIcon />,
    },
    {
      name: 'Farm House',
      icon: <DeckRoundedIcon />,
    },
  ]


  return (
    
    <React.Fragment>
      <Button
        variant="solid"
        color="primary"
        startDecorator={<TuneIcon />}
        onClick={() => setOpen(true)}
      >
        Filters
      </Button>
      <Drawer
        variant="plain"
        open={open}
        className="filterBox"
        onClose={() => setOpen(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: 'transparent',
              p: { md: 4, sm: 4 },
              boxShadow: 'none',
            },
            
          },
        }}
        
      >
        <Sheet
          sx={{
            borderRadius: 'md',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            height: '100%',
            overflowX: 'auto',
          }}
        >
          <DialogTitle>Filters</DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: 'auto' }} />
          <DialogContent sx={{ gap: 2 }}>
            <FormControl>
              <FormLabel sx={{ p:0.4, typography: 'title-md', fontWeight: 'bold' }}>
                Property type
              </FormLabel>
              <RadioGroup
                value={filter.propertyType || ''}
                onChange={handleChange}
                name='propertyType'
              >
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                    gap: 1.5,
                  }}
                >
                  {PropertyType.map((item) => (
                    <Card
                      key={item.name}
                      sx={{
                        boxShadow: 'none',
                        '&:hover': { bgcolor: 'background.level1' },
                      }}
                    >
                      <CardContent>
                        {item.icon}
                        <Typography level="title-md">{item.name}</Typography>
                      </CardContent>
                      <Radio
                        disableIcon
                        overlay
                        checked={filter.propertyType === item.name}
                        variant="outlined"
                        color="neutral"
                        value={item.name}
                        sx={{ mt: -2 }}
                        slotProps={{
                          action: {
                            sx: {
                              ...(filter.propertyType === item.name && {
                                borderWidth: 2,
                                borderColor:
                                  'var(--joy-palette-primary-outlinedBorder)',
                              }),
                              '&:hover': {
                                bgcolor: 'transparent',
                              },
                            },
                          },
                        }}
                      />
                    </Card>
                  ))}
                </Box>
              </RadioGroup>
              </FormControl>

              {/* --------------------------------------Amount-Price ------------------------------------------*/}
              <FormControl>
                <Box sx={{ width: 270, px: 2 }}>
                  <Typography level="title-md" fontWeight="bold" sx={{ mt: 0.5 }}>
                    Amount (Cr.)
                  </Typography>
                  <Slider defaultValue={25} step={0.10} aria-label="Default" name='price' value={filter.price} onChange={handleChange} valueLabelDisplay="auto" min={0} max={50} />
                </Box>
              </FormControl>

              {/* --------------------------------------Land size ------------------------------------------*/}
              <FormControl>
                <Box sx={{ width: 270, px: 2 }}>
                  <Typography level="title-md" fontWeight="bold" sx={{ mt: 0.5 }}>
                    Land Size (Sqft.)
                  </Typography>
                  <Slider
                    getAriaLabel={() => 'Land size'}
                    value={filter.size}
                    name='size'
                    min={0}
                    max={2000}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                  />
                </Box>
                </FormControl>
              {/* --------------------------------------Direction facing ------------------------------------------*/}
          <FormControl >
           
            <Typography level="title-md" fontWeight="bold" sx={{ mt: 1}}>
            Facing-direction             
             </Typography>
              <RadioGroup className='d-flex flex-md-row flex-sm-column justify-content-around m-3' onChange={handleChange} row="true" aria-labelledby="demo-row-radio-buttons-group-label" name="direction">
                <FormControlLabel  value="North" control={<Radio/>} label="North"/>
                <FormControlLabel  value="South" control={<Radio/>} label="South"/>
                <FormControlLabel  value="East" control={<Radio/>} label="East"/>
                <FormControlLabel  value="West" control={<Radio/>} label="West"/>
              </RadioGroup>
            </FormControl>

    



          </DialogContent>

          <Divider sx={{ mt: 'auto' }} />
          <Stack
            direction="row"
            justifyContent="space-between"
            useFlexGap
            spacing={1}
          >
            <Button
              variant="outlined"
              color="neutral"
              onClick={() => {
               setFilter({direction:null,price:null,size:null,propertyType:null,location:null});
              }}
            >
              Clear
            </Button>
            <Button onClick={applyFilter}>Show</Button>
          </Stack>
        </Sheet>
      </Drawer>
    </React.Fragment>
  );
}
