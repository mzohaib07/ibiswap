import * as React from 'react';
import { Menu, MenuItem } from '@mui/material';
import './style.css'
import { ACTIVENAV, explore, } from '../../../constants/constants';

import {
    Link
} from "react-router-dom";
import { Context } from '../../../context/Context';

const PopoverWrapper: React.FC = ({ children }: any) => {
    const { state, dispatch } = React.useContext(Context)
    const { show } = state
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        dispatch({
            type: ACTIVENAV,
            payload: {
                show: !show,
                activeNav: 'Collections'
            }
        })
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
                style={{ marginTop: '30px' }}
            >
                {explore.map((item, index) =>
                    <MenuItem key={index} onClick={handleClose}>
                        <div style={{ display: 'flex', columnGap: '10px' }}>
                            <span style={{ color: 'lightblue' }} >{item?.icon}</span>
                            <Link to={`/${item?.name}`} className='link-items'>{item?.name}</Link>
                        </div>
                    </MenuItem>
                )}
            </Menu>

        </>
    );
}

export default PopoverWrapper