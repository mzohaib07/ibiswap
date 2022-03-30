import { Box, Typography } from '@mui/material'
import { CreateSyles } from './Create.styles'
import { wallets } from '../../constants/constants'


const Create = () => {
    return (
        <CreateSyles>
            <Box>
                <div className='box'>
                    <div>
                        <Typography variant='h4'>Connect your wallet.</Typography>
                    </div>
                    <div className='desp'>
                        <span>Connect with one of our available<span className='wallet-title'>wallet</span>  providers or create a new one.</span>
                    </div>
                    <div className='wallets'>
                        {wallets && wallets.map((item, index) =>
                            <div className='wallet-container' key={index}>
                                <span><img src={item?.img} alt="logo" width='40' height={'30'} className='logo' /> </span> <span className='logo-title'>{item?.name}</span>
                            </div>
                        )}
                    </div>
                </div>
            </Box>
        </CreateSyles>
    )
}

export default Create