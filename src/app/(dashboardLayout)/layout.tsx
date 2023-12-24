'use client'

import { useState, useEffect } from 'react'
import { DashboardContainer, DashboardContent, DashboardPageContainer } from '@/components/dashboard/commonStyles/styles'
import Footer from '@/components/dashboard/footer'
import Header from '@/components/dashboard/header'
import Sidebar from '@/components/dashboard/sidebar'
import React from 'react'
import Loading_Compoent from '@/contants/loading_component'
import ProtectedRoute from '@/context/protectedRoute'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isOpened, setOpened] = useState(true);
    const [isLoading, setIsloading] = useState(true)
    const toggleDrawer = () => {
        setOpened((prev) => !prev);
    };

    useEffect(() => {
        // setTimeout(() => {
        //     setIsloading(false)
        // }, 1000)
        setIsloading(false)
    }, [])

    if (isLoading) {
        return (
            <Loading_Compoent />
        )
    } else {
        return (
            <ProtectedRoute>
                <DashboardContainer>
                    <Header isOpened={isOpened} toggleDrawer={toggleDrawer} />
                    <DashboardContent>
                        <Sidebar isOpened={isOpened} />
                        <DashboardPageContainer>{children}</DashboardPageContainer>
                        {/* <DashboardPageContainer>{children}</DashboardPageContainer> */}
                    </DashboardContent>
                    <Footer />
                </DashboardContainer>
            </ProtectedRoute>
        )
    }

}