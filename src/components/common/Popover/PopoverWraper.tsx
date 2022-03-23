import * as React from 'react';
import Popover from '@mui/material/Popover';
import { Menu, MenuItem } from '@mui/material';

const PopoverWrapper = ({ children }: any) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    return (
        <>
            <span
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                {children}
            </span>
            <Popover
            style={{zIndex:'9999' , marginTop:'60px'}}
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                disableRestoreFocus
            >
                <Menu

                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={handlePopoverClose}>Profile</MenuItem>
                    <MenuItem onClick={handlePopoverClose}>My account</MenuItem>
                    <MenuItem onClick={handlePopoverClose}>Logout</MenuItem>
                </Menu>
            </Popover>
        </>
    );
}

export default PopoverWrapper