import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { DropdownWrapperStyles } from './DropdownWrapper.styles';
import { FormControl, Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './styles.css'

const DropdownWrapper = ({ title, FIRSTSELECT, explore, CHAINS }: any) => {
  const [option, setOption] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
  };
  return (
    <DropdownWrapperStyles>
      <FormControl>
        <Select
          className='select'
          value={option}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="">
            <Typography>{title}</Typography>
          </MenuItem>
          {FIRSTSELECT && FIRSTSELECT.map((item: any, index: any) =>
          (
            <MenuItem key={index} value={item?.name}>
              <Typography >{item?.name}</Typography>
            </MenuItem>
          ))
          }
          {
            explore && explore.map((item: any, index: any) =>
            (
              <MenuItem key={index} value={item?.name} style={{ display: 'flex', columnGap: '10px', alignContent: 'center' }}>
                <span>{item?.icon}</span>
                <Typography >{item?.name}</Typography>
              </MenuItem>
            ))
          }
          {
            CHAINS && CHAINS.map((item: any, index: any) =>
            (
              <MenuItem key={index} value={item?.name}>
                <Typography >{item?.name}</Typography>
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>


    </DropdownWrapperStyles>
  );
}

export default DropdownWrapper