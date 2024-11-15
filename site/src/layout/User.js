import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Seller/Header/Header'

const UserLayout = ({ children }) => {
    let location = useLocation()
    let [screenWidth, setScreenWidth] = useState(0)
    let [activeHead, setActiveHead] = useState('')

    useEffect(() => { 
        let width = window.innerWidth;
        setScreenWidth(width)
    }, [])
    return (
        <>
            <Header />

            
            {children}

          
        </>  

    )
}

export default UserLayout
