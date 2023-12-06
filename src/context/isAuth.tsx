'use client'
import { getFromLocalstorage } from '@/lib/localostStorage'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { NextComponentType } from 'next'
const key_name = 'post_blog_storage'

const  IsAuth=<T extends{}>(Component: React.ComponentType<T>)=> {
    const router = useRouter()

    return async (props: T) => {
        const token =  getFromLocalstorage(key_name)
        if (token === undefined || token === null) {
            router.push('/authentication/login')
        }

        return (
            <>
                <Component {...props} />
            </>
        )
    }
}

export default IsAuth
