'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../../../css/software.module.css'
import Category from '@/components/category'
import RecentPosts from '@/components/recent_post'
import { software } from '@/app/source/db'
import {gql,useQuery} from '@apollo/client'

const get_software = gql`
query Posts{
    posts {
      id,title,content,cate_id,avatar,createdAt,short_name,cate_id,user {
        name
      },category {
        id,name
      }
    }
  }
`;

const SoftwarePage = () => {
    const [soft, setSoft] = useState([])
    const {data,loading,error}= useQuery(get_software)

    useEffect(()=>{
        if(data){
            setSoft(data.posts)
        }
    },[data,loading])
    
    
   
    const soft_view = (data: any) => {
        let array: any = []
        data.filter((items: Record<string , unknown>) => items.cate_id === 22).map((item:any,index:number)=>{
            array.push(
                <div key={index} className="">
                    <Image style={{ width: '100%' }} src={item.avatar} alt="No Image" width={500} height={500} className="pt-8" />
                    <div className="flex flex-col gap-4 items-start">
                        <h1 className="text-2xl font-semibold text-gray-600">{item.title}</h1>
                        <span className="flex flex-row gap-2">
                            {/* {
                                item.category.map((link: any, index: number, arr: any) => {
                                    return (
                                        <Link key={index} className={`link ${styles.link_underline} ${styles.link_underline_black} ${styles.text_black} pb-1 hover:text-indigo-600`} href={`${link.toLowerCase().split(' ').join('_')}`}>{index != (arr.length - 1) ? link + ',' : link}</Link>
                                    )
                                })
                            } */}

                            <Link className={`link ${styles.link_underline} ${styles.link_underline_black} ${styles.text_black} pb-1 hover:text-indigo-600`} href={item.category.name}> {item.category.name}</Link>
                            {`, Author : ${item.user.name}`}
                        </span>
    
                        <p>{item.content}</p>
                        <Link href="#" className="flex flex-flow justify-center items-center gap-2 transition duration-500 transform hover:translate-x-2">
                            <p className='hover:translate-x-2 transition duration-500 hover:text-pink-500'>
                                Read More
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 hover:translate-x-1 transition duration-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                            </svg>
                        </Link>
                    </div>
                </div>
            )
        })
        
     

        return array
    }

    return (
        <div className="p-10 grid lg:grid-cols-3 gap-5">
            <div className="pt-5 divide-y-2 lg:col-span-2">
                <div>
                    <h1 className="py-5 text-4xl font-bold text-gray-700">Software</h1>
                </div>
                <div className="grid grid-cols-1 gap-5 pt-5 divide-y-2">
                    {
                        soft_view(soft)
                    }
                </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-col gap-10 pt-5 lg:divide-y-2">
                <div>
                    <h1 className="py-5 text-4xl font-bold text-gray-700">Categories</h1>
                    <div>
                        <Category />

                    </div>
                </div>


                <div>
                    <h1 className="py-5 text-4xl font-bold text-gray-700">Recent Posts</h1>
                    <div>

                        <RecentPosts />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SoftwarePage