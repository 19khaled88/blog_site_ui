'use client'
import ProtectedRoute from '@/context/protectedRoute'
// import IsAuth from '../../../context/isAuth'
import { NextPage } from 'next'
import React from 'react'

const Home:NextPage = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>Dashbaord</h1>
      </div>
    </ProtectedRoute>
  )
}

export default Home
// export default IsAuth(Home)