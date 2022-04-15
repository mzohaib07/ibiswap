import { Box, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Item, Wrapper } from './Hero.styles'

const Hero: React.FC = () => {
  return (
    <Wrapper>
      <Grid container className='content-wrapper'>
        <Grid item lg={6} className='desp-container'>
          <Item elevation={0} className='copy-container'>
            <Box className='title'>
              IBISWAP the lifestyle utility token now on decentralized exchanges.
            </Box>
            <Box className='description'>
              Trade and earn. IBISWAP holders receive rewards paid in IBI. The first rewarding plataform of lifestyle.
            </Box>
            <Box className='ctaContainer'>
              <button className='explore-btn'><span>Explore</span></button>
              <Link to='/login'><button className='create-btn'><span>Create</span></button></Link>
            </Box>
          </Item>
        </Grid>
        <Grid item lg={6} className='grid-container'>
          <Item style={{ backgroundColor: '#202225' }}>
            <img
              className='main-img'
              src="https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s550"
              alt=""
            />
            <Box className='infoContainer'>
              <img
                style={{ borderRadius: '9999px' }}
                src="https://lh3.googleusercontent.com/qQj55gGIWmT1EnMmGQBNUpIaj0qTyg4YZSQ2ymJVvwr_mXXjuFiHJG9d3MRgj5DVgyLa69u8Tq9ijSm_stsph8YmIJlJQ1e7n6xj=s64"
                alt=""
              />
              <Box className='author'>
                <Box className='name'>Jolly</Box>
                <a
                  style={{ color: '#1868b7', textDecoration: 'none' }}
                  href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277"
                >
                  hola-kanola
                </a>
              </Box>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default Hero