import React from 'react'
import ReadStory from '../buttons/ReadStory'
import mountains from './mobile/mountains.jpg'
import mountainsDesktop from './desktop/mountains.jpg'
import cityScapes from './mobile/cityscapes.jpg'
import cityScapesDesktop from './desktop/cityscapes.jpg'
import daysVoyage from './mobile/18-days-voyage.jpg'
import daysVoyageDesktop from './desktop/18-days-voyage.jpg'
import architecturals from './mobile/architecturals.jpg'
import architecturalsDesktop from './desktop/architecturals.jpg'
import worldTour from './mobile/world-tour.jpg'
import worldTourDesktop from './desktop/world-tour.jpg'
import unforeseen from './mobile/unforeseen-corners.jpg'
import unforeseenDesktop from './desktop/unforeseen-corners.jpg'
import kingAfrica from './mobile/king-on-africa.jpg'
import kingAfricaDesktop from './desktop/king-on-africa.jpg'
import tripNowhere from './mobile/trip-to-nowhere.jpg'
import tripNowhereDesktop from './desktop/trip-to-nowhere.jpg'
import rage from './mobile/rage-of-the-sea.jpg'
import rageDesktop from './desktop/rage-of-the-sea.jpg'
import runningFree from './mobile/running-free.jpg'
import runningFreeDesktop from './desktop/running-free.jpg'
import behindWaves from './mobile/behind-the-waves.jpg'
import behindWavesDesktop from './desktop/behind-the-waves.jpg'
import calmWaters from './mobile/calm-waters.jpg'
import calmWatersDesktop from './desktop/calm-waters.jpg'
import milkyWay from './mobile/milky-way.jpg'
import milkyWayDesktop from './desktop/milky-way.jpg'
import darkForest from './mobile/dark-forest.jpg'
import darkForestDesktop from './desktop/dark-forest.jpg'
import somwarpets from './mobile/somwarpet.jpg'
import somwarpetsDesktop from './desktop/somwarpet.jpg'
import landDreams from './mobile/land-of-dreams.jpg'
import landDreamsDesktop from './desktop/land-of-dreams.jpg'


const StoriesPhotos = () => {
    return (
        <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col relative duration-300 hover:-translate-y-5'>
                <img className='lg:hidden saturate-200' src={mountains} alt="mountainsimg" />
                <img className='hidden lg:block saturate-200' src={mountainsDesktop} alt="mountainsimg" />
                <div className='absolute px-5 bottom-10'>
                    <p className='text-PureWhite text-[13px]'>April 16th 2023</p>
                    <p className='text-PureWhite font-bold text-lg'>The Mountains</p>
                    <p className='text-PureWhite text-[13px] pb-5'>by John Appleseed</p>
                    <ReadStory />
                </div>
            </div>
            <div className='flex flex-col relative duration-300 hover:-translate-y-5'>
                <img className='lg:hidden saturate-200' src={cityScapes} alt="cityscapesimg" />
                <img className='hidden lg:block saturate-200' src={cityScapesDesktop} alt="cityscapesimg" />
                <div className='absolute px-5 bottom-10'>
                    <p className='text-PureWhite text-[13px]'>April 14th 2023</p>
                    <p className='text-PureWhite font-bold text-lg'>Sunset Cityscapes</p>
                    <p className='text-PureWhite text-[13px] pb-5'>by Benjamin Cruz</p>
                    <ReadStory />
                </div>
            </div>
            <div className='flex flex-col relative duration-300 hover:-translate-y-5'>
                <img className='lg:hidden saturate-200' src={daysVoyage} alt="daysvoyageimg" />
                <img className='hidden lg:block saturate-200' src={daysVoyageDesktop} alt="daysvoyageimg" />
                <div className='absolute px-5 bottom-10'>
                    <p className='text-PureWhite text-[13px]'>April 11th 2023</p>
                    <p className='text-PureWhite font-bold text-lg'>18 Days Voyage</p>
                    <p className='text-PureWhite text-[13px] pb-5'>by Alexei Borodin</p>
                    <ReadStory />
                </div>
            </div>
            <div className='flex flex-col relative duration-300 hover:-translate-y-5'>
                <img className='lg:hidden saturate-200' src={architecturals} alt="architecturalimg" />
                <img className='hidden lg:block saturate-200' src={architecturalsDesktop} alt="architecturalimg" />
                <div className='absolute px-5 bottom-10'>
                    <p className='text-PureWhite text-[13px]'>April 9th 2023</p>
                    <p className='text-PureWhite font-bold text-lg'>Architecturals</p>
                    <p className='text-PureWhite text-[13px] pb-5'>by Samantha Brooke</p>
                    <ReadStory />
                </div>
            </div>
            <div className='flex flex-col relative duration-300 hover:-translate-y-5'>
                <img className='lg:hidden saturate-200' src={worldTour} alt="worldtourimg" />
                <img className='hidden lg:block saturate-200' src={worldTourDesktop} alt="worldtourimg" />
                <div className='absolute px-5 bottom-10'>
                    <p className='text-PureWhite text-[13px]'>April 7th 2023</p>
                    <p className='text-PureWhite font-bold text-lg'>World Tour 2019</p>
                    <p className='text-PureWhite text-[13px] pb-5'>by Timothy Wagner</p>
                    <ReadStory />
                </div>
            </div>
            <div className='flex flex-col relative duration-300 hover:-translate-y-5'>
                <img className='lg:hidden saturate-200' src={unforeseen} alt="unforeseenimg" />
                <img className='hidden lg:block saturate-200' src={unforeseenDesktop} alt="unforeseenimg" />
                <div className='absolute px-5 bottom-10'>
                    <p className='text-PureWhite text-[13px]'>April 3rd 2023</p>
                    <p className='text-PureWhite font-bold text-lg'>unforeseen Corners</p>
                    <p className='text-PureWhite text-[13px] pb-5'>by William Malcolm</p>
                    <ReadStory />
                </div>
            </div>
            <div className='flex flex-col relative duration-300 hover:-translate-y-5'>
                <img className='lg:hidden saturate-200' src={kingAfrica} alt="kingofafricaimg" />
                <img className='hidden lg:block saturate-200' src={kingAfricaDesktop} alt="kingofafricaimg" />
                <div className='absolute px-5 bottom-10'>
                    <p className='text-PureWhite text-[13px]'>March 29th 2023</p>
                    <p className='text-PureWhite font-bold text-lg'>King of Africa: Part II</p>
                    <p className='text-PureWhite text-[13px] pb-5'>by Tim Hillenburg</p>
                    <ReadStory />
                </div>
            </div>
            <div className='flex flex-col relative duration-300 hover:-translate-y-5'>
                <img className='lg:hidden saturate-200' src={tripNowhere} alt="tripnowehereimg" />
                <img className='hidden lg:block saturate-200' src={tripNowhereDesktop} alt="tripnowehereimg" />
                <div className='absolute px-5 bottom-10'>
                    <p className='text-PureWhite text-[13px]'>March 21st 2023</p>
                    <p className='text-PureWhite font-bold text-lg'>The Trip to Nowhere</p>
                    <p className='text-PureWhite text-[13px] pb-5'>by Felicia Rourke</p>
                    <ReadStory />
                </div>
            </div>
            <div className='flex flex-col relative duration-300 hover:-translate-y-5'>
                <img className='lg:hidden saturate-200' src={rage} alt="rageoftheseaimg" />
                <img className='hidden lg:block saturate-200' src={rageDesktop} alt="rageoftheseaimg" />
                <div className='absolute px-5 bottom-10'>
                    <p className='text-PureWhite text-[13px]'>March 19th 2023</p>
                    <p className='text-PureWhite font-bold text-lg'>Rage of The Sea</p>
                    <p className='text-PureWhite text-[13px] pb-5'>by Mohammed Abdul</p>
                    <ReadStory />
                </div>
            </div>
            <div className='flex flex-col relative duration-300 hover:-translate-y-5'>
                <img className='lg:hidden brightness-75' src={runningFree} alt="runningfreeimg" />
                <img className='hidden lg:block brightness-75' src={runningFreeDesktop} alt="runningfreeimg" />
                <div className='absolute px-5 bottom-10'>
                    <p className='text-PureWhite text-[13px]'>March 16th 2023</p>
                    <p className='text-PureWhite font-bold text-lg'>Running Free</p>
                    <p className='text-PureWhite text-[13px] pb-5'>by Michelle</p>
                    <ReadStory />
                </div>
            </div>
            <div className='flex flex-col relative duration-300 hover:-translate-y-5'>
                <img className='lg:hidden saturate-200' src={behindWaves} alt="behindthewavesimg" />
                <img className='hidden lg:block saturate-200' src={behindWavesDesktop} alt="behindthewavesimg" />
                <div className='absolute px-5 bottom-10'>
                    <p className='text-PureWhite text-[13px]'>March 11th 2023</p>
                    <p className='text-PureWhite font-bold text-lg'>Behind the Waves</p>
                    <p className='text-PureWhite text-[13px] pb-5'>by Lamarr Wilson</p>
                    <ReadStory />
                </div>
            </div>
            <div className='flex flex-col relative duration-300 hover:-translate-y-5'>
                <img className='lg:hidden saturate-200' src={calmWaters} alt="calmwatersimg" />
                <img className='hidden lg:block saturate-200' src={calmWatersDesktop} alt="calmwatersimg" />
                <div className='absolute px-5 bottom-10'>
                    <p className='text-PureWhite text-[13px]'>March 9th 2023</p>
                    <p className='text-PureWhite font-bold text-lg'>Calm Waters</p>
                    <p className='text-PureWhite text-[13px] pb-5'>by Samantha Brooke</p>
                    <ReadStory />
                </div>
            </div>
            <div className='flex flex-col relative duration-300 hover:-translate-y-5'>
                <img className='lg:hidden saturate-200' src={milkyWay} alt="themilkywayimg" />
                <img className='hidden lg:block saturate-200' src={milkyWayDesktop} alt="themilkywayimg" />
                <div className='absolute px-5 bottom-10'>
                    <p className='text-PureWhite text-[13px]'>March 5th 2023</p>
                    <p className='text-PureWhite font-bold text-lg'>The Milky Way</p>
                    <p className='text-PureWhite text-[13px] pb-5'>by Benjamin Cruz</p>
                    <ReadStory />
                </div>
            </div>
            <div className='flex flex-col relative duration-300 hover:-translate-y-5'>
                <img className='lg:hidden saturate-200' src={darkForest} alt="darkforestimg" />
                <img className='hidden lg:block saturate-200' src={darkForestDesktop} alt="darkforestimg" />
                <div className='absolute px-5 bottom-10'>
                    <p className='text-PureWhite text-[13px]'>March 4th 2023</p>
                    <p className='text-PureWhite font-bold text-lg'>Night at The Dark Forest</p>
                    <p className='text-PureWhite text-[13px] pb-5'>by Mohammed Abdul</p>
                    <ReadStory />
                </div>
            </div>
            <div className='flex flex-col relative duration-300 hover:-translate-y-5'>
                <img className='lg:hidden saturate-200' src={somwarpets} alt="somwarpetsbeautyimg" />
                <img className='hidden lg:block saturate-200' src={somwarpetsDesktop} alt="somwarpetsbeautyimg" />
                <div className='absolute px-5 bottom-10'>
                    <p className='text-PureWhite text-[13px]'>March 1st 2023</p>
                    <p className='text-PureWhite font-bold text-lg'>Somwarpet's Beauty</p>
                    <p className='text-PureWhite text-[13px] pb-5'>by Michelle</p>
                    <ReadStory />
                </div>
            </div>
            <div className='flex flex-col relative duration-300 hover:-translate-y-5'>
                <img className='lg:hidden saturate-200' src={landDreams} alt="landofdreamsimg" />
                <img className='hidden lg:block saturate-200' src={landDreamsDesktop} alt="landofdreamsimg" />
                <div className='absolute px-5 bottom-10'>
                    <p className='text-PureWhite text-[13px]'>February 25th 2023</p>
                    <p className='text-PureWhite font-bold text-lg'>Land of Dreams</p>
                    <p className='text-PureWhite text-[13px] pb-5'>by William Malcolm</p>
                    <ReadStory />
                </div>
            </div>
        </div>
    )
}

export default StoriesPhotos