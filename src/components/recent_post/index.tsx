import { recent_post } from '@/app/source/db'
import Link from 'next/link'
import React from 'react'

const RecentPosts = () => {
    const recent_posts=(data:any)=>{
        let array:any=[]
            data.map((item:any, index:number)=>{
                array.push(
                    <Link href={item}>{item}</Link>
                )
            })

        return array 
    }
  return (
    <div className='grid grid-cols-1 gap-3'>
        {
            recent_posts(recent_post)
        }
    </div>
  )
}

export default RecentPosts