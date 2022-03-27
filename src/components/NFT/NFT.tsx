import React from 'react'
import { NFTStyles, Wrapper } from './NFT.style'
import NFTItems from './NFTItems/NFTItems'

const NFT = () => {
    return (
        <>
            <Wrapper className='wrapper'>
                <div className='item-list'>
                    <span>31,042,470 items</span>
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