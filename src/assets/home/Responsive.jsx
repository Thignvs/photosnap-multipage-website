import React from 'react'
import responsive from '../features/desktop/responsive.svg'
import noLimit from '../features/desktop/no-limit.svg'
import embed from '../features/desktop/embed.svg'

const Responsive = () => {
    return (
        <div className='flex flex-col items-center justify-center py-10 lg:flex-row lg:py-20 lg:px-20'>
            <div className='flex flex-col text-center items-center px-5'>
                <img className='py-5' src={responsive} alt="responsivesvg" />
                <p className='text-PureBlack font-bold text-lg py-5'>100% Responsive</p>
                <p className='text-PureBlack leading-7 md:w-3/4'>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
            </div>
            <div className='flex flex-col text-center items-center px-5'>
                <img className='py-5 pt-10' src={noLimit} alt="nolimitsvg" />
                <p className='text-PureBlack font-bold text-lg py-5'>No Photo Upload Limit</p>
                <p className='text-PureBlack leading-7 md:w-3/4'>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
            </div>
            <div className='flex flex-col text-center items-center px-5'>
                <img className='py-5 pt-10' src={embed} alt="embedsvg" />
                <p className='text-PureBlack font-bold text-lg py-5'>Available to Embed</p>
                <p className='text-PureBlack leading-7 md:w-3/4'>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </p>
            </div>

        </div>
    )
}

export default Responsive