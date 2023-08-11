import React from 'react'
import mountainsmobile from '../stories/mobile/mountains.jpg'
import mountainsdesktop from '../stories/desktop/mountains.jpg'
import sunsetmobile from '../stories/mobile/cityscapes.jpg'
import sunsetdesktop from '../stories/desktop/cityscapes.jpg'
import daysmobile from '../stories/mobile/18-days-voyage.jpg'
import daysdesktop from '../stories/desktop/18-days-voyage.jpg'
import architecturalsmobile from '../stories/mobile/architecturals.jpg'
import architecturalsdesktop from '../stories/desktop/architecturals.jpg'
import ReadStory from '../buttons/ReadStory'

const Photos = () => {
    return (
        <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 overflow-hidden'>
            <div className='flex flex-col relative duration-300 hover:-translate-y-5'>
                <img className='lg:hidden saturate-200' src={mountainsmobile} alt="mountainimg" />
                <img className='hidden lg:block saturate-200' src={mountainsdesktop} alt="mountainimg" />
                <div className='absolute px-5 bottom-10'>
                    <p className='text-PureWhite font-bold text-lg'>The Mountains</p>
                    <p className='text-PureWhite text-[13px] pb-5'>by John Appleseed</p>
                    <ReadStory />
                </div>
            </div>

            <div className='flex flex-col relative duration-300 hover:-translate-y-5'>
                <img className='lg:hidden saturate-200' src={sunsetmobile} alt="sunsetimg" />
                <img className='hidden lg:block saturate-200' src={sunsetdesktop} alt="sunsetimg" />
                <div className='absolute px-5 bottom-10'>
                    <p className='text-PureWhite font-bold text-lg'>Sunset Cityscapes</p>
                    <p className='text-PureWhite text-[13px] pb-5'>by Benjamin Cruz</p>
                    <ReadStory />
                </div>
            </div>

            <div className='flex flex-col relative duration-300 hover:-translate-y-5'>
                <img className='lg:hidden saturate-200' src={daysmobile} alt="18daysimg" />
                <img className='hidden lg:block saturate-200' src={daysdesktop} alt="18daysimg" />
                <div className='absolute px-5 bottom-10'>
                    <p className='text-PureWhite font-bold text-lg'>18 Days Voyage</p>
                    <p className='text-PureWhite text-[13px] pb-5'>by Alexei Borodin</p>
                    <ReadStory />
                </div>
            </div>

            <div className='flex flex-col relative duration-300 hover:-translate-y-5'>
                <img className='lg:hidden saturate-200' src={architecturalsmobile} alt="architecturalimg" />
                <img className='hidden lg:block saturate-200' src={architecturalsdesktop} alt="architecturalimg" />
                <div className='absolute px-5 bottom-10'>
                    <p className='text-PureWhite font-bold text-lg'>Architecturals</p>
                    <p className='text-PureWhite text-[13px] pb-5'>by Samantha Brooke</p>
                    <ReadStory />
                </div>
            </div>
        </div>
    )
}

export default Photos