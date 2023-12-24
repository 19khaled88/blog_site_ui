import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ContentLoader from 'react-content-loader'
import Link from 'next/link'

const MustReadPage = ({ post }: { post: any }) => {
    const [mustRead, setMustRead] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (post && post[0] != undefined) {
            setMustRead(post[0].posts)
            setLoading(false)
        }
    }, [post])

    const mustReactView = (data: any) => {
        let array: any = [];
        data.map((item: any, index: number) => {
            array.push(
                <Link key={index} href="#" className='relative'>
                    <Image style={{ width: '100%' }} src={item.avatar} alt="No image" width={500} height={500} />
                    <div className='absolute bottom-5 pl-5 text-white flex flex-col gap-3 sm:text-xs font-semibold'>
                        <h5>{item.short_name}</h5>
                        <h1 className=' text-md sm:text-lg md:text-xl lg:text-lg'>{item.title}</h1>
                        <p className='text-white text-xs sm:text-md md:text-lg'>{item.content}</p>
                    </div>
                </Link>
            )
        })


        return array
    }

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
                {

                    loading ?
                        <>
                            <ContentLoader
                                viewBox="0 0 500 500"
                                height={200}
                                width={200}
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                            >
                                <path d="M484.52,64.61H15.65C7.1,64.61.17,71.2.17,79.31V299.82c0,8.12,6.93,14.7,15.48,14.7H484.52c8.55,0,15.48-6.58,15.48-14.7V79.31C500,71.2,493.07,64.61,484.52,64.61Zm-9,204.34c0,11.84-7.14,21.44-15.94,21.44H436.39L359.16,171.52c-7.1-10.92-19.67-11.16-27-.51L258.64,277.94C253.78,285,245.73,286,240,280.2l-79.75-80.62c-6-6.06-14.33-5.7-20,.88L62.34,290.39H40.63c-8.8,0-15.94-9.6-15.94-21.44V110.19c0-11.84,7.14-21.44,15.94-21.44H459.54c8.8,0,15.94,9.6,15.94,21.44Z" />
                                <ellipse cx="120" cy="140" rx="28" ry="28" />
                            </ContentLoader>
                            <ContentLoader
                                viewBox="0 0 500 500"
                                height={200}
                                width={200}
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                            >
                                <path d="M484.52,64.61H15.65C7.1,64.61.17,71.2.17,79.31V299.82c0,8.12,6.93,14.7,15.48,14.7H484.52c8.55,0,15.48-6.58,15.48-14.7V79.31C500,71.2,493.07,64.61,484.52,64.61Zm-9,204.34c0,11.84-7.14,21.44-15.94,21.44H436.39L359.16,171.52c-7.1-10.92-19.67-11.16-27-.51L258.64,277.94C253.78,285,245.73,286,240,280.2l-79.75-80.62c-6-6.06-14.33-5.7-20,.88L62.34,290.39H40.63c-8.8,0-15.94-9.6-15.94-21.44V110.19c0-11.84,7.14-21.44,15.94-21.44H459.54c8.8,0,15.94,9.6,15.94,21.44Z" />
                                <ellipse cx="120" cy="140" rx="28" ry="28" />
                            </ContentLoader>
                        </>
                        :
                        mustReactView(mustRead)
                }
            </div>
        </div>
    )
}

export default MustReadPage