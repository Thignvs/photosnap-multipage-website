import React from 'react'
import heroimgmobile from '../home/mobile/create-and-share.jpg'
import herotablet from '../home/tablet/create-and-share.jpg'
import herodesktop from '../home/desktop/create-and-share.jpg'
import GetInviteTransparent from '../buttons/GetInviteTransparent'

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row-reverse'>
            <img className='saturate-200 md:hidden' src={heroimgmobile} alt="heroimage" />
            <img className='hidden saturate-200 md:block lg:hidden' src={herotablet} alt="heroimagetablet" />
            <img className='hidden saturate-200 lg:block lg:w-[60%]' src={herodesktop} alt="heroimagedesktop" />
            <div className='bg-PureBlack px-5 py-10 md:px-10 relative md:py-36 lg:w-[40%]'>
                <hr className='absolute top-0 border-none w-52 h-3 bg-gradient-to-bl from-LightBlue from-20% via-LightPink to-LightYellow md:w-3 md:h-96 md:left-0 md:top-[20%]'></hr>
                <h1 className='text-PureWhite tracking-widest text-3xl font-bold uppercase md:text-5xl lg:px-10'>Create and Share Your Photo Stories.</h1>
                <h2 className='text-PureWhite/50 py-10 leading-7 lg:px-10'>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</h2>
                <div className='lg:px-10'>
                <GetInviteTransparent />
                </div>
            </div>
        </div>
    )
}

export default Hero