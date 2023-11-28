import { recent_post, technology } from '@/app/source/db'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TechnologyPage = () => {
    const techno_logy=(data:any)=>{
        let array:any =[]
         data.slice(0,3).map((item:any, index:number)=>{
            array.push(
                <div key={index} className='grid md:grid-cols-2  lg:grid-cols-1 gap-3'>
                    <Image src={item.image} alt="No Image" width={1000} height={1000}/>
                    <div className='flex flex-col gap-2'>
                        <h1 className=' lg:text-xl xl:text-2xl '>{item.title}</h1>
                        <span className='flex flex-row justify-between'>
                            <p className='text-sm'>{item.user}</p>
                            <p className='text-sm'>{item.date}</p>
                        </span>
                        <p>{item.info}</p>
                    </div>
                </div>
            )
         })
        return array
    }

    return (
        <div className='px-10 '>
            <span className='flex flex-row justify-between items-center pr-2 pb-5'>
                <h1 className='text-2xl font-semibold border border-1 border-red-500 px-2 bg-indigo-500 text-white'>
                    Technology
                </h1>
                <Link href="/technology" className='text-indigo-700 font-bold flex flex-row gap-2 transition duration-500 transform hover:translate-x-2'>
                <p className='hover:translate-x-2 transition duration-500'> 
                    More in Technology
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:translate-x-1 transition duration-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </Link>
            </span>
            <div className='grid lg:grid-cols-3 gap-5'>
                {
                    techno_logy(technology)
                }
               
            </div>
        </div>
    )
}

export default TechnologyPage