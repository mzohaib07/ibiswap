import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Tooltip } from '@mui/material'
import { NFTItemsStyles } from './NFTItems.style'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PopoverContent from '../PopoverContent/PopoverContent';
import './styles.css'

const NFTItems = () => {
    return (
        <NFTItemsStyles>

            <Card className='card'>
                <CardMedia
                    component="img"
                    image="https://lh3.googleusercontent.com/CFRqgrUA24ded5sg_Zhlh4vm7isbqhry_Nwn7Jnh14WbuGkWHY7whXZlA5hBQ2Pkb0eM_-SuxR_E01kpQTbiqpA8YuD0pNRMTDejAg=w600"
                    alt="green iguana"
                    className='card-img'
                />
                <CardContent className='card-content'>
                    <span>
                        <Tooltip
                            title={<PopoverContent />}

                            placement="top-end"
                        >
                            <Typography className='title' gutterBottom >
                                Crypto-Totem
                            </Typography>
                        </Tooltip>
                        <Typography style={{ color: 'white', fontSize: '13px' }} className='despcription' gutterBottom >
                            crypto-Totem#194
                        </Typography>
                    </span>
                    <span className='card-body-content'>
                        <Typography className='title' variant="body2" >
                            Price
                        </Typography>
                        <Typography className='despcription' variant="body2" >
                            000.19
                        </Typography>
                        <Typography className='title' variant="body2" color="text.secondary">
                            a day left
                        </Typography>
                    </span>
                </CardContent>
                <CardActions className='card-actions'>
                    <span className='heart-icon-content'>
                        <Tooltip title="Favorite" placement="top" arrow>
                            <FavoriteBorderIcon className='heart-icon' />
                        </Tooltip>
                        <span className='number'>
                            0
                        </span>
                    </span>
                </CardActions>
            </Card>
        </NFTItemsStyles>

    )
}
export default NFTItems
