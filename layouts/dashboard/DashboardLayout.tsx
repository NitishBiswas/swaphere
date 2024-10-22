import Footer from '@/sections/Footer'
import Header from '@/sections/Header'
import React, { useEffect, useState } from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-white font-poppins'>
            <Header />
            <div className='h-full w-full mt-[112px]'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default DashboardLayout