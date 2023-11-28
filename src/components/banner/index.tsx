'use client'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/captioned.css';
import 'react-awesome-slider/dist/styles.css';

import { banner, banner_right, banner_right_image } from '@/app/source/db';
import Image from 'next/image';
import Link from 'next/link';
import 'react-awesome-slider/dist/styles.css';
import { useEffect, useState } from 'react';

const imageSlide = (data: any) => {
    let array: any = []
    data.map((image: any, index: number) => {
        array.push(
            <div key={index} className='relative h-full w-full'>
                <Image style={{height:'100%',width:'100%'}} src={image.picture} alt='No Image' width={1200} height={3500} />
                <p className={`
                 absolute bottom-5 
                 text-lg md:text-2xl lg:text-3xl xl:text-4xl 
                 pl-5 
                 text-white 
                 font-bold
                `}>{image.caption}</p>
            </div>)
    })
    return array
}

const bannerRight = (data: any) => {
    let array: any = []
    data.map((item: any, index: number) => {
        array.push(
            <div key={index} className='shadow-2xl p-2 bg-gray-100' style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
                <h4 className='text-sm  text-blue-400'>{item.name}</h4>
                <Link href="#" className={`
                    lg:font-bold
                     text-xs 
                     text-gray-700
                     md:text-xs 
                     xl:text-md 
                     
                `}>{item.title}</Link>
            </div>
        )
    })
    return array
}

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
    const [loading, setLoading] = useState(true)
    const [localData, setLoacalData] = useState({})
    useEffect(() => {
        if (banner) {
            setLoacalData(banner)
            setLoading(false)
        }
    }, [])

    if (loading === true) {
        return (
            <div className='grid grid-cols-2 gap-3 p-10'>
                <div>
                    <div className="p-4 m-10 mx-auto border border-gray-300 rounded-md shadow h-80">
                        <div className="flex space-x-4 animate-pulse">
                            <div className="flex-1 py-1 space-y-4">
                                <div className="w-full h-40 bg-gray-400 rounded"></div>
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-400 rounded"></div>
                                    <div className="w-5/6 h-4 bg-gray-400 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="p-4 m-10 mx-auto border border-gray-300 rounded-md shadow h-80">
                        <div className="flex space-x-4 animate-pulse">
                            <div className="flex-1 py-1 space-y-4">
                                <div className="w-full h-40 bg-gray-400 rounded"></div>
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-400 rounded"></div>
                                    <div className="w-5/6 h-4 bg-gray-400 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className=' grid lg:grid-cols-3 gap-3 p-10'>
                <div className='lg:col-span-2'>
                    {
                        <AutoplaySlider
                            className="h-full"
                            play={true}
                            bullets={false}
                            cancelOnInteraction={false} // should stop playing on user interaction
                            interval={5000}
                            animation='foldOutAnimation'
                        >
                            {imageSlide(banner)}
                        </AutoplaySlider>
                    }
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3'>
                    <div className='shadow-2xl' style={{ width: '100%', height: '100%', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
                        {
                            banner_right_image.map((item: any, index: number) => {
                                let array = []
                                array.push(
                                    <Image 
                                    // style={{ width: '100%', height: '100%' }} 
                                    className={`
                                        h-52
                                        sm:h-72
                                        w-full md:h-full
                                    `}
                                    src={item.image} alt='No image' width={500} height={500} />
                                )
                                return array
                            })
                        }
                    </div>
                    <div className='flex flex-col gap-1 '>
                        {bannerRight(banner_right)}
                    </div>
                </div>
            </div>
        )
    }


}

export default Banner