import { application } from '@/app/source/db'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ApplicationPage = () => {
    const applications=(data:any)=>{
        let array:any =[]
        data.map((item:any,index:number)=>{
            array.push(
                <div key={index} className='flex flex-col gap-3'>
                <Image src={item.image} alt="No Image" width={1000} height={1000}/>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl '>{item.title}</h1>
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
    <div className='p-10 '>
            <span className='flex flex-row justify-between pb-5'>
                <h1 className='text-2xl font-semibold text-gray-600 '>
                    Apps
                </h1>
                <Link href="#" className='text-indigo-700 font-bold flex flex-row gap-2 transition duration-500 transform hover:translate-x-2'>
                More in Technology
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </Link>
            </span>
            <div className='grid grid-cols-3 gap-5'>
                {
                    applications(application)
                }
            </div>
        </div>
  )
}

export default ApplicationPage