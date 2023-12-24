import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import game_1 from '../../../public/slider/game_1.jpg'
import game_2 from '../../../public/slider/game_2.jpg'
import Image from 'next/image'
const GamePage = ({post}:{post:any}) => {
    const [game, setGame] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        if (post && post[0] != undefined) {
            setGame(post[0].posts)
            setLoading(false)
        }
    }, [post])
   

    const showGames=(data:any)=>{
        let array:any=[];
        data.slice(0,2).map((item:any, index:number)=>{
            array.push(
                <Link href="#" className='relative'>
                <Image style={{ width: '100%' }} src={item.avatar} alt="No image" width={500} height={500} />
                <div className='absolute bottom-5 pl-5 text-white flex flex-col gap-5 text-xs font-semibold'>
                    <h1 className='text-2xl'>{item.title}</h1>
                    <p className='text-white text-lg'>{item.content}</p>
                </div>
            </Link>  
            )
        })

        return array
    }

    return (
        <div className='px-10'>
            <span className='flex flex-row justify-between items-center pb-5'>
                <h1 className='text-2xl font-semibold border border-1 border-red-500 px-2 bg-indigo-500 text-white'>
                    Games
                </h1>
                <Link href="#" className='text-indigo-700 font-bold flex flex-row gap-2 transition duration-500 transform hover:translate-x-2'>
                <p className='hover:translate-x-2 transition duration-500'> 
                    More In Games
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:translate-x-1 transition duration-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </Link>
            </span>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>

                {showGames(game)}
               
            </div>
        </div>
    )

}

export default GamePage