import React, { useState } from 'react';
import Slider from '@mui/joy/Slider';
import './menu.css';
import Chip from '@mui/joy/Chip';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Stack from '@mui/joy/Stack';
import Grid from '@mui/joy/Grid';
import Tooltip from '@mui/joy/Tooltip';

const SideMenu = () => {
  const [data, setData] = useState({});


  const marks = [
    { value: 5, label: '5 m²' },
    { value: 50, label: '50 m²' },
    { value: 100, label: '100 m²' },
  ];
  const pricemarks = [
    { value: 3, label: '5 lacs' },
    { value: 100, label: '100 lacs' },
    { value: 200, label: '200 lacs' },
  ];

  return (
    <div className="side-menu">

      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          setData(JSON.stringify(formJson));
        }}
      >
        <Stack spacing={0.5} alignItems="flex-start">
          <Grid  xs={12} md={12} lg={12}> 
          <Typography
            className="text-center"
            color="neutral"
            level="h4"
            noWrap
            variant="soft"
          >
            Fliter
          </Typography>
          </Grid>
          <Grid xs={12} md={12} lg={12}>
            <Chip>Price</Chip>
            <Slider
              marks={pricemarks}
              name='price'
              min={3}
              max={200}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
            />
          </Grid>
          <Grid xs={12} md={12} lg={12}>
            <Chip>Size</Chip>
            <Slider

              aria-label="Small steps"
              defaultValue={0.00000005}
              name='Size'
              step={2}
              marks={marks}
              min={5}
              max={100}
              valueLabelDisplay="auto"
            />
          </Grid>
          <Grid xs={12} md={12} lg={12}>
        
            <Select
              placeholder="Location"
              name="location"
              required
              sx={{ minWidth: 100 }}
            >
              <Option value="dog">Dog</Option>
              <Option value="cat">Cat</Option>
              <Option value="fish">Fish</Option>
              <Option value="bird">Bird</Option>
            </Select>
          </Grid>

          <Grid className="d-flex justify-content-between" s={12} md={12} lg={12}>

            <Button type="submit">Submit</Button>
            <Tooltip title="Delete" size="sm">
              <Button variant="plain">clear</Button>
            </Tooltip>
          </Grid>

        </Stack>
      </form>
    </div>
  );
};

export default SideMenu;
