import React from 'react'
import arrow from '../shared/desktop/arrow.svg'
import { Link } from 'react-router-dom'


const ViewStories = () => {
    return (
        <div className='flex py-2'>
            <Link to='/stories'><button className='text-PureBlack uppercase tracking-widest hover:underline flex gap-5 items-center font-bold'>View The Stories <img className='' src={arrow} alt="arrowsvg" /></button></Link>
        </div>
    )
}

export default ViewStories