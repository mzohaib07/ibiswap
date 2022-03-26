import * as React from 'react';
import { Menu, MenuItem } from '@mui/material';
import './style.css'
import { explore, } from '../../../constants/constants';

import {
    Link
} from "react-router-dom";

const PopoverWrapper = ({ children }: any) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <span
                id="basic-button"
                aria-haspopup="true"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {children}
            </span>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}

            >
                {explore.map((item, index) => <MenuItem key={index} onClick={handleClose}>
                    <div style={{ display: 'flex', columnGap: '10px' }}>
                        <span style={{ color: 'lightblue' }} >{item?.icon}</span>
                        <Link to={`/${item?.name}`} className='link-items'>{item?.name}</Link>
                    </div>
                </MenuItem>)
                }
            </Menu>

        </>
    );
}

export default PopoverWrapper