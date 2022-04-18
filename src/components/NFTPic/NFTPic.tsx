import React from 'react'
import { Card, CardMedia, Tooltip, CardActions } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FaEthereum } from "react-icons/fa";
import { NFTPicStyles } from './NFTPic.styles';


const NFTPic = () => {
    return (
        <NFTPicStyles>
            <Card className="card">
                <CardActions className="card-actions">
                    <span>
                        <Tooltip title="Blockchain: Etherum" placement="top" arrow>
                            <FaEthereum className="etherum-icon" />
                        </Tooltip>
                    </span>
                    <span className="heart-icon-content">
                        <Tooltip title="Favorite" placement="top" arrow>
                            <FavoriteBorderIcon className="heart-icon" />
                        </Tooltip>
                        <span className="number">0</span>
                    </span>
                </CardActions>
                <CardMedia
                    component="img"
                    image="https://lh3.googleusercontent.com/CFRqgrUA24ded5sg_Zhlh4vm7isbqhry_Nwn7Jnh14WbuGkWHY7whXZlA5hBQ2Pkb0eM_-SuxR_E01kpQTbiqpA8YuD0pNRMTDejAg=w600"
                    alt="green iguana"
                    className="card-img"
                />
            </Card></NFTPicStyles>
    )
}

export default NFTPic