import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import { toast } from 'react-toastify';
import useInventoryDetails from '../hooks/useInventoryDetails';
import auth from '../../firebase.init';
import PageTitle from '../PageTitle/PageTitle';

const Selected = () => {
    const { id, inventoryId } = useParams();
    const [inventory] = useInventoryDetails(inventoryId);
    const [user] = useAuthState(auth);

    const handleUpdate = event => {
        event.preventDefault();
        const items = {
            email: user.email,
            inventory: inventory.name,
            inventoryId: inventoryId,
            inventoryquantity: inventory.quantity,
            quantity: event.target.quantity.value,

        }
        axios.post('https://guarded-harbor-99938.herokuapp.com/inventory', items)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    console.log('data');
                    toast('Update Successfully');
                    event.target.reset();
                }
            })
    }

    const handleQuantity = event =>{
        event.preventDefault();
        const quantity = event.target.quantity.value;

        // const updatedQuantity = {quantity};

        const url = `https://guarded-harbor-99938.herokuapp.com/inventory/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({quantity}),
        })

        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            toast('Update Quantity Successfully');
            event.target.reset();
        })
    }



    return (
        <div className='mx-auto'>
            <PageTitle title={'Update'}></PageTitle>
            <h2 className='md:text-4xl text-2xl font-bold'>Update Product Page</h2>
            <h4 className='md:text-2xl py-2 mx-auto font-semibold text-sky-600'>Product Name: {inventory.name}</h4>
            <h4 className='md:text-xl py-2 mx-auto font-semibold text-sky-600'>Product Id: {inventory._id}</h4>

            <div className="m-5 border-2 border-gray-600 py-5 text-gray-800 px-2 rounded-lg">
                <div className="grid rounded-lg pb-4 justify-center items-center">
                    <img className='h-48' src={inventory.picture} alt="" />
                </div>

                <div className='grid md:grid-cols-2 my-2'>
                    <div>
                        <h2 className='text-2xl font-bold pb-5'>{inventory.name}</h2>
                        <p className='font-bold text-xl text-left'>Price: {inventory.price}</p>
                        <p id="stock" className='text-lg text-left'>Stock Available: <span className='text-rose-500 font-bold'>{inventory.quantity}</span></p>
                        <p id="stock" className='text-lg text-left'>Sold: <span className='text-rose-500 font-bold'>{inventory.sold}</span></p>
                        <p className='text-lg text-left'>Supplier: {inventory.supplier}</p>
                        <p className='text-left'><small>{inventory.description}</small></p>
                        <button className="px-5 py-2 my-2 bg-sky-300 rounded hover:bg-sky-400 transition hover:text-white">Delivered</button>
                    </div>

                    <div>
                        <p className='text-xl text-blue-500 font-bold'>Restock Item</p>
                        <form className='flex flex-col items-center' onSubmit={handleUpdate}>

                            <input className='border-2 border-gray-500 rounded w-100 mb-2 py-3 px-5' type="text" value={user?.displayName} name='name' placeholder='Name' readOnly disabled />
                            <input className='border-2 border-gray-500 rounded w-100 mb-2 py-3 px-5' type="email" value={user?.email} name='email' placeholder='Email' readOnly disabled />
                            <input className='border-2 border-gray-500 rounded w-100 mb-2 py-3 px-5' type="text" value={inventory.name} name='inventory' placeholder='Product Name' readOnly />
                            <input className='border-2 border-gray-500 rounded w-100 mb-2 py-3 px-5' type="number" name='quantity' placeholder='Add Quantity' required />

                            <input className='bg-green-500 rounded py-2 px-5 ' type="submit" value="Update Stock" />
                        </form>

                        <form onSubmit={handleQuantity}>
                            <input className='border-2 border-gray-500 rounded w-100 mb-2 py-3 px-5 my-5' type="number" name='quantity' placeholder='Add Quantity' required />

                            <input className='bg-green-500 rounded py-2 px-5 my-5' type="submit" value="Update Quantity" />
                        </form>
                    </div>
                </div>
                <Link to="/manageinventory">
                    <button className="px-5 py-2 my-2 bg-yellow-400 rounded hover:bg-yellow-500 transition hover:text-white">Manage Inventory</button>
                </Link>
            </div>



        </div>
    );
};

export default Selected;