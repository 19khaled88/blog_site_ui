import { category_name } from '@/app/source/db'
import Link from 'next/link'
import React from 'react'
import styles from '../../css/category.module.css'
const Category = () => {
    const category=(data:any)=>{
        let array:any=[]
            data.map((item:any, index:number)=>{
                array.push(
                    <Link key={index} className={`link ${styles.link_underline} ${styles.link_underline_black} ${styles.text_black} pb-1 hover:text-indigo-600 w-fit`} href={item.toLowerCase().split(' ').join('_')}>{item}</Link>
                )
            })

        return array 
    }
  return (
    <div className='grid grid-cols-1 gap-3'>
        {
            category(category_name)
        }
    </div>
  )
}

export default Category