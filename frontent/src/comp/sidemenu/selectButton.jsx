import * as React from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

export default function SelectMultipleAppearance(props) {



    const handleLocation = (e) => {
        e.preventDefault();
        props.setValue(e.target.value);
        console.log(e.target.value);
      };

  return (
    <Select
    color="primary"
    placeholder="select location"
    size="lg"
    variant="outlined"
    onChange={handleLocation}
  >
    <Option value="Ghumanpura">Ghumanpura</Option>
    <Option value="old kota">old kota</Option>
    <Option value="Borkheda">Borkheda</Option>
    <Option value="KST">KST</Option>
    
  </Select>
  );
}