import Link from 'next/link'
import React from 'react'
import game_1 from '../../../public/slider/game_1.jpg'
import game_2 from '../../../public/slider/game_2.jpg'
import Image from 'next/image'
const GamePage = () => {
    return (
        <div className='px-10'>
            <span className='flex flex-row justify-between items-center px-2 pb-5'>
                <h1 className='text-2xl font-semibold text-gray-700'>
                    Games
                </h1>
                <Link href="#" className='text-indigo-700 font-bold flex flex-row gap-2 transition duration-500 transform hover:translate-x-2'>
                <p className='hover:translate-x-2 transition duration-500'> 
                    More In Games
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:translate-x-1 transition duration-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </Link>
            </span>
            <div className='flex flex-row gap-5 '>
                <Link href="#" className='relative'>
                    <Image style={{ width: '100%' }} src={game_1} alt="No image" width={500} height={500} />
                    <div className='absolute bottom-5 pl-5 text-white flex flex-col gap-5 text-xs font-semibold'>

                        <h1 className='text-2xl'>After Badger Buries Entire Cow Carcass, Scientists Go to the Tap</h1>
                        <p className='text-white text-lg'>Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet …</p>
                    </div>
                </Link>
                <Link href="#" className='relative'>
                    <Image style={{ width: '100%' }} src={game_2} alt="No image" width={500} height={500} />
                    <div className='absolute bottom-5 pl-5 text-white flex flex-col gap-5 text-xs font-semibold'>

                        <h1 className='text-2xl'>A Genetic Oddity May Give Octopuses and Squids Their Smarts</h1>
                        <p className='text-white text-lg'>Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet …</p>
                    </div>
                </Link>
            </div>
        </div>
    )

}

export default GamePage