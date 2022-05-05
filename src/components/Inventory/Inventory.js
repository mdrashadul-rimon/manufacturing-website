import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ inventory }) => {
    const { _id, name, price, picture, quantity, description, supplier } = inventory;
    const navigate = useNavigate();

    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div className="border-2 border-gray-600 rounded-lg pb-4 text-center">
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p className='text-xl'>Stock Available: {quantity}</p>
            <p className='text-xl'>Supplier: {supplier}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToInventoryDetail(_id)} className="px-5 py-2 bg-sky-500 rounded-lg hover:bg-sky-700">Update Stock</button>
        </div>
    );
};

export default Inventory;