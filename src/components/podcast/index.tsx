import { pod_cast } from '@/app/source/db'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PodcastPage = ({ posts }: { posts: any }) => {
    const podCast = (data: any) => {
        let array: any = []
        data.map((item: any, index: number) => {
            array.push(
                <div key={index} className='flex flex-col h-full justify-center gap-5'>
                    <h3 className='text-lg font-semibold text-gray-700'>{item.short_name}</h3>
                    <h1 className='text-2xl font-bold'>{item.title}</h1>
                    <p className='text-gray-700'>{item.info}</p>
                </div>
            )
        })
        return array
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 px-5' style={{ backgroundImage: 'linear-gradient(to top, #37ecba 0%, #72afd3 100%)' }}>
            <div className='flex  items-center justify-center'>
                <Image className='w-2/5 md:w-full lg:w-4/5' src="/slider/posdcast-removebg-preview.png" alt="no image" width={1500} height={1000} />

            </div>
            <div className='md:col-span-3 items-center md:h-full md:justify-center'>

                <div className='flex flex-col lg:flex-row py-3 lg:py-0 lg:justify-between lg:items-center h-full'>
                    {
                        podCast(pod_cast)
                    }

                    <Link
                        href="#"
                        className="w-fit transform hover:scale-110 transition duration-500 ease-in-out bg-indigo-500 text-center  text-white font-bold px-5 py-2  rounded-full">
                        Listen Now
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default PodcastPage