import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ inventory }) => {
    const { _id, name, price, picture, quantity, description, supplier } = inventory;
    const navigate = useNavigate();

    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div className="border-2 border-gray-600 py-5 text-gray-800 px-2 rounded-lg">
            <div className="grid rounded-lg pb-4 justify-center items-center">
                <img className='h-48' src={picture} alt="" />
            </div>
            <h2 className='text-2xl font-bold pb-5'>{name}</h2>
            <p className='font-bold text-xl text-left'>Price: {price}</p>
            <p className='text-lg text-left'>Stock Available: <span className='text-rose-500 font-bold'>{quantity}</span></p>
            <p className='text-lg text-left'>Supplier: {supplier}</p>
            <p className='text-left'><small>{description}</small></p>

            <button onClick={() => navigateToInventoryDetail(_id)} className="px-5 py-2 my-2 bg-sky-300 rounded hover:bg-sky-400 transition hover:text-white">Update Stock</button>


        </div>
    );
};

export default Inventory;