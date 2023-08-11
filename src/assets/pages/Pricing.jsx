import React from 'react'
import Hero from '../pricing/Hero'
import Prices from '../pricing/Prices'
import TheFeatures from '../pricing/TheFeatures'
import Beta from '../features/Beta'

const Pricing = () => {
    return (
        <div>
            <header>
                <Hero />
            </header>
            <main>
                <Prices />
                <TheFeatures />
                <Beta />
            </main>
        </div>
    )
}

export default Pricing