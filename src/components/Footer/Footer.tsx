import { Typography } from "@mui/material"
import { FooterStyles } from "./Footer.styles"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SearchBarWrapper from "../common/SearchBar/SearchBarWrapper";
import ibiswaplogo from '../../assets/Simbolo.png'
import { company, marketplace, myaccount, resources, stats } from "../../constants/MockData";


const Footer = () => {
    return (
        <FooterStyles>
            <div className="first-grid">
                <div className="left-grid">
                    <span>Stay in the loop</span>
                    <Typography className="left-grid-disp">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</Typography>
                    <div className="left-grid-searchbar">
                        <SearchBarWrapper title="Enter your Email" />
                        <span><button>Sign Up</button></span>
                    </div>
                </div>
                <div className="right-grid">
                    <span>Join the community</span>
                    <div className="right-grid-icons">
                        <TwitterIcon className="icon" />
                        <InstagramIcon className="icon" />
                        <SingleBedIcon className="icon" />
                        <YouTubeIcon className="icon" />
                        <MailOutlineIcon className="icon" />
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span style={{ border: '0.001rem solid #ffed00', display: 'flex', width: '65%' }} />
            </div>
            <div className="secound-grid">
                <div className="first-col">
                    <span>
                        <img src={ibiswaplogo} alt="logo" height={40} width={40} />
                    </span>
                    <span className="ibiswap">IBISWAP</span>
                    <span className="desp">The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</span>
                </div>
                <div className="scnd-col">
                    <span className="title">Marketplace</span>
                    <span>
                        <ul>
                            {marketplace && marketplace.map((item, index) => (
                                <li key={index}>{item?.name}</li>
                            ))}
                        </ul>
                    </span>
                </div>
                <div className="third-col">
                    <div>
                        <span className="title">My Account</span>
                        <span>
                            <ul>
                                {myaccount && myaccount.map((item, index) => (
                                    <li key={index}>{item?.name}</li>
                                ))}
                            </ul>
                        </span>
                    </div>
                    <div>
                        <span className="title">Stats</span>
                        <span>
                            <ul>
                                {stats && stats.map((item, index) => (
                                    <li key={index}>{item?.name}</li>
                                ))}
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="fourth-col">
                    <span className="title">Resources</span>
                    <span>
                        <ul>
                            {resources && resources.map((item, index) => (
                                <li key={index}>{item?.name}</li>
                            ))}
                        </ul>
                    </span>
                </div>
                <div className="fifth-col">
                    <span className="title">Company</span>
                    <span>
                        <ul>
                            {company && company.map((item, index) => (
                                <li key={index}>{item?.name}</li>
                            ))}
                        </ul>
                    </span>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span style={{ border: '0.001rem solid #ffed00', display: 'flex', width: '65%' }} />
            </div>
            <div className='third-grid'>
                <span style={{ fontSize: '12px' }}>© 2018 - 2022 Ozone Networks, Inc</span>
                <span style={{ fontSize: '12px', cursor: 'pointer' }}>Privacy Policy {" "} Terms of Service</span>
            </div>

        </FooterStyles>
    )
}

export default Footer