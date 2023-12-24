
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ContentLoader from 'react-content-loader'


const ApplicationPage = ({ post }: { post: any }) => {
    const [app, setApplication] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (post && post[0] != undefined) {
            const user = post[0].user
            const res = post[0].posts.map((item: any) => {
                return (
                    { ...item, ...user }
                )
            })
            setApplication(res)
            setLoading(false)
        }
    }, [post])

    const applications = (data: any) => {
        let array: any = []
        data.map((item: any, index: number) => {
            array.push(
                <div key={index} className='grid md:grid-cols-2  lg:grid-cols-1 gap-3'>
                    <Image src={item.avatar} alt="No Image" width={1000} height={1000} />
                    <div className='flex flex-col gap-2'>
                        <h1 className='lg:text-xl xl:text-2xl '>{item.title}</h1>
                        <span className='flex flex-row justify-between'>
                            <p className='text-sm'>{item.name}</p>
                            <p className='text-sm'>{item.createdAt}</p>
                        </span>
                        <p>{item.content}</p>
                    </div>
                </div>
            )
        })
        return array
    }

    return (
        <div className='p-10 '>
            <span className='flex flex-row justify-between items-center pr-2 pb-5'>
                <h1 className='text-2xl font-semibold border border-1 border-red-500 px-2 bg-indigo-500 text-white'>
                    Apps
                </h1>
                <Link href="#" className='text-indigo-700 font-bold flex flex-row gap-2 transition duration-500 transform hover:translate-x-2'>
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
                    loading ?

                        <>
                            <ContentLoader
                            width={450}
                            height={400}
                            viewBox="0 0 450 400"
                            backgroundColor="#f0f0f0"
                            foregroundColor="#dedede"

                        >
                            <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
                            <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
                            <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
                        </ContentLoader>
                        <ContentLoader
                            width={450}
                            height={400}
                            viewBox="0 0 450 400"
                            backgroundColor="#f0f0f0"
                            foregroundColor="#dedede"

                        >
                            <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
                            <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
                            <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
                        </ContentLoader>
                        <ContentLoader
                            width={450}
                            height={400}
                            viewBox="0 0 450 400"
                            backgroundColor="#f0f0f0"
                            foregroundColor="#dedede"

                        >
                            <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
                            <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
                            <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
                        </ContentLoader>
                        </>
                        :
                        applications(app)
                }
            </div>
        </div>
    )
}

export default ApplicationPage