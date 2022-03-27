import { PopoverContentStyles } from './PopoverContent.style'
const PopoverContent = () => {
    return (
        <PopoverContentStyles>
            <div className='cover-section'>
                <img className='popover-img' src="https://lh3.googleusercontent.com/sFZiI-F-rKgpMT3bKRHe7IlMg--t6EJf0BmmpNv9JZ1_LRepUEa_U0xwO6Sxvng16S1AJH9zh9QVH7ZOTByJyfPTjAGB1Yw5sXfmbw=s0" alt="" />
            </div>
            <div className='profile-section'>
                <img className='popover-profile-img' src="https://lh3.googleusercontent.com/5c7MxdKmye2mRC_V1EFZersmLVv35qk6HNykm0RgxOc9jKU4C_sZqB7Nv33HborcZiBsLH-aHaHERSgz9VulANGmq8MnzbLP_FzUfWU=w600" alt="" />
            </div>
            <div className='name-section'>
                <span>
                    Muhammad Zohaib
                </span>
                <span>
                    Created by Muhammad Zohaib
                </span>
            </div>
            <div className='last-section'>
                <div>
                    <span className='number-heading'>5.6K</span>
                    <span className='title-heading'>items</span>
                </div>
                <div>
                    <span className='number-heading'>5.6K</span>
                    <span className='title-heading'>owner</span>
                </div>
                <div>
                    <span className='number-heading'>5.6K</span>
                    <span className='title-heading'>floor</span>
                </div>
                <div>
                    <span className='number-heading'>5.6K</span>
                    <span className='title-heading'>volumes</span>
                </div>
            </div>

        </PopoverContentStyles>
    )
}
export default PopoverContent