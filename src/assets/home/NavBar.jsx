import React from 'react'
import NavMobile from './NavMobile'
import logo from '../shared/desktop/logo.svg'
import { Link } from 'react-router-dom'
import GetAnInvite from '../buttons/GetAnInvite'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center p-5 md:px-10 xl:px-20'>
            <div className='flex justify-between'>
                <Link to='/'><img src={logo} alt="logo" /></Link>
            </div>
            <div className='hidden md:flex'>
                <ul className='bg-PureWhite flex gap-5'>
                    <Link to='/stories'><li className='uppercase text-PureBlack tracking-widest hover:text-LightGray'>Stories</li></Link>
                    <Link to='/features'><li className='uppercase text-PureBlack tracking-widest hover:text-LightGray'>Features</li></Link>
                    <Link to='/pricing'><li className='uppercase text-PureBlack tracking-widest hover:text-LightGray'>Pricing</li></Link>
                </ul>
            </div>
            <div className='hidden md:block'>
                <GetAnInvite />
            </div>
            <div className='md:hidden'>
                <NavMobile />
            </div>
        </div>
    )
}

export default NavBar