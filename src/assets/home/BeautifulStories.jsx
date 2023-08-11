import React from 'react'
import beautifulMobile from '../home/mobile/beautiful-stories.jpg'
import beautifulTablet from '../home/tablet/beautiful-stories.jpg'
import beautifulDesktop from '../home/desktop/beautiful-stories.jpg'

import ViewStories from '../buttons/ViewStories'


const BeautifulStories = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <img className='saturate-200 md:hidden' src={beautifulMobile} alt="beautifulimagemobile" />
            <img className='hidden md:block lg:hidden saturate-200' src={beautifulTablet} alt="beautifulimagetablet" />
            <img className='hidden lg:block saturate-200 lg:w-[60%]' src={beautifulDesktop} alt="beautifulimagedesktop" />

            <div className='px-5 py-10 md:px-10 md:py-32 lg:px-20 lg:w-[40%]'>
                <p className='text-PureBlack uppercase tracking-wider text-3xl font-bold w-3/4 md:text-5xl'>Beautiful Stories Every Time</p>
                <p className='leading-7 py-5'>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
                <ViewStories />
            </div>
        </div>
    )
}

export default BeautifulStories