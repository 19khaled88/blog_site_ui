
import { gadget, software } from '@/app/source/db'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Gadget_software = () => {

    const gadget_view = (data: any) => {
        let array: any = []
        data.slice(0,1).map((item: any, index: number) => {
            array.push(
                <div key={index} className='flex flex-col gap-5'>
                    <Image style={{ width: '100%' }} src={item.image} alt="No image" width={500} height={500} />
                    <div>
                        <h1 className="text-xl font-semibold text-gray-700">{item.title}</h1>
                        <span className='flex flex-row justify-between'>
                            <h3>{item.user}</h3>
                            <h3>{item.date}</h3>
                        </span>
                        <p>{item.info}</p>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-3'>
                        {
                            item.sub_cat.map((deep_info:any,index:number)=>{
                                return(
                                    <div key={index} className='flex flex-col gap-3'>
                                        <Image className='w-full' src={deep_info.image} alt='No Image' width={500} height={500}/>
                                        <div className='flex flex-col gap-2'>
                                            <h1 className="text-xl font-semibold">{deep_info.title}</h1>
                                            <p>{deep_info.date}</p>
                                            <h3>{deep_info.info}</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        })

        return array
    }

    const software_view = (data: any) => {
        let array: any = []
        data.slice(0,1).map((item: any, index: number) => {
            array.push(
                <div key={index} className='flex flex-col gap-5'>
                    <Image style={{ width: '100%' }} src={item.image} alt="No image" width={500} height={500} />
                    <div>
                        <h1 className="text-xl font-semibold text-gray-700">{item.title}</h1>
                        <span className='flex flex-row justify-between'>
                            <h3>{item.user}</h3>
                            <h3>{item.date}</h3>
                        </span>
                        <p>{item.info}</p>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-3'>
                        {
                            item.sub_cat.map((deep_info:any,index:number)=>{
                                return(
                                    <div key={index} className='flex flex-col gap-3'>
                                        <Image className='w-full' src={deep_info.image} alt='No Image' width={500} height={500}/>
                                        <div className='flex flex-col gap-2'>
                                            <h1 className="text-xl font-semibold">{deep_info.title}</h1>
                                            <p>{deep_info.date}</p>
                                            <h3>{deep_info.info}</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        })

        return array
    }



    return (
        <div className='grid md:grid-cols-2 gap-5 p-10'>
            <div>
                <span className='flex flex-row justify-between pb-5 items-center'>
                    <h1 className='text-2xl font-semibold text-gray-600 '>
                        Gadget
                    </h1>
                    <Link href="#" className='text-indigo-700 font-bold flex flex-row gap-2 transition duration-500 transform hover:translate-x-2'>
                    <p className='hover:translate-x-2 transition duration-500'> 
                        More in Gadgets
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:translate-x-1 transition duration-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </Link>
                </span>
                <div>
                    {
                        gadget_view(gadget)
                    }
                </div>
            </div>
            <div>
                <span className='flex flex-row justify-between pb-5 items-center'>
                    <h1 className='text-2xl font-semibold text-gray-600 '>
                        Software
                    </h1>
                    <Link href="#" className='text-indigo-700 font-bold flex flex-row gap-2 transition duration-500 transform hover:translate-x-2'>
                    <p className='hover:translate-x-2 transition duration-500'> 
                        More in Software
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:translate-x-1 transition duration-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </Link>
                </span>

                <div>
                    {
                        software_view(software)
                    }
                </div>
            </div>
        </div>
    )
}

export default Gadget_software