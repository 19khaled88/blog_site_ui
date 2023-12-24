'use client'
import Image from "next/image"
import Link from "next/link"
import styles from '../../../css/technology.module.css'
import Category from "@/components/category"
import RecentPosts from "@/components/recent_post"
import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from "react"
import ContentLoader from 'react-content-loader'
const get_technology = gql`
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

const TechnologyPage = () => {
    const [techno, setTechno] = useState([])
    const { data, loading, error } = useQuery(get_technology)

    useEffect(() => {
        if (data) {
            setTechno(data.posts)
        }
    }, [data, loading])

    const tech = (data: any) => {
        let array: any = []
        data.filter((items: Record<string, unknown>) => items.cate_id === 15).map((item: any, index: number) => {
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
                    <h1 className="py-5 text-4xl font-bold text-gray-700">Technology</h1>
                </div>
                <div className="grid grid-cols-1 gap-5 pt-5 divide-y-2">
                    {
                        loading ?

                            <ContentLoader
                                width={350}
                                height={600}
                                viewBox="0 0 350 600"
                                backgroundColor="#f5f5f5"
                                foregroundColor="#dbdbdb"
                                
                            >
                                <rect x="4" y="8" rx="3" ry="3" width="8" height="570" />
                                <rect x="5" y="573" rx="3" ry="3" width="331" height="7" />
                                <rect x="329" y="9" rx="3" ry="3" width="8" height="570" />
                                <rect x="102" y="69" rx="3" ry="3" width="102" height="7" />
                                <rect x="92" y="47" rx="3" ry="3" width="178" height="6" />
                                <circle cx="48" cy="63" r="18" />
                                <rect x="95" y="95" rx="3" ry="3" width="178" height="6" />
                                <rect x="105" y="169" rx="3" ry="3" width="102" height="7" />
                                <rect x="95" y="147" rx="3" ry="3" width="178" height="6" />
                                <circle cx="51" cy="163" r="18" />
                                <rect x="98" y="195" rx="3" ry="3" width="178" height="6" />
                                <rect x="107" y="265" rx="3" ry="3" width="102" height="7" />
                                <rect x="97" y="243" rx="3" ry="3" width="178" height="6" />
                                <circle cx="53" cy="259" r="18" />
                                <rect x="100" y="291" rx="3" ry="3" width="178" height="6" />
                                <rect x="108" y="365" rx="3" ry="3" width="102" height="7" />
                                <rect x="98" y="343" rx="3" ry="3" width="178" height="6" />
                                <circle cx="54" cy="359" r="18" />
                                <rect x="101" y="391" rx="3" ry="3" width="178" height="6" />
                                <rect x="110" y="458" rx="3" ry="3" width="102" height="7" />
                                <rect x="100" y="436" rx="3" ry="3" width="178" height="6" />
                                <circle cx="56" cy="452" r="18" />
                                <rect x="103" y="484" rx="3" ry="3" width="178" height="6" />
                                <rect x="114" y="507" rx="3" ry="3" width="102" height="7" />
                                <rect x="103" y="534" rx="3" ry="3" width="178" height="6" />
                                <rect x="5" y="8" rx="3" ry="3" width="331" height="7" />
                            </ContentLoader> :
                            tech(techno)
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

export default TechnologyPage