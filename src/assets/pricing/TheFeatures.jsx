import React from 'react'
import check from './desktop/check.svg'

const TheFeatures = () => {
    return (
        <div className='flex flex-col px-5 py-10 lg:px-44'>
            <p className='hidden md:block text-center uppercase text-3xl tracking-widest font-bold py-10'>Compare</p>
            <div className='flex justify-between items-center border-b'>
                <p className='py-5 text-PureBlack uppercase tracking-widest font-bold '>The Features</p>
                <div className='hidden md:flex md:gap-32 2xl:gap-64 font-bold uppercase'>
                    <p>Basic</p>
                    <p>Pro</p>
                    <p>Business</p>
                </div>
            </div>
            <div className='flex flex-col py-5 tracking-widest border-b border-LightGray md:flex-row md:justify-between'>
                <p className='text-PureBlack uppercase font-bold'>Unlimited Story Posting</p>
                <div className='flex justify-between md:gap-44 2xl:gap-[300px]'>
                    <div className='flex flex-col items-center '>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Basic</p>
                        <img src={check} alt="checkicon" />
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Pro</p>
                        <img src={check} alt="checkicon" />
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Business</p>
                        <img src={check} alt="checkicon" />
                    </div>
                </div>
            </div>

            <div className='flex flex-col py-5 tracking-widest border-b md:flex-row md:justify-between border-LightGray '>
                <p className='text-PureBlack uppercase font-bold'>Unlimited Photo Upload</p>
                <div className='flex justify-between md:gap-44 2xl:gap-[300px]'>
                    <div className='flex flex-col items-center'>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Basic</p>
                        <img src={check} alt="checkicon" />
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Pro</p>
                        <img src={check} alt="checkicon" />
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Business</p>
                        <img src={check} alt="checkicon" />
                    </div>
                </div>
            </div>

            <div className='flex flex-col py-5 tracking-widest border-b md:flex-row md:justify-between border-LightGray '>
                <p className='text-PureBlack uppercase font-bold'>EMBEDDING CUSTOM CONTENT</p>
                <div className='flex justify-between md:gap-44 2xl:gap-[300px]'>
                    <div className='flex flex-col items-center'>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Basic</p>

                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Pro</p>
                        <img src={check} alt="checkicon" />
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Business</p>
                        <img src={check} alt="checkicon" />
                    </div>
                </div>
            </div>

            <div className='flex flex-col py-5 tracking-widest border-b md:flex-row md:justify-between border-LightGray '>
                <p className='text-PureBlack uppercase font-bold'>Customize Metadata</p>
                <div className='flex justify-between md:gap-44 2xl:gap-[300px]'>
                    <div className='flex flex-col items-center'>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Basic</p>

                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Pro</p>
                        <img src={check} alt="checkicon" />
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Business</p>
                        <img src={check} alt="checkicon" />
                    </div>
                </div>
            </div>

            <div className='flex flex-col py-5 tracking-widest border-b md:flex-row md:justify-between border-LightGray '>
                <p className='text-PureBlack uppercase font-bold'>Advanced Metrics</p>
                <div className='flex justify-between md:gap-44 2xl:gap-[300px]'>
                    <div className='flex flex-col items-center'>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Basic</p>

                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Pro</p>

                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Business</p>
                        <img src={check} alt="checkicon" />
                    </div>
                </div>
            </div>

            <div className='flex flex-col py-5 tracking-widest border-b md:flex-row md:justify-between border-LightGray '>
                <p className='text-PureBlack uppercase font-bold'>Photo Downloads</p>
                <div className='flex justify-between md:gap-44 2xl:gap-[300px]'>
                    <div className='flex flex-col items-center'>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Basic</p>

                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Pro</p>

                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Business</p>
                        <img src={check} alt="checkicon" />
                    </div>
                </div>
            </div>

            <div className='flex flex-col py-5 tracking-widest border-b md:flex-row md:justify-between border-LightGray '>
                <p className='text-PureBlack uppercase font-bold'>Search Engine Indexing</p>
                <div className='flex justify-between md:gap-44 2xl:gap-[300px]'>
                    <div className='flex flex-col items-center'>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Basic</p>

                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Pro</p>

                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Business</p>
                        <img src={check} alt="checkicon" />
                    </div>
                </div>
            </div>

            <div className='flex flex-col py-5 tracking-widest border-b md:flex-row md:justify-between border-LightGray '>
                <p className='text-PureBlack uppercase font-bold'>Custom Analytics</p>
                <div className='flex justify-between md:gap-44 2xl:gap-[300px]'>
                    <div className='flex flex-col items-center'>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Basic</p>

                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Pro</p>

                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-PureBlack/50 uppercase font-bold pt-5 pb-2 md:hidden'>Business</p>
                        <img src={check} alt="checkicon" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TheFeatures