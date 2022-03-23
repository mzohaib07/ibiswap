import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Context } from '../../../context/Context';
import { OPENDRAWER, wallets } from '../../../constants/MockData';
import { BoxStyle } from './DrawerWrapper.styles';
import { Typography } from '@mui/material';
import './style.css'

const DrawerWrapper = () => {
  const { state, dispatch } = React.useContext(Context);
  const { open } = state;

  const list = () => (
    <Box>
      <BoxStyle className='box'>
        <div className='profile'>
          <span><AccountCircleIcon className='profile-icon' /></span>
          <Typography className='title'>My wallet</Typography>
        </div>
        <div className='desp'>
          <span>Connect with one of our available wallet providers or create a new one.</span>
        </div>
        <div className='wallets'>
          {wallets && wallets.map((item, index) =>
            <div className='wallet-container' key={index}>
              <span><img src={item?.img} alt="logo" width='40' height={'30'} className='logo' /> </span> <span className='logo-title'>{item?.name}</span>
            </div>
          )}
        </div>
      </BoxStyle>
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor , index) => (
        <Drawer
          key={index}
          anchor={anchor}
          open={open}
          onClose={() => {
            dispatch({
              type: OPENDRAWER,
              payload: {
                open: false
              }
            })
          }}
        >
          {list()}
        </Drawer>
      ))}
    </div>
  );
}

export default DrawerWrapper