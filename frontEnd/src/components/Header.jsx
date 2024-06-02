/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";


const Header = () => {
    return (
        <div className='p-3 flex justify-between shadow-md'>
            <Link to="/"><div className="logo font-semibold text-orange-800">TODAYQ</div></Link>
            <div className="logo font-semibold flex gap-3 items-center">
                <Link to="/upload"><button className='add-content border p-2 text-xs rounded-md text-orange-800 '>Upload Content</button></Link>
                <Link to="/cart"><button className='cart flex items-center  p-2 text-md  border rounded-md text-orange-800'> <CiShoppingCart /></button></Link>
            </div>
        </div>
    )
}

export default Header