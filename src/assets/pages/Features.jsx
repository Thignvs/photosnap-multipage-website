import React from 'react'
import Hero from '../features/Hero'
import ResponsiveFeatures from '../features/ResponsiveFeatures'
import Beta from '../features/Beta'

const Features = () => {
    return (
        <div className='flex flex-col'>
            <header>
                <Hero />
            </header>
            <main>
                <ResponsiveFeatures />
                <Beta />
            </main>
        </div>
    )
}

export default Features