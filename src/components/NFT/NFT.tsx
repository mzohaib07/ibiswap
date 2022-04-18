import React from 'react'
import { NFTStyles, Wrapper } from './NFT.style'
import NFTItems from './NFTItems/NFTItems'
import DropdownWrapper from '../common/DropdownWrapper/DropdownWrapper'


const NFT = () => {
    return (
        <>
            <Wrapper className='wrapper'>
                <div className='item-list'>
                    <span style={{ alignSelf: 'center', }}>31,042,470 items</span>
                    <div style={{ display: 'flex', columnGap: '15px' }}>
                        <DropdownWrapper title={"Single Items "} />
                        <DropdownWrapper title={"Sort By "} />
                    </div>
                </div>

                <NFTStyles>
                    <NFTItems />
                    <NFTItems />
                    <NFTItems />
                    <NFTItems />
                    <NFTItems />
                    <NFTItems />
                    <NFTItems />
                    <NFTItems />
                    <NFTItems />
                    <NFTItems />
                    <NFTItems />
                    <NFTItems />
                    <NFTItems />
                    <NFTItems />
                </NFTStyles>
            </Wrapper>
        </>

    )
}
export default NFT