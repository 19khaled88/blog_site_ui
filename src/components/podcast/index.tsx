import { pod_cast } from '@/app/source/db'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PodcastPage = () => {
    const podCast=(data:any)=>{
        let array:any =[]
        data.map((item:any,index:number)=>{
            array.push(
                <div key={index} className='flex flex-col h-full justify-center gap-5 py-5'>
                    <h3 className='text-lg font-semibold text-gray-700'>{item.short_name}</h3>
                    <h1 className='text-2xl font-bold'>{item.title}</h1>
                    <p className='text-gray-700'>{item.info}</p>
                </div>
            )
        })
        return array
    }
  return (
    <div className='grid grid-cols-5 gap-5 px-5' style={{backgroundImage:'linear-gradient(to top, #37ecba 0%, #72afd3 100%)'}}>
        <Image className='col-span-1' src="/slider/posdcast-removebg-preview.png" alt="no image" width={1500} height={1000}/>
        <div className='col-span-3'>
            {
                podCast(pod_cast)
            }
        </div>
        <span className='flex flex-row justify-center items-center'>
        {/* <Link className='col-span-1 bg-indigo-600 rounded-full py-3 px-5 text-white font-semibold' href="#">Listen Now</Link> */}
        <Link href="#"
            className="transform hover:scale-110 transition duration-500 ease-in-out bg-indigo-500 text-white font-bold px-5 py-2  rounded-full">
            Listen Now
          </Link>
        </span>
    </div>
  )
}

export default PodcastPage