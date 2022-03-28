import React from 'react'
import DropdownWrapper from '../common/DropdownWrapper/DropdownWrapper'
import TableWrapper from '../common/TableWrapper/TableWrapper'
import { Typography } from '@mui/material'
import { StatsStyle } from './Stats.style'
import { CHAINS, explore, FIRSTSELECT } from '../../constants/constants'

const Stats = () => {
    return (
        <StatsStyle>
            <div className='title-section'>
                <Typography className='title' variant='h3'>Top NFTs</Typography>
            </div>
            <div className='desp-section'>
                <Typography className='desp' variant='h6'>The top NFTs on OpenSea, ranked by volume, floor price and other statistics.</Typography>
            </div>
            <div className='dropdown-section'>
                <DropdownWrapper title={"Last 7 days"} FIRSTSELECT={FIRSTSELECT} />
                <DropdownWrapper title={"All Categories"} explore={explore}  />
                <DropdownWrapper title={"All Chains"} CHAINS={CHAINS} />
            </div>
            <div className='table-section'>
                <TableWrapper />
            </div>

        </StatsStyle>
    )
}

export default Stats
