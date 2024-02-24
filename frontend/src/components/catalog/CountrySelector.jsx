import React from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import AutocompleteOption from '@mui/joy/AutocompleteOption';
import AspectRatio from '@mui/joy/AspectRatio';
import FormControl from '@mui/joy/FormControl';
import Typography from '@mui/joy/Typography';

export default function CountrySelector(props) {

  const {filter,setFilter,applyFilter} = props;

  const [selectedLocation, setSelectedLocation] = React.useState({
    label: 'Indra Vihar',
    pin: '324005'
  });

  const handleLocationChange = (event, newValue) => {
    setSelectedLocation(newValue);
    setFilter({
          ...filter,
          location:newValue
      });
  };

  return (
    <FormControl>
      <Autocomplete 
        name='location'
        onChange={handleLocationChange}
        autoHighlight
        isOptionEqualToValue={(option, value) => option.code === value.code}
        defaultValue={{ label: 'Indra Vihar', pin: '324005' }}
        options={locationsInKota}
        value={selectedLocation}
       
        renderOption={(optionProps, option) => (
          <AutocompleteOption {...optionProps}>
            {option.label}
            <Typography component="span" textColor="text.tertiary" ml={0.5}>
              {option.pin}
            </Typography>
          </AutocompleteOption>
        )}
        slotProps={{
          input: {
            autoComplete: 'new-password', // disable autocomplete and autofill
          },
        }}
      />
    </FormControl>
  );
}


const locationsInKota = [
  { label: 'Aerodrome Circle', pin: '324007' },
  { label: 'Anantpura', pin: '324005' },
  { label: 'Bajrang Nagar', pin: '324001' },
  { label: 'Balakund', pin: '324001' },
  { label: 'Baran Road', pin: '324001' },
  { label: 'Basant Vihar', pin: '324009' },
  { label: 'Chambal Colony', pin: '324009' },
  { label: 'Civil Lines', pin: '324001' },
  { label: 'Dadabari', pin: '324009' },
  { label: 'Gumanpura', pin: '324007' },
  { label: 'Indra Vihar', pin: '324005' },
  { label: 'Jawahar Nagar', pin: '324005' },
  { label: 'Keshavpura', pin: '324009' },
  { label: 'Kotri', pin: '324008' },
  { label: 'Mahaveer Nagar', pin: '324005' },
  { label: 'Nayapura', pin: '324006' },
  { label: 'Rajeev Gandhi Nagar', pin: '324006' },
  { label: 'Rampura', pin: '324005' },
  { label: 'Rangbari', pin: '324005' },
  { label: 'Sakatpura', pin: '324008' },
  { label: 'Talwandi', pin: '324005' },
  { label: 'Vigyan Nagar', pin: '324010' },
  { label: 'Kunhari', pin: '324008' },
  { label: 'Vallabh Nagar', pin: '324007' },
  { label: 'Jhalawar Road', pin: '324005' },
  { label: 'Rajiv Gandhi Nagar', pin: '324008' },
  { label: 'Borkhera', pin: '324001' },
  // Add more areas as needed
];

