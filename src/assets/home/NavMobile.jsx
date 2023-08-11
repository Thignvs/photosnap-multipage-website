import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GetAnInvite from '../buttons/GetAnInvite'


const NavMobile = () => {

    const [isMenuVisible, setMenuVisible] = useState(false)

    const handleMenuVisible = () => {
        setMenuVisible(!isMenuVisible)
    }


    return (
        <div className='flex flex-col items-center gap-5 relative'>
            <div onClick={handleMenuVisible} className={`flex flex-col gap-1 cursor-pointer`}>
                <span className={`block h-1 w-7 bg-PureBlack transform ${isMenuVisible ? ' rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block h-1 w-7 bg-PureBlack transform ${isMenuVisible ? ' -rotate-45 -translate-y-1' : ''}`}></span>
            </div>
            <div className={`flex flex-col items-center absolute z-10 py-5 top-8 w-screen -right-5 justify-center bg-PureWhite ${isMenuVisible ? 'block' : 'hidden'}`}>
                <ul className='flex flex-col gap-3 '>
                    <Link to='/stories'><li className='uppercase text-PureBlack  text-center tracking-widest'>Stories</li></Link> 
                    <Link to='/features'><li className='uppercase text-PureBlack text-center  tracking-widest'>Features</li></Link>
                    <Link to='/pricing'><li className='uppercase text-PureBlack  text-center tracking-widest pb-5'>Pricing</li></Link>
                </ul>
                <hr className='block w-[90%] h-1 text-LightGray mx-auto'></hr>
                <div className='flex py-5'>
                    <GetAnInvite />
                </div>
            </div>
        </div>
    )
}

export default NavMobile