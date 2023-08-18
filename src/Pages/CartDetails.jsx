/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import banner from '../assets/images/checkout/checkout.png';
import CartTable from './CartTable';
import Swal from 'sweetalert2';

const CartDetails = () => {
    const { user } = useContext(AuthContext);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setCart(data))
    }, [user]);

    // Delete an item from database 
    const handleDeleteCartItem = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/orders/${id}`, { method: "DELETE" })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your order has been deleted.',
                                'success'
                            )
                            // removing cart item instantly from UI after delete
                            const remaining = cart.filter(item => item._id !== id);
                            setCart(remaining);
                        }
                    })

            }
        })
    };

    const handleUpdateItem = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: 'confirmed' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = cart.filter(c => c._id !== id);
                    const updatedItem = cart.find(c => c._id === id);
                    updatedItem.status = 'confirmed';
                    const newCart = [updatedItem, ...remaining];
                    setCart(newCart);
                }
            })
    }

    return (
        <div>
            {/* cart Banner */}
            <div className='relative '>
                <img className='w-full' src={banner} alt="" />
                <h3 className='text-white flex items-center pl-10 rounded-md font-bold absolute top-0 text-3xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full'>Cart Items </h3>
            </div>
            <div className='my-10 bg-gray-50 p-10 rounded-md'>
                <h3 className='text-center font-bold pb-8 text-2xl'>Welcome {user?.displayName}</h3>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input title='Select All' type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Photo</th>
                                <th>Service Name</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map(c => <CartTable handleDeleteCartItem={handleDeleteCartItem} handleUpdateItem={handleUpdateItem} cartItem={c} key={c._id}></CartTable>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;