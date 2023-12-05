'use client'
import { getFromLocalstorage } from '@/lib/localostStorage'
import React from 'react'
import {useRouter} from 'next/navigation'
const key_name = 'post_blog_storage'

function IsAuth<T>(Component: React.ComponentType<T>){
    const router = useRouter()
    return async (props:T)=>{
        
       const token = await getFromLocalstorage(key_name)
       if(token === undefined || token === null){
            router.push('/authentication/login')
       }

       return (
        <>
            <Component {...props!}/>
        </>
       )
    }
}

export default IsAuth
