import React from 'react'
import pricinghero from './mobile/hero.jpg'
import pricingheroTablet from './tablet/hero.jpg'
import pricingheroDesktop from './desktop/hero.jpg'


const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row-reverse'>
            <img className='md:hidden saturate-200' src={pricinghero} alt="pricinghero" />
            <img className='hidden md:block lg:hidden saturate-200' src={pricingheroTablet} alt="pricinghero" />
            <img className='hidden lg:block saturate-200 lg:w-[60%]' src={pricingheroDesktop} alt="pricinghero" />
            <div className='bg-PureBlack px-5 py-10 md:py-36 md:px-10'>
                <hr className='absolute top-0 border-none w-52 h-3 bg-gradient-to-bl from-LightBlue from-20% via-LightPink to-LightYellow md:w-3 md:h-52 md:left-0 md:top-[20%]'></hr>
                <h1 className='text-PureWhite tracking-widest text-3xl font-bold uppercase md:text-5xl '>Pricing</h1>
                <h2 className='text-PureWhite/50 py-10 leading-7'>Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.</h2>
            </div>
        </div>
    )
}

export default Hero