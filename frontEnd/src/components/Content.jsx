/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { MdCurrencyRupee } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";

import { addToCart } from '../store/cartSlice';
import { useSelector, useDispatch } from 'react-redux';


const Content = () => {
    const [contents, setContent] = useState([])
    const dispatch = useDispatch();

    const store = useSelector(store => store.cart);
    console.log(store);

    const handleCart = (id, content) => {
        const isContentExits = store.some(item => item._id === id);
        if (!isContentExits) dispatch(addToCart(content))
    }


    useEffect(() => {
        const fetchData = async () => {
            try {

                const res = await fetch('/api/content/contents');
                const data = await res.json();
                setContent(data.contents);
            } catch (err) {
                console.log(err.message)
            }
        }

        fetchData();
    }, [])

    console.log(contents)

    return (
        <div className='content-list pt-4 flex flex-wrap gap-5'>
            {contents && contents.map((content, index) => {
                return (
                    <div className='content shadow-md flex flex-col justify-between border w-[200px] h-[200px] rounded-md p-3' key={index}>
                        <div>
                            <h1 className='text-sm text-orange-600 mb-3'>{content.title.toUpperCase()}</h1>
                            <p className='text-sm mb-3'>{content.description}</p>
                            <p className='text-sm flex items-center'><MdCurrencyRupee />{content.price}</p>
                            <a href='#' className='text-xs text-blue-500'>{content.imageUrl}</a>
                        </div>
                        <div>
                            <hr />
                        </div>
                        <div className='flex items-center  justify-between'>
                            <button onClick={() => handleCart(content._id, content)} className='btn border p-2 text-xs rounded-md'>Add To Cart</button>
                            <CiBookmark />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Content