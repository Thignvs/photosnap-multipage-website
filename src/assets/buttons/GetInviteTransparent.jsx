import React from 'react'
import arrow from '../shared/desktop/arrow.svg'

const GetInviteTransparent = () => {
    return (
        <div className='flex'>
            <button className='text-PureWhite uppercase tracking-widest hover:underline flex gap-5 items-center'>Get An Invite <img className='invert' src={arrow} alt="arrowsvg" /></button>
        </div>
    )
}

export default GetInviteTransparent