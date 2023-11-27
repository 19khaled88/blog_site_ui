'use client'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/captioned.css';
import 'react-awesome-slider/dist/styles.css';

import { banner, banner_right, banner_right_image } from '@/app/source/db';
import Image from 'next/image';
import Link from 'next/link';
import 'react-awesome-slider/dist/styles.css';

const imageSlide = (data: any) => {
    let array: any = []
    data.map((image: any, index: number) => {
        array.push(
            <div key={index} style={{ width: '100%', height: '100%' }} className='relative'>
                <Image src={image.picture} alt='No Image' width={1200} height={1500} />

                <p className='absolute top-40 text-4xl pl-5 text-white font-bold'>{image.caption}</p>
            </div>)
    })
    return array
}

const bannerRight = (data: any) => {
    let array: any = []
    data.map((item: any, index: number) => {
        array.push(
            <div key={index} className='shadow-2xl p-2 bg-gray-100' style={{boxShadow:'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                <h4 className='text-sm  text-blue-400'>{item.name}</h4>
                <Link href="#" className='font-bold'>{item.title}</Link>
            </div>
        )
    })
    return array
}

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
    return (
        <div className='grid grid-cols-3 gap-3 p-10'>
            <div className='col-span-2'>
                {
                    <AutoplaySlider
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
            <div className='flex flex-col gap-3 justify-between '>
                <div className='shadow-2xl' style={{ width: '100%', height: '170px',boxShadow:'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
                    {
                        banner_right_image.map((item: any, index: number) => {
                            let array = []
                            array.push(
                                <Image style={{ width: '100%', height: '100%' }} src={item.image} alt='No image' width={500} height={300} />
                            )
                            return array
                        })
                    }
                </div>
                <div className='flex flex-col gap-2 '>
                    {bannerRight(banner_right)}
                </div>
            </div>
        </div>
    )
}

export default Banner