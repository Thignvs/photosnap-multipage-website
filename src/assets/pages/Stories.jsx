import React from 'react'
import Hero from '../stories/Hero'
import StoriesPhotos from '../stories/StoriesPhotos'

const Stories = () => {
    return (
        <div className='flex flex-col'>
            <header>
                <Hero />
            </header>
            <main>
                <StoriesPhotos />
            </main>
        </div>
    )
}

export default Stories