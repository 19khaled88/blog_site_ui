import Category from "@/components/category"
import RecentPosts from "@/components/recent_post"
import Image from "next/image"
import Link from "next/link"
import styles from '../../../css/gadget.module.css'
import { gadget } from "@/app/source/db"

const GadgetPage = () => {
    const gadget_view = (data: any) => {
        let array: any = []
        data.map((item: any, index: number) => {
            array.push(
                <div key={index} className="">
                    <Image style={{ width: '100%' }} src={item.image} alt="No Image" width={500} height={500} className="pt-8" />
                    <div className="flex flex-col gap-4 items-start">
                        <h1 className="text-2xl font-semibold text-gray-600">{item.title}</h1>
                        <span className="flex flex-row gap-2">
                            {
                                item.category.map((link: any, index: number, arr: any) => {
                                    return (
                                        <Link className={`link ${styles.link_underline} ${styles.link_underline_black} ${styles.text_black} pb-1 hover:text-indigo-600`} href={`${link.toLowerCase().split(' ').join('_')}`}>{index != (arr.length - 1) ? link + ',' : link}</Link>
                                    )
                                })
                            }
                            {item.author}
                        </span>

                        <p>{item.info}</p>
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
        <div className="p-10 grid grid-cols-3 gap-5">
            <div className="pt-5 divide-y-2 col-span-2">
                <div>
                    <h1 className="py-5 text-4xl font-bold text-gray-700">Gadget</h1>
                </div>
                <div className="grid grid-cols-1 gap-5 pt-5 divide-y-2">
                    {
                        gadget_view(gadget)
                    }
                </div>
            </div>
            <div className="pt-5 flex flex-col gap-10 divide-y-2">
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

export default GadgetPage