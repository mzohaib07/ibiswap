import React from "react";
import Collapsible from "../../components/common/Collapsible/Collapsible";
import NFTPic from "../../components/NFTPic/NFTPic";
import { ViewNFTStyles, Item } from "./ViewNft.styles";
import RefreshIcon from '@mui/icons-material/Refresh';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FaEthereum } from "react-icons/fa";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TimelineIcon from '@mui/icons-material/Timeline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Grid } from "@mui/material";

const ViewNFT: React.FC = () => {
    return (
        <ViewNFTStyles>
                <Grid container className="section-container">
                    <Grid item xs='auto'>
                        <Item elevation={0}>
                            <div className="left-sect">
                                <NFTPic />
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs='auto'>
                        <Item elevation={0}>
                            <div className="right-sect">
                                <div className="username-section">
                                    <span className="title">
                                        Everai Heroes: Duo
                                    </span>
                                    <span className="icons">
                                        <RefreshIcon className="icon-logo" />
                                        <OpenInNewIcon className="icon-logo" />
                                        <ShareIcon className="icon-logo" />
                                        <MoreVertIcon className="icon-logo" />
                                    </span>
                                </div>
                                <div className="code-section">
                                    <span style={{ color: 'white', fontSize: '30px' }}><strong>Duo #6404</strong> </span>
                                </div>
                                <div className="owner-section">
                                    <span style={{ color: 'grey' }} >Owned by <strong style={{ color: "#007bff" }}> BSCPleb_NFT</strong> </span>
                                    <span style={{ color: 'grey', marginLeft: '10px' }}>2 favorites</span>

                                </div>
                                <div className="offer-section">
                                    <span>Highest Offer</span>
                                    <div><FaEthereum style={{ color: 'red' }} /> <span style={{ color: "white", fontSize: '30px' }}>0.665 </span> <span style={{ color: 'grey' }}>($2,127.95)</span></div>
                                    <button className="ofer-btn"><LocalOfferIcon /> Make Offer</button>
                                </div>
                                <Collapsible Heading='Price History' Icon={<TimelineIcon />} />
                                <Collapsible Heading='Listing ' Icon={<LocalOfferIcon />} />
                                <Collapsible Heading='Offers ' Icon={<FormatListBulletedIcon />} />

                            </div>
                        </Item>
                    </Grid>
                </Grid>
        </ViewNFTStyles>
    );
};
export default ViewNFT;
