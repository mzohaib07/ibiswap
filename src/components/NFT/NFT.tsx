import React from 'react'
import { NFTStyles } from './NFT.style'
import NFTItems from './NFTItems/NFTItems'

const NFT = () => {
    return (
        <>
            <div className='wrapper'>
                {/* <span>
                    31,042,470 items
                </span> */}

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
            </div>
        </>

    )
}
export default NFT