import React from 'react'
import Hero from '../home/Hero'
import BeautifulStories from '../home/BeautifulStories'
import DesignedForEveryone from '../home/DesignedForEveryone'
import Photos from '../home/Photos'
import Responsive from '../home/Responsive'

const Home = () => {
    return (
        <div>
            <Hero />
            <BeautifulStories />
            <DesignedForEveryone />
            <Photos />
            <Responsive />
        </div>
    )
}

export default Home