import { Grid, Typography, Box } from "@mui/material";
import { FooterStyles, Item } from "./Footer.styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SearchBarWrapper from "../common/SearchBar/SearchBarWrapper";
import ibiswaplogo from "../../assets/Simbolo.png";
import {
  company,
  marketplace,
  myaccount,
  resources,
  stats,
} from "../../constants/constants";

const Footer = () => {
  return (
    <FooterStyles>
      <Grid container className="main-container">
        <Grid item sm="auto" className='upper-footer'>
          <Item elevation={0} className="left-grid">
            <Box>
              <span>Stay in the loop</span>
              <Typography className="left-grid-disp">
                Join our mailing list to stay in the loop with our newest
                feature releases, NFT drops, and tips and tricks for navigating
                OpenSea.
              </Typography>
              <div className="left-grid-searchbar">
                <SearchBarWrapper title="Enter your Email" />
                <span>
                  <button>Sign Up</button>
                </span>
              </div>
            </Box>
          </Item>
        </Grid>
        <Grid item sm="auto" className='upper-footer'>
          <Item elevation={0} className="right-grid">
            <span>Join the community</span>
            <div className="right-grid-icons">
              <TwitterIcon className="icon" />
              <InstagramIcon className="icon" />
              <SingleBedIcon className="icon" />
              <YouTubeIcon className="icon" />
              <MailOutlineIcon className="icon" />
            </div>
          </Item>
        </Grid>
      </Grid>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <span
          style={{
            border: "0.001rem solid #ffed00",
            display: "flex",
            width: "65%",
          }}
        />
      </div>
      <Grid container className="lower-footer">
        <Grid item sm="auto" >
          <Item className="first-col">
            <span>
              <img src={ibiswaplogo} alt="logo" height={40} width={40} />
            </span>
            <span className="ibiswap">IBISWAP</span>
            <span className="desp">
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </span>

          </Item>
        </Grid>
        <Grid item sm="auto">
          <Item className="scnd-col">
            <div>
              <span className="title">Marketplace</span>
              <span>
                <ul>
                  {marketplace &&
                    marketplace.map((item, index) => (
                      <li key={index}>{item?.name}</li>
                    ))}
                </ul>
              </span>
            </div>
          </Item>
        </Grid>
        <Grid item sm="auto" >
          <Item className="third-col">
            <div >
              <div>
                <span className="title">My Account</span>
                <span>
                  <ul>
                    {myaccount &&
                      myaccount.map((item, index) => (
                        <li key={index}>{item?.name}</li>
                      ))}
                  </ul>
                </span>
              </div>
              <div>
                <span className="title">Stats</span>
                <span>
                  <ul>
                    {stats &&
                      stats.map((item, index) => (
                        <li key={index}>{item?.name}</li>
                      ))}
                  </ul>
                </span>
              </div>
            </div>
          </Item>
        </Grid>
        <Grid item sm="auto">
          <Item className="fourth-col">
            <div>
              <span className="title">Resources</span>
              <span>
                <ul>
                  {resources &&
                    resources.map((item, index) => (
                      <li key={index}>{item?.name}</li>
                    ))}
                </ul>
              </span>
            </div>
            <div className="fifth-col">
              <span className="title">Company</span>
              <span>
                <ul>
                  {company &&
                    company.map((item, index) => (
                      <li key={index}>{item?.name}</li>
                    ))}
                </ul>
              </span>
            </div>
          </Item>
        </Grid>
      </Grid>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <span
          style={{
            border: "0.001rem solid #ffed00",
            display: "flex",
            width: "65%",
          }}
        />
      </div>
      <Grid container >
        <Grid item xs={12} lg={6} className="lower-down-grid">
          <Item elevation={0} className='color'>
            <span style={{ fontSize: "12px" }}>
              © 2018 - 2022 Ozone Networks, Inc
            </span>
          </Item>
        </Grid>
        <Grid item xs={12} lg={6} className="lower-down-grid">
          <Item elevation={0} className='color'>
            <span style={{ fontSize: "12px", cursor: "pointer" }}>
              Privacy Policy Terms of Service
            </span>
          </Item>
        </Grid>
      </Grid>
    </FooterStyles>
  );
};

export default Footer;
