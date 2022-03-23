import React from 'react'
import { Wrapper } from './Hero.styles'

const Hero = () => {
  return (
    <Wrapper>
      <div className='img-container'></div>
      <div className='container'>
        <div className='content-wrapper'>
          <div className='copy-container'>
            <div className='title'>
              IBISWAP the lifestyle utility token now on decentralized exchanges.
            </div>
            <div className='description'>
              Trade and earn. IBISWAP holders receive rewards paid in IBI. The first rewarding plataform of lifestyle.
            </div>
            <div className='ctaContainer'>
              <button className='explore-btn'>Explore</button>
              <button className='create-btn'><span>Create</span></button>
            </div>
          </div>
          <div className='card-container'>
            <img
              className='main-img'
              src="https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s550"
              alt=""
            />
            <div className='infoContainer'>
              <img
                style={{ borderRadius: '9999px' }}
                src="https://lh3.googleusercontent.com/qQj55gGIWmT1EnMmGQBNUpIaj0qTyg4YZSQ2ymJVvwr_mXXjuFiHJG9d3MRgj5DVgyLa69u8Tq9ijSm_stsph8YmIJlJQ1e7n6xj=s64"
                alt=""
              />
              <div className='author'>
                <div className='name'>Jolly</div>
                <a
                  style={{ color: '#1868b7', textDecoration: 'none' }}
                  href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277"
                >
                  hola-kanola
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Hero