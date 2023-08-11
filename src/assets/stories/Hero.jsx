import React from 'react'
import heromobile from './mobile/moon-of-appalacia.jpg'
import herodesktop from './desktop/moon-of-appalacia.jpg'
import herotablet from './tablet/moon-of-appalacia.jpg'
import ReadTheStory from '../buttons/ReadTheStory'

const Hero = () => {
    return (
        <div className='flex flex-col relative'>
            <img className='md:hidden' src={heromobile} alt="moonappalachiaimg" />
            <img className='hidden md:block lg:hidden' src={herotablet} alt="moonappalachiaimg" />
            <img className='hidden lg:block' src={herodesktop} alt="moonappalachiaimg" />
            <div className='bg-PureBlack flex flex-col py-10 px-5 text-PureWhite md:bg-transparent md:absolute md:top-[15%] md:w-[50%] 2xl:top-[20%] 2xl:px-20'>
                <p className='uppercase  font-bold tracking-wider'>LAST MONTH’S FEATURED STORY</p>
                <p className=' tracking-widest text-3xl uppercase font-bold py-5 md:text-5xl'>HAZY FULL MOON OF APPALACHIA</p>
                <p className='text-PureWhite/50'>March 2nd 2020 <span className='text-PureWhite'>by John Appleseed</span></p>
                <p className='text-PureWhite/50 py-5 leading-7'>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
                <ReadTheStory />
            </div>
        </div>
    )
}

export default Hero