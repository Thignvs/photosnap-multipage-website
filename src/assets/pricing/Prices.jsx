import React, { useState } from 'react'
import PickPlanDark from '../buttons/PickPlanDark'
import PickPlanLight from '../buttons/PickPlanLight'
import check from './desktop/check.svg'

const Prices = () => {

    const [isPriceYearly, setPriceYearly] = useState(false)
    const togglePriceYearly = () => {
        setPriceYearly(!isPriceYearly)
    }

    return (
        <div className='flex flex-col py-10'>
            <div className='flex justify-center gap-5 p-5'>
                <p className={`font-bold ${isPriceYearly ? 'text-PureBlack/50' : 'text-PureBlack'}`}>Monthly</p>
                <div onClick={togglePriceYearly} className={`w-12 rounded-full  border-2 border-LightGray cursor-pointer flex items-center ${isPriceYearly ? 'bg-PureBlack border-PureBlack' : 'bg-LightGray'}`}>
                    <span className={`bg-PureBlack block w-5 border-LightGray h-5 rounded-full duration-300 ${isPriceYearly ? 'translate-x-6 bg-PureWhite' : ''}`}></span>
                </div>
                <p className={`font-bold ${isPriceYearly ? 'text-PureBlack' : 'text-PureBlack/50'}`}>Yearly</p>
            </div>
            <div className='lg:flex lg:justify-center py-20'>
                <div className='flex flex-col px-5  gap-5 py-10 '>
                    <div className='bg-LightGray w-full py-10 text-PureBlack md:flex'>
                        <div>
                            <p className='font-bold text-center text-2xl'>Basic</p>
                            <p className='text-PureBlack/50 leading-7 text-center p-5'>Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
                            <p className='text-5xl gap-1 font-bold flex justify-center md:hidden lg:flex'>$ <span className={` font-bold ${isPriceYearly ? 'hidden' : 'block'}`}>19.00</span> <span className={` font-bold ${isPriceYearly ? 'block' : 'hidden'}`}>190.00</span></p>
                            <p className='text-PureBlack/50 text-center py-3 md:hidden lg:block'><span className={isPriceYearly ? 'hidden' : 'block'}>per month</span><span className={isPriceYearly ? 'block' : 'hidden'}>per year</span></p>
                            <PickPlanDark />
                        </div>
                        <div className='hidden md:block px-5 lg:hidden'>
                            <p className='text-5xl gap-1 font-bold flex justify-center'>$ <span className={` font-bold ${isPriceYearly ? 'hidden' : 'block'}`}>19.00</span> <span className={` font-bold ${isPriceYearly ? 'block' : 'hidden'}`}>190.00</span></p>
                            <p className='text-PureBlack/50 text-center py-3'><span className={isPriceYearly ? 'hidden' : 'block'}>per month</span><span className={isPriceYearly ? 'block' : 'hidden'}>per year</span></p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col px-5'>
                    <div className='h-3 w-full bg-gradient-to-bl from-LightBlue from-20% via-LightPink to-LightYellow'></div>
                    <div className='bg-PureBlack md:flex'>
                        <div className='w-full py-20 text-PureWhite'>
                            <p className='font-bold text-center text-2xl'>Pro</p>
                            <p className='text-PureWhite/50 leading-7 text-center p-5'>More advanced features available. Recommended for photography veterans and professionals.</p>
                            <p className='text-5xl gap-1 font-bold flex justify-center md:hidden lg:flex'>$ <span className={` font-bold ${isPriceYearly ? 'hidden' : 'block'}`}>39.00</span> <span className={` font-bold ${isPriceYearly ? 'block' : 'hidden'}`}>390.00</span></p>
                            <p className='text-PureWhite/50 text-center py-3 md:hidden lg:block'><span className={isPriceYearly ? 'hidden' : 'block'}>per month</span><span className={isPriceYearly ? 'block' : 'hidden'}>per year</span></p>
                            <PickPlanLight />
                        </div>
                        <div className='hidden md:block px-5 pt-20 lg:hidden'>
                            <p className='text-5xl gap-1 font-bold flex justify-center text-PureWhite'>$ <span className={` font-bold ${isPriceYearly ? 'hidden' : 'block'}`}>19.00</span> <span className={` font-bold ${isPriceYearly ? 'block' : 'hidden'}`}>190.00</span></p>
                            <p className='text-PureWhite/50 text-center py-3'><span className={isPriceYearly ? 'hidden' : 'block'}>per month</span><span className={isPriceYearly ? 'block' : 'hidden'}>per year</span></p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col px-5  gap-5 py-10'>
                    <div className='md:flex bg-LightGray'>
                        <div className=' w-full py-10 text-PureBlack'>
                            <p className='font-bold text-center text-2xl'>Business</p>
                            <p className='text-PureBlack/50 leading-7 text-center p-5'>Additional features available such as more detailed metrics. Recommended for business owners.</p>
                            <p className='text-5xl gap-1 font-bold flex justify-center md:hidden lg:flex'>$ <span className={` font-bold ${isPriceYearly ? 'hidden' : 'block'}`}>99.00</span> <span className={` font-bold ${isPriceYearly ? 'block' : 'hidden'}`}>990.00</span></p>
                            <p className='text-PureBlack/50 text-center py-3 md:hidden lg:block'><span className={isPriceYearly ? 'hidden' : 'block'}>per month</span><span className={isPriceYearly ? 'block' : 'hidden'}>per year</span></p>
                            <PickPlanDark />
                        </div>
                        <div className='hidden md:block px-5 pt-10 lg:hidden'>
                            <p className='text-5xl gap-1 font-bold flex justify-center'>$ <span className={` font-bold ${isPriceYearly ? 'hidden' : 'block'}`}>19.00</span> <span className={` font-bold ${isPriceYearly ? 'block' : 'hidden'}`}>190.00</span></p>
                            <p className='text-PureBlack/50 text-center py-3'><span className={isPriceYearly ? 'hidden' : 'block'}>per month</span><span className={isPriceYearly ? 'block' : 'hidden'}>per year</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prices