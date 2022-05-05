import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('https://guarded-harbor-99938.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])
    return (
        <div className='md:container mx-auto my-5'>
            <h1 className='text-4xl font-bold text-gray-800 my-5'>Inventories</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-2'>
                {
                    inventories.slice(0, 6).map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    ></Inventory>)
                }
            </div>
            <Link to="/manageinventory">
            <button className="px-5 py-2 my-2 bg-yellow-400 rounded hover:bg-yellow-500 transition hover:text-white">Manage Inventory</button>
            </Link>
        </div>
    );
};

export default Inventories;