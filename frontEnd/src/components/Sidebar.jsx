/* eslint-disable no-unused-vars */
import React from 'react'

const Sidebar = () => {
    return (
        <div className='bg-[#F8F9FA] shadow-xl border'>
            <div className='p-2 mt-3'>
                <input type="text" placeholder='search...'  className='p-1 rounded-md outline-none'/>
            </div>

            <div className='flex justify-between  w-full mt-2 p-2'>
                <p className='text-orange-800 text-sm'>Increasig</p>
                <div className='radio-box border bg-white w-[20px] h-[20px] cursor-pointer'></div>
            </div>

            <div className='flex justify-between w-full p-2'>
                <p className='text-orange-800 text-sm'>Decreasig</p>
                <div className='radio-box border bg-white w-[20px] h-[20px] cursor-pointer'></div>
            </div>

            <div>
                <hr />
            </div>
        </div>
    )
}

export default Sidebar