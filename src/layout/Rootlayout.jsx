import React from 'react'
import { Outlet } from 'react-router'
import Nabar from './Nabar'
import Continar from '../components/Continar'


const Rootlayout = () => {
    return (
        <div>
        
            <Nabar />
        
            <Outlet />

        </div>
    )
}

export default Rootlayout
