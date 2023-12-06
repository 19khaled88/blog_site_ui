'use client'
import { getFromLocalstorage } from '@/lib/localostStorage'
import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
const key_name = 'post_blog_storage'

interface MyToken {
    userId: string;
    userRole: string;
    // whatever else is in the JWT.
}

const IsRole = () => {
    const [userInfo, setUserInfo] = useState({
        id: '',
        role: ''
    })
    useEffect(() => {
        const token = getFromLocalstorage(key_name)
        if (token && token != null) {
            const decoded = jwtDecode<MyToken>(token);
            setUserInfo({ ...userInfo, id: decoded.userId, role: decoded.userRole })
        }
    }, [userInfo])

    return { id: userInfo.id, role: userInfo.role }
}

export default IsRole