import React from 'react'
import GetInviteTransparent from '../buttons/GetInviteTransparent'

const Beta = () => {
    return (
        <div className='flex flex-col py-10 md:py-20 md:flex-row md:justify-between relative md:px-20 bg-[url(/src/assets/shared/mobile/bg-beta.jpg)] md:bg-[url(/src/assets/shared/tablet/bg-beta.jpg)] lg:bg-[url(/src/assets/shared/desktop/bg-beta.jpg)] saturate-200 bg-no-repeat bg-cover'>
            <div className='px-5 md:w-[50%] '>
                <hr className='absolute top-0 border-none w-52 h-3 bg-gradient-to-bl from-LightBlue from-20% via-LightPink to-LightYellow md:left-0 md:w-3 md:h-full'></hr>
                <p className='text-PureWhite font-bold tracking-widest uppercase text-3xl md:text-5xl lg:w-1/2'>We're in Beta. Get Your Invite Today!</p>
            </div>
            <div className='py-10 self-center'>
                <GetInviteTransparent />
            </div>
        </div>
    )
}

export default Beta