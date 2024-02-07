import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
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

export default function DrawerFilters() {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState('Guesthouse');
  const [value, setValue] = React.useState([100, 800]);
  const [amenities, setAmenities] = React.useState([0, 6]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        filters
      </Button>
      <Drawer
        variant="plain"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: 'transparent',
              p: { md: 3, sm: 3 },
              boxShadow: 'none',
              width: "22" + "rem"
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
            overflow: 'auto',
          }}
        >
          <DialogTitle>Filters</DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: 'auto' }} />
          <DialogContent sx={{ gap: 2 }}>
            <FormControl>
              <FormLabel sx={{ typography: 'title-md', fontWeight: 'bold' }}>
                Property type
              </FormLabel>
              <RadioGroup
                value={type || ''}
                onChange={(event) => {
                  setType(event.target.value);
                }}
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
                        checked={type === item.name}
                        variant="outlined"
                        color="neutral"
                        value={item.name}
                        sx={{ mt: -2 }}
                        slotProps={{
                          action: {
                            sx: {
                              ...(type === item.name && {
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
                <Box sx={{ width: 360, p: 1 }}>
                  <Typography level="title-md" fontWeight="bold" sx={{ mt: 1 }}>
                    Amount (Cr.)
                  </Typography>
                  <Slider defaultValue={25} step={0.10} aria-label="Default" valueLabelDisplay="auto" min={0} max={50} />
                </Box>
              </FormControl>

              {/* --------------------------------------Land size ------------------------------------------*/}
              <FormControl>
                <Box sx={{ width: 360, p: 1 }}>
                  <Typography level="title-md" fontWeight="bold" sx={{ mt: 1 }}>
                    Land Size (Sqft.)
                  </Typography>
                  <Slider
                    getAriaLabel={() => 'Land size'}
                    value={value}
                    min={0}
                    max={2000}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                  />
                </Box>
                </FormControl>
              {/* --------------------------------------Direction facing ------------------------------------------*/}
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Facing-direction</FormLabel>
              <RadioGroup className='d-flex' row="true" aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                <FormControlLabel value="North" control={<Radio/>} label="North"/>
                <FormControlLabel value="South" control={<Radio/>} label="South"/>
                <FormControlLabel value="East" control={<Radio/>} label="East"/>
                <FormControlLabel value="West" control={<Radio/>} label="West"/>
              </RadioGroup>
            </FormControl>

            <Typography level="title-md" fontWeight="bold" sx={{ mt: 2 }}>
              Booking options
            </Typography>


            <FormControl orientation="horizontal">
              <Box sx={{ flex: 1, mt: 1, mr: 1 }}>
                <FormLabel sx={{ typography: 'title-sm' }}>Self check-in</FormLabel>
                <FormHelperText sx={{ typography: 'body-sm' }}>
                  Easy access to the property when you arrive.
                </FormHelperText>
              </Box>
              <Switch />
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
                setType('');
                setAmenities([]);
              }}
            >
              Clear
            </Button>
            <Button onClick={() => setOpen(false)}>Show</Button>
          </Stack>
        </Sheet>
      </Drawer>
    </React.Fragment>
  );
}
