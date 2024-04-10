import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../Pages/Home'
import Success from '../Pages/Success'
import Failure from '../Pages/Failure'
const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/success' element={<Success />} />
                <Route path='/error' element={<Failure />} />
            </Routes>
        </>
    )
}

export default AllRoutes