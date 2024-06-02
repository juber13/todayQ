/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { addToData } from '../store/cartSlice';
const Sidebar = () => {
    const { data } = useSelector(store => store.cart);
    const dispatch = useDispatch();
    const [filteredData, setFilteredData] = useState([]);


    console.log(data)

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase().trim(); // Convert to lowercase and trim whitespace
        const filterData = data.filter(item => item.title.toLowerCase().includes(searchTerm));
        dispatch(setFilteredData(filterData));
    }


    return (
        <div className='bg-[#F8F9FA] shadow-xl border h-[92vh]'>
            <div className='p-2 mt-3'>
                <input onKeyUp={handleSearch} type="text" placeholder='search...' className='p-1 rounded-md outline-none' />
            </div>

            <div className='flex justify-between  w-full mt-2 p-2'>
                <p className='text-orange-800 text-sm '>Increasig</p>
                <div className='radio-box border bg-white w-[20px] h-[20px] rounded-full cursor-pointer'></div>
            </div>

            <div className='flex justify-between w-full p-2'>
                <p className='text-orange-800 text-sm'>Decreasig</p>
                <div className='radio-box border bg-white w-[20px] h-[20px] rounded-full cursor-pointer'></div>
            </div>

            <div>
                <hr />
            </div>
        </div>
    )
}

export default Sidebar