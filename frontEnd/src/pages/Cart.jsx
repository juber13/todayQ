/* eslint-disable no-unused-vars */
import React from 'react'
import { MdCurrencyRupee } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { useSelector, useDispatch } from 'react-redux';


const Cart = () => {

    const contents = useSelector(store => store.cart);
    console.log(contents);
    return (
        <div className='container flex gap-10 justify-around'>
            <div className='content-list pt-4 px-3 flex flex-wrap gap-5 flex-grow max-w-[700px]'>
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

            {/* ======== subtotal */}

            {contents.length  > 0 &&
                <div className="subtoal pt-4 text-center ">
                    <table className='w-full h-full border text-xs m-2'>
                        <tr className='border'>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Id</th>
                        </tr>

                        {contents.map(item => {
                            return (
                                <>
                                    <tr className='border p-2 m-3'>
                                        <td className='border p-1'>{item.title}</td>
                                        <td className='border p-1'>{item.price}</td>
                                        <td className='border p-1'>{item._id}</td>
                                    </tr>
                                </>
                            )
                        })}

                        <tr>
                            <td className='border font-bold'>SubTotal</td>
                            <td className='text-center col-span-2'>Total</td>
                        </tr>
                    </table>
                </div>
            }
        </div>

    )
}

export default Cart