import React from 'react'
import logo from '../shared/desktop/logo.svg'
import facebook from '../shared/desktop/facebook.svg'
import youtube from '../shared/desktop/youtube.svg'
import twitter from '../shared/desktop/twitter.svg'
import pinterest from '../shared/desktop/pinterest.svg'
import instagram from '../shared/desktop/instagram.svg'
import { Link } from 'react-router-dom'
import GetInviteTransparent from '../buttons/GetInviteTransparent'

const Footer = () => {
    return (
        <div className='py-20 bg-PureBlack flex flex-col items-center text-PureWhite md:grid md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 md:grid-rows-3 md:px-10 lg:px-20'>
            <img className='pb-5 brightness-0 invert md:row-start-1 md:col-start-1' src={logo} alt="logo" />
            <div className='flex gap-5 py-5 md:col-start-1 md:row-start-3 lg:row-start-2 '>
                <img className='cursor-pointer brightness-0 invert hover:brightness-100 hover:invert-0' src={facebook} alt="facebooksvg" />
                <img className='cursor-pointer brightness-0 invert hover:brightness-100 hover:invert-0' src={youtube} alt="youtubesvg" />
                <img className='cursor-pointer brightness-0 invert hover:brightness-100 hover:invert-0' src={twitter} alt="twittersvg" />
                <img className='cursor-pointer brightness-0 invert hover:brightness-100 hover:invert-0' src={pinterest} alt="pinterestsvg" />
                <img className='cursor-pointer brightness-0 invert hover:brightness-100 hover:invert-0' src={instagram} alt="instagramsvg" />
            </div>
            <div className='flex flex-col py-10 items-center text-center md:text-start md:items-start md:col-start-1  md:row-start-2 lg:col-start-2 lg:row-start-1 lg:row-end-3'>
                <ul className=' flex flex-col gap-5 md:flex-row lg:flex-col'>
                    <Link to='/'><li className='uppercase text-PureWhite tracking-widest hover:text-LightGray/50'>Home</li></Link>
                    <Link to='/stories'><li className='uppercase text-PureWhite tracking-widest hover:text-LightGray/50'>Stories</li></Link>
                    <Link to='/features'><li className='uppercase text-PureWhite tracking-widest hover:text-LightGray/50'>Features</li></Link>
                    <Link to='/pricing'><li className='uppercase text-PureWhite tracking-widest hover:text-LightGray/50'>Pricing</li></Link>
                </ul>
            </div>
            <div className='flex flex-col items-center gap-10 md:col-start-2 md:row-start-1 md:row-end-4 md:items-end lg:col-start-3'>
                <GetInviteTransparent />
                <p className='text-LightGray/50'>Copyright 2023. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer