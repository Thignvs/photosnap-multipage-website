import React from 'react'
import responsive from './desktop/responsive.svg'
import upload from './desktop/no-limit.svg'
import embed from './desktop/embed.svg'
import domain from './desktop/custom-domain.svg'
import exposure from './desktop/boost-exposure.svg'
import dragndrop from './desktop/drag-drop.svg'

const ResponsiveFeatures = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20 md:py-36 md:grid md:grid-cols-2 lg:grid-cols-3'>
            <div className='flex flex-col text-center items-center px-5'>
                <img className='py-5' src={responsive} alt="responsivesvg" />
                <p className='text-PureBlack font-bold text-lg py-5'>100% Responsive</p>
                <p className='text-PureBlack leading-7'>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
            </div>
            <div className='flex flex-col text-center items-center px-5'>
                <img className='py-5 pt-10' src={upload} alt="nolimitsvg" />
                <p className='text-PureBlack font-bold text-lg py-5'>No Photo Upload Limit</p>
                <p className='text-PureBlack leading-7'>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
            </div>
            <div className='flex flex-col text-center items-center px-5'>
                <img className='py-5 pt-10' src={embed} alt="embedsvg" />
                <p className='text-PureBlack font-bold text-lg py-5'>Available to Embed</p>
                <p className='text-PureBlack leading-7'>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </p>
            </div>
            <div className='flex flex-col text-center items-center px-5'>
                <img className='py-5 pt-10' src={domain} alt="domainsvg" />
                <p className='text-PureBlack font-bold text-lg py-5'>Custom Domain</p>
                <p className='text-PureBlack leading-7'>With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding! </p>
            </div>
            <div className='flex flex-col text-center items-center px-5'>
                <img className='py-5 pt-10' src={exposure} alt="exposuresvg" />
                <p className='text-PureBlack font-bold text-lg py-5'>Boost Your Exposure</p>
                <p className='text-PureBlack leading-7'>Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list. </p>
            </div>
            <div className='flex flex-col text-center items-center px-5'>
                <img className='py-5 pt-10' src={dragndrop} alt="dragndropsvg" />
                <p className='text-PureBlack font-bold text-lg py-5'>Drag & Drop Image</p>
                <p className='text-PureBlack leading-7'>Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.</p>
            </div>
        </div>
    )
}

export default ResponsiveFeatures