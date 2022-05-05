import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';

const ManageInventory = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('https://guarded-harbor-99938.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://guarded-harbor-99938.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventories.filter(inventory => inventory._id !== id);
                    setInventories(remaining);
                })
        }
    }


    return (
        <div className='md:container mx-auto my-5'>
            <PageTitle title={'Manage'}></PageTitle>
            <h1 className='text-4xl font-bold text-gray-800 my-5'>Manage Inventories</h1>
            <Link to="/addinventory">
            <button className="px-5 py-2 my-5 bg-green-400 rounded hover:bg-green-500 transition hover:text-white">Add New Items</button>
            </Link>
            <div className='grid md:grid-cols-3 items-start gap-4 mx-2'>
                {
                    inventories.map(inventory =>
                        <div
                            key={inventory._id}
                            inventory={inventory}
                        >
                            <div className="border-2 border-gray-600 py-5 text-gray-800 px-2 rounded-lg">
                                <div className="grid rounded-lg pb-4 justify-center items-center">
                                    <img className='h-48' src={inventory.picture} alt="" />
                                </div>
                                <h2 className='text-2xl font-bold pb-5'>{inventory.name}</h2>
                                <p className='font-bold text-xl text-left'>Price: {inventory.price}</p>
                                <p className='text-lg text-left'>Stock Available: <span className='text-rose-500 font-bold'>{inventory.quantity}</span></p>
                                <p className='text-lg text-left'>Supplier: {inventory.supplier}</p>
                                <p className='text-left'><small>{inventory.description}</small></p>
                                <button onClick={() => handleDelete(inventory._id)} className="px-5 py-2 my-2 bg-yellow-400 rounded hover:bg-red-500 transition hover:text-white">Delete</button>
                            </div>

                        </div>)
                }

            </div>
        </div>
    );
};

export default ManageInventory;