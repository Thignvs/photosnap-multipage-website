import React from 'react'
import arrow from '../shared/desktop/arrow.svg'

const ReadStory = () => {
    return (
        <div className='flex flex-col w-screen pr-10 md:pr-[55%] lg:pr-[78%] 2xl:pr-[77%]'>
            <hr className='w-full text-PureWhite/50'></hr>
            <button className='flex justify-between items-center pt-5 text-PureWhite font-bold tracking-wide'>READ STORY <img className='invert justify-self-end' src={arrow} alt="arrowsvg" /></button>
        </div>
    )
}

export default ReadStory