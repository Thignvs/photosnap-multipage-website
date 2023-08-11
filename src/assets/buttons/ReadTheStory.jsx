import React from 'react'
import arrow from '../shared/desktop/arrow.svg'

const ReadTheStory = () => {
    return (
        <div className='flex py-5'>
            <button className='flex items-center text-PureWhite uppercase tracking-wider gap-5'>Read The Story
            <img className='invert' src={arrow} alt="arrowsvg" />
            </button>
        </div>
    )
}

export default ReadTheStory