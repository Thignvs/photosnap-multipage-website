import React from 'react'
import designedforeveryone from '../home/mobile/designed-for-everyone.jpg'
import designedforeveryonetablet from '../home/tablet/designed-for-everyone.jpg'
import designedforeveryonedesktop from '../home/desktop/designed-for-everyone.jpg'
import ViewStories from '../buttons/ViewStories'

const DesignedForEveryone = () => {
    return (
        <div className='flex flex-col md:flex-row-reverse'>
            <img className='saturate-200 md:hidden' src={designedforeveryone} alt="designedimage" />
            <img className='saturate-200 hidden md:block lg:hidden' src={designedforeveryonetablet} alt="designedimagetablet" />
            <img className='saturate-200 hidden lg:block lg:w-[60%]' src={designedforeveryonedesktop} alt="designedimagemobile" />
            <div className='px-5 py-10 md:px-10 md:py-32 lg:w-[40%]'>
                <p className='text-PureBlack uppercase tracking-wider text-3xl font-bold w-3/4 md:text-5xl'>Designed for Everyone</p>
                <p className='leading-7 py-5'>Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. </p>
                <ViewStories />
            </div>
        </div>
    )
}

export default DesignedForEveryone