import React from 'react'
import heromobile from './mobile/hero.jpg'
import herotablet from './tablet/hero.jpg'
import herodesktop from './desktop/hero.jpg'

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row-reverse'>
            <img className='md:hidden saturate-200' src={heromobile} alt="heroimage" />
            <img className='hidden md:block lg:hidden saturate-200' src={herotablet} alt="heroimage" />
            <img className='hidden lg:block saturate-200 lg:w-[60%]' src={herodesktop} alt="heroimage" />
            <div className='bg-PureBlack px-5 py-10 md:py-28 lg:py-48 relative lg:w-[40%]'>
                <hr className='absolute top-0 border-none w-52 h-3 bg-gradient-to-bl from-LightBlue from-20% via-LightPink to-LightYellow md:w-3 md:h-52 md:left-0 md:top-[20%]'></hr>
                <h1 className='text-PureWhite tracking-widest text-3xl font-bold uppercase md:text-5xl md:px-5 lg:px-20'>Features</h1>
                <h2 className='text-PureWhite/50 py-10 leading-7 md:px-5 lg:px-20'>We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</h2>
            </div>
        </div>
    )
}

export default Hero