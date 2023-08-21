/* eslint-disable no-unused-vars */
import React from 'react';

const CartTable = ({ cartItem, handleDeleteCartItem, handleUpdateItem }) => {
    const { _id, image, Price, ServiceName, date, status } = cartItem;

    return (
        <tr className='font-bold'>
            <th>
                {
                    status === 'confirmed' ? <button className="btn btn-sm btn-circle btn-outline btn-disabled">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button> : <button onClick={() => handleDeleteCartItem(_id)} className="btn btn-sm btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                }
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{ServiceName}</td>
            <td>{Price} $</td>
            <td>{date}</td>
            <td>{
                status === "confirmed" ? <button className='btn btn-disabled btn-neutral'>Confirmed</button> : <button onClick={() => handleUpdateItem(_id)} className='btn btn-neutral'>Confirm Order</button>
            }</td>
        </tr>
    );
};

export default CartTable;