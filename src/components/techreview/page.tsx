import { stay_connected, tech_review } from '@/app/source/db'
import Image from 'next/image'
import Link from 'next/link'

const TechReviewPage = () => {
    const techReview = (data: any) => {
        let array: any = []
        data.map((item: any, index: number) => {
            array.push(
                <div key={index} className='flex flex-row gap-5'>
                    <Image style={{ width: '50%', height: '50%' }} src={item.image} alt="No image" width={500} height={500} />
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-xs tracking-widest text-teal-500 font-semibold'>{item.short_name}</h2>
                        <h1 className='text-3xl text-gray-600 font-semibold'>{item.title}</h1>
                        <h3>{item.info}</h3>
                        <span className='flex flex-row justify-between'>
                            <p className='flex flex-row gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>

                                {item.user}
                            </p>
                            <p className='flex flex-row gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                </svg>

                                {item.date}
                            </p>
                        </span>
                    </div>
                </div>
            )
        })
        return array
    }

    const stayConnected = (data: any) => {
        let array: any = []
        data.map((item: any, index: number) => {
            array.push(
                <div key={index} className='flex flex-row gap-5'>
                    <Image style={{ width: '40px', height: '40px' }} src={item.icon} alt="No Image" width={500} height={500} />
                    <div>
                        <h2 className='font-semibold text-lg text-gray-700'>{item.title}</h2>
                        <h4 className='text-xs font-semibold text-gray-600'>{item.follower}</h4>
                    </div>
                </div>
            )
        })
        return array
    }
    return (
        <div className='grid grid-cols-3 gap-5 p-10 bg-slate-50 h-fit'>
            <div className='col-span-2 '>
                <span className='flex flex-row justify-between items-center pb-5'>
                    <h1 className='text-2xl font-semibold text-gray-500'>Tech Reviews</h1>
                    <Link href="#" className='text-indigo-700 font-bold flex flex-row gap-2 transition duration-500 transform hover:translate-x-2'>
                    <p className='hover:translate-x-2 transition duration-500'> 
                        More in Tech Reviews
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:translate-x-1 transition duration-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </Link>
                </span>
                <div className='flex flex-col gap-7'>
                    {
                        techReview(tech_review)
                    }
                </div>
            </div>

            <div className='flex flex-col gap-2 divide-y'>
                <div className='pb-5' >
                    <Image src="/slider/get_the_app.png" alt='No Image' width={1000} height={1000} />
                </div>
                <div className='pt-5' >
                    <h1 className='text-gray-600 text-2xl font-semibold pb-6'>Stay connected</h1>
                    <div className='flex flex-col gap-6'>
                        {stayConnected(stay_connected)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechReviewPage