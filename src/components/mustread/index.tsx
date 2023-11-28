import Image from 'next/image'
import React from 'react'
import mustRead_1 from '../../../public/slider/must_read_1.jpg'
import mustRead_2 from '../../../public/slider/must_read_2.jpg'
import Link from 'next/link'

const MustReadPage = () => {
    return (
        <div className='p-10'>
            <span className='flex flex-row justify-between items-center px-2 pb-5'>
                <h1 className='text-2xl font-semibold text-gray-700'>
                Must Read
                </h1>
                <Link href="#" className='text-indigo-700 font-bold flex flex-row gap-2 transition duration-500 transform hover:translate-x-2'>
                <p className='hover:translate-x-2 transition duration-500'>  
                    View All
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:translate-x-1 transition duration-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </Link>
            </span>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
                <Link href="#" className='relative'>
                    <Image style={{ width: '100%' }} src={mustRead_1} alt="No image" width={500} height={500} />
                    <div className='absolute bottom-5 pl-5 text-white flex flex-col gap-3 sm:text-xs font-semibold'>
                        <h5>GADGET</h5>
                        <h1 className=' text-md sm:text-lg md:text-xl lg:text-lg'>Spend a Dollar on Upcoming iPhone 13, and How to Save More</h1>
                        <p className='text-white text-xs sm:text-md md:text-lg'>Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet …</p>
                    </div>
                </Link>
                <Link href="#" className='relative'>
                    <Image style={{ width: '100%' }} src={mustRead_2} alt="No image" width={500} height={500} />
                    <div className='absolute bottom-5 pl-5 text-white flex flex-col gap-5 sm:text-xs font-semibold'>
                        <h5>MUST READ</h5>
                        <h1 className='text-md sm:text-lg md:text-xl lg:text-lg'>No Longer a Dream: Silicon Valley Takes On the Flying Car</h1>
                        <p className='text-white text-xs sm:text-md md:text-lg'>Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet …</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MustReadPage