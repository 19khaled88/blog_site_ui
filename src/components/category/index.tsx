import { category_name } from '@/app/source/db'
import Link from 'next/link'
import React from 'react'

const Category = () => {
    const category=(data:any)=>{
        let array:any=[]
            data.map((item:any, index:number)=>{
                array.push(
                    <Link href={item.toLowerCase().split(' ').join('_')}>{item}</Link>
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